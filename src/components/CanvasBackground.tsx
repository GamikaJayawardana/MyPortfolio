"use client";

import { useEffect, useRef } from "react";

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Two palettes: Electric Blue and Plasma Violet
    const colors = ["rgba(79, 195, 247, ", "rgba(199, 125, 255, "];

    type Particle = {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      baseX: number;
      baseY: number;
      color: string;
      alpha: number;
    };

    let particles: Particle[] = [];
    let mouse = { x: width / 2, y: height / 2, radius: 250 };

    const initParticles = () => {
      particles = [];
      // Dynamic particle count based on screen size
      const particleCount = Math.floor((width * height) / 10000);
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4 - 0.2, // Base antigravity
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    };

    initParticles();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const drawWarpGrid = () => {
      ctx.lineWidth = 1;
      const gridSize = 80;
      
      const offsetX = (width / 2 - mouse.x) * 0.03;
      const offsetY = (height / 2 - mouse.y) * 0.03;

      ctx.beginPath();
      for (let x = (offsetX % gridSize) - gridSize; x < width + gridSize; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = (offsetY % gridSize) - gridSize; y < height + gridSize; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }

      // Create gradient for the grid to fade out at edges
      const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/1.5);
      gradient.addColorStop(0, "rgba(79, 195, 247, 0.03)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      
      ctx.strokeStyle = gradient;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle mouse background glow
      const mouseGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
      mouseGlow.addColorStop(0, "rgba(79, 195, 247, 0.03)");
      mouseGlow.addColorStop(0.5, "rgba(199, 125, 255, 0.015)");
      mouseGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, width, height);

      drawWarpGrid();

      // Update and draw particles
      particles.forEach((p, index) => {
        // Gravitational singularity near mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          // Antigravity repulsion (push away from mouse gently but orbit)
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          
          p.speedX -= forceDirectionX * force * 0.02;
          p.speedY -= forceDirectionY * force * 0.02;
          
          // Increase opacity when near mouse
          p.alpha = Math.min(1, p.alpha + 0.02);
        } else {
          // Gradually return to base alpha
          p.alpha = Math.max(0.2, p.alpha - 0.01);
        }

        // Apply velocities
        p.x += p.speedX;
        p.y += p.speedY;

        // Friction / drag
        p.speedX *= 0.98;
        p.speedY *= 0.98;

        // Constant ascending antigravity drift
        p.y -= 0.2 * p.size;

        // Screen wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Constellation Lines
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          // Connect particles if they are close
          if (distance2 < 90) {
            ctx.beginPath();
            // Line opacity based on distance from each other AND distance from mouse
            const lineOpacity = (1 - distance2 / 90) * 0.2;
            
            // If near mouse, connections glow intensely
            const distFromMouse = Math.sqrt(Math.pow(mouse.x - p.x, 2) + Math.pow(mouse.y - p.y, 2));
            let finalOpacity = lineOpacity;
            if (distFromMouse < mouse.radius) {
               finalOpacity = lineOpacity * 2 * (1 - distFromMouse/mouse.radius);
            }
            
            ctx.strokeStyle = `rgba(199, 125, 255, ${finalOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-void">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
