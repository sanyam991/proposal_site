'use client'

import { motion } from 'framer-motion'

export default function RingReveal() {
  return (
    <motion.section
      className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center z-50 bg-gradient-to-b from-pink-100 via-purple-100 to-pink-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 opacity-50 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.5) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10 space-y-12 text-center">
        {/* Rotating ring display */}
        <motion.div
          className="flex justify-center"
          animate={{ rotateY: 360 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
        >
          <div className="text-9xl md:text-[200px] drop-shadow-2xl">💍</div>
        </motion.div>

        {/* Ring description text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
            Your real gift
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-rose-500">
            is waiting for you...
          </p>
        </motion.div>

        {/* Floating hearts around the ring */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-4xl pointer-events-none"
            animate={{
              x: [0, Math.cos((i * Math.PI) / 3) * 150, 0],
              y: [0, Math.sin((i * Math.PI) / 3) * 150, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
            style={{
              left: `${50 + Math.cos((i * Math.PI) / 3) * 5}%`,
              top: `${50 + Math.sin((i * Math.PI) / 3) * 5}%`,
            }}
          >
            {i % 2 === 0 ? '❤️' : '💕'}
          </motion.div>
        ))}

        {/* Final message - visible after a delay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="space-y-6 pt-12 border-t-2 border-pink-300 mt-12"
        >
          <p className="text-xl md:text-2xl text-rose-600 font-medium">
            Thank you, cutie.
          </p>
          <div className="text-lg md:text-xl text-pink-600 font-semibold space-y-2">
            <div>Love you,</div>
            <div className="text-2xl md:text-3xl">Yours, Beau 💕</div>
          </div>
        </motion.div>

        {/* Sparkles animation */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-2xl pointer-events-none"
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              y: [-50, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.4,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: '20%',
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
