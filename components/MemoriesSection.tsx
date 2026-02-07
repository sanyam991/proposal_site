'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function MemoriesSection() {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({})

  const memories = [
    {
      id: 1,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2015.42.50-stqo0X6uMMJyVs7SE3dQfj5nRGApby.jpeg',
      message: 'You were the one I chose first, because you are the cutest and the best among everyone. The moment I saw you, I knew there was no one in this galaxy like you.',
    },
    {
      id: 2,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2015.42.49%20%282%29-YIyYUJrFqJzTVwWrIC63WWPT0ek1FZ.jpeg',
      message: 'Every fight between us only makes our bond stronger. Through every hard moment, our love grows deeper and more unbreakable.',
    },
    {
      id: 3,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2015.42.50%20%281%29-gBZqKzDUOIec24K4mzVYWWN9FIRPwI.jpeg',
      message: 'From the first year of college, you were always on my mind. I used to dream about you every day, not knowing that one day you would become my reality.',
    },
    {
      id: 4,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2015.42.48%20%282%29-XTa16gHezJEyEm0D8HdEgjrlwwdIgH.jpeg',
      message: 'Through these four years of college, you have been my happiness, my comfort, and my biggest blessing. Every memory with you is a treasure in my heart.',
    },
    {
      id: 5,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2015.42.47-Uy3N4AXeB8sHBAD6S1ZNw33uz34egg.jpeg',
      message: 'I thank God every day for bringing you into my life. Out of all the people in this world, I was lucky enough to have you by my side.',
    },
    {
      id: 6,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%2015.42.48-iWCqUmZFAvSwq4UM44oFNHCVoenUQ4.jpeg',
      message: 'No matter what life brings, I promise to walk with you, support you, and love you forever. You are not just my love, you are my home.',
    },
  ]

  const toggleFlip = (id: number) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative w-full py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
          Our Beautiful Memories
        </h2>
        <p className="text-center text-rose-500 mb-16 text-lg">
          Click each card to reveal the story behind every moment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory) => (
            <motion.div
              key={memory.id}
              variants={cardVariants}
              className="h-80"
              style={{
                transform: memory.id <= 2 ? 'rotateY(15deg)' : 'rotateY(0deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                animate={{ rotateY: flipped[memory.id] ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => toggleFlip(memory.id)}
              >
                {/* Front - Image */}
                <div
                  className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={memory.image || "/placeholder.svg"}
                    alt={`Memory ${memory.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-6">
                    <p className="text-white text-sm font-semibold">Click to reveal</p>
                  </div>
                </div>

                {/* Back - Message */}
                <div
                  className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-400 via-rose-300 to-pink-500 flex items-center justify-center p-6"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="text-center">
                    <p className="text-white text-lg leading-relaxed font-medium drop-shadow-lg">
                      {memory.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 text-rose-600 text-sm font-semibold">
          Click any card to flip and read the message
        </p>
      </motion.div>
    </section>
  )
}
