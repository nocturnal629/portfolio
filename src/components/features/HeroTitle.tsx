'use client';
import { useEffect, useRef } from 'react';

const DISPLAY_NAME = 'Your Name';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

const HeroTitle: React.FC = () => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const letterSpansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const isHoveringRef = useRef(false);

  // Canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current = particlesRef.current.filter(p => p.life > 0);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.vx *= 0.97;
        p.life--;
        const alpha = p.life / p.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.1, p.size * (0.3 + alpha * 0.7)), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Interaction handlers
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const clamp = (v: number) => Math.max(0, Math.min(255, v));

    const getThemeRgb = (): [number, number, number] => {
      const isDark = document.documentElement.classList.contains('dark');
      const hasTheme = document.documentElement.classList.contains('has-theme');
      if (hasTheme) {
        const raw = getComputedStyle(document.documentElement)
          .getPropertyValue('--theme-color-rgb').trim();
        if (raw) {
          const parts = raw.split(',').map(v => parseInt(v.trim(), 10));
          return [parts[0], parts[1], parts[2]];
        }
      }
      return isDark ? [45, 212, 191] : [20, 184, 166];
    };

    const spawnBurst = (x: number, y: number, count = 15) => {
      const [r, g, b] = getThemeRgb();
      for (let i = 0; i < count; i++) {
        // Upper hemisphere only (π → 2π passes through ↑), so particles fly up/sideways not down onto the icons
        const angle = Math.PI + (Math.PI * i / count) + (Math.random() - 0.5) * (Math.PI / count * 2);
        const speed = Math.random() * 6 + 2;
        const bri = Math.floor(Math.random() * 100) - 50;
        particlesRef.current.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          life: 50 + Math.random() * 30,
          maxLife: 80,
          size: Math.random() * 4 + 1.5,
          color: `rgb(${clamp(r + bri)}, ${clamp(g + bri)}, ${clamp(b + bri)})`,
        });
      }
    };

    const spawnTrail = (x: number, y: number) => {
      if (Math.random() > 0.3) return;
      const [r, g, b] = getThemeRgb();
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -(Math.random() * 2.5 + 0.5),
        life: 18 + Math.random() * 18,
        maxLife: 36,
        size: Math.random() * 2 + 0.5,
        color: `rgb(${r}, ${g}, ${b})`,
      });
    };

    const applyMagnet = (mx: number, my: number) => {
      letterSpansRef.current.forEach(span => {
        if (!span) return;
        const rect = span.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const dist = Math.hypot(dx, dy);
        const maxDist = 90;

        if (dist < maxDist && dist > 0.01) {
          const t = 1 - dist / maxDist;
          const strength = t * 22;
          const ox = -(dx / dist) * strength;
          const oy = -(dy / dist) * strength;
          const rot = (dx / maxDist) * 28;
          span.style.transform = `translate(${ox}px, ${oy}px) rotate(${rot}deg) scale(${1 + t * 0.2})`;
          span.style.color = 'rgba(var(--theme-color-rgb, 20, 184, 166), 1)';
          span.style.textShadow =
            '0 0 20px rgba(var(--theme-color-rgb, 20, 184, 166), 0.9), 0 0 45px rgba(var(--theme-color-rgb, 20, 184, 166), 0.4)';
        } else {
          span.style.transform = '';
          span.style.color = '';
          span.style.textShadow = '';
        }
      });
    };

    const resetLetters = () => {
      letterSpansRef.current.forEach(span => {
        if (span) {
          span.style.transform = '';
          span.style.color = '';
          span.style.textShadow = '';
        }
      });
    };

    const onMove = (e: MouseEvent) => {
      if (!isHoveringRef.current) return;
      spawnTrail(e.clientX, e.clientY);
      applyMagnet(e.clientX, e.clientY);
    };

    const onEnter = () => {
      isHoveringRef.current = true;
    };

    const onLeave = () => {
      isHoveringRef.current = false;
      resetLetters();
    };

    const onClick = (e: MouseEvent) => {
      spawnBurst(e.clientX, e.clientY, 32);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('click', onClick);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 100 }}
      />
      <h1
        ref={containerRef}
        aria-label={DISPLAY_NAME}
        className="text-5xl md:text-7xl font-bold mb-6 relative tracking-wider cursor-crosshair select-none"
      >
        {DISPLAY_NAME.split('').map((ch, i) => (
          <span
            key={i}
            ref={el => { letterSpansRef.current[i] = el; }}
            style={{
              display: 'inline-block',
              transition:
                'transform 0.12s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.12s ease, text-shadow 0.12s ease',
            }}
          >
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </h1>
    </>
  );
};

export default HeroTitle;
