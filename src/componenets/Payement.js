import React from 'react'
import user from '../assets/user.jpg'

export default function Payement() {
  return (
    <div className='bg-[#363844] h-screen content-center'>
      <div className="max-w-[1040px] mx-auto  min-h-screen">
        <div className='flex justify-center  text-white'>
            {/* Left Side */}
            <div className='bg-black text-white p-5 w-full'>
                <div className='flex flex-col space-y-5'>
                    <div className='flex space-x-4 '>
                        <img className='w-8 h-8 rounded-full' src={user} alt="" />
                        <h1 className='text-center'>Metafy</h1>
                    </div>
                    <div className='flex space-x-3'>
                        <h1>1</h1>
                        <h1>Gift Card Details</h1>
                        <h1>2</h1>
                        <h1>Payment</h1>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex space-x-5'>
                            <img className='w-10 h-10 rounded' src={user} alt="" />
                            <div>
                                <h1>Metafy Gift Card</h1>
                                <h1>$20000</h1>
                            </div>
                        </div>
                        <button className='bg-gray-50/10 p-3 text-lg font-semibold'>Change Details</button>
                    </div>
                </div>
                <hr />
            </div>
            {/* Right Side */}
            <div className='bg-[#15141a] text-white p-8 w-[40rem] flex flex-col space-y-5'>
                <div className='flex space-x-4'>
                    <div className='bg-gray-50/10 p-1 rounded-full'><img className='w-12 h-12 rounded-full' src={user} alt="" /></div>
                    <div>
                        <h1>Metalfy</h1>
                        <h1>Gift Card Payment</h1>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <h1>Subtotal</h1>
                        <h1>$20000</h1>
                    </div>
                    <div className='flex justify-between'>
                        <h1>Metlify Credits</h1>
                        <h1>$15.00</h1>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col space-y-3'>
                    <div className='flex justify-around'>
                        <h1>Total Amount</h1>
                        <h1>$185.00 USD</h1>
                    </div>
                    <button className='bg-[#f2da93] p-3 text-center text-black font-bold text-lg'>Make Payement</button>
                </div>
            </div>
        </div>
      </div>  
      
    </div>
  )
}
