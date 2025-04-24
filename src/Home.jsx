import { CompareDemo } from './components/CompareImages'
import { ButtonsCard } from './components/ui/ButtonsCard'
import { useNavigate } from 'react-router-dom'

export default function Home () {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/assignment')
  }
  return (
    <>
      <div className='bg-black min-h-[100dvh] w-full h-full flex flex-col'>
        <div className='p-6 flex flex-col md:flex-row md:gap-2 justify-center'>
          <img src='../logo.webp' className='w-24' />
          <h1 className='text-white'>Assessment</h1>
        </div>

        <div className='w-full h-[10px] md:h-full flex justify-center '>
          <CompareDemo />
        </div>
        <div className='flex justify-center '>
          <button
            className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
            onClick={handleClick}
          >
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
              View Assignment
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
