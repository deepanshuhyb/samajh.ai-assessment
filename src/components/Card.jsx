import { cn } from '../lib/utils' // Adjust the path as needed

export function CardDemo () {
  return (
    <div className='min-w-1/2 w-full group/card'>
      <div
        className={cn(
          'cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4',
          'bg-[url(../../image2.jpg)] bg-cover'
        )}
      >
        {/* <div className='text content'>
          <h1 className='font-bold text-xl md:text-2xl text-gray-50 relative z-10'>
            Author Card
          </h1>
          <p className='font-normal text-sm text-gray-50 relative z-10 my-4'>
            Card with Author avatar, complete name and time to read – most
            suitable for blogs.
          </p>
        </div> */}
      </div>
    </div>
  )
}
