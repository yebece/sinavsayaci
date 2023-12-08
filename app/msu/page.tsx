"use client";

import { Inter } from 'next/font/google'
import React, { useRef, useEffect, useState } from 'react';

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("March 3, 2024 10:15:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

      if (distance < 0) {
        clearInterval(x);
      }
    };

    const x = setInterval(updateCountdown, 1000);

    // Initial update
    updateCountdown();

    // Cleanup interval on component unmount
    return () => clearInterval(x);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <main className="sayac-view-container">
        <div className='sayac-view'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519939 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 -2.83022e-08 12 0V12H24Z" fill="#5F5F5F"/>
            </svg>
            <span>MSÜ'ye</span>
            <span className='time'>
                <span className='big' id="days">{countdown.days}</span>
                <span className='normal'> gün</span>
            </span>
            <span className='time'>
                <span className='big' id="hours">{countdown.hours}</span>
                <span className='normal'> saat</span>
            </span>
            <span className='time'>
                <span className='big' id="minutes">{countdown.minutes}</span>
                <span className='normal'> dakika</span>
            </span>
            <span className='time'>
                <span className='big' id="seconds">{countdown.seconds}</span>
                <span className='normal'> saniye</span>
            </span>
            <span>kaldı.</span>
        </div>

        <a href='/' className='back-button'>go back to the gallery</a>
    </main>
  );
}
