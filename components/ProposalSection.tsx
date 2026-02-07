'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProposalSectionProps {
  onYesClick: () => void
}

export default function ProposalSection({ onYesClick }: ProposalSectionProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })

  const handleNoHover = () => {
    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 200
    setNoButtonPosition({ x, y })
  }

  return (
    <section className="relative w-full py-20 px-4 min-h-screen flex items-center justify-center">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Floating roses around the proposal */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`rose-${i}`}
            className="absolute text-4xl pointer-events-none"
            animate={{
              x: [0, Math.cos((i * Math.PI) / 2) * 120, 0],
              y: [0, Math.sin((i * Math.PI) / 2) * 120, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            style={{
              left: `${50 + Math.cos((i * Math.PI) / 2) * 15}%`,
              top: `${50 + Math.sin((i * Math.PI) / 2) * 15}%`,
            }}
          >
            🌹
          </motion.div>
        ))}

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 animate-pulse">
            Will you marry me?
          </h1>

          <motion.div
            className="text-6xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            💍
          </motion.div>
        </motion.div>

        {/* Buttons container */}
        <motion.div
          className="relative flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Yes button */}
          <motion.button
            onMouseEnter={() => setHoveredButton('yes')}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={onYesClick}
            className="relative px-8 py-4 md:px-12 md:py-6 text-xl md:text-2xl font-bold text-white rounded-full bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={hoveredButton === 'yes' ? { boxShadow: '0 0 30px rgba(236, 72, 153, 0.8)' } : {}}
          >
            <motion.span
              animate={hoveredButton === 'yes' ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
              className="inline-block mr-2"
            >
              💍
            </motion.span>
            Yes!
          </motion.button>

          {/* "Of course Yes" button */}
          <motion.button
            onMouseEnter={() => setHoveredButton('ofcourse')}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={onYesClick}
            className="relative px-8 py-4 md:px-12 md:py-6 text-xl md:text-2xl font-bold text-white rounded-full bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={hoveredButton === 'ofcourse' ? { boxShadow: '0 0 30px rgba(244, 63, 94, 0.8)' } : {}}
          >
            <motion.span
              animate={hoveredButton === 'ofcourse' ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
              className="inline-block mr-2"
            >
              ❤️
            </motion.span>
            Of course Yes!
          </motion.button>
        </motion.div>

        {/* Decorative bottom elements */}
        <motion.div
          className="mt-20 text-5xl flex justify-center gap-6"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <span>💕</span>
          <span>✨</span>
          <span>💕</span>
        </motion.div>
      </div>
    </section>
  )
}
