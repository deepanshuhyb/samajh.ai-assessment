'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '../../lib/utils'

const ModalContext = createContext(undefined)

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

export function Modal ({ children }) {
  return <ModalProvider>{children}</ModalProvider>
}

export const ModalTrigger = ({ children, className }) => {
  const { setOpen } = useModal()
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md text-black dark:text-white text-center',
        className
      )}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  )
}

export const ModalBody = ({ children, className }) => {
  const { open, setOpen } = useModal()
  const modalRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  useOutsideClick(modalRef, () => setOpen(false))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
        >
          <motion.div
            ref={modalRef}
            className={cn(
              'w-full max-w-lg bg-white dark:bg-neutral-950 p-6 rounded-xl shadow-lg relative z-50',
              className
            )}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <CloseIcon />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const ModalContent = ({ children, className }) => (
  <div className={cn('flex flex-col gap-4', className)}>{children}</div>
)

export const ModalFooter = ({ children, className }) => (
  <div className={cn('flex justify-end gap-2 mt-4', className)}>{children}</div>
)

const CloseIcon = () => {
  const { setOpen } = useModal()
  return (
    <button onClick={() => setOpen(false)} className='absolute top-4 right-4'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='text-black dark:text-white'
      >
        <line x1='18' y1='6' x2='6' y2='18' />
        <line x1='6' y1='6' x2='18' y2='18' />
      </svg>
    </button>
  )
}

// Hook for outside click
export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return
      callback(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, callback])
}
