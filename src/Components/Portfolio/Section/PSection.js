import React from 'react'
import { BsFillCheckCircleFill} from "react-icons/bs";
export default function Section() {
  return (
    <div className='mt-[120px]'>
      <div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap'>
        <iframe className='rounded-2xl' width="669" height="355" src="https://www.youtube.com/embed/FX-ZxIWoDW0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className='mx-auto text-center'>
        <h1 className='text-white text-3xl font-bold'>Lorem Ipsum is simply dummy text.</h1>
        <p className='text-white pt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <ul className='text-start pt-7 space-y-10 mt-6 mx-10 text-white text-xl font-bold'>
          <li><BsFillCheckCircleFill className='text-green-500 -my-5 -mx-7' size={20}/>Lorem Ipsum is simply</li>
          <li><BsFillCheckCircleFill className='text-green-500 -my-5 -mx-7' size={20}/>Lorem Ipsum is simply</li>
          <li><BsFillCheckCircleFill className='text-green-500 -my-5 -mx-7' size={20}/>Lorem Ipsum is simply</li>
          <li><BsFillCheckCircleFill className='text-green-500 -my-5 -mx-7' size={20}/>Lorem Ipsum is simply</li>
        </ul>
        </div>
        </div>
      </div>
      </div>
  )
}
