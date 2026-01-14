import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";

export default function ProjectCard({ image, category, title, description }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  const handleMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Calculate mouse position relative to center (range -0.5 to 0.5)
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;

    // Premium GSAP tilt
    gsap.to(cardRef.current, {
      rotateX: -yPct * 20, // Tilt vertically
      rotateY: xPct * 20,  // Tilt horizontally
      scale: 1.03,
      duration: 0.4,
      ease: "power2.out",
      overwrite: true,
    });

    // Parallax effect for the image inside
    gsap.to(imageRef.current, {
      x: xPct * 15,
      y: yPct * 15,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    // Reset to original position
    gsap.to([cardRef.current, imageRef.current], {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)", // Soft bounce-back
    });
  };

  return (
    <div className="group mb-8 break-inside-avoid perspective-[1000px]">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 will-change-transform shadow-sm transition-shadow duration-500 group-hover:shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Content Layer */}
        <div className="relative pointer-events-none" style={{ transform: "translateZ(50px)" }}>
          <img 
            ref={imageRef}
            src={image} 
            alt={title} 
            className="w-full object-cover scale-110" 
          />
        </div>

        {/* Floating Category Label */}
        <div className="absolute bottom-6 left-6 px-4 py-1.5 bg-white/40 backdrop-blur-md rounded-full z-10">
          <span className="text-xs font-semibold text-slate-800">{category}</span>
        </div>

        {/* Action Button */}
        <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
          <ArrowUpRight size={22} className="text-purple-600" />
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-6 px-2">
        <h3 className="text-3xl font-bold text-[#D946EF] mb-2 tracking-tight transition-colors duration-300 group-hover:text-purple-600">
          {title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}