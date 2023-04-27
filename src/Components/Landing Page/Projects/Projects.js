import React from 'react'

export default function Projects() {
  return (
    <div className='container mx-auto mt-[80px]'>
        <div>
        <h1 className='text-white text-center font-bold text-4xl'>Our Recent Projects</h1>
        <p className='text-white text-center pt-2 font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
            <div className='flex flex-col items-center flex-wrap space-y-5 pt-6 2xl:flex 2xl:flex-row 2xl:space-x-5 2xl:justify-center 2xl:flex-wrap'>
                <img className='2xl:mt-[18px] 2xl: w-[382px] h-[223px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1088523014624264272/image.png'/>
                <img className='2xl: w-[382px] h-[223px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1088523050204536872/image.png'/>
                <img className='2xl: w-[382px] h-[223px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1088523014624264272/image.png'/>
                <img className='2xl: w-[382px] h-[223px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1088523077312315412/image.png'/>
                <img className='2xl: w-[382px] h-[223px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1088523014624264272/image.png'/>
                <img className='2xl: w-[382px] h-[223px]' src='https://cdn.discordapp.com/attachments/324498986213834753/1088523093959516191/image.png'/>
            </div>
            <button className='w-[155px]  h-[57px] mx-28 md:ml-[300px] lg:ml-[435px] xl:mx-[560px]  text-center  2xl:ml-[670px] text-lg mt-10 bg-orange-600 font-bold text-white rounded-full'>SEE ALL</button>
    </div>
  )
}
  