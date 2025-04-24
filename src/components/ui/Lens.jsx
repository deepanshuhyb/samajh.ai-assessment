'use client'
import React, { useRef, useState } from 'react'

export const Lens = ({
  children,
  zoomFactor = 1.5,
  lensSize = 200,
  isStatic = false,
  position = { x: 200, y: 150 },
  hovering,
  setHovering
}) => {
  const containerRef = useRef(null)
  const [localIsHovering, setLocalIsHovering] = useState(false)

  const isHovering = hovering !== undefined ? hovering : localIsHovering
  const setIsHovering = setHovering || setLocalIsHovering

  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 })

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  const getMaskStyle = (x, y) => ({
    maskImage: `radial-gradient(circle ${
      lensSize / 2
    }px at ${x}px ${y}px, black 100%, transparent 100%)`,
    WebkitMaskImage: `radial-gradient(circle ${
      lensSize / 2
    }px at ${x}px ${y}px, black 100%, transparent 100%)`,
    transform: `scale(${zoomFactor})`,
    transformOrigin: `${x}px ${y}px`
  })

  return (
    <div
      ref={containerRef}
      className='relative overflow-hidden rounded-lg'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      {(isStatic || isHovering) && (
        <div
          className='absolute inset-0 pointer-events-none'
          style={
            isStatic
              ? getMaskStyle(position.x, position.y)
              : getMaskStyle(mousePosition.x, mousePosition.y)
          }
        >
          <div className='absolute inset-0'>{children}</div>
        </div>
      )}
    </div>
  )
}
