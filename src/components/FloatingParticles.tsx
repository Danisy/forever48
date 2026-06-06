"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

export default function FloatingParticles({
  count = 50,
  colors = ["rgba(248,200,220,0.5)", "rgba(245,222,179,0.4)", "rgba(200,162,200,0.4)"],
}: {
  count?: number;
  colors?: string[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Detect mobile for reduced particle count
    const isMobile = window.innerWidth < 768;
    const actualCount = isMobile ? Math.min(count, 15) : count;

    let animationId: number;
    let particles: Particle[] = [];
    let lastWidth = 0;

    const resize = () => {
      const w = window.innerWidth;
      // Only resize when width actually changes (avoids iOS address bar thrashing)
      if (w === lastWidth) return;
      lastWidth = w;
      canvas.width = w;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: 0,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;

        const currentOpacity = p.opacity + Math.sin(p.pulse) * 0.15;
        const currentSize = p.size + Math.sin(p.pulse) * 0.5;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        ctx.globalAlpha = Math.max(0, currentOpacity);
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, currentSize), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    particles = Array.from({ length: actualCount }, createParticle);

    // Delay animation start to avoid competing with initial page render
    const startDelay = setTimeout(() => {
      animate();
    }, 300);

    window.addEventListener("resize", resize);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [count, colors]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[5] pointer-events-none"
      aria-hidden="true"
    />
  );
}
