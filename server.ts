import express from 'express';
import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

// Increase payload limit for base64 image uploads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Server-side Google GenAI initialization with User-Agent
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build'
    }
  }
});

// Endpoint 1: Create or Edit Images using gemini-3.1-flash-image-preview
app.post('/api/gemini/generate-image', async (req, res) => {
  try {
    const { prompt, base64Image, mimeType = 'image/png', aspectRatio = '1:1', imageSize = '1K' } = req.body;
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
    }
    if (!prompt && !base64Image) {
      return res.status(400).json({ error: 'Either a prompt or an image must be provided.' });
    }

    let contents: any;
    if (base64Image) {
      // Edit existing image with prompt
      const rawBase64 = base64Image.replace(/^data:image\/[a-z]+;base64,/, '');
      contents = {
        parts: [
          {
            inlineData: {
              data: rawBase64,
              mimeType: mimeType || 'image/png'
            }
          },
          {
            text: prompt || 'Enhance with sacred golden geometry, volumetric Anahata emerald light, and celestial Hermetic depth.'
          }
        ]
      };
    } else {
      // Create new image from text prompt
      contents = {
        parts: [
          { text: prompt }
        ]
      };
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents,
      config: {
        imageConfig: {
          aspectRatio: aspectRatio || '1:1',
          imageSize: imageSize || '1K'
        }
      }
    });

    let foundImageUrl = '';
    let textOutput = '';
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData?.data) {
          foundImageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
        } else if (part.text) {
          textOutput += part.text;
        }
      }
    }

    if (!foundImageUrl) {
      return res.status(500).json({ error: textOutput || 'No image was returned by the model.' });
    }

    res.json({ imageUrl: foundImageUrl, text: textOutput });
  } catch (err: any) {
    console.error('Error generating image:', err);
    res.status(500).json({ error: err.message || 'Failed to generate image' });
  }
});

// Endpoint 2: Generate Video (Text-to-Video or Image-to-Video) using veo-3.1-fast-generate-preview
app.post('/api/veo/generate-video', async (req, res) => {
  try {
    const { prompt, base64Image, mimeType = 'image/png', aspectRatio = '9:16' } = req.body;
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
    }

    const validRatio = aspectRatio === '16:9' ? '16:9' : '9:16';
    const payload: any = {
      model: 'veo-3.1-fast-generate-preview',
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: validRatio
      }
    };

    if (base64Image) {
      // Image-to-Video Animation
      const rawBase64 = base64Image.replace(/^data:image\/[a-z]+;base64,/, '');
      payload.image = {
        imageBytes: rawBase64,
        mimeType: mimeType || 'image/png'
      };
      payload.prompt = prompt || 'Cinematic slow vertical camera movement, the inner light gently breathing and radiating celestial harmony.';
    } else {
      // Text-to-Video
      if (!prompt) {
        return res.status(400).json({ error: 'A prompt is required for video generation.' });
      }
      payload.prompt = prompt;
    }

    const operation = await ai.models.generateVideos(payload);
    res.json({ operationName: operation.name });
  } catch (err: any) {
    console.error('Error starting video generation:', err);
    res.status(500).json({ error: err.message || 'Failed to start video generation' });
  }
});

// Endpoint 3: Poll Video Operation Status
app.post('/api/veo/video-status', async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: 'operationName is required' });
    }

    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });
    res.json({ done: Boolean(updated.done), error: updated.error });
  } catch (err: any) {
    console.error('Error polling video operation:', err);
    res.status(500).json({ error: err.message || 'Failed to poll video status' });
  }
});

// Endpoint 4: Download Generated Video stream
app.post('/api/veo/video-download', async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: 'operationName is required' });
    }

    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });
    const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
    if (!uri) {
      return res.status(404).json({ error: 'Video URI not found on completed operation' });
    }

    const videoRes = await fetch(uri, {
      headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY || '' }
    });

    if (!videoRes.ok) {
      return res.status(videoRes.status).json({ error: 'Failed to stream video bytes from storage' });
    }

    res.setHeader('Content-Type', 'video/mp4');
    const arrayBuffer = await videoRes.arrayBuffer();
    res.send(Buffer.from(arrayBuffer));
  } catch (err: any) {
    console.error('Error downloading video:', err);
    res.status(500).json({ error: err.message || 'Failed to download video' });
  }
});

// Serve frontend with Vite middlewares in development
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, port: PORT, host: '0.0.0.0' },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
