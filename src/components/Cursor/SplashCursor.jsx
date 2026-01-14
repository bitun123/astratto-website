import { useEffect, useRef } from "react";

export default function SplashCursor() {
  const canvasRef = useRef(null);
  const points = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const addPoint = (x, y) => {
      points.current.push({ x, y, life: 1 });
      if (points.current.length > 80) points.current.shift();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      points.current.forEach((p, i) => {
        const radius = 60 * p.life;
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, radius
        );

        gradient.addColorStop(0, "rgba(0,255,255,0.25)");
        gradient.addColorStop(0.4, "rgba(255,0,255,0.15)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();

        p.life *= 0.96;
      });

      points.current = points.current.filter(p => p.life > 0.05);

      requestAnimationFrame(draw);
    };

    const handleMove = (e) => addPoint(e.clientX, e.clientY);

    window.addEventListener("mousemove", handleMove);
    draw();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
}
