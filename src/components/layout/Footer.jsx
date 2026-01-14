import { Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
// import image1 from "../../assets/image/image6.png";
import trialImage from "../../../public/image1.png";
import trialImage3 from "../../../public/image3.png";
// import image7 from "../../assets/image/image7.png";
import ImageTrail from '../imagetrail/ImageTrail';
// import logo1 from "../../assets/image/image4.png";
// import logo3 from "../../assets/image/logo3.png";
import Circle from "../../assets/svg/Circle.svg";
import star from "../../assets/svg/Star.svg";
import trialImage5 from "../../../public/image5.png";
function Footer() {
  return (
    <div className='p-2 '>
      <div className='w-full  border rounded flex flex-col gap-5 justify-center items-center relative'>
<h1 className='w-full text-center pt-2 text-purple-700'>
  open the door to forging your brands story
</h1>
 <ImageTrail images={[ trialImage5, trialImage3,trialImage]}>
<p className='w-full text-center text-[1.4rem] lg:text-[3rem] font-semibold  ' >
  Embark On transformative journey <br /> Shaping Your Brand's destiny Through <br />       <span className="inline-block bg-yellow-200 text-purple-700 px-4 leading-none rounded-xl rotate-[3deg] mr-3 pb-4">
               Design 
                </span> Partnership 
            
</p>
<div>
  <img src={Circle} alt=""  className='absolute w-[4rem] h-[4rem] right-5 -bottom-3 lg:right-30 lg:-bottom-3 lg:w-[6rem] lg:h-[6rem]'/>
</div>
</ImageTrail>
<p className='w-full text-center text-sm text-gray-400 '>
  <span><img src={star} alt="" className='absolute w-[2.5rem] h-[2.5rem] top-6 left-0 lg:w-[6rem] lg:h-[6rem] lg:left-70 lg:top-4' /></span>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aliquid quidem ex, incidunt quam aut  incidunt quam.
</p>
<div className='w-[97%] border-b-2 border-gray-400'></div>
<div className='w-full flex flex-col lg:flex-row gap-2 justify-between items-center p-1'>
  <div className='text-[1.2rem] text-gray-400 font-light' ><h1>via delta  creativita 2023 milano</h1></div>
  <div className='flex gap-2'>
    <Twitter className='w-[1.1rem] text-gray-400' />
    <Linkedin className='w-[1.1rem] text-gray-400' />
    <Instagram className='w-[1.1rem] text-gray-400' />
  </div>
  <div className=' w-full lg:w-auto gap-2   flex justify-between items-center'>
    <h1 className='text-sm text-gray-400 font-light'>privacy and Cookies Policy</h1>
    <h1 className='text-sm text-gray-400 font-light'>
      Astratto @ 2023
    </h1>
  </div>
</div>
      </div>
    </div>
  )
}

export default Footer