import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image7 from "../../assets/image/image7.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // npm install lucide-react

const data = [
  {
    title: "Motion Graphics",
    img: "/image3.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "2D/3D Animation",
    img: "/image5.png",
    desc: "lLorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "Visual Identity",
    img: "/image1.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
    {
    title: "Motion Graphics",
    img: "/image3.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
  },
    {
    title: "2D/3D Animation",
    img: "/image5.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
  },
];

export default function CardSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const progressRef = useRef(null);
  const AUTOPLAY_TIME = 2000;

  const startProgress = () => {
    if (!progressRef.current) return;

    progressRef.current.style.transition = "none";
    progressRef.current.style.width = "0%";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progressRef.current.style.transition = `width ${AUTOPLAY_TIME}ms linear`;
        progressRef.current.style.width = "100%";
      });
    });
  };

  return (
    <div className="w-[100%] lg:w-[85%]  p-1 ">
      <div className="min-w-8 mx-auto  p-1   ">
        <Swiper
          modules={[Navigation, Autoplay]}
           slidesPerView={1} 
          centeredSlides
          loop={true}
          grabCursor
          spaceBetween={30}
        breakpoints={{
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
}}
          autoplay={{
            delay: AUTOPLAY_TIME,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            startProgress();
          }}
          onSlideChange={() => {
            startProgress();
          }}
          
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: isActive ? 0.95 : 0.85,
                  }}
                  className={`relative h-[400px] w-[22rem] rounded-xl p-8 flex flex-col transition-all duration-500 overflow-hidden shadow-2xl
                    ${
                      isActive
                        ? "bg-gradient-to-br from-[#8b2cf5] to-[#7209d4] text-white"
                        : "bg-white text-gray-400 border-2 border-purple-700"
                    }`}
                >
                  {/* Card Content */}
                  <div className="flex flex-col justify-start ">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-bold leading-[1.1] mb-4 whitespace-pre-line">
                        {item.title.replace(" ", "\n")}
                      </h3>
                      <div className={`bottom-5 left-5 w-14 h-14 rounded-full border-[3px] flex items-center justify-center transition-all duration-300 cursor-pointer
                      ${
                        isActive
                          ?'border-none'
                          :  "bg-gradient-to-br from-[#8b2cf5] to-[#7209d4] text-white"
                      }`}
                    >
 {isActive? '': <ArrowUpRight size={28} strokeWidth={3} />} 
                      </div>
                    
                    </div>

                    <div
                      className={`w-full h-[1px] mb-1  ${
                        isActive ? "bg-yellow-50" : "bg-gradient-to-br from-[#8b2cf5] to-[#7209d4]"
                      }`}
                    />
                    <p
                      className={`text-sm leading-relaxed mb-3  ${
                        isActive ? "text-purple-100" : "text-gray-400"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div className="mt-auto mb-10 overflow-hidden rounded-[30px] h- w-full shadow-inner">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* The Bottom-Left Custom Corner & Button */}
                  <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-[#f6f3ff] rounded-tr-[45px] z-20">
                    {/* Circle Button */}
                    <div
                      className={`absolute bottom-5 left-5 w-14 h-14 rounded-full border-[3px] flex items-center justify-center transition-all duration-300 cursor-pointer
                      ${
                        isActive
                          ? "bg-white border-[#8b2cf5] text-[#8b2cf5]"
                          : "bg-gray-100 border-gray-300 text-gray-400"
                      }`}
                    >
                      <ArrowUpRight size={28} strokeWidth={3} />
                    </div>

                    {/* Smooth Inverted Curves (The Secret Sauce) */}
                    <div className="absolute -top-[25px] left-0 w-8 h-8 rounded-full shadow-[-15px_15px_0_0_#f6f3ff]" />
                    <div className="absolute bottom-0 -right-[25px] w-8 h-8 rounded-full shadow-[-15px_15px_0_0_#f6f3ff]" />
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}
        <div className="flex justify-between items-center mt-5">
          {/* LEFT arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="custom-next w-10 h-10 rounded-full border-2 border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white  hover:text-2xl cursor-pointer transition"
            >
              ←
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="custom-next w-10 h-10 rounded-full border-2 border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white  hover:text-2xl cursor-pointer transition"
            >
              →
            </button>
          </div>

          {/* RIGHT progress bar */}

          <div className="w-15 h-1 bg-purple-200 rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
