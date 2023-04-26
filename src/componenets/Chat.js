import React from 'react'
import user from '../assets/user.jpg'

export default function Chat() {
  return (
    <div className='bg-white min-h-screen'>
      <div className='bg-[#6b4adf] h-20 drop-shadow-xl '>
        <div className='flex justify-between p-5 mx-10'>
            <h1 className='text-2xl  font-bold text-white'>platform</h1>
            {/* <input className='bg-transparent border rounded-full w-[800px] text-white' type="search" name="" id="" placeholder='Search for creators,Inspiration and Projects' /> */}
            <p className='bg-transparent border rounded-full w-[800px] text-white flex justify-start'>
               <p className='p-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg></p>
                <input className='bg-transparent p-2 w-[800px] rounded-full  text-white' type="search" name="" id="" placeholder='Search for creators,Inspiration and Projects'  />
            </p>
            <ul className='flex space-x-10'>
              <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
              </button>
              <button className='w-10 h-10 border rounded-full'><img className='rounded-full' src={user} alt="" /></button>
            </ul>
        </div>
        <div className='flex'>
          <div className='p-16'>
            {/* Chat */}
            <div className='bg-gradient-to-r from-[#E100FF] to-[#7F00FF] w-96 h-20 p-4 items-center rounded-lg flex justify-between'>
              <h1 className='text-2xl font-bold text-white'>Chats</h1>
              <h1 className='bg-gray-800/10 rounded-full cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                  </svg>
              </h1>
            </div>

            {/* Story Section */}
            <div className='bg-white drop-shadow-xl mt-2 w-96 h-[120px] p-4  rounded-lg flex justify-center space-x-5'>
              <div className='rounded-full w-16 h-16 items-center'>
                <p className='border rounded-full'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-15 h-15 text-purple-500">
                  <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg></p>

                <h1 className='text-center'>My Story</h1>
              </div>
              <div className='rounded-full w-16 h-16 items-center'>
                <img  className='w-16 h-16 rounded-full' src={user} alt="" />
                <h1 className='text-center'>My Story</h1>
              </div>
              <div className='rounded-full w-16 h-16 items-center'>
                <img  className='w-16 h-16 rounded-full' src={user} alt="" />
                <h1 className='text-center'>My Story</h1>
              </div>
              <div className='rounded-full w-16 h-16 items-center'>
                <img  className='w-16 h-16 rounded-full' src={user} alt="" />
                <h1 className='text-center'>My Story</h1>
              </div>              
            </div>

            {/* Chat Section */}
            <div className='bg-white drop-shadow-xl mt-2 w-96  p-3  rounded-lg space-y-3'>
              <div className='flex p-1'>
                <img className='w-16 h-16 rounded-full' src={user} alt="" />
                <div className='p-1'>
                  <h1 className='font-bold text-lg'>Derik Liam</h1>
                  <div className='flex space-x-2'>
                    <h1 className='text-sm text-[#00000084]'>its a long establishment fact...</h1>
                    <p className='bg-purple-500 text-white rounded-full w-6 h-6 text-center text-sm '>1</p>
                  </div>
                </div>
                <p className='text-xs text-[#000000a2]'>6:23 PM</p>
              </div>
              <hr />
              <div className='flex p-1'>
                <img className='w-16 h-16 rounded-full' src={user} alt="" />
                <div className='p-1'>
                  <h1 className='font-bold text-lg'>Derik Liam</h1>
                  <div className='flex space-x-2'>
                    <h1 className='text-sm text-[#00000084]'>its a long establishment fact...</h1>
                    <p className='bg-purple-500 text-white rounded-full w-6 h-6 text-center text-sm '>1</p>
                  </div>
                </div>
                <p className='text-xs text-[#000000a2]'>6:23 PM</p>
              </div>
              <hr />
              <div className='flex p-1'>
                <img className='w-16 h-16 rounded-full' src={user} alt="" />
                <div className='p-1'>
                  <h1 className='font-bold text-lg'>Derik Liam</h1>
                  <div className='flex space-x-2'>
                    <h1 className='text-sm text-[#00000084]'>its a long establishment fact...</h1>
                    <p className='bg-purple-500 text-white rounded-full w-6 h-6 text-center text-sm '>1</p>
                  </div>
                </div>
                <p className='text-xs text-[#000000a2]'>6:23 PM</p>
              </div>            
            </div>
          </div>
          <div className='flex space-x-5'>
            <div className='w-[500px] h-[500px] bg-white drop-shadow-lg mt-16 rounded-lg'>
              <div className='flex'>
                <img className='w-16 h-16 rounded-full' src={user} alt="" />
                <div className='flex  justify-between'>
                  <div className='mx-2'>
                    <h1>Mark Louis</h1>
                    <h1>Online</h1>
                  </div>
                  <div className='flex space-x-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                        </svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
                        <path fillRule="evenodd" d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z" clipRule="evenodd" />
                        </svg>  
                  </div>
                </div>

              </div>
            </div>
            <div className='w-[400px] h-[500px] bg-white drop-shadow-lg mt-16 rounded-lg'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
