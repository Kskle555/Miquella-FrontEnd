import React from 'react'
import { BsFillPeopleFill,BsFillMapFill,BsServer } from "react-icons/bs";
export default function Staticstics() {
    const text = '>';
  return (
    <div className='mt-[100px] '>
        <div className='text-center'>
        <h1 className='text-white md:text-xl 2xl:text-xl'>{`Home${text}`}<span className='text-orange-600 underline font-bold 2xl:text-xl'>Portfolio</span></h1>
        <h1 className='text-white font-bold pt-4 md:text-3xl 2xl:text-5xl'>Lorem Ipsum is simply dummy text of the printing and.</h1>
        <p className='text-white pt-4 md:text-xl 2xl:text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <div className="bg-gray-900 mx-6 rounded-lg w-fit 2xl:w-[1200px] sm:mx-auto 2xl:mx-auto 2xl:h-fit mt-[80px]">
  <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div className="flex flex-wrap justify-center items-center gap-28 2xl:gap-28">
     <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-tight">
     <BsFillPeopleFill className='mx-28'/>90+ Clients
      </h1>
      <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-tight">
      <BsFillMapFill className='mx-28'/>30+ Countries
      </h1>
      <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-tight">
      <BsServer className='mx-28'/> 50+ Projects
      </h1>
    </div>
  </div>
</div>
</div>
    </div>
  )
}
