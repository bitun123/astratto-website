import React from "react";
import logo from "../../assets/image/image5.png";
import image1 from "../../assets/image/image6.png";
import magicbutton from "../../assets/image/magicbutton1.png";
import svg from "../../assets/svg/wave-orange.svg";

function Hero() {
  return (
    <div>
      <section className="full p-[1rem]">
        <div className="flex items-center justify-between gap-1 ">
          <div
            className="
    absolute
    w-32 h-32
    -translate-y-16 -translate-x-7

    sm:w-60 sm:h-60
    sm:-translate-y-10 sm:-translate-x-2

    md:w-[16.5rem] md:h-[16.5rem]
    md:-translate-y-17 md:-translate-x-9

    lg:static
    lg:w-[27rem] lg:h-[27rem]

    lg:flex lg:flex-col
    lg:justify-between
  
 
  "
          >
            <img
              src={image1}
              alt="Decorative illustration"
              className="w-full h-full object-cover
           
              
              "
            />
            <img
              src={svg}
              alt=""
              className="   lg:translate-y-12
            lg:-rotate-15
            
            "
            />
            <div>
              <h1
                className="
              hidden 
              lg:block
              w-[25rem]
              lg:absolute
              lg:translate-y-25
              lg:-rotate-7
              lg:flex
              items-center
              "
              >
                <span
                  className="
                     text-center
                   lg:border-orange-400
                     lg:border-2 
                     lg:rounded-4xl 
                     lg:w-fit
                     lg:px-3 
                     lg:py-2 
                     lg:text-3xl 
                     lg:rounded-4xl
                     lg:text-center 
                     lg:-rotate-5"
                >
                  create Magic
                </span>
                <img
                  src={magicbutton}
                  alt=""
                  className="w-[6rem] h-[6rem] object-cover"
                />
              </h1>
            </div>
          </div>

          <div>
            <div className="text-center font-medium">
              <p className="text-gray-500 text-[0.9rem] lg:text-xl">
                Igniting the Spark of Inspiration
              </p>
              <h1 className="text-[2.7rem] md:text-[4.5rem] lg:text-[5.5rem] font-medium leading-[1.05] text-center relative">
                <span className="block">Unleash Your</span>

                <span className="flex items-center justify-center my-2">
                  <span>Brand</span>

                  {/* Center Logo */}
                  <img
                    src={logo}
                    alt="logo"
                    className="w-15 h-15 md:w-12 md:h-12 lg:w-25 lg:h-30 object-contain lg:pt-5"
                  />

                  <span>with Our</span>
                </span>

                <span className="block mt-2">
                  <span className="inline-block bg-yellow-200 text-purple-700 px-4 leading-none rounded-xl rotate-[3deg] mr-3 pb-4">
                    Mágico
                  </span>
                  Design
                </span>
              </h1>
            </div>
          </div>

          <div className="bg-amber-600 flex flex-col justify-between h-full">
            <div>
              <h1>Via della createvitta</h1>
              <h1>20212 milano</h1>
            </div>
            <div>
              <h1>Via della createvitta</h1>
              <h1>20212 milano</h1>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
