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
          <span className='sayac-name'>TYT</span>
        </a>
        <a href="/ayt" className='sayac'>
          <span className='sayac-date'><span className='highlight'>9</span> Haziran 2024</span>
          <span className='sayac-name'>AYT</span>
        </a>
        <a href="/ydt" className='sayac'>
          <span className='sayac-date'><span className='highlight'>9</span> Haziran 2024</span>
          <span className='sayac-name'>YDT</span>
        </a>
        <a href="/yks25" className='sayac'>
          <span className='sayac-date'><span className='highlight'>21</span> Haziran 2025</span>
          <span className='sayac-name'>YKS 2025</span>
        </a>
        <a className='sayac-over'>
          <span className='sayac-date'><span className='highlight'>2</span> Haziran 2024</span>
          <span className='sayac-name'>LGS - Bitti</span>
        </a>
        <a className='sayac-over'>
          <span className='sayac-date'><span className='highlight'>3</span> Mart 2024</span>
          <span className='sayac-name'>MSÜ - Bitti</span>
        </a>
      </div>
      <div className='footer'>
        <span className='desc'>made with 🤍 and sınav hırsı by <a href="https://www.linkedin.com/in/yusuf-berk-çekiç-2a49711b5">yusuf berk çekiç</a></span>
      </div>
      <div className='background-shadow'></div>
    </main>
  )
}
