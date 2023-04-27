import React from 'react'

export default function Section() {
  return (
    <div className="mt-[200px] bg-yellow-900/75 flex flex-row flex-wrap items-center   ">
     <div className='md:pl-[110px] '>
     <img src="https://cdn.discordapp.com/attachments/324498986213834753/1087459131595706398/image.png" alt="Örnek Resim" className="max-w-full h-auto " />
     </div>
     <div className='w-[1200px] px-40 md:px-72 2xl:px-96'>
      <h1 className="text-white text-4xl text-center m-0 py-2 font-bold">Lorem ipsum</h1>
      <h1 className="text-white text-2xl text-center m-0 py-2">Lorem Ipsum is simply dummy text of.</h1>
      <p className="text-white text-lg text-center m-0 py-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
      </div>
    </div>
  )
}
