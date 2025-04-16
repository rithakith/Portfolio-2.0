'use client'
import React from 'react'
import HeroContentSection from '../components/HeroContentSection'
import HeroPhotoSection from '../components/HeroPhotoSection'
const HeroSection: React.FC = () => {
  return (
    <section id='hero' className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
    
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full">
        <HeroContentSection />
        <HeroPhotoSection />
      </div>
    </section>
  )
}

export default HeroSection
