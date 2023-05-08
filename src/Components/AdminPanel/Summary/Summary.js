import React from 'react'
import { AiFillHeart,AiFillShopping } from "react-icons/ai";
import { GiGamepad } from "react-icons/gi";
import { BsBriefcaseFill } from "react-icons/bs";
export default function Summary() {
  return (
    <div className='relative'>
    <h1 className='text-white text-start mx-24 text-lg font-bold 2xl:text-2xl py-2'>Dashboard</h1>
    <div className='flex flex-wrap gap-9 justify-center mx-24 items-center lg:flex-nowrap 2xl:flex-nowrap text-white'>
      <div className='bg-gray-800 rounded-lg text-start p-2 w-11/12 md:w-3/4 lg:w-1/4 md:mr-4'>
        <div className="flex items-center justify-center">
          <AiFillHeart size={45} color='purple' className="mr-2" />
          <div>
            <h1 className='font-bold text-2xl inline'>178+</h1>
            <p className='font-bold text-xl'>Save Products</p>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 rounded-lg text-start p-2 w-11/12 md:w-3/4 lg:w-1/4 md:mr-4'>
        <div className="flex items-center justify-center">
          <GiGamepad size={45} color='green' className="mr-2" />
          <div>
            <h1 className='font-bold text-2xl inline'>18+</h1>
            <p className='font-bold text-xl'>Stock Products</p>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 rounded-lg text-start p-2 w-11/12 md:w-3/4 lg:w-1/4 md:mr-4'>
        <div className="flex items-center justify-center">
          <AiFillShopping size={45} color='pink' className="mr-2" />
          <div>
            <h1 className='font-bold text-2xl inline'>78+</h1>
            <p className='font-bold text-xl'>Sales Products</p>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 rounded-lg text-start p-2 w-11/12 md:w-3/4 lg:w-1/4 md:mr-4'>
        <div className="flex items-center justify-center">
          <BsBriefcaseFill size={45} color='blue' className="mr-2" />
          <div>
            <h1 className='font-bold text-2xl inline'>11+</h1>
            <p className='font-bold text-xl'>Job Application</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
