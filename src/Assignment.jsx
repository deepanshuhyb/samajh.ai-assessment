import { CardDemo } from './components/Card'
import { AnimatedModal } from './components/Modal'

export default function Assignment () {
  return (
    <div className='bg-black min-h-[100dvh] w-full h-full flex flex-col justify-center items-center px-4'>
      <div className='border border-white rounded-3xl p-4 max-w-[500px] w-full'>
        <CardDemo />
        <AnimatedModal />
      </div>
    </div>
  )
}
