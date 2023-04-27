import React from 'react'

export default function Intro() {
  return (
    <div className='mt-[10px]'>
        <div className=' flex flex-col  justify-center items-center  2xl:items-start 2xl:mt-[150px] 2xl:ml-[147px]'>
        <h1 className='text-center text-orange-500 font-bold text-2xl'>Proved By designer</h1>
        <h1 className='text-center mt-2 text-white font-bold text-3xl 2xl:w-[479px] 2xl:h-[234px] 2xl:text-6xl 2xl:text-start'>Work that we produce for our clients</h1>
        <p className='text-center mt-2 text-white text-lg 2xl:-mt-8 2xl:w-[527px] 2xl:h-[101px] 2xl:text-start 2xl:leading-10 2xl:font-bold '>Lorem Ipsum is simply dummy text of the  and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        <button className='bg-orange-600 w-[135px] justify-center mt-2 h-[40px] rounded-xl text-white font-bold 2xl:w-[195px] 2xl:h-[53px] 2xl:rounded-full 2xl:mt-[20px]'>Get more details</button>
        </div>
        <div className='lg:ml-28 2xl:float-right 2xl:-mt-[635px] 2xl:mr-44'>
        <img className='ml-20 sm:w-[650px] sm:ml-[200px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1087445457711661129/image.png'/>
        <img className='ml-[12px] -mt-[375px] sm:-mt-[500px] sm:ml-56' src='https://cdn.discordapp.com/attachments/324498986213834753/1087446738916356147/image.png'/>
        <img className='ml-[255px] -mt-[100px] sm:ml-[500px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1087446786303598645/image.png'/>
        <img className='ml-32 mt-[200px] sm:-ml-[1px] sm:mt-7' src='https://cdn.discordapp.com/attachments/324498986213834753/1087446760701571152/image.png'/> 
        </div>
        </div>
  )
}
