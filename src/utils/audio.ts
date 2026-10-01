/**
 * Contemplative Harmonic Sound Synthesizer
 * Generates an ethereal, calming meditative singing-bowl harmonic drone
 * and solfeggio frequencies (528Hz, 432Hz, 639Hz, 741Hz)
 * using native Web Audio API (zero external assets or network dependencies).
 */

class ContemplativeSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private isPlaying = false;
  private activeFrequency = 108;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playDrone(baseFreq = 108) {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      this.stopDrone();
      this.activeFrequency = baseFreq;

      const freqs = [baseFreq, baseFreq * 1.5, baseFreq * 2, baseFreq * 2.667, baseFreq * 4];
      const gains = [0.08, 0.05, 0.03, 0.02, 0.01];

      freqs.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq + (Math.random() * 0.4 - 0.2), this.ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, this.ctx.currentTime);

        gain.gain.setValueAtTime(gains[idx] || 0.02, this.ctx.currentTime);

        osc.connect(gain);
        gain.connect(filter);
        filter.connect(this.masterGain);

        osc.start();
        this.oscillators.push(osc);
      });

      // Smooth fade in
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 3.0);
      this.isPlaying = true;
    } catch {
      // Audio playback safety catch
    }
  }

  public playSolfeggioTone(primaryFreq: number) {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      this.stopDrone();
      this.activeFrequency = primaryFreq;

      // Primary tone + gentle overtone harmonic
      const freqs = [primaryFreq, primaryFreq * 1.5, primaryFreq * 0.5];
      const gains = [0.06, 0.03, 0.04];

      freqs.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(900, this.ctx.currentTime);

        gain.gain.setValueAtTime(gains[idx], this.ctx.currentTime);

        osc.connect(gain);
        gain.connect(filter);
        filter.connect(this.masterGain);

        osc.start();
        this.oscillators.push(osc);
      });

      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 2.0);
      this.isPlaying = true;
    } catch {
      // Audio catch
    }
  }

  public playSingingBowlBell(pitch = 216) {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const fundamental = pitch;
      const harmonics = [fundamental, fundamental * 2.76, fundamental * 4.07, fundamental * 5.4];
      const decays = [4.5, 3.2, 2.0, 1.4];

      harmonics.forEach((hFreq, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(hFreq, now);

        gain.gain.setValueAtTime(0.06 / (i + 1), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + decays[i]);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + decays[i] + 0.1);
      });
    } catch {
      // Safety catch
    }
  }

  public stopDrone() {
    if (!this.ctx || !this.masterGain) return;
    try {
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);

      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // ignore
          }
        });
        this.oscillators = [];
        this.isPlaying = false;
      }, 1600);
    } catch {
      this.isPlaying = false;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getActiveFrequency(): number {
    return this.activeFrequency;
  }
}

export const soundEngine = new ContemplativeSoundEngine();
