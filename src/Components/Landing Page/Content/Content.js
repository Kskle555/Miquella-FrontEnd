import React, { useState } from 'react'

export default function Content() {
  
  return (
    <div className='mt-[105px] container mx-auto 2xl:mt-[195px]'>
        <h1 className='text-center text-white font-bold text-3xl 2xl:w-[826px] 2xl:ml-[350px]  2xl:h-[132px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        <div>
            <h1 className='text-white text-center pt-[17px] font-bold text-2xl 2xl:text-start 2xl:ml-[200px] 2xl:text-3xl'>Lorem Ipsum</h1>
            <p className='text-white text-center pt-2 2xl:w-[545px] 2xl:h-[101px] 2xl:ml-[196px] 2xl:leading-8 2xl:pt-[32px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <img className='pt-2 2xl:w-[1146px] 2xl:h-[462px] 2xl:ml-[200px] 2xl:mt-[46px] 2xl:rounded-xl 2xl:relative' src='https://wallpapercave.com/wp/wp4625480.jpg'/>
            <img className='hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block 2xl:-mt-[600px] 2xl:ml-[950px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1087681713238462535/image.png'/>
        </div>
    </div>
  )
}
