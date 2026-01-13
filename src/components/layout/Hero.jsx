import React from "react";
import logo from "../../assets/image/image5.png";
import image1 from "../../assets/image/image6.png";
import magicbutton from "../../assets/image/magicbutton1.png";
import svg from "../../assets/svg/wave-orange.svg";
import svg1 from "../../assets/svg/MixedColor.svg";
import image7 from "../../assets/image/image7.png";

function Hero() {
  return (
    <div>
      <section
        className=" flex  flex-col lg:flex-row justify-between items-center   lg:gap-1  p-2 

"
      >
        <div className=" w-[100%] lg:w-[25%] absolute flex flex-col justify-start gap-10 sm:gap-2 md:gap-10 top-10 right-5  md:flex lg:static lg:min-h-screen lg:items-end">
          {/* left side imgage */}

          <div className="w-[9.5rem]  sm:w-[13rem]  md:w-[14rem] lg:w-[100%]">
            <img
              src={image1}
              alt=""
              className="w-[100%] object-cover h-[100%]"
            />
          </div>
          <div className="-rotate-10 sm:rotate-3 md:rotate-5 lg:-rotate-20 ">
            <img src={svg} alt="" className=" lg:w-[20rem]" />
          </div>
          <div className="w-[11.5rem] flex -rotate-12 mx-7 items-center   lg:w-[16rem] ">
            <h1 className="border-2 border-amber-300 rounded-4xl w-full text-center px-2 py-2 lg:text-xl lg:border-3">
              create buttom
            </h1>
            <img
              src={magicbutton}
              alt=""
              className="w-[4rem] h-[4rem] object-cover lg:w-[6rem] lg:h-[6rem]"
            />
          </div>
        </div>

        {/* middile text */}

        <div className=" w-[100%]  lg:w-[50%] lg:min-h-screen">
          {" "}
          <div className="text-center font-medium">
            <p className="text-gray-500 text-[0.9rem] lg:text-xl">
              Igniting the Spark of Inspiration
            </p>
            <h1 className="text-[2.3rem] md:text-[4.5rem] lg:text-[5.5rem] font-medium leading-[1.05] text-center relative">
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
            <div className="hidden lg:block w-[100%]  lg:flex justify-center items-center pt-20">
              <img src={svg1} alt="" className=" lg:w-[25rem] rotate-6" />
            </div>
          </div>
        </div>

        {/* last div */}
        <div className="absolute w-[70%] right-0 top-42 flex flex-col items-end justify-end  p-[1rem] overflow-hidden lg:justify-between lg:static lg:w-[25%] lg:items-start  lg:min-h-screen lg:justify-start  lg:gap-30   ">
          <div className="hidden lg:block lg:flex lg:flex-col lg:gap-1 items end justify-end">
            <h1 className="bg-purple-700 rounded-4xl text-white px-7 py-2 ">Via della createvitta</h1>
            <h1 className="bg-purple-700 rounded-4xl text-white text-end px-5 py-1 w-fit ">20212 milano</h1>
          </div>
          <div className="w-[9rem] flex  justify-end lg:w-[25rem] lg:justify-start lg:-px-8 ">
            <img
              src={image7}
              alt=""
              className="w-[9rem] h-auto  -mx-9 rotate-2 lg:w-[25rem]   "
            />
          </div>
                <div className="lg:hidden">
              <img src={svg1} alt="" className=" lg:w-[20rem] rotate-6" />
            </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
