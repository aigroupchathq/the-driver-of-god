import React, { useEffect, useRef } from 'react';

interface CosmicCanvasProps {
  className?: string;
  speedMultiplier?: number;
}

export const CosmicCanvas: React.FC<CosmicCanvasProps> = ({
  className = '',
  speedMultiplier = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle volumetric parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Multi-layered volumetric cosmic dust and stars
    interface Star {
      x: number;
      y: number;
      radius: number;
      baseAlpha: number;
      twinkleSpeed: number;
      phase: number;
      color: string;
      depth: number;
    }

    const stars: Star[] = [];
    const starColors = [
      'rgba(249, 115, 22, ',  // Solar orange
      'rgba(245, 158, 11, ',  // Warm amber
      'rgba(234, 88, 12, ',   // Deep flame orange
      'rgba(251, 191, 36, ',  // Radiant gold
      'rgba(2, 6, 23, ',      // Deep obsidian singularity star
      'rgba(15, 23, 42, ',    // Midnight cosmic node
      'rgba(28, 25, 23, '     // Deep charcoal celestial body
    ];

    for (let i = 0; i < 180; i++) {
      const isBlackStellar = i % 3 === 0;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + (isBlackStellar ? 1.0 : 0.4),
        baseAlpha: Math.random() * 0.5 + (isBlackStellar ? 0.35 : 0.2),
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
        color: isBlackStellar ? (i % 2 === 0 ? starColors[4] : starColors[5]) : starColors[i % 4],
        depth: Math.random() * 0.8 + 0.2
      });
    }

    // Volumetric floating deep-space dust particles
    interface DustParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }

    const dustParticles: DustParticle[] = [];
    for (let i = 0; i < 50; i++) {
      const isDark = i % 2 === 0;
      dustParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.2 - 0.05,
        size: Math.random() * 3.5 + 1.2,
        alpha: Math.random() * 0.3 + 0.08,
        color: isDark ? 'rgba(2, 6, 23,' : (i % 4 === 1 ? 'rgba(234, 88, 12,' : 'rgba(245, 158, 11,')
      });
    }

    // Constellation Coordinates: Pleiades & Orion nodes
    const constellationPoints = [
      { rx: 0.12, ry: 0.18, name: 'Alcyone' },
      { rx: 0.14, ry: 0.16, name: 'Maia' },
      { rx: 0.16, ry: 0.19, name: 'Electra' },
      { rx: 0.17, ry: 0.21, name: 'Taygeta' },
      { rx: 0.13, ry: 0.22, name: 'Merope' },
      { rx: 0.11, ry: 0.21, name: 'Atlas' }
    ];

    let time = 0;

    const render = () => {
      time += 0.003 * speedMultiplier;

      // Smooth mouse parallax easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      const offsetX = (mouseX - width / 2) * 0.03;
      const offsetY = (mouseY - height / 2) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // 1. Base Field: Crisp Museum Alabaster Ground
      ctx.fillStyle = '#faf9f6';
      ctx.fillRect(0, 0, width, height);

      // 2. Volumetric Deep-Space Obsidian Voids (Black Universe Elements in Background)
      // Top-right deep space abyss corner with volumetric gravitational gradient
      const void1 = ctx.createRadialGradient(
        width * 0.88 + offsetX * 1.5,
        height * 0.12 + offsetY * 1.5,
        10,
        width * 0.88 + offsetX * 1.5,
        height * 0.12 + offsetY * 1.5,
        width * 0.5
      );
      void1.addColorStop(0, 'rgba(2, 6, 23, 0.12)'); // Deep obsidian black core
      void1.addColorStop(0.3, 'rgba(15, 23, 42, 0.06)');
      void1.addColorStop(0.65, 'rgba(234, 88, 12, 0.03)'); // Warm solar transition
      void1.addColorStop(1, 'rgba(250, 249, 246, 0)');
      ctx.fillStyle = void1;
      ctx.fillRect(0, 0, width, height);

      // Bottom-left cosmic black nebula pocket
      const void2 = ctx.createRadialGradient(
        width * 0.12 - offsetX * 1.2,
        height * 0.88 - offsetY * 1.2,
        20,
        width * 0.12 - offsetX * 1.2,
        height * 0.88 - offsetY * 1.2,
        width * 0.55
      );
      void2.addColorStop(0, 'rgba(2, 6, 23, 0.10)'); // Volumetric midnight pocket
      void2.addColorStop(0.35, 'rgba(28, 25, 23, 0.05)');
      void2.addColorStop(0.7, 'rgba(249, 115, 22, 0.025)');
      void2.addColorStop(1, 'rgba(250, 249, 246, 0)');
      ctx.fillStyle = void2;
      ctx.fillRect(0, 0, width, height);

      // Mid-Right Secondary Dark Matter Vortex
      const void3 = ctx.createRadialGradient(
        width * 0.95,
        height * 0.65,
        0,
        width * 0.95,
        height * 0.65,
        width * 0.35
      );
      void3.addColorStop(0, 'rgba(15, 23, 42, 0.07)');
      void3.addColorStop(0.5, 'rgba(2, 6, 23, 0.03)');
      void3.addColorStop(1, 'rgba(250, 249, 246, 0)');
      ctx.fillStyle = void3;
      ctx.fillRect(0, 0, width, height);

      // Center Solar Radiance Aura
      const solarAura = ctx.createRadialGradient(
        width * 0.5 + offsetX * 0.5,
        height * 0.38 + offsetY * 0.5,
        20,
        width * 0.5 + offsetX * 0.5,
        height * 0.38 + offsetY * 0.5,
        width * 0.65
      );
      solarAura.addColorStop(0, 'rgba(254, 243, 199, 0.45)');
      solarAura.addColorStop(0.45, 'rgba(255, 237, 213, 0.2)');
      solarAura.addColorStop(1, 'rgba(250, 249, 246, 0)');
      ctx.fillStyle = solarAura;
      ctx.fillRect(0, 0, width, height);

      // 3. Volumetric Armillary Coordinate Rings & Astronomical Graticule
      const centerX = width * 0.5 + offsetX * 0.8;
      const centerY = height * 0.42 + offsetY * 0.8;
      const maxRing = Math.min(width, height) * 0.44;

      ctx.save();
      ctx.translate(centerX, centerY);

      const sphereRotation = time * 0.12;
      ctx.rotate(sphereRotation * 0.2);

      // Outer obsidian coordinate circle with ticks
      ctx.strokeStyle = 'rgba(2, 6, 23, 0.09)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.arc(0, 0, maxRing * 0.92, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Orange/amber elliptical latitude rings
      ctx.strokeStyle = 'rgba(234, 88, 12, 0.12)';
      ctx.lineWidth = 1;
      for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, maxRing * (r / 3), maxRing * (r / 3) * 0.48, sphereRotation * 0.4, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Midnight black ecliptic crosshairs
      ctx.strokeStyle = 'rgba(2, 6, 23, 0.07)';
      ctx.beginPath();
      ctx.moveTo(-maxRing * 0.95, 0);
      ctx.lineTo(maxRing * 0.95, 0);
      ctx.moveTo(0, -maxRing * 0.95);
      ctx.lineTo(0, maxRing * 0.95);
      ctx.stroke();

      // Cardinal orbital nodes in deep black and radiant amber
      ctx.fillStyle = '#020617';
      ctx.beginPath();
      ctx.arc(maxRing * 0.92, 0, 3.5, 0, Math.PI * 2);
      ctx.arc(-maxRing * 0.92, 0, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ea580c';
      ctx.beginPath();
      ctx.arc(0, maxRing * 0.92, 3, 0, Math.PI * 2);
      ctx.arc(0, -maxRing * 0.92, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // 4. Volumetric Drifting Cosmic Dust Particles
      dustParticles.forEach((p) => {
        p.x += p.vx * speedMultiplier;
        p.y += p.vy * speedMultiplier;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.fill();
      });

      // 5. Stars (Dual polarity: Golden solar stars & Deep obsidian stellar points)
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.phase += s.twinkleSpeed;
        const currentAlpha = s.baseAlpha + Math.sin(s.phase) * 0.18;

        // Apply depth-based parallax
        const px = s.x + offsetX * s.depth;
        const py = s.y + offsetY * s.depth;

        ctx.beginPath();
        ctx.arc(px, py, s.radius * s.depth, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${Math.max(0.08, currentAlpha)})`;
        ctx.fill();
      }

      // 6. Pleiades Constellation (Job 38:31)
      ctx.save();
      ctx.strokeStyle = 'rgba(234, 88, 12, 0.35)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);

      const cPoints = constellationPoints.map((p) => ({
        x: width * p.rx + Math.sin(time + p.rx) * 6 + offsetX * 0.5,
        y: height * p.ry + Math.cos(time + p.ry) * 4 + offsetY * 0.5,
        name: p.name
      }));

      ctx.beginPath();
      ctx.moveTo(cPoints[0].x, cPoints[0].y);
      for (let i = 1; i < cPoints.length; i++) {
        ctx.lineTo(cPoints[i].x, cPoints[i].y);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.setLineDash([]);

      cPoints.forEach((cp) => {
        // Deep black outer shadow ring for strong contrast
        ctx.beginPath();
        ctx.arc(cp.x, cp.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(2, 6, 23, 0.12)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(2, 6, 23, 0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Star center in radiant orange
        ctx.beginPath();
        ctx.arc(cp.x, cp.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ea580c';
        ctx.fill();
      });
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [speedMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none -z-10 ${className}`}
      aria-hidden="true"
    />
  );
};
