import React, {useState} from "react";
import user from "../assets/user.jpg";
import ms from "../assets/ms.png";
import yt from "../assets/yt.png";
import ig from "../assets/ig.jpeg";
import google from '../assets/google.png'

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function Resumefinal() {
  const[isOpen,setIsOpen] = useState(false)
  return (
    <div className="bg-[#eee9fd] h-full">
      <div className="max-w-[1200px] mx-auto  min-h-screen">
        <div class="grid xl:grid-cols-3 gap-4  md:grid-cols-1 sm:grid-cols-1">
          {/* Profile option */}
          <div className="flex flex-col space-y-5">
            {/* 1 */}
            <div className="bg-white shadow-lg p-2 space-y-5 border-[10px] border-white border-l-[#6b4adf] border-r-[#6b4adf]">
              <div className="flex space-x-4 items-center">
                <img className="w-16 h-16 rounded-full" src={user} alt="" />
                <div>
                  <h1 className="text-sm text-gray-400">Alex Hector</h1>
                  <h1 className="text-xl">UI Designer</h1>
                  <h1 className="text-xs text-gray-400">Bokhara, Jharkhad</h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-5">
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500 text-center rounded-lg">
                    C++
                  </h1>
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500 text-center rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500  text-center rounded-lg">
                    Gpss
                  </h1>
                </div>
                <button className="outline outline-offset-1 outline-yellow-300 p-1 rounded-xl text-yellow-300">
                  Pending
                </button>
              </div>
            </div>
            {/* 2 */}
            <div className="bg-white shadow-lg p-2 space-y-5 border-[10px] border-white border-l-[#6b4adf] border-r-[#6b4adf]">
              <div className="flex space-x-4 items-center">
                <img className="w-16 h-16 rounded-full" src={user} alt="" />
                <div>
                  <h1 className="text-sm text-gray-400">Alex Hector</h1>
                  <h1 className="text-xl">UI Designer</h1>
                  <h1 className="text-xs text-gray-400">Bokhara, Jharkhad</h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-5">
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500  text-center rounded-lg">
                    C++
                  </h1>
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500  text-center rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500  text-center rounded-lg">
                    Gpss
                  </h1>
                </div>
                <button className="outline outline-offset-1 outline-yellow-300 p-1 rounded-xl text-yellow-300">
                  Pending
                </button>
              </div>
            </div>
            {/* 3 */}
            <div className="bg-white shadow-lg p-2 space-y-5 border-[10px] border-white border-l-[#6b4adf] border-r-[#6b4adf]">
              <div className="flex space-x-4 items-center">
                <img className="w-16 h-16 rounded-full" src={user} alt="" />
                <div>
                  <h1 className="text-sm text-gray-400">Alex Hector</h1>
                  <h1 className="text-xl">UI Designer</h1>
                  <h1 className="text-xs text-gray-400">Bokhara, Jharkhad</h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-5">
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500  text-center rounded-lg">
                    C++
                  </h1>
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500  text-center rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500  text-center rounded-lg">
                    Gpss
                  </h1>
                </div>
                <button className="outline outline-offset-1 outline-yellow-300 p-1 rounded-xl text-yellow-300">
                  Pending
                </button>
              </div>
            </div>
            {/* 4 */}
            <div className="bg-white shadow-lg p-2 space-y-5 border-[10px] border-white border-l-[#6b4adf] border-r-[#6b4adf]">
              <div className="flex space-x-4 items-center">
                <img className="w-16 h-16 rounded-full" src={user} alt="" />
                <div>
                  <h1 className="text-sm text-gray-400">Alex Hector</h1>
                  <h1 className="text-xl">UI Designer</h1>
                  <h1 className="text-xs text-gray-400">Bokhara, Jharkhad</h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-5">
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500  text-center rounded-lg">
                    C++
                  </h1>
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500  text-center rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="p-1 bg-[#eee9fd] text-indigo-500  text-center rounded-lg">
                    Gpss
                  </h1>
                </div>
                <button className="outline outline-offset-1 outline-yellow-300 p-1 rounded-xl text-yellow-300">
                  Pending
                </button>
              </div>
            </div>
            {/* 4 ends */}
          </div>
          {/* Profile option Ends */}
          {/* New code */}

          <div className="xl:col-start-2 col-span-2 ">
            <div class="grid xl:grid-cols-3 gap-4 p-1">
              {/* profile resume button */}
              <div class="bg-white shadow-md flex justify-between p-2 rounded-xl col-start-1  ">
                <button className="bg-[#6b4adf] w-full  text-white text-center p-1 rounded-xl">
                  Profile
                </button>
                <button className=" w-full   text-center p-1 rounded-xl">
                  Resume
                </button>
              </div>
              {/* profile reume button ends */}

              {/* profile desc */}
              <div class="bg-white shadow-md p-3 rounded-xl col-start-1 space-y-5  ">
                <div className="flex justify-between">
                  <img className="w-8 h-8" src={yt} alt="" />
                  <img className="w-8 h-8" src={ig} alt="" />
                </div>
                <div className="flex flex-col  items-center justify-center">
                  <img className="w-28 h-28 shadow-md rounded-full" src={user} alt="" />
                  <h1 className="text-xl font-semibold">Dian Copper</h1>
                  <h1 className="text-sm text-gray-400">diancopper@gmail.com</h1>
                </div>
                <div className="flex justify-center items-center">
                  <button className="outline text-indigo-900 outline-offset-1 outline-indigo-950 w-full rounded-xl p-1">
                    Send Message
                  </button>
                </div>
                <div className="flex justify-between space-x-2">
                  <select
                    id="countries"
                    class="border  border-gray-300 rounded-full text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  p-1  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected className="text-yellow-500">
                      Pending
                    </option>
                    <option value="US" className="text-green-500">
                      Approved
                    </option>
                    <option value="CA" className="text-red-500">
                      Dismiss
                    </option>
                  </select>
                  <button className="bg-red-500 p-1 rounded-full w-full text-white">
                    Never apply
                  </button>
                </div>
              </div>
              {/* profile desc ends */}

              {/* Profile Details */}
              <div className="bg-white shadow-md xl:col-start-2 col-span-2 rounded-xl p-3 ">
                <div className="flex flex-col space-y-3">
                  <div className="flex justify-between">
                    <h1>Gender</h1>
                    <h1>Birthday</h1>
                    <h1>Phone</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-sm text-gray-500">Female</h1>
                    <h1 className="text-sm text-gray-500">Feb 24th 1997</h1>
                    <h1 className="text-sm text-gray-500">(232) 532-0180</h1>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <h1>City / States</h1>
                    <h1>Skills</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-sm text-gray-500">Chicago , Uttar pradesh</h1>
                    <h1 className="text-sm text-gray-500">Adobe Xd, Figma</h1>
                  </div>
                  <hr />
                  <div className="flex flex-col space-y-2">
                    <h1>Title</h1>
                    <p className="border p-2 rounded-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste tenetur perferendis magni illum excepturi in earum
                      deserunt quo ipsa adipisci?
                    </p>
                  </div>
                </div>
              </div>
              {/* Profile Details ends */}

              {/* Experience */}
              <div className=" col-start-1 col-span-3 p-2 border-[6px] border-white rounded-xl">
                <h1>Experience</h1>
                <ol class="relative border-l border-gray-200 dark:border-gray-700">

                  <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="bg-white shadow-md flex justify-around p-2 items-center rounded-xl ">
                      <div className="flex space-x-2">
                        <img className="w-12 h-12" src={ms} alt="" />
                        <div>
                          <h1 className="text-indigo-500">UX Designer</h1>
                          <h1 className="text-gray-400 text-sm">Microsoft Delhi</h1>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-indigo-500">UX Designer at Microsoft</h1>
                        <h1 className="text-gray-400 text-sm">Dec 2021 - Oct- 2022</h1>
                      </div>
                      
                      <button onClick={() => setIsOpen((prev) => !prev)} className='cursor-pointer'>
                   {!isOpen ? (
                      <FaAngleDown />
                    ):(
                      <FaAngleUp />
                    )
                    }
                </button>
                </div>
                <div>
                {isOpen && (
              <div className='bg-white h-auto p-3 rounded-lg  shadow-md flex flex-col'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda earum aliquid labore saepe, rerum unde ad placeat pariatur at maiores.<apan>See More...</apan>
                  </p>
              </div>
            )}
                </div>
    
                    
                  </li>

                  <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="bg-white shadow-md flex justify-around p-2 items-center rounded-xl ">
                    <div className="flex space-x-2">
                        <img className="w-12 h-12" src={google} alt="" />
                        <div>
                          <h1 className="text-indigo-500">UX Designer</h1>
                          <h1 className="text-gray-400 text-sm">Google, Noida</h1>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-indigo-500">UX Designer at Google</h1>
                        <h1 className="text-gray-400 text-sm">Dec 2021 - Oct- 2022</h1>
                      </div>
                      
                      <button onClick={() => setIsOpen((prev) => !prev)} className='cursor-pointer'>
                   {!isOpen ? (
                      <FaAngleDown />
                    ):(
                      <FaAngleUp />
                    )
                    }
                </button>
                </div>
                <div>
                {/* {isOpen && (
              <div className='bg-white h-auto p-3 rounded-lg  shadow-md flex flex-col'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda earum aliquid labore saepe, rerum unde ad placeat pariatur at maiores.<apan>See More...</apan>
                  </p>
              </div>
            )} */}
                </div>
    
                    
                  </li>

                  <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="bg-white shadow-md flex justify-around p-2 items-center rounded-xl ">
                    <div className="flex space-x-2">
                        <img className="w-12 h-12" src={yt} alt="" />
                        <div>
                          <h1 className="text-indigo-500">UX Designer</h1>
                          <h1 className="text-gray-400 text-sm">Youtube India</h1>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-indigo-500">UX Designer at Youtube</h1>
                        <h1 className="text-gray-400 text-sm">Dec 2021 - Oct- 2022</h1>
                      </div>
                      
                      <button onClick={() => setIsOpen((prev) => !prev)} className='cursor-pointer'>
                   {!isOpen ? (
                      <FaAngleDown />
                    ):(
                      <FaAngleUp />
                    )
                    }
                </button>
                </div>
                <div>
                {/* {isOpen && (
              <div className='bg-white h-auto p-3 rounded-lg  shadow-md flex flex-col'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda earum aliquid labore saepe, rerum unde ad placeat pariatur at maiores.<apan>See More...</apan>
                  </p>
              </div>
            )} */}
                </div>
    
                    
                  </li>


                  <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="bg-white shadow-md flex justify-around p-2 items-center rounded-xl ">
                    <div className="flex space-x-2">
                        <img className="w-12 h-12" src={ms} alt="" />
                        <div>
                          <h1 className="text-indigo-500">UX Designer</h1>
                          <h1 className="text-gray-400 text-sm">Microsoft Delhi</h1>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-indigo-500">UX Designer at Microsoft</h1>
                        <h1 className="text-gray-400 text-sm">Dec 2021 - Oct- 2022</h1>
                      </div>
                      
                      <button onClick={() => setIsOpen((prev) => !prev)} className='cursor-pointer'>
                   {!isOpen ? (
                      <FaAngleDown />
                    ):(
                      <FaAngleUp />
                    )
                    }
                </button>
                </div>
                <div>
                {/* {isOpen && (
              <div className='bg-white h-auto p-3 rounded-lg  shadow-md flex flex-col'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda earum aliquid labore saepe, rerum unde ad placeat pariatur at maiores.<apan>See More...</apan>
                  </p>
              </div>
            )} */}
                </div>
    
                    
                  </li>


                </ol>
              </div>
              {/* Experience ends */}

              {/* Education */}
              <div className=" col-start-1 col-span-3 p-2 border-[6px] border-white rounded-xl">
                <h1>Education</h1>
                <ol class="relative border-l border-gray-200 dark:border-gray-700">
                  <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="bg-white shadow-md flex justify-around p-2 items-center rounded-2xl ">
                      <div className="flex space-x-2">
                        <img className="w-12 h-12" src={ms} alt="" />
                        <div>
                          <h1 className="text-indigo-500">12th</h1>
                          <h1 className="text-gray-400 text-sm">Lord Martin Academy </h1>
                        </div>
                      </div>
                      <div>
                        {/* <h1>UX Designer at Microsoft</h1> */}
                        <h1 className="text-indigo-500">Mar 2021 - Mar- 2022</h1>
                      </div>
                      <MdEdit />
                    </div>
                  </li>

                  <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="bg-white shadow-md flex justify-around p-2 items-center rounded-2xl ">
                    <div className="flex space-x-2">
                        <img className="w-12 h-12" src={google} alt="" />
                        <div>
                          <h1 className="text-indigo-500">10th</h1>
                          <h1 className="text-gray-400 text-sm">Lord Martin Academy </h1>
                        </div>
                      </div>
                      <div>
                        {/* <h1>UX Designer at Microsoft</h1> */}
                        <h1 className="text-indigo-500">Mar 2019 - Mar- 2020</h1>
                      </div>
                      <MdEdit />
                    </div>
                  </li>

                                  
                
                  
                </ol>
              </div>
              {/* Education ends */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
