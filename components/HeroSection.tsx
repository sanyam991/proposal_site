'use client'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  


  // const photoSlides = [
  //   { id: 1, gradient: 'from-pink-300 to-rose-300' },
  //   { id: 2, gradient: 'from-rose-300 to-pink-400' },
  //   { id: 3, gradient: 'from-pink-400 to-rose-400' },
  // ]
  const photoSlides = [
  { id: 1, src: '/1.jpeg' },
  { id: 2, src: '/2.jpeg' },
  { id: 3, src: '/3.jpeg' },
  { id: 4, src: '/4.jpeg' },
  { id: 5, src: '/5.jpeg' },
  { id: 6, src: '/6.jpeg' },
  { id: 7, src: '/7.jpeg' },
  { id: 8, src: '/8.jpeg' },
  { id: 9, src: '/9.jpeg' },
  { id: 10, src: '/10.jpeg' }
]
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentPhotoIndex((prev) => (prev + 1) %photoSlides.length)
  }, 4000)
  return () => clearInterval(interval)
}, [photoSlides.length])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-pink-200 to-rose-200 blur-3xl opacity-30"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gradient-to-tl from-purple-200 to-pink-200 blur-3xl opacity-30"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Photo carousel */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl">
            {/* {photoSlides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}
                animate={{ opacity: index === currentPhotoIndex ? 1 : 0 }}
                transition={{ duration: 1 }}
              >
                <div className="text-6xl font-bold text-white/40">
                  {index === currentPhotoIndex && `💕`}
                </div>
              </motion.div>
            ))} */}
            {photoSlides.map((slide, index) => (
  <motion.div
    key={slide.id}
    className="absolute inset-0"
    style={{ zIndex: index === currentPhotoIndex ? 10 : 0 }}
    animate={{ opacity: index === currentPhotoIndex ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
    <Image
      src={slide.src}
      alt={`Memory ${slide.id}`}
      fill
      className="object-cover"
    />
  </motion.div>
))}


          </div>
        </motion.div>

        {/* Floating hearts around carousel */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-3xl"
            animate={{
              x: [0, Math.cos((i * Math.PI) / 1.5) * 80, 0],
              y: [0, Math.sin((i * Math.PI) / 1.5) * 80, 0],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
            style={{
              left: `${50 + Math.cos((i * Math.PI) / 1.5) * 30}%`,
              top: `${40 + Math.sin((i * Math.PI) / 1.5) * 30}%`,
            }}
          >
            ❤️
          </motion.div>
        ))}

        {/* Main text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
            Every moment with you
          </h1>
          <p className="text-3xl md:text-4xl font-semibold text-rose-500">
            is my favorite memory
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-pink-400 text-3xl">↓</div>
        </motion.div>
      </div>
    </section>
  )
}



