import React, { useState } from 'react'
import {  FaAlignJustify} from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [navbar,setNavbar]=useState(false)
  return (
    <div className={navbar ? 'bg-black w-full  h-12 pt-2' : 'h-full bg-black 2xl:bg-inherit'}>
        <h1 className='text-white 2xl:-mb-5 2xl:mt-[10px] 2xl:font-bold 2xl:text-3xl'>LOGO</h1>
       <FaAlignJustify  onClick={()=>setNavbar(!navbar)} className='ml-[353px] -mt-5 sm:ml-[860px] md:ml-[650px] lg:ml-[910px] xl:ml-[1370px] 2xl:hidden'   color='white' size={25}/>
       <div className='flex flex-row justify-center'>
        <ul className={navbar?'hidden':'2xl:flex 2xl:flex-wrap 2xl:space-x-40 2xl:ml-[820px]'}>
           <Link to="/"> <li className='text-white 2xl:text-white 2xl:font-bold 2xl:text-lg 2xl:font-sans'>Home</li></Link>
            <Link to="/AboutUs"><li className='text-white 2xl:text-white 2xl:font-bold 2xl:text-lg 2xl:font-sans'>About US</li></Link>
            <Link to="/Portfolio"><li className='text-white 2xl:text-white 2xl:font-bold 2xl:text-lg 2xl:font-sans'>Portfolio</li></Link>
            <Link to="/News"><li className='text-white 2xl:text-white 2xl:font-bold 2xl:text-lg 2xl:font-sans' >News</li></Link>
            <Link to="/Contact"><button className='text-white 2xl:w-[131px] h-[41px] bg-orange-500 w-[90px] rounded-lg font-bold 2xl:rounded-lg'>Contact US</button></Link>
        </ul>
        </div>
    </div>
  )
}
