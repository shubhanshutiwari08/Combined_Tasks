import React from "react";
import user from "../assets/user.jpg";
import { FaHome, FaRegBookmark } from "react-icons/fa";
import {
  MdOutlineExplore,
  MdOutlineNotificationsNone,
  MdMailOutline,
  MdOutlineAnalytics,
  MdOutlineColorLens,
  MdSettings,
} from "react-icons/md";
export default function Chart() {
  return (
    // <div className='bg-blue-100 h-screen'>
    //   <div className="max-w-[1440px] mx-auto min-h-screen">
    //     <div className='grid grid-cols-2'>
    //             <div className= ' bg-white shadow-md rounded-lg flex  p-2 space-x-4'>
    //                 <img className='w-10 h-10 rounded-full' src={user} alt="userimg" />
    //                 <div>
    //                   <h1 className='text-md'>John Watson</h1>
    //                   <h1 className='text-sm'>@johnwatson</h1>
    //                 </div>
    //             </div>
    //         <div className=' bg-white shadow-md rounded-lg flex h-auto'>01</div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="bg-blue-100 h-screen">
        <div className="max-w-[1440px] mx-auto min-h-screen">
          <div class="flex space-x-5">
            <div class="basis-1/4  flex flex-col   space-x-4 ">
              <div className="flex flex-col space-y-16">
                <div className="flex bg-white shadow-lg rounded-2xl p-2 justify-center ">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user}
                    alt="userimg"
                  />
                  <div>
                    <h1 className="text-md">John Watson</h1>
                    <h1 className="text-sm">@johnwatson</h1>
                  </div>
                </div>
                <div className=" bg-white shadow-lg rounded-2xl space-y-10 justify-center p-4">
                  <div className="flex space-x-6 justify-start">
                    <FaHome />
                    <h1>Home</h1>
                  </div>
                  <div className="flex space-x-6 justify-start ">
                    <MdOutlineExplore />
                    <h1>Explore</h1>
                  </div>
                  <div className="flex space-x-6 justify-start ">
                    <MdOutlineNotificationsNone />
                    <h1>Notifications</h1>
                  </div>
                  <div className="flex space-x-6 justify-start ">
                    <MdMailOutline />
                    <h1>Message</h1>
                  </div>
                  <div className="flex space-x-6 justify-start ">
                    <FaRegBookmark />
                    <h1>Bookamrks</h1>
                  </div>
                  <div className="flex space-x-6 justify-start ">
                    <MdOutlineAnalytics />
                    <h1>Connection</h1>
                  </div>
                  <div className="flex space-x-6 justify-start ">
                    <MdOutlineColorLens />
                    <h1>Themes</h1>
                  </div>
                  <div className="flex space-x-6 justify-start ">
                    <MdSettings />
                    <h1>Settings</h1>
                  </div>
                </div>
                <div className="bg-purple-500 shadow-lg rounded-full p-2 ">
                  <h1 className="text-center font-semibold text-white text-2xl">
                    Create post
                  </h1>
                </div>
              </div>
            </div>
            <div class=" bg-white shadow-md rounded-lg space-y-6   p-4  w-full">
              <div className="flex justify-between">
                <div className="bg-white shadow-lg rounded-lg h-60  w-64">
                  <h1>Balance</h1>
                </div>
                <div className="bg-white shadow-lg rounded-lg h-60  w-32 ">
                  <h1>Cart</h1>
                </div>
              </div>
              <div className="flex">
                {/* Table */}
                <div className="bg-white shadow-lg rounded-lg p-4  w-96">
                  <table class="table-fixed ">
                    <thead >
                      <tr className="space-x-5">
                        <th className="border-spacing-5-px">Date & Time</th>
                        <th className="border-spacing-5-px">Username</th>
                        <th className="border-spacing-5-px">Status</th>
                        <th className="border-spacing-10-px">Amount</th> 
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>17th Feb 2020 16:20</td>
                        <td className="flex space-x-2"><img className="w-8 h-8 rounded-full" src={user} alt="" />@alextyler</td>
                        <td>Referal</td>
                        <td>+1 coins</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div className="bg-white shadow-lg rounded-lg h-60  w-32 ">
                  <h1>Referals</h1>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
