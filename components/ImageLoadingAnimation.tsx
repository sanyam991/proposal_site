'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ImageLoadingAnimationProps {
  onComplete: () => void
}

export default function ImageLoadingAnimation({ onComplete }: ImageLoadingAnimationProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const loadingImages = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2016.19.57-F1cDGqOmMplDA94wXVFTrZCD6PyM7H.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2016.19.43-UkM2adzcNpJ730vOstXBXVG60OTopk.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2016.20.01-6M3IWBnvt1MAKzn1G71tjrg2owb5N9.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2016.19.55-mUHF9kD0Rk9ltEraIAlgRL7oR4uknV.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2016.20.00-KFUM6eo0fIJWRE2GeSSWAm3StsGTsm.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2016.20.02-rYe5md8gMRsAmrAb4DffwLsZWgOJUm.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2016.19.54-TFmZoGk8ofcIol2qj7Uo9Zhuwq1GyH.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2016.19.58-2RpquaZIw7BBifDHWr0omiCna7b4So.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2016.19.56-wvzFLTr7wrtr6t09UCbipF6VAEuIQM.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/111-g5Z5as1ppWztGs9fYYGM34hAEisfDb.jpeg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        if (prev >= loadingImages.length - 1) {
          setIsComplete(true)
          clearInterval(interval)
          setTimeout(() => {
            onComplete()
          }, 500)
          return prev
        }
        return prev + 1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full max-w-lg mx-auto px-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Loading image display */}
        <motion.div
          className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl"
          animate={{
            scale: isComplete ? 1 : [1, 1.05, 1],
          }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={loadingImages[currentImageIndex] || "/placeholder.svg"}
            alt={`Loading ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Overlay with glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Loading indicator */}
        <div className="text-center mt-8">
          <motion.div
            className="inline-flex items-center justify-center gap-2"
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-3 h-3 rounded-full bg-pink-500" />
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-pink-500" />
          </motion.div>
          <p className="text-white mt-4 text-lg font-semibold">
            {isComplete ? 'Ready!' : `Loading ${currentImageIndex + 1}/10`}
          </p>
        </div>

        {/* Progress bar */}
        <motion.div
          className="w-full h-1 bg-pink-500/30 rounded-full mt-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-rose-500"
            animate={{
              width: `${((currentImageIndex + 1) / loadingImages.length) * 100}%`,
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
