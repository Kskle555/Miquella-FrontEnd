import React from 'react'
import { HiSearch } from "react-icons/hi";
export default function NIntro() {
    const text = '>';
  return (
    <div className='text-center'>
        <h1 className=' mt-7 text-orange-500 font-bold  text-2xl'>{`Home${text}`}<span className='underline text-red-600 hover:text-black'>News</span></h1>
        <h1 className='text-white mt-5 font-bold text-2xl'>Lorem Ipsum is simply dummy text of the printing and.</h1>
        <p  className='text-white mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <div className='relative w-1/2 mx-auto mt-6'>
  <input className='w-full bg-black/70 text-white p-2 pl-10 rounded-lg' type='text' placeholder='Search'/>
    <HiSearch size={35} className='text-white absolute top-1 bottom-0 left-0 pl-3' />
</div>
    </div>
  )
}
