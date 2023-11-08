import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'


export default function Headline() {

  const resultSection = document.getElementById('main-calculator');
        if (resultSection) {
            resultSection.scrollIntoView({ behavior: 'smooth'});
        }
  return (
    <div className="text-center mt-40">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 justify-center items-center dark:text-black md:text-5xl lg:text-6xl"> All of financial knowledge <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-500">in one space </span><button><FontAwesomeIcon icon={faCircleArrowDown} /></button></h1>
        <p class="text-lg font-normal justify-center items-center text-gray-600 lg:text-xl dark:text-gray-400">At FinTech we focus on delviering the customers with the up to date information on the topics of investment, financial literacy and healthy long-term financial growth.</p>
    </div>
  )
}
