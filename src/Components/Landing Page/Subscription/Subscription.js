import React from 'react'

export default function Subscription() {
  return (
    <div className="mt-[160px] container mx-auto px-4 sm:px-6 lg:px-8">
    <div  className="my-8">
      <h1  className="text-2xl text-white font-bold text-center sm:text-3xl lg:text-4xl  mb-4 2xl:text-start">Lorem Ipsum</h1>
      <p  className="text-white text-center leading-relaxed mb-8 2xl:text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </div>
    <div  className="bg-amber-900/75 py-12 px-4 sm:px-6 lg:px-8">
  <div  className="max-w-7xl mx-auto">
    <div  className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div  className="mb-8 md:mb-0">
        <h1  className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Lorem Ipsum</h1>
        <p  className="text-white leading-relaxed mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel ultrices malesuada, velit elit bibendum sapien, vel bibendum sapien elit vel velit. Sed euismod, sapien vel ultrices malesuada, velit elit bibendum sapien, vel bibendum sapien elit vel velit.</p>
      </div>
      <div  className="relative flex">
        <input type="text" class="bg-white rounded-l-full py-2 px-4 w-64 focus:outline-none focus:shadow-outline" placeholder="Search..."/>
        <button  className="absolute bg-orange-600 right-0 top-0 bottom-0   hover:bg-blue-500 rounded-full py-2 px-4">
         Search
        </button>
      </div>
    </div>
  </div>
</div>
  </div>
  )
}
