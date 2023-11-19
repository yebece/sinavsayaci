import Image from 'next/image'

import { Inter } from 'next/font/google'

export default function Home() {
  return (
    <main className="gallery-view-container">
      <span className='title'>Sınav Sayacı</span>
      <span className='desc'>made with 🤍 and sınav hırsı by <a href="#">yusuf berk çekiç</a></span>
      <div className='sayacs'>
        <a href="/yks" className='sayac yks'>
          <span className='sayac-name'>YKS</span>
          <span className='sayac-date'>8 Haziran 2024</span>
        </a>
        <a href="/lgs" className='sayac lgs'>
          <span className='sayac-name'>LGS</span>
          <span className='sayac-date'>2 Haziran 2024</span>
        </a>
      </div>
    </main>
  )
}
