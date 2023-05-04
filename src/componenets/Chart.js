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
  MdInfo,
} from "react-icons/md";


// chart start
import {Bar} from 'react-chartjs-2';
import{
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
//chart ends

export default function Chart() {
  const data ={
    labels:['','','','','','','','','','','','','','',''],
    datasets:[
        {
            label:'Spent',
            data:[3,6,9,2,3,1,5,6,4,7,8,2,6,11],
            backgroundColor:'#6b4adf',
            borderRadius:50,
            width:1,
        },
        {
            label:'Referal',
            data:[3,3,2,5,3,2,6,10,2,7,1,5,6,7],
            backgroundColor:'#d2cae9',
            borderRadius:50,
        }

    ]
 }  
 const options ={
    
 }

  return (
    <>
      <div className="bg-blue-100 h-full">
        <div className="max-w-[1440px] mx-auto min-h-screen">
          <div class="flex space-x-5">
            <div class="basis-1/4  flex flex-col   space-x-4 ">
              <div className="flex flex-col space-y-16">
                <div className="flex bg-white shadow-lg rounded-2xl p-2 space-x-5 justify-center ">
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
                <div className="bg-[#6b4adf] shadow-lg rounded-full p-2 ">
                  <h1 className="text-center font-semibold text-white text-2xl">
                    Create post
                  </h1>
                </div>
              </div>
            </div>
            <div class=" bg-white shadow-md rounded-lg space-y-6   p-4  w-full">
              <div class="grid grid-cols-3 gap-4">
                <div className="bg-white shadow-lg rounded-lg p-4 col-span-2">
                  <div className="flex">
                      <div>
                          <h1 className="text-md font-semibold">Balance</h1>
                          <h2 className="text-sm">Daily Balance Overview</h2>
                      </div>
                  </div>
                  <Bar data = {data} options={{options}}></Bar>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between  space-y-2">
                  <div className="flex justify-between">
                    <h1 className="text-xl font-semibold">Cart</h1>
                    <MdInfo />
                  </div>
                  <div className="w-full flex justify-center ">
                    <div className="flex justify-center border-purple-700 border p-3 w-48 h-48 rounded-full ">
                      <div className="bg-white shadow-lg  flex flex-col justify-center  rounded-full w-40 h-40">
                        <h1 className="text-center text-purple-600 text-2xl">45</h1>
                        <h1 className="text-center text-purple-600 text-xl">Coins</h1>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex space-x-4">
                      <div className="bg-purple-500 w-5 h-5 rounded-full"></div>
                      <h1 >Selected Participants </h1>
                    </div>
                    <div className="flex space-x-4">
                      <div className="bg-yellow-500 w-5 h-5 rounded-full"></div>
                      <h1 >Rejected Participants </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div className="bg-white shadow-lg rounded-lg col-span-2 p-4">
                  <h1 className="text-xl font-semibold">Transactions</h1>
                  <table class="table-fixed w-full rounded-xl">
                    <thead className="bg-gray-50 shadow-xl border-b-2 border-gray-200">
                      <tr>
                        <th className="p-3 text-lg font-semibold tracking-wide text-left">
                          Date & Time
                        </th>
                        <th className="p-3 text-lg font-semibold tracking-wide text-left">
                          Username
                        </th>
                        <th className="p-3 text-lg font-semibold tracking-wide text-left">
                          Status
                        </th>
                        <th className="p-3 text-lg font-semibold tracking-wide text-left">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody >
                      <tr className="bg-white shadow-lg">
                        <td className="p-3 text-md text-gray-700">
                          17th Feb 2020 16:30
                        </td>
                        <td className="p-3 text-md text-gray-700 flex space-x-2  ">
                          <img
                            className="w-[1.9rem] h-[1.9rem] rounded-full"
                            src={user}
                            alt=""
                          />{" "}
                          <h1 className="text-lg text-gray-700">@alextyler</h1>
                        </td>
                        <td className="p-3 text-md text-gray-700">Referal</td>
                        <td className="p-3 text-md text-green-700">+1 Coins</td>
                      </tr>
                      <tr className="bg-gray-50 shadow-lg">
                        <td className="p-3 text-md text-gray-700">
                          17th Feb 2020 16:30
                        </td>
                        <td className="p-3 text-md text-gray-700 flex space-x-2  ">
                          <img
                            className="w-[1.9rem] h-[1.9rem] rounded-full"
                            src={user}
                            alt=""
                          />{" "}
                          <h1 className="text-lg text-gray-700">@alextyler</h1>
                        </td>
                        <td className="p-3 text-md text-gray-700">Referal</td>
                        <td className="p-3 text-md text-green-700">+1 Coins</td>
                      </tr>
                      <tr className="bg-white shadow-lg">
                        <td className="p-3 text-md text-gray-700">
                          17th Feb 2020 16:30
                        </td>
                        <td className="p-3 text-md text-gray-700 flex space-x-2  ">
                          <img
                            className="w-[1.9rem] h-[1.9rem] rounded-full"
                            src={user}
                            alt=""
                          />{" "}
                          <h1 className="text-lg text-gray-700">@alextyler</h1>
                        </td>
                        <td className="p-3 text-md text-gray-700">Referal</td>
                        <td className="p-3 text-md text-green-700">+1 Coins</td>
                      </tr>
                      <tr className="bg-white shadow-lg">
                        <td className="p-3 text-md text-gray-700">
                          17th Feb 2020 16:30
                        </td>
                        <td className="p-3 text-md text-gray-700 flex space-x-2  ">
                          <img
                            className="w-[1.9rem] h-[1.9rem] rounded-full"
                            src={user}
                            alt=""
                          />{" "}
                          <h1 className="text-lg text-gray-700">@alextyler</h1>
                        </td>
                        <td className="p-3 text-md text-gray-700">Referal</td>
                        <td className="p-3 text-md text-green-700">+1 Coins</td>
                      </tr>
                      <tr className="bg-white shadow-lg">
                        <td className="p-3 text-md text-gray-700">
                          17th Feb 2020 16:30
                        </td>
                        <td className="p-3 text-md text-gray-700 flex space-x-2  ">
                          <img
                            className="w-[1.9rem] h-[1.9rem] rounded-full"
                            src={user}
                            alt=""
                          />{" "}
                          <h1 className="text-lg text-gray-700">@alextyler</h1>
                        </td>
                        <td className="p-3 text-md text-gray-700">Referal</td>
                        <td className="p-3 text-md text-green-700">+1 Coins</td>
                      </tr>
                      <tr className="bg-white shadow-lg">
                        <td className="p-3 text-md text-gray-700">
                          17th Feb 2020 16:30
                        </td>
                        <td className="p-3 text-md text-gray-700 flex space-x-2  ">
                          <img
                            className="w-[1.9rem] h-[1.9rem] rounded-full"
                            src={user}
                            alt=""
                          />{" "}
                          <h1 className="text-lg text-gray-700">@alextyler</h1>
                        </td>
                        <td className="p-3 text-md text-gray-700">Referal</td>
                        <td className="p-3 text-md text-green-700">+1 Coins</td>
                      </tr>
                      <tr className="bg-white shadow-lg">
                        <td className="p-3 text-md text-gray-700">
                          17th Feb 2020 16:30
                        </td>
                        <td className="p-3 text-md text-gray-700 flex space-x-2  ">
                          <img
                            className="w-[1.9rem] h-[1.9rem] rounded-full"
                            src={user}
                            alt=""
                          />{" "}
                          <h1 className="text-lg text-gray-700">@alextyler</h1>
                        </td>
                        <td className="p-3 text-md text-gray-700">Referal</td>
                        <td className="p-3 text-md text-green-700">+1 Coins</td>
                      </tr>
                      
                      
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="bg-white shadow-lg rounded-xl p-4 space-y-5">
                    <h1>Referals</h1>
                    <div className="flex">
                      <input className="bg-white shadow-md rounded-l-full w-full p-3" type="search" name="" placeholder="URL..." id="" />
                      <input className="bg-[#6b4adf] rounded-r-full p-3 text-white font-bold" type="submit" value="Paste" />
                    </div>
                    <div className="flex w-full justify-center space-x-5">
                      <button className="bg-[#6b4adf] shadow-md text-white font-semibold p-3 rounded-full text-center">Checking</button>
                      <button className="bg-white shadow-md font-semibold p-3 rounded-full">Copy</button>
                    </div>
                  </div>
                  <div className="bg-white shadow-lg rounded-xl p-4 space-y-5">
                    <h1>Subscription</h1>
                    <div>
                      <div className="flex justify-center space-x-5">
                        <h1 className="text-md">Current plan</h1>
                        <h1 className="text-purple-400 text-xl">Plus</h1>
                      </div>
                      <div className="flex justify-center space-x-5">
                        <h1 className="text-md">Plan Expiry</h1>
                        <h1 className="text-purple-400 text-xl">29<sup>th Oct 2022</sup></h1>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-3xl text-purple-700 text-center">6 Days left</h1>
                      <h1 className="text-sm text-gray-600 text-right mr-24">Renew the plan</h1>
                    </div>
                    <div className=" flex justify-center w-full">
                      <button className="bg-[#6b4adf] p-3 justify-center text-white text-xl rounded-full">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex justify-between">
                <div className="bg-white shadow-lg rounded-lg h-60  w-64">
                  <h1>Balance</h1>
                </div>
                <div className="bg-white shadow-lg rounded-lg h-60  w-32 ">
                  <h1>Cart</h1>
                </div>
              </div> */}
              {/* <div className="flex"> */}
              {/* Table */}
              {/* <div className="bg-white shadow-lg rounded-lg p-4  w-96">
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
                </div> */}
              {/* <div className="bg-white shadow-lg rounded-lg h-60  w-32 ">
                  <h1>Referals</h1>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
