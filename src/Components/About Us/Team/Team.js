import React from 'react'

export default function Team() {
  return (
    <div className='mt-[300px]'>
    <h1 className='text-white mb-20 text-5xl font-bold  2xl:text-6xl text-center'>Our Team</h1>
    <div className="  text-center  flex flex-wrap flex-row w-full justify-center  gap-2">
    <div className="w-1/4 rounded-3xl  bg-yellow-900/75">
        <img className='m-auto'  src='https://cdn.discordapp.com/attachments/324498986213834753/1092172379553267722/image.png'/>
        <h1 className='text-white font-bold text-2xl '>John Peter</h1>
        <p className='text-white font-bold text-xl'>CEO</p>
    </div>
    <div className="w-1/4 rounded-3xl  bg-gray-400">
    <img className='m-auto' src='https://cdn.discordapp.com/attachments/324498986213834753/1092175776855634042/image.png'/>
    <h1 className='text-white font-bold text-2xl '>John Peter</h1>
        <p className='text-white font-bold text-xl'>CEO</p>
    </div>
    <div className="w-1/4 rounded-3xl  bg-gray-600">
    <img className='m-auto' src='https://cdn.discordapp.com/attachments/324498986213834753/1092172379553267722/image.png'/>
    <h1 className='text-white font-bold text-2xl '>John Peter</h1>
        <p className='text-white font-bold text-xl'>CEO</p>
    </div>
    <div className="w-1/4 rounded-3xl  bg-gray-800">
    <img className='m-auto' src='https://cdn.discordapp.com/attachments/324498986213834753/1092175776855634042/image.png'/>
    <h1 className='text-white font-bold text-2xl '>John Peter</h1>
        <p className='text-white font-bold text-xl'>CEO</p>
    </div>
  </div>
  </div>
  )
}
