import React from 'react'
// import { Progress } from "@material-tailwind/react";
// import cover from '../assets/cov.jpg'
import user from '../assets/user.jpg'
import python from '../assets/python.png'

export default function Profile() {
  return (
    <div className='bg-[#1e2736] min-h-screen'>
        {/* <img className='object-fill h-48 w-full' src={cover} alt="" /> */}
        <div className="mx-60 space-y-4">
            <div className='flex justify-between'>
                <div className='flex space-x-5'>
                    <img className='w-20 h-20' src={user} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-white'>Chris Tacko</h1> 
                        <div className='flex space-x-4'>
                            <h1 className='text-white'>@username</h1>
                            <h1 className='text-white'>@username</h1>
                            <h1 className='text-white'>@username</h1>
                            <h1 className='text-white'>@username</h1>
                        </div>
                        <h2 className='text-white'>Ui/Ux developer</h2>
                        <div className='flex space-x-4'>
                            <h1 className='text-white'>Rank : <span className='text-cyan-500'>345</span> </h1>
                            <h1 className='text-white'>Rank : <span className='text-cyan-500'>345</span> </h1>
                            <h1 className='text-white'>Rank : <span className='text-cyan-500'>345</span> </h1>
                        </div>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <h1 className='text-white'>hello</h1>
                    <h1 className='text-white'>hello</h1>
                    <h1 className='text-white'>hello</h1>
                    <h1 className='text-white'>hello</h1>
                    <h1 className='text-white'>hello</h1>
                </div>
            </div>
            <div className='flex space-x-5 '>
                <h1 className='text-white'>icon</h1> 
                <h1 className='text-white'>icon</h1> 
                <h1 className='text-white'>icon</h1> 
                <h1 className='text-white'>icon</h1> 
                <h1 className='text-white'>icon</h1> 
                <h1 className='text-white'>icon</h1> 
            </div>
            <div className='flex space-x-5 mt-3'>
                <h1 className='text-white'>icon</h1> 
                <h1 className='text-white'>icon</h1> 
                <h1 className='text-white'>icon</h1>
            </div>
            <h1 className='text-cyan-500'>Skills & Rankings</h1>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1  bg-gray-400/20 h-16 text-center p-5 text-white  ">Ranking Xp</div>
                <div class="col-start-2 col-end-7 bg-gray-400/10">
                    <div className='flex justify-around p-5'>
                        <h1 className='text-white'>badge 1</h1>
                        <h1 className='text-white'>badge 1</h1>
                        <h1 className='text-white'>badge 1</h1>
                        <h1 className='text-white'>badge 1</h1>
                    </div>
                </div>    
            </div>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 h-20   bg-gray-400/20 ">
                    <img className='p-2' src={python} alt="" />
                </div>
                <div class="col-start-2 col-end-4 bg-gray-400/10">
                    <div className='flex space-x-5 p-5'>
                        <h1 className='text-white '>Badge </h1>
                        <h1 className='text-white'>Programs </h1>
                    </div>
                </div>
                <div class="col-start-4 col-end-7 bg-gray-400/10 p-5">
                    <h1 className='text-white'>Badges</h1>
                    <div className='flex justify-between'>
                        <h1 className='text-white'>badge 1</h1>
                        <h1 className='text-white'>badge 1</h1>
                        <h1 className='text-white'>badge 1</h1>
                        <h1 className='text-white'>badge 1</h1>
                    </div>
                </div>
                <div class="col-start-1 h-8 bg-gray-400/20 text-white ">Python</div>
                <div class="col-start-2 col-end-4 bg-gray-400/10">
                    <div className='flex space-x-5 p-5'>
                        <h1 className='text-white '>Badge </h1>
                        <h1 className='text-white'>Programs </h1>
                    </div>
                </div>
            </div>
            <h1 className='text-cyan-500'>My Questions</h1>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-span-2  bg-gray-100/10 h-16 text-center p-5 text-white ">Ranking Xp</div>    
                <div class="col-start-3  bg-gray-100/10 h-16 text-center p-5 text-white">Ranking Xp</div>    
                <div class="col-start-4  bg-gray-100/10 h-16 text-center p-5 text-white">Ranking Xp</div>    
                <div class="col-start-5  bg-gray-100/10 h-16 text-center p-5 text-white">Ranking Xp</div>    
                <div class="col-start-6  bg-gray-100/10 h-16 text-center p-5 text-white">Ranking Xp</div>    
            </div>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-span-2  bg-gray-400/20 h-16 text-center p-5 text-white">Ranking Xp</div>    
                <div class="col-start-3  bg-gray-400/20 h-16 text-center p-5 text-white">Ranking Xp</div>    
                <div class="col-start-4  bg-gray-400/20 h-16 text-center p-5 text-white">Ranking Xp</div>    
                <div class="col-start-5  bg-gray-400/20 h-16 text-center p-5 text-white ">Ranking Xp</div>    
                <div class="col-start-6  bg-gray-400/20 h-16 text-center p-5 text-white">Ranking Xp</div>    
            </div>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-span-2  bg-gray-400/20 h-16 text-center p-5 text-white">Ranking Xp</div>    
                <div class="col-start-3  bg-gray-400/20 h-16 text-center p-5 text-white ">Ranking Xp</div>    
                <div class="col-start-4  bg-gray-400/20 h-16 text-center p-5 text-white ">Ranking Xp</div>    
                <div class="col-start-5  bg-gray-400/20 h-16 text-center p-5 text-white">Ranking Xp</div>    
                <div class="col-start-6  bg-gray-400/20 h-16 text-center p-5 text-white">Ranking Xp</div>    
            </div>
        </div>

    </div>
  )
}
