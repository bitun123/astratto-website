import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ImageTrail({ images, children }) {
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);

  useEffect(() => {
    const move = (e) => {
      if (!active) return;

      const { clientX: x, clientY: y } = e;
      

      const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);


      if (dist > 80) {
        lastPos.current = { x, y };
        const cards = containerRef.current.children;
        const el = cards[imageIndex.current];
        
        if (el) {
         
          gsap.set(el, {
            x, y,
            xPercent: -50,
            yPercent: -50,
            scale: 0.6,
            opacity: 1,
            zIndex: Math.floor(Date.now() / 1000), 
            rotation: Math.random() * 30 - 15,
          });

          gsap.to(el, {
            opacity: 0,
            scale: 1.5,
            duration: 1.2,
            ease: "power2.out",
          });

          imageIndex.current = (imageIndex.current + 1) % images.length;
        }
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [active, images.length]);

  return (
    <div 
      className="relative w-full inline-block"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {children}
      <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[9999]">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="absolute h-48 w-64 rounded-3xl object-cover opacity-0 will-change-transform shadow-2xl"
            alt=""
          />
        ))}
      </div>
    </div>
  );
}