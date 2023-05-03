import React from 'react'
import user from '../assets/user.jpg'

export default function Chart() {
  return (
    <div className='bg-blue-100 h-screen'>
      <div className="max-w-[1440px] mx-auto min-h-screen">
        <div className='grid grid-cols-2'>
            <div>
                <div>
                    <img className='w-12 h-12 rounded-full' src={user} alt="userimg" />
                </div>
                
            </div>
            <div>01</div>
        </div>
      </div>
    </div>
  )
}
