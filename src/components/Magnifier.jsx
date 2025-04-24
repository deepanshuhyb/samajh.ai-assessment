import { useState } from 'react'
import { Lens } from './ui/Lens'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export function LensDemo () {
  const [hovering, setHovering] = useState(false)

  return (
    <div className='w-full'>
      <div className='relative rounded-3xl overflow-hidden max-w-4xl w-[90%] mx-auto '>
        <Rays />
        <Beams />
        <div className='relative z-10'>
          <Lens hovering={hovering} setHovering={setHovering}>
            <img
              src='/image2.jpg'
              alt='image'
              className='rounded-2xl w-full h-auto object-cover max-h-[70vh]'
            />
          </Lens>
        </div>
      </div>
    </div>
  )
}

const Beams = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 380 315'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl pointer-events-none'
    >
      {/* SVG content remains unchanged */}
    </svg>
  )
}

const Rays = ({ className }) => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 380 397'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'absolute left-0 top-0 pointer-events-none z-[1] w-full max-w-5xl',
        className
      )}
    >
      {/* SVG content remains unchanged */}
    </svg>
  )
}
