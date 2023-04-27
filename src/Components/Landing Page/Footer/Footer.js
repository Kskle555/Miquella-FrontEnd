import React from 'react'

export default function Footer() {
  return (
    <footer class=" mt-[200px] bg-black py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h2 class="text-white text-lg font-bold mb-4">LOGO</h2>
          <p class="text-white leading-relaxed mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <p class="text-white font-bold">Phone: 123-456-7890</p>
        </div>
        <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h2 class="text-white text-lg font-bold mb-4">Lorem Ipsum</h2>
          <p class="text-white leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel ultrices malesuada, velit elit bibendum sapien, vel bibendum sapien elit vel velit.</p>
          <p class="text-white font-bold">E-posta: info@example.com</p>
        </div>
        <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h2 class="text-white text-lg font-bold mb-4">About us</h2>
          <ul class="list-disc list-inside">
            <li><a href="#" class="text-white hover:text-gray-400">Zeux</a></li>
            <li><a href="#" class="text-white hover:text-gray-400">Portfolio</a></li>
            <li><a href="#" class="text-white hover:text-gray-400">Careers</a></li>
            <li><a href="#" class="text-white hover:text-gray-400">Contact us</a></li>
          </ul>
        </div>
      </div>
      <div class="flex justify-between items-center mt-8 border-t border-gray-700 pt-8">
        <p class="text-white">© 2023 Copyright</p>
      </div>
    </div>
  </footer>
  )
}
