'use client'
import { useEffect, useState } from 'react'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import Image from 'next/image'

const images = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg']

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
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

      {/* Center Content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
                {/* Logo above title */}
        <div className="mb-2">
          <Image
            src="/logo_transparent.png"
            alt="Maickels Broodjes logo"
            width={220}
            height={220}
            priority
            className="h-auto w-[150px] md:w-[220px] lg:w-[260px] object-contain"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Verse broodjes op vaste plekken in de stad
        </h1>
        {/* CTA row */}  
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#locaties"
            className="px-5 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            Bekijk locaties
          </a>

{/* Social icon buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/maickelsbroodjes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white/90 hover:bg-white transition shadow-sm"
              title="Instagram"
            >
              <FaInstagram className="h-6 w-6 text-black" />
            </a>

            <a
              href="https://www.facebook.com/maickelsbroodjes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full bg-white/90 hover:bg-white transition shadow-sm"
              title="Facebook"
            >
              <FaFacebook className="h-6 w-6 text-black" />
            </a>

            <a
              href="https://www.tiktok.com/@maickelsbroodjes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-2 rounded-full bg-white/90 hover:bg-white transition shadow-sm"
              title="TikTok"
            >
              <FaTiktok className="h-6 w-6 text-black" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

