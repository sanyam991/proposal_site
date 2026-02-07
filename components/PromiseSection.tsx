'use client'

import { motion } from 'framer-motion'

export default function PromiseSection() {
  return (
    <section className="relative w-full py-20 px-4 min-h-screen flex items-center">
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group"
        >
          {/* Glassmorphism card */}
          <div className="relative p-12 md:p-16 rounded-3xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl">
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(236, 72, 153, 0.3), inset 0 0 20px rgba(236, 72, 153, 0.1)',
                  '0 0 40px rgba(236, 72, 153, 0.6), inset 0 0 30px rgba(236, 72, 153, 0.2)',
                  '0 0 20px rgba(236, 72, 153, 0.3), inset 0 0 20px rgba(236, 72, 153, 0.1)',
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10 space-y-6 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                A Promise to You
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-rose-600 leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                I promise to always care for you, support you, and love you every single day.
              </motion.p>

              {/* Decorative hearts */}
              <div className="flex justify-center gap-4 text-3xl pt-4">
                <motion.span
                  animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  ❤️
                </motion.span>
                <motion.span
                  animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                >
                  💕
                </motion.span>
                <motion.span
                  animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                >
                  ❤️
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating corner decorations */}
        <motion.div
          className="absolute top-0 left-0 text-5xl -mt-10 -ml-10"
          animate={{ rotate: 360, y: [0, 20, 0] }}
          transition={{ rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY }, y: { duration: 3, repeat: Number.POSITIVE_INFINITY } }}
        >
          🌹
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0 text-5xl -mb-10 -mr-10"
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY }, y: { duration: 3, repeat: Number.POSITIVE_INFINITY } }}
        >
          🌹
        </motion.div>
      </div>
    </section>
  )
}
