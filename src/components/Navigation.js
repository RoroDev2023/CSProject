import React from 'react'
import chatGptIcon from '../images/ChatGPT.svg'


export default function Navigation() {
  return (
    
    <nav class="bg-white dark:bg-white fixed w-full top-0 left-0 border-b border-gray-300 shadow-xl">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button class="flex items-center ml-20">
                <span class="self-center text-3xl whitespace-nowrap dark:text-black font-bold">FinTech™</span>
            </button>
            <div class="flex md:order-2 mr-14">
            

            <div class="relative inline-flex  group">
            <div
                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a href="#" title="Get quote now"
                class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-[#00A67E] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">
                <img className="w-8 mr-2" src={chatGptIcon}/>
                Utlize our AI Tools
            </a>
            </div>
            
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-[17px]">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-200 md:dark:bg-white dark:border-gray-700">
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Investment Info</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}
