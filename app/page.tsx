'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import MemoriesSection from '@/components/MemoriesSection'
import PromiseSection from '@/components/PromiseSection'
import ProposalSection from '@/components/ProposalSection'
import PuzzleReveal from '@/components/PuzzleReveal'
import RingReveal from '@/components/RingReveal'
import ParticleBackground from '@/components/ParticleBackground'
import ImageLoadingAnimation from '@/components/ImageLoadingAnimation'

export default function Home() {
  const [showPuzzle, setShowPuzzle] = useState(false)
  const [showRing, setShowRing] = useState(false)
  const [showImageLoading, setShowImageLoading] = useState(false)

  const handleYesClick = () => {
    setShowImageLoading(true)
  }

  const handleLoadingComplete = () => {
    setShowImageLoading(false)
    setShowPuzzle(true)
    setTimeout(() => {
      setShowRing(true)
    }, 3000)
  }

  return (
    <main className="w-full overflow-hidden">
      <ParticleBackground />
      
      <HeroSection />
      <MemoriesSection />
      <PromiseSection />
      <ProposalSection onYesClick={handleYesClick} />
      
      {showImageLoading && <ImageLoadingAnimation onComplete={handleLoadingComplete} />}
      {showPuzzle && <PuzzleReveal onComplete={() => setShowRing(true)} />}
      {showRing && <RingReveal />}
    </main>
  )
}
