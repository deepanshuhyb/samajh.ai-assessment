'use client'
import React from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger
} from './ui/Animated-modal'
import { LensDemo } from './Magnifier'

export function AnimatedModal () {
  return (
    <div className='py-4 mt-4 flex items-center justify-center'>
      <Modal>
        <ModalTrigger className='bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-md'>
          Magnify
        </ModalTrigger>
        <ModalBody className='w-[90vw] max-w-6xl'>
          <ModalContent>
            <h4 className='text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-6'>
              Overspeeding
            </h4>

            <div className='space-y-4 text-sm text-neutral-700 dark:text-neutral-300'>
              <LensDemo />
            </div>
          </ModalContent>

          <ModalFooter className='gap-4 text-white text-center text-xs'>
            Click anywhere or the cross button to get out of the modal.
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  )
}
