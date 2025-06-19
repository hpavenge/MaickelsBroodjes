'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg']

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000) // 5 sec
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
        <img src="/logo.jpg" alt="Maickels Broodjes" className="w-24 md:w-28 mb-4 opacity-80" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Verse broodjes op vaste plekken in de stad
        </h1>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#locaties"
            className="px-5 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            Bekijk locaties
          </a>
          <a
            href="https://www.instagram.com/maickelsbroodjes"
            target="_blank"
            className="px-5 py-2 border border-white text-white rounded font-medium hover:bg-white hover:text-black transition"
          >
            Volg op Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
