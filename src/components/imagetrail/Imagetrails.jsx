import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ImageTrails({ images, children }) {
  const imageRef = useRef(null);
  const [active, setActive] = useState(false);
  const index = useRef(0);

  useEffect(() => {
    const move = (e) => {
      if (!active) return;
      const { clientX: x, clientY: y } = e;

      // Using fixed positioning ensures the image follows the viewport 
      // even if the parent has overflow-hidden.
      gsap.to(imageRef.current, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [active]);

  const handleEnter = () => {
    setActive(true);
    const el = imageRef.current;
    if (!el) return;

    el.src = images[index.current];
    index.current = (index.current + 1) % images.length;

    gsap.fromTo(el,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
    );
  };

  const handleLeave = () => {
    setActive(false);
    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className="relative block w-full" // Force block layout for a solid hit-box
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}

      <img
        ref={imageRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-52 w-52 rounded-3xl object-cover opacity-0 shadow-2xl will-change-transform"
        alt=""
      />
    </div>
  );
}