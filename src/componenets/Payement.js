import React from 'react'
import user from '../assets/user.jpg'

export default function Payement() {
  return (
    <div className='bg-[#363844] h-screen content-center'>
      <div className="max-w-[1040px] mx-auto  min-h-screen">
        <div className='flex justify-center  text-white'>
            <div className='bg-black text-white p-5 w-full'>one</div>
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
                    <div className='flex justify-around'>
                        <h1>Subtotal</h1>
                        <h1>$20000</h1>
                    </div>
                    <div className='flex justify-around'>
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
