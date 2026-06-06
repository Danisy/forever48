"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
}

export default function SakuraPetals({ density = 30 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Detect mobile for reduced petal count
    const isMobile = window.innerWidth < 768;
    const actualDensity = isMobile ? Math.min(density, 10) : density;

    let animationId: number;
    let petals: Petal[] = [];
    let lastWidth = 0;

    const resize = () => {
      const w = window.innerWidth;
      // Only resize when width actually changes (avoids iOS address bar thrashing)
      if (w === lastWidth) return;
      lastWidth = w;
      canvas.width = w;
      canvas.height = window.innerHeight;
    };

    const createPetal = (): Petal => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 8 + 4,
      speedY: Math.random() * 1 + 0.3,
      speedX: Math.random() * 0.5 - 0.25,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.4 + 0.15,
      wobble: 0,
      wobbleSpeed: Math.random() * 0.02 + 0.01,
    });

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.globalAlpha = petal.opacity;

      // Draw a sakura petal shape
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(
        petal.size * 0.4,
        -petal.size * 0.5,
        petal.size,
        -petal.size * 0.3,
        petal.size * 0.5,
        0
      );
      ctx.bezierCurveTo(
        petal.size,
        petal.size * 0.3,
        petal.size * 0.4,
        petal.size * 0.5,
        0,
        0
      );

      ctx.fillStyle = "rgba(248, 200, 220, 0.7)";
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petals.forEach((petal) => {
        petal.y += petal.speedY;
        petal.wobble += petal.wobbleSpeed;
        petal.x += petal.speedX + Math.sin(petal.wobble) * 0.5;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > canvas.height + 20) {
          petal.y = -20;
          petal.x = Math.random() * canvas.width;
        }

        drawPetal(petal);
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    petals = Array.from({ length: actualDensity }, createPetal);
    // Spread initial petals across the screen
    petals.forEach((p) => {
      p.y = Math.random() * canvas.height;
    });
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
