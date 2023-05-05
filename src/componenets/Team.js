import React, {  useState, } from 'react'
import user from '../assets/user.jpg'

export default function Team() {

    const [buttonText, setButtonText] = useState('Follow');
    const [changeColor,setChangeColor] = useState(false)
    function handleClick() {
      setButtonText('Message');
      setChangeColor(!changeColor)
    }

  return (
    <div className='bg-[#1e2736] h-full'>
      <div className="max-w-[1240px] mx-auto  min-h-screen">
        <div className='flex space-x-5'>
            <a href='/' className='text-white text-xl font-semibold cursor-pointer'>Followers</a>
            <a href='/' className='text-cyan-500 text-xl  cursor-pointer hover:font-semibold'>Following</a>
        </div>
        <div className='grid xl:grid-cols-4 gap-5 my-2  md:grid-cols-3 sm:grid-cols-2  '>
            {/* 1 */}
            <div className='bg-[#333e50] flex flex-col justify-evenly p-3 items-center  shadow-lg rounded-2xl space-y-5 '>
                <img className='w-40 h-40 lg:w-56 lg:h-56 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full shadow-slate-900 shadow-lg' src={user} alt="" />
                <div className='flex flex-col justify-center'>
                    <h1 className='text-white lg:text-lg sm:text-xl '>Adam Miles</h1>
                    <h1 className='text-white lg:text-lg sm:text-xl '>Rank: <span className='text-cyan-500 text-lg'>1267</span> </h1>
                </div>
                <button className={` text-white text-xl font-semibold p-3 shadow-xl w-full rounded-md ${(changeColor=== true)?'bg-[#01ff73b9]': 'bg-[#01b5ff]'} `} onClick={handleClick}>{buttonText}</button>
            </div>

            {/* 2 */}
            <div className='bg-[#333e50] flex flex-col justify-evenly p-3 items-center  shadow-lg rounded-2xl space-y-5 '>
                <img className='w-40 h-40 lg:w-56 lg:h-56 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full shadow-slate-900 shadow-lg' src={user} alt="" />
                <div className='flex flex-col justify-center'>
                    <h1 className='text-white lg:text-lg sm:text-xl '>Adam Miles</h1>
                    <h1 className='text-white lg:text-lg sm:text-xl '>Rank: <span className='text-cyan-500 text-lg'>1267</span> </h1>
                </div>
                <button className={` text-white text-xl font-semibold p-3 shadow-xl w-full rounded-md ${(changeColor=== true)?'bg-[#01ff73b9]': 'bg-[#01b5ff]'} `} onClick={handleClick}>{buttonText}</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}
