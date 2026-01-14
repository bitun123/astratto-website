import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Assets & Components
import logo from "../../assets/image/image5.png";
import logo1 from "../../assets/image/image4.png";
import image1 from "../../assets/image/image6.png";
import image2 from "../../assets/image/image2.png";
import trialImage from "../../../public/image1.png";
// import trialImage2 from "../../../public/image2.png";
import trialImage3 from "../../../public/image3.png";
// import trialImage4 from "../../../public/image4.png";
import trialImage5 from "../../../public/image5.png";
import logo3 from "../../assets/image/logo3.png";
import magicbutton from "../../assets/image/magicbutton1.png";
import svg from "../../assets/svg/wave-orange.svg";
import svg1 from "../../assets/svg/MixedColor.svg";
import image7 from "../../assets/image/image7.png";
import arrowPic from "../../assets/image/svg4.png";
import CardSlider from "../Card/CardSlider";
import RecentProjects from "../section/RecentProjects";
import ImageTrail from "../imagetrail/ImageTrail";


gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const mainContainer = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
 
      const tl = gsap.timeline();
      tl.from(".hero-title span", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      })
      .from(".side-decoration", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.8");

      gsap.from(".service-section", {
        scrollTrigger: {
          trigger: ".service-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

     
      gsap.from(".about-reveal span, .about-reveal img", {
        scrollTrigger: {
          trigger: ".about-reveal",
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power2.out"
      });


      gsap.to(".wave-parallax", {
        scrollTrigger: {
          trigger: ".wave-parallax",
          scrub: 1,
        },
        x: 50,
        rotation: 15,
      });

    }, mainContainer);

    return () => ctx.revert(); 
  }, []);

  return (
    <div ref={mainContainer} className="overflow-hidden">
      {/* --- TOP HERO SECTION --- */}
      <section className="flex flex-col lg:flex-row justify-between items-center p-2 min-h-[20rem] md:min-h-[30rem] relative">
        <div className="side-decoration w-[100%] lg:w-[25%] absolute flex flex-col justify-start gap-10 sm:gap-2 md:gap-10 top-10 right-5 lg:static lg:min-h-screen lg:items-end">
<motion.div 
  className="w-[9.5rem] sm:w-[13rem] md:w-[14rem] lg:w-[100%]"
  animate={{ 
    y: [0, -10, 0], // Moves up 10px and back down
  }}
  transition={{ 
    duration: 3, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }}
>
  <img src={image1} alt="" className="w-full object-cover" />
</motion.div>
          <div className="wave-parallax -rotate-10 sm:rotate-3 md:rotate-5 lg:-rotate-20">
            <img src={svg} alt="" className="lg:w-[20rem]" />
          </div>
          <div className="w-[11.5rem] flex -rotate-12 mx-7 items-center lg:w-[16rem]">
            <h1 className="border-2 border-amber-300 rounded-4xl w-full text-center px-2 py-2 lg:text-xl lg:border-3">
              create button
            </h1>
            <img src={magicbutton} alt="" className="w-[4rem] h-[4rem] object-cover lg:w-[6rem] lg:h-[6rem]" />
          </div>
        </div>

        <div className="w-full lg:w-[50%] lg:min-h-screen">
          <div className="text-center font-medium py-10">
            <p className="hero-title text-gray-500 text-[0.9rem] lg:text-xl mb-4">
              <span>Igniting the Spark of Inspiration</span>
            </p>
            <ImageTrail images={[image2, trialImage, trialImage3,trialImage5]} >
              <h1 className="hero-title text-[2.3rem] md:text-[4.5rem] lg:text-[5.5rem] font-medium leading-[1.05] text-center relative">
                <span className="block">Unleash Your</span>
                <span className="flex items-center justify-center my-2">
                  <span>Brand</span>
                  <img src={logo} alt="logo" className="w-15 h-15 md:w-12 md:h-12 lg:w-25 lg:h-30 object-contain lg:pt-5" />
                  <span>with Our</span>
                </span>
                <span className="block mt-2">
                  <span className="inline-block bg-yellow-200 text-purple-700 px-4 leading-none rounded-xl rotate-[3deg] mr-3 pb-4">
                    Mágico
                  </span>
                  <span>Design</span>
                </span>
              </h1>
            </ImageTrail>
            <div className="side-decoration hidden lg:block w-full flex justify-center items-center pt-20">
              <img src={svg1} alt="" className="lg:w-[25rem] rotate-6" />
            </div>
          </div>
        </div>

        <div className="side-decoration absolute w-[70%] right-0 top-42 md:top-50 flex flex-col items-end p-[1rem] lg:static lg:w-[25%] lg:items-start lg:min-h-screen lg:justify-start lg:gap-30">
          <div className="hidden lg:flex flex-col gap-1 items-end">
            <h1 className="bg-purple-700 rounded-4xl text-white px-7 py-2">Via della creatività</h1>
            <h1 className="bg-purple-700 rounded-4xl text-white text-end px-5 py-1 w-fit">20212 milano</h1>
          </div>
       <motion.div 
  className="w-[9rem] flex justify-end md:w-[15rem] lg:w-[25rem] lg:justify-start"
  animate={{ 
  
    y: [0, -12, 0],
    rotate: [2, -1, 2] 
  }}
  transition={{ 
    duration: 5, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }}
>
  <img 
    src={image7} 
    alt="" 
    className="w-[9rem] h-auto -mx-9 rotate-2 md:w-[15rem] lg:w-[25rem]" 
  />
</motion.div>
        </div>
      </section>

      {/* --- SERVICE SECTION --- */}
      <section className="p-[1.1rem]">
        <div className="service-section w-full min-h-fit border-gray-400 border-2 rounded-xl flex flex-col overflow-hidden">
          <div className="w-full flex justify-between items-center p-1 lg:p-5">
            <h1 className="text-3xl lg:text-5xl font-medium">Our Service</h1>
            <div className="w-[50%] lg:w-auto text-gray-400">
              <p className="text-md">Lorem ipsum dolor sit amet consectetur elit.</p>
              <p className="text-md hidden lg:block">Elevating brands through progressive design.</p>
            </div>
          </div>
          
          <div className="p-1 w-full flex items-center justify-center">
            <CardSlider />
          </div>

      
            <div className="about-reveal w-full flex text-center justify-center relative mt-5 lg:mt-15 py-10">
              <img src={arrowPic} alt="" className="w-17 h-17 absolute left-0 top-8 lg:w-40 lg:h-40 lg:left-65 z-0 lg:top-5 object-cover" />
           
              <h1 className="text-[1.2rem] lg:text-[3rem] lg:leading-16 relative z-10 block w-full">
                <span className="text-sm text-gray-400 lg:text-xl">- About Astratto</span><br />
                <span>Our </span><span className="text-gray-400">visionary </span>
                <span className="text-orange-300">artisans </span><span>collaborate</span><br />
                <span className="flex inline-block items-center">
                  <span className="text-purple-600">seamlessly </span>to craft
                  <img src={logo1} alt="logo" className="w-13 h-10 object-cover inline-block lg:w-25 lg:h-25 mx-2" />
                  <span>inspiring </span><span className="text-gray-400">experiences,</span>
                </span><br />
                <span className="text-orange-300">leaving </span><span>lasting </span>
                <span className="text-gray-400">imprints </span><span>on </span>
                <span className="text-purple-600">brands</span><br />
                <span className="flex inline-block items-center pb-2">
                  <span>and </span>
                  <span className="bg-yellow-200 text-purple-700 px-3 rounded-xl mx-2">spaces</span>
                  <img src={logo3} alt="logo" className="w-13 h-10 object-cover inline-block lg:w-25 lg:h-25 mx-2" />
                </span>
              </h1>
              
            </div>
     

          <div className="w-full flex lg:justify-center p-2">
            <img src={svg1} alt="" className="lg:w-[28rem] rotate-6" />
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section>
        <RecentProjects />
      </section>
    </div>
  );
}

export default Hero;