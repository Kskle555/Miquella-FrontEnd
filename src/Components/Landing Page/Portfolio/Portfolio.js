import React from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from 'react-icons/fa'


export default function Portfolio() {
  return (
    <div className=' mt-[100px] h-[1400px] 2xl:h-[850px] bg-[url("https://scontent.fadb5-1.fna.fbcdn.net/v/t1.15752-9/337314213_1245981826050112_2345722849677884336_n.png?stp=dst-png_s2048x2048&_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GiqyDdnlXWwAX9FnT0R&_nc_ht=scontent.fadb5-1.fna&oh=03_AdSN5TfVGPQIF2bWK_OYNXxxUaYc5s9CUfzZfRzcemU2KQ&oe=644BCB09")]  bg-no-repeat bg-cover bg-center bg-fixed 2xl:mt-[550px]'>
      <div className='bg-black/60 h-[1400px] 2xl:h-[850px]'>
        <h1 className='text-white text-center text-2xl font-bold pt-[20px] 2xl:w-[826px] 2xl:h-[112px] 2xl:ml-[500px] 2xl:text-5xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        <p className='text-white text-center text-lg pt-10 2xl:w-[820px] 2xl:h-[60px] 2xl:ml-[500px] 2xl:pt-28 2xl:text-xl 2xl:font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className=' flex flex-col items-center space-y-1 2xl:flex 2xl:flex-row 2xl:ml-52 2xl:space-x-40 2xl:mt-40'>
        <img src='https://cdn.discordapp.com/attachments/324498986213834753/1087824502748094475/image.png' className='w-[100px] h-[100px] -mt-1'/>
        <FaArrowAltCircleDown color='white' className='mt-2 2xl:hidden' size={40}/>
        <h1 className='text-white font-bold text-lg 2xl:hidden'>Mobile Game Development</h1>
        <img src='https://cdn.discordapp.com/attachments/324498986213834753/1087824566283403366/image.png' className='w-[100px] h-[100px] mt-10'/>
        <FaArrowAltCircleDown color='white' className='mt-2 2xl:hidden' size={40}/>
        <h1 className='text-white font-bold text-lg 2xl:hidden'>PC Game Development</h1>
        <img src='https://cdn.discordapp.com/attachments/324498986213834753/1087824602396360754/image.png' className='w-[100px] h-[100px] mt-10'/>
        <FaArrowAltCircleDown color='white' className='mt-2 2xl:hidden' size={40}/>
        <h1 className='text-white font-bold text-lg 2xl:hidden'>PS4 Game Development</h1>
        <img src='https://cdn.discordapp.com/attachments/324498986213834753/1087824647887786174/image.png' className='w-[100px] h-[100px] mt-10'/>
        <FaArrowAltCircleDown color='white' className='mt-2 2xl:hidden' size={40}/>
        <h1 className='text-white font-bold text-lg 2xl:hidden'>AR/VR Solutions</h1>
        <img src='https://cdn.discordapp.com/attachments/324498986213834753/1087824502748094475/image.png' className='w-[100px] h-[100px] mt-10'/>
        <FaArrowAltCircleDown color='white' className='mt-2 2xl:hidden ' size={40}/>
        <h1 className='text-white font-bold text-lg 2xl:hidden'>AR/ VR design</h1>
        <img src='https://cdn.discordapp.com/attachments/324498986213834753/1087825679560757348/image.png' className='w-[100px] h-[100px] mt-10'/>
        <FaArrowAltCircleDown color='white' className='mt-2 2xl:hidden' size={40}/>
        <h1 className='text-white font-bold text-lg 2xl:hidden'>3D Modelings</h1>
        </div>
        <div className=' hidden sm:hidden md:hidden lg:hidden xl:hidden    2xl:flex 2xl:ml-48 2xl:space-x-32 '>
        <h1 className='text-white font-bold text-lg '>AR/VR Solutions</h1>
        <h1 className='text-white font-bold text-lg '>AR/VR Solutions</h1>
        <h1 className='text-white font-bold text-lg '>AR/VR Solutions</h1>
        <h1 className='text-white font-bold text-lg '>AR/VR Solutions</h1>
        <h1 className='text-white font-bold text-lg '>AR/VR Solutions</h1>
        <h1 className='text-white font-bold text-lg '>AR/VR Solutions</h1>
        </div>
        <div className='hidden sm:hidden md:hidden lg:hidden xl:hidden  2xl:flex 2xl:ml-60 2xl:space-x-56'>
        <FaArrowAltCircleRight color='white' className='mt-2 ' size={40}/>
        <FaArrowAltCircleRight color='white' className='mt-2 ' size={40}/>
        <FaArrowAltCircleRight color='white' className='mt-2 ' size={40}/>
        <FaArrowAltCircleRight color='white' className='mt-2 ' size={40}/>
        <FaArrowAltCircleRight color='white' className='mt-2 ' size={40}/>
        <FaArrowAltCircleRight color='white' className='mt-2 ' size={40}/>
        </div>
        </div>
    </div>
  )
}
