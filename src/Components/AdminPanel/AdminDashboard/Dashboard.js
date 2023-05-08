import React from 'react'
import { AiFillAppstore,AiFillDiff,AiFillCalendar,AiFillDelete,AiFillSetting } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
export default function Dashboard() {
  return (
    <div className='w-[60px] absolute rounded-r-lg  h-screen bg-gray-800'>
        <div className='flex flex-wrap flex-col justify-center items-center space-y-6'>
            <h1 className='text-white font-bold mt-5'>LOGO</h1>
            <AiFillAppstore size={30} color='white'/>
            <AiFillDiff size={30} color='white'/>
            <AiFillDelete size={30} color='white'/>
            <AiFillCalendar size={30} color='white'/>
            <BsFillPeopleFill size={30} color='white'/>
            <AiFillSetting size={30} color='white'/>
        </div>
    </div>
  )
}
