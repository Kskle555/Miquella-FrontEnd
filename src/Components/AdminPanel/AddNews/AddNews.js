import React from 'react'
import { useState } from 'react'
export default function AddNews() {
    const [done, setDone] = useState(false)
  return (
    <form className='pt-14 ' >
    <div className=' '>
        <div className='text-center pt-5'>
            <h1 className='text-white text-4xl'>Add News</h1>
            <p className='text-white text-lg mt-5'>Lorem Ipsum is simply dummy text of the printing .</p>
        </div>
        <div className="max-w-md mx-auto mt-20">
   <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label
      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
      htmlFor="name">
      Title
    </label>
    <input
      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      id="name"
      type="text"
      name="user_name"
      placeholder="John Doe"/>
  </div>
  <div className="w-full md:w-1/2 px-3">
    <label
      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
      htmlFor="phone">
      Writer Name
    </label>
    <input
      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="phone"
      type="tel"
      name='phone'
      placeholder="John Cena"/>
  </div>
</div>

<div className="mb-6">
  <label
    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
    htmlFor="email">
    Email
  </label>
  <input
    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="email"
    type="email"
    name="user_email"
    placeholder="john.doe@example.com"/>
</div>

<div className="mb-6">
  <label
    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
    htmlFor="message">
    Message
  </label>
  <textarea
    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="message"
    placeholder="Enter your content here"
    name="message"
    rows="6"
  ></textarea>
</div>

<div className="flex justify-center">
<input type="submit" value="Add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-3  px-4 rounded"/> 

</div>
<span className='text-white  mx-24 font-bold text-xl'>{done&& "Thanks for adding!"}</span>
  </div>
    </div>
    </form>
  )
}
