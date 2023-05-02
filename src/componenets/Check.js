import React from 'react'

import UserInfo from './Userinfo';
import Ranking from './Ranking';
import MyQuestions from './Myquestion';
import cover from '../assets/fcover.png'

export default function Check() {
  return (
    <>
     <div className='bg-[#1e2736] '>
        <img src={cover} alt="banner" className='w-full' />
        <div className='max-w-[1220px] mx-auto text-white'>
                <div className='mx-5'>
                    <UserInfo />
                    <Ranking />
                    <MyQuestions />
                </div>
        </div>
    </div>
    </>
  )
}
