'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface PuzzleRevealProps {
  onComplete: () => void
}

export default function PuzzleReveal({ onComplete }: PuzzleRevealProps) {
  const [showMessage, setShowMessage] = useState(false)

  const puzzlePieces = [
    { id: 1, x: -100, y: -100 },
    { id: 2, x: 100, y: -100 },
    { id: 3, x: -100, y: 100 },
    { id: 4, x: 100, y: 100 },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true)
      setTimeout(onComplete, 2000)
    }, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Puzzle pieces */}
        {puzzlePieces.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute"
            initial={{ x: piece.x, y: piece.y, opacity: 0, scale: 0 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: (piece.id - 1) * 0.2 }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl shadow-xl flex items-center justify-center text-5xl">
              {piece.id === 1 && '💕'}
              {piece.id === 2 && '💍'}
              {piece.id === 3 && '✨'}
              {piece.id === 4 && '❤️'}
            </div>
          </motion.div>
        ))}

        {/* Celebration text */}
        {showMessage && (
          <motion.div
            className="absolute text-center space-y-4 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
              Order has been placed...
            </h2>
            <p className="text-3xl md:text-4xl font-semibold text-pink-200 text-center">
              with you forever.
            </p>
          </motion.div>
        )}

        {/* Floating confetti-like elements */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={`confetti-${i}`}
            className="absolute text-4xl pointer-events-none"
            initial={{ y: -100, x: Math.random() * 400 - 200, opacity: 1 }}
            animate={{ y: 100, x: Math.random() * 400 - 200, opacity: 0 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
