import React from 'react'
import python from '../assets/python.png'

export default function Content() {
  return (
    <div className='bg-[#1e2736] h-screen'>
      <div className=" mx-auto min-h-screen text-white">
          <div className='bg-blue-500 flex w-[20rem]   space-x-3'>
            <img className='w-10 h-10' src={python} alt="" />
            <div className='bg-[#333f50]  w-full mt-1 mb-1'>
                <h1 className='text-cyan-500 text-center font-bold text-xl'>PYTHON</h1>
            </div>
          </div>
          <div className='w-[20rem] bg-gray-400/10 h-screen my-8 space-y-1'>
            <div className='bg-blue-500 flex w-full space-x-3 shadow-lg shadow-blue-500/50'>
              {/* <img className='w-10 h-10' src={python} alt="" /> */}
              <div className='bg-[#333f50]  w-full mt-1 mb-1 ml-1'>
                  <h1 className='text-white font-bold p-2 text-lg'>Python Varibales</h1>
              </div>
            </div>
            {/* 2nd */}
            <div className='flex w-full space-x-3 shadow-lg shadow-blue-500/50'>
              {/* <img className='w-10 h-10' src={python} alt="" /> */}
              <div className='bg-[#333f50]  w-full '>
                  <h1 className='text-white font-bold p-2 text-lg'>Python Types of Varibales</h1>
              </div>
            </div>
            {/* 3rd */}
            <div className='flex w-full space-x-3 shadow-lg shadow-blue-500/50'>
              {/* <img className='w-10 h-10' src={python} alt="" /> */}
              <div className='bg-[#333f50]  w-full '>
                  <h1 className='text-white font-bold p-2 text-lg'>Python Identifiers</h1>
              </div>
            </div>
            {/* 4th */}
            <div className='flex w-full space-x-3 shadow-lg shadow-blue-500/50'>
              {/* <img className='w-10 h-10' src={python} alt="" /> */}
              <div className='bg-[#333f50]  w-full '>
                  <h1 className='text-white font-bold p-2 text-lg'>Python Keywords</h1>
              </div>
            </div>
            {/* 5th */}
            <div className='flex w-full space-x-3 shadow-lg shadow-blue-500/50'>
              {/* <img className='w-10 h-10' src={python} alt="" /> */}
              <div className='bg-[#333f50]  w-full '>
                  <h1 className='text-white font-bold p-2 text-lg'>Python Input</h1>
              </div>
            </div>
            {/* 6th */}
            <div className='flex w-full space-x-3 shadow-lg shadow-blue-500/50'>
              {/* <img className='w-10 h-10' src={python} alt="" /> */}
              <div className='bg-[#333f50]  w-full '>
                  <h1 className='text-white font-bold p-2 text-lg'>Python Comments</h1>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
