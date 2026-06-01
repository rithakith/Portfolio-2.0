'use client'
import React from 'react'
import { FileDown } from 'lucide-react'

const ButtonGetCv = () => {
  const handleClick = () => {
    window.open('/cv.pdf', '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-color2 text-white text-xs font-bold tracking-wide border border-color2/25 shadow-md shadow-color2/10 cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:opacity-95"
    >
      <FileDown className="h-4 w-4" />
      <span>Get My CV</span>
    </button>
  )
}

export default ButtonGetCv
