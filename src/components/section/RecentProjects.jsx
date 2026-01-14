// components/RecentProjects.jsx
import ProjectCard from "../Card/ProjectCard.jsx";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    image: "/image3.png",
    category: "2D Animation",
    title: "The Lighthouse",
    description: "Adding a new dimension to projects through thoughtfully designed 2D animations.",
  },
  {
    image: "/image3.png",
    category: "Visual Identity",
    title: "Snowscape Haven",
    description: "Crafting a visual identity that mirrors the serenity of a winter sanctuary.",
  },
  {
    image: "/image3.png",
    category: "Motion Graphics",
    title: "Navigating Possibilities",
    description: "Motion graphics breathe life into the project, blending direction and creativity.",
  },
  {
    image: "/image3.png",
    category: "3D Animation",
    title: "Nocturnal Symphony",
    description: "Through 3D artistry, we orchestrate an animated ode to the evening.",
  },
];

export default function RecentProjects() {
  const containerRef = useRef(null);

  // Split the projects array into two columns
  const projectsLeft = projects.filter((_, i) => i % 2 === 0);
  const projectsRight = projects.filter((_, i) => i % 2 !== 0);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      // 1. Entrance Animation for cards
      gsap.utils.toArray('.project-card').forEach((card) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 100, scale: 0.9 }, 
          {
            opacity: 1, y: 0, scale: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      // 2. Parallax effect for the right column
      // Only runs on desktop (md breakpoint)
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
          gsap.to(".right-column", {
            y: -100, 
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            }
          });
        }
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 overflow-visible md:mt-32">
      {/* Header */}
      <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Recent Projects</h2>
        <p className="max-w-xs text-sm text-gray-500 leading-relaxed">
          Step into the world of our most recent projects, a showcase of our unwavering commitment to progressive design.
        </p>
      </div>

      {/* Grid */}
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-12 md:gap-24">
          {projectsLeft.map((project, i) => (
            <div key={i} className="project-card will-change-transform">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Right Column (Offset on desktop) */}
        <div className="flex flex-col gap-12 md:gap-24 mt-0 md:mt-32 right-column will-change-transform">
          {projectsRight.map((project, i) => (
            <div key={i} className="project-card">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}