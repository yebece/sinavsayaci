"use client";

import Image from 'next/image'

import Snowfall from 'react-snowfall'

import SnowfallComponent from './SnowFallComponent.js';
import { Inter } from 'next/font/google'

export default function Home() {
  return (
    <main className="gallery-view-container">
    <Snowfall 
// Controls the number of snowflakes that are created (defaults to 150).
snowflakeCount={200}/>
      <span className='title'>Sınav Sayacı</span>
      <div className='sayacs'>
        <a href="/yks" className='sayac'>
          <span className='sayac-date'><span className='highlight'>8</span> Haziran 2024</span>
          <span className='sayac-name'>YKS</span>
        </a>
        <a href="/lgs" className='sayac'>
          <span className='sayac-date'><span className='highlight'>2</span> Haziran 2024</span>
          <span className='sayac-name'>LGS</span>
        </a>
        <a href="/msu" className='sayac'>
          <span className='sayac-date'><span className='highlight'>3</span> Mart 2024</span>
          <span className='sayac-name'>MSÜ</span>
        </a>
      </div>
      <div className='footer'>
        <span className='desc'>made with 🤍 and sınav hırsı by <a href="https://www.linkedin.com/in/yusuf-berk-çekiç-2a49711b5">yusuf berk çekiç</a></span>
      </div>
      <div className='background-shadow'></div>
    </main>
  )
}
