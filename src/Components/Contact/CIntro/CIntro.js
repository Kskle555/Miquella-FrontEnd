import React from 'react'
import { AiFillInstagram,AiFillTwitterCircle,AiFillFacebook,AiFillLinkedin,AiFillPhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
export default function CIntro() {
    const text = '>';
  return (
    <div>
 <div className='text-center'>
        <h1 className=' mt-7 text-orange-500 font-bold  text-2xl'>{`Home${text}`}<span className='underline text-red-600 hover:text-black'>Contact Us</span></h1>
        <h1 className='text-white mt-5 font-bold text-3xl'>Lorem Ipsum is simply dummy text of the printing and.</h1>
        <p  className='text-white mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <img className='mt-24  2xl:w-2/3 mx-auto' src='https://cdn.discordapp.com/attachments/324498986213834753/1100441274877755484/image.png'/>
        </div>
        <div className='flex flex-wrap justify-center 2xl:justify-around mt-24 items-center space-x-6'>
        <div className='flex flex-wrap justify-center items-center'>
            <AiFillInstagram size={45} color='white'/>
            <AiFillTwitterCircle size={45} color='white'/>
            <AiFillFacebook size={45} color='white'/>
            <AiFillLinkedin size={45} color='white'/>
        </div>
        <div className='flex flex-wrap justify-center items-center'>
            <AiFillPhone size={25} color='white'/>
            <h1 className='text-white font-bold text-xl 2xl:text-3xl'>+94 4444 5555 6</h1>
        </div>
        <div className='flex flex-wrap justify-center text-center items-center my-3'>
            <HiLocationMarker size={25} color='white'/>
            <h1 className='text-white font-bold text-xl 2xl:text-3xl'>Lorem Ipsum</h1>
        </div>
        </div>
    </div>
  )
}
