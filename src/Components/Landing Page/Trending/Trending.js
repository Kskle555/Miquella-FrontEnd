import React from 'react'
import MovingComponent from'react-moving-text'
import { FaFire } from "react-icons/fa";
export default function Trending() {
  return (
    <div className='mt-[50px]'>
        <div className=''>
      <h1 className='text-center text-white font-bold text-2xl md:mt-[250px] 2xl:text-start 2xl:text-4xl 2xl:ml-[147px] 2xl:mt-[200px]'>Currently Trending Games</h1>
      <button className='ml-[150px] mt-2 h-8 bg-orange-600 w-[105px]  rounded-full text-white font-bold md:ml-[350px] lg:mx-[450px]  xl:mx-[670px] 2xl:-mt-8 2xl:ml-[1525px] absolute  '>SEE ALL</button>
      </div>
      <div className=' flex flex-col flex-wrap justify-center items-center mt-16 gap-5 text-center md:mt-[50px] 2xl:flex-row 2xl:flex-wrap 2xl:space-x-14'>
      <img className='w-[300px] h-[350px] rounded-3xl' src='https://images8.alphacoders.com/999/999119.jpg'/>
      <FaFire className='mr-36 2xl:hidden' color='white' size={30}/><h1 className='-mt-11 2xl:hidden text-white text-xl'>40 Followers</h1>
      <img className='w-[300px] h-[350px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1087459131595706398/image.png'/>
      <FaFire className='mr-36 2xl:hidden' color='white' size={30}/><h1 className='-mt-11 2xl:hidden text-white text-xl'>30 Followers</h1>
      <img className='w-[300px] h-[350px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1087459151082442762/image.png'/>
      <FaFire className='mr-36 2xl:hidden' color='white' size={30}/><h1 className='-mt-11 2xl:hidden text-white text-xl'>20 Followers</h1>
      <img className='w-[300px] h-[350px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1087459173882679356/image.png'/>
      <FaFire className='mr-36 2xl:hidden' color='white' size={30}/><h1 className='-mt-11 2xl:hidden text-white text-xl'>65 Followers</h1>
      </div>
      <div className='2xl:flex 2xl:flex-wrap  2xl:ml-[320px]'>
      <FaFire className='hidden sm:hidden md:hidden xl:hidden 2xl:block' color='white' size={30}/><h1 className='hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block    text-white text-xl'>42 Followers</h1>
      <FaFire className='hidden sm:hidden md:hidden xl:hidden 2xl:block 2xl:ml-[230px]' color='white' size={30}/><h1 className='hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block    text-white text-xl'>20 Followers</h1>
      <FaFire className='hidden sm:hidden md:hidden xl:hidden 2xl:block 2xl:ml-[230px]' color='white' size={30}/><h1 className='hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block    text-white text-xl'>35 Followers</h1>
      <FaFire className='hidden sm:hidden md:hidden xl:hidden 2xl:block 2xl:ml-[230px]' color='white' size={30}/><h1 className='hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block    text-white text-xl'>40 Followers</h1>
      </div>
        </div>
  )
}

