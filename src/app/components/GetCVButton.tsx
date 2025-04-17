'use client'
import { useRef, useState } from 'react'

const ButtonGetCv = () => {
  const divRef = useRef<HTMLButtonElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleClick = () => {
    window.open(
      'https://drive.google.com/file/d/1mEE53YgRlxUknrK8KJMvqiier-Ne_1B9/view?usp=sharing',
      '_blank'
    )
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current || isFocused) return
    const div = divRef.current
    const rect = div.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <button
      ref={divRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex w-fit sm:px-12 px-4 h-12 items-center justify-center overflow-hidden rounded-md border-2 dark:border-[#656fe2] border-[rgb(37,150,190)] bg-white font-medium shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-all duration-500 ease-out transform scale-150 blur-md"
        style={{
          opacity,
          background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, #656fe255, transparent)`,
        }}
      />
      <span className="relative z-20 bg-gradient-to-r from-[var(--color1)] to-[var(--color2)] bg-clip-text text-transparent">
        Get My CV
      </span>
    </button>
  )
}

export default ButtonGetCv
