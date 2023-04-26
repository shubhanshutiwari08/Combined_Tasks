import React from 'react'
// import imgone from './assets/java.png'
import imgone from '../assets/java.png'
import down from '../assets/down.png'
import up from '../assets/up.png'
import list from '../list.json'
import { useState } from 'react';
export default function Qna() {
 
    const[isOpen,setIsOpen] = useState(false)
    return (
      <section className='w-full h-screen bg-[#1e2736]'>
        <div className='p-20'> 
          <h1 className='text-white text-xl font-bold'>Question Section</h1>
          <div className='flex justify-between mx-1 '>
              <h1 className='text-white font-semibold text-lg'>Java</h1>
              <ul className='flex space-x-4'>
                <li className='text-cyan-300 '>QUESTION SELECTED: <span className='text-white'>23</span> </li>
                <li className='text-cyan-300 '>POINTS : <span className='text-white'>23</span></li>
              </ul>
          </div>
          <div className='bg-[#323d4f] h-[100px] mt-4 rounded-xl shadow-lg'>
            <div className='p-8 items-center flex justify-between '>
              <ul className='flex space-x-20'>
                <img className='w-10 h-10' src={imgone} alt="" srcset="" />
                <h1 className='text-white'>Java Inheritence </h1>
              </ul>
                {/* <img className='w-10 h-10' src={imgone} alt="" srcset="" />
                <h1 className='text-white'>Java Inheritence </h1> */}
              <ul className='flex space-x-20'>
                <h1 className='text-[#ffffffa9]'>Total Questions: <span className='text-cyan-300'>309</span></h1>
                <h1 className='text-[#ffffffa9]'>Points: <span className='text-cyan-300'>120</span></h1>
                <button onClick={() => setIsOpen((prev) => !prev)} className='cursor-pointer bg-gray-400/20 p-2 rounded-lg'>
                   {!isOpen ? (
                      // <AiOutlineCaretDown />
                      <img className='w-5 h-5' src={down} alt="" srcset="" />
                    ):(
                      // <AiOutlineCaretUp />
                      <img className='w-5 h-5' src={up} alt="" srcset="" />
                    )
                    }
                </button>
              </ul>
                {/* <h1 className='text-cyan-300'>Total Questions: 309</h1>
                <h1 className='text-cyan-300'>Points:120</h1>
                <button onClick={() => setIsOpen((prev) => !prev)} className='cursor-pointer bg-gray-400/20 p-2 rounded-lg'>
                   {!isOpen ? (
                      // <AiOutlineCaretDown />
                      <img className='w-5 h-5' src={down} alt="" srcset="" />
                    ):(
                      // <AiOutlineCaretUp />
                      <img className='w-5 h-5' src={up} alt="" srcset="" />
                    )
                    }
                </button> */}
            </div>
            {isOpen && (
              <div className='bg-[#253447] h-auto rounded-xl shadow-md'>
                  {list.map((item, i) => (
                      <div className='p-8 items-center flex justify-between '>
                        <ul className='flex space-x-24'>
                          <h1 className='text-cyan-300'>{item.s_no}</h1>
                          <h1 className='text-white'>{item.ques}</h1>
                        </ul>
                        {/* <h1 className='text-cyan-300'>{item.s_no}</h1>
                        <h1 className='text-white'>{item.ques}</h1> */}
                        <ul className='flex space-x-24'>
                          <h1 className='text-[#ffffffa9]'>{item.mark} <span className='text-cyan-300'>2</span> </h1>
                          <input className='h-[20px] w-[20px] ' type="checkbox" name="" id="" />
                        </ul>
                        {/* <h1 className='text-cyan-300'>{item.mark}</h1>
                        <input className='h-[20px] w-[20px] ' type="checkbox" name="" id="" /> */}
                      </div>
                  ))} 
              </div>
            )}
           
          </div>
        </div>
      </section>
    );
}
