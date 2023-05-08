import React from 'react'
import { useState } from 'react'
export default function DeleteNews() {
    const [done, setDone] = useState(false)
  return (
    <form className='pt-14 ' >
    <div className=' '>
        <div className='text-center pt-5'>
            <h1 className='text-white text-4xl'>Delete News</h1>
            <p className='text-white text-lg mt-5'>Lorem Ipsum is simply dummy text of the printing .</p>
        </div>
        <div className="max-w-md mx-auto mt-20">
   <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label
      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
      htmlFor="name">
      ID
    </label>
    <input
      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      id="name"
      type="text"
      name="user_name"
      placeholder="Enter news id"/>
  </div>
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
    placeholder="Why are you deleting this content ?"
    name="message"
    rows="6"
  ></textarea>
</div>

<div className="flex justify-center">
<input type="submit" value="Delete" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-3  px-4 rounded"/> 

</div>
<span className='text-white  mx-24 font-bold text-xl'>{done&& "Thanks for adding!"}</span>
  </div>
    </div>
    </form>
  )
}
