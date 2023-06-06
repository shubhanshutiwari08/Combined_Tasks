import React from 'react'

export default function Leaderboard() {
  return (
    <div className='bg-[#1c1e4e] h-screen text-white'>
        <h1 className='text-8xl text-center justify-items-stretch'>LEADERBOARD</h1>
      <div className='max-w-[1400px] mx-auto'>
            <div className='max-w-[1000px] mx-auto'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <div className='p-4 bg-[#2d2d61] mb-5 rounded-t-2xl h-20 w-24'>Card Silver</div>
                        <div className='p-4 bg-[#2d2d61] mb-5 rounded-t-2xl -h-48 w-24'>Card Gold</div>
                        <div className='p-4 bg-[#2d2d61] mb-5 rounded-t-2xl h-20 w-24'>Card Bronze</div>
                    </div>
                    <div className='flex'>
                        <div className='p-4 bg-[#2d2d61] mb-5 rounded-t-2xl h-20 w-24'>Card Silver</div>
                        <div className='p-4 bg-[#2d2d61] mb-5 rounded-t-2xl h-20 w-24'>Card Gold</div>
                        <div className='p-4 bg-[#2d2d61] mb-5 rounded-t-2xl h-20 w-24'>Card Bronze</div>
                    </div>
                </div>
            </div>
            
            {/* Center Div */}
            <div className='flex items center bg-[#2d2d61] rounded-lg p-5 mb-5'>
                Center Div
            </div>



            {/* third div */}


            <div className='flex  space-x-8'>
                <div className='w-full shadow-xl'>
                    <h1 className='bg-[#2d2d61] p-3 rounded-t-lg'>Top 50 Ranks by Countries</h1>
                </div>
                <div className='w-full shadow-xl'>
                    <h1 className='bg-[#2d2d61] p-3 rounded-t-lg'>Top 50 Ranks by Categories</h1>
                </div>
            </div>
      </div>
    </div>
  )
}
