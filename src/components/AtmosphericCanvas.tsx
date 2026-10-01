import React, { useEffect, useRef } from 'react';

interface AtmosphericCanvasProps {
  intensity?: number;
  className?: string;
}

export const AtmosphericCanvas: React.FC<AtmosphericCanvasProps> = ({
  intensity = 1,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle pool for golden embers and atmospheric dust motes
    const particleCount = Math.floor(45 * intensity);
    const particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      maxAlpha: number;
      phase: number;
      speed: number;
      color: string;
    }[] = [];

    const colors = [
      'rgba(245, 158, 11, ', // Amber
      'rgba(217, 119, 6, ',  // Deep Gold
      'rgba(251, 191, 36, ', // Bright Gold
      'rgba(234, 88, 12, '   // Terracotta Ember
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        alpha: 0,
        maxAlpha: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Gentle time counter for chiaroscuro light sway
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.008;

      // Draw subtle shifting chiaroscuro ambient spotlight
      const lightX = width * 0.5 + Math.sin(time * 0.7) * (width * 0.15);
      const lightY = height * 0.3 + Math.cos(time * 0.5) * (height * 0.1);
      const grad = ctx.createRadialGradient(
        lightX,
        lightY,
        0,
        lightX,
        lightY,
        Math.max(width, height) * 0.7
      );
      grad.addColorStop(0, 'rgba(217, 119, 6, 0.05)');
      grad.addColorStop(0.5, 'rgba(180, 83, 9, 0.02)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Update and render floating embers
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.phase += p.speed;
        p.x += p.vx + Math.sin(p.phase) * 0.2;
        p.y += p.vy;

        // Oscillate opacity
        p.alpha = Math.sin(p.phase) * p.maxAlpha;
        if (p.alpha < 0) p.alpha = 0;

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = 'rgba(245, 158, 11, 0.4)';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
