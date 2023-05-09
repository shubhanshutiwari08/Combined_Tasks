import "./Chat.css";
import React from "react";

import user from "../assets/user.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { MdOutlineSettings, MdAdd } from "react-icons/md";
import { AiOutlineSmile, AiOutlineLink } from "react-icons/ai";
import { BsMic } from "react-icons/bs";

export default function Chatupdate() {
  return (
    <section className="bg-white ">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid xl:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col space-y-5 md:col-span-1 sm:col-span-2">
            {/* Chat */}
            <div className="bg-gradient-to-r from-[#E100FF] to-[#7F00FF]  p-4 items-center rounded-xl shadow-lg flex justify-between">
              <h1 className="text-2xl font-bold text-white">Chats</h1>
              <h1 className="bg-gray-800/10 rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-white font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </h1>
            </div>
            {/* Story */}
            <div className="bg-white drop-shadow-xl shadow-lg mt-2  h-[120px] p-4  rounded-xl flex justify-center space-x-5">
              {/* <div className="rounded-full w-14 h-14 items-center justify-center">
                <p className="border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-15 h-15 text-purple-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>

                <h1 className="text-center text-xs">My Story</h1>
              </div>
              <div className="rounded-full w-16 h-16 items-center justify-center">
                <img className="w-12 h-12 rounded-full" src={user} alt="" />
                <h1 className="text-center text-xs">My Story</h1>
              </div>
              <div className="rounded-full w-16 h-16 items-center justify-center">
                <img className="w-12 h-12 rounded-full" src={user} alt="" />
                <h1 className="text-center text-xs">My Story</h1>
              </div>
              <div className="rounded-full w-16 h-16 items-center justify-center">
                <img className="w-12 h-12 rounded-full" src={user} alt="" />
                <h1 className="text-center text-xs">My Story</h1>
              </div> */}

              {/* New */}
              <div class="h-full w-full flex items-center justify-between space-x-2 py-5 overflow-x-auto overflow-y-clip no-scrollbar smm:scrollbar">
                {/* <!-- Story item 1 --> */}
                <div class="flex flex-col items-center justify-center space-y-2 cursor-pointer min-w-[23%]">
                  {/* <!-- Story Image --> */}
                  <div class="h-14 w-14 flex items-center justify-center rounded-full border border-solid border-gray-500 hover:bg-gray-100 cursor-pointer">
                    {/* <AddOutline color={"#525252"} height="30px" width="30px" /> */}
                    <MdAdd class="text-[1.7rem] text-gray-600 cursor-pointer" />
                  </div>
                  {/* <!-- Story text --> */}
                  <p class="text-xs font-bold text-gray-600">My Story</p>
                </div>

                {/* <!-- Story item 2 --> */}
                <div class="flex flex-col items-center justify-center space-y-2 cursor-pointer min-w-[23%]">
                  {/* <!-- Story Image --> */}
                  <div class="h-14 w-14">
                    <img className="rounded-full" src={user} alt="Anisha" />
                  </div>
                  {/* <!-- Story text --> */}
                  <p class="text-xs font-bold text-gray-600">My Story</p>
                </div>

                {/* <!-- Story item 3 --> */}
                <div class="flex flex-col items-center justify-center space-y-2 cursor-pointer min-w-[23%]">
                  {/* <!-- Story Image --> */}
                  <div class="h-14 w-14">
                    <img className="rounded-full" src={user} alt="Shanai" />
                  </div>
                  {/* <!-- Story text --> */}
                  <p class="text-xs font-bold text-gray-600">My Story</p>
                </div>

                {/* <!-- Story item 4 --> */}
                <div class="flex flex-col items-center justify-center space-y-2 cursor-pointer min-w-[23%]">
                  {/* <!-- Story Image --> */}
                  <div class="h-14 w-14">
                    <img className="rounded-full" src={user} alt="Ali" />
                  </div>
                  {/* <!-- Story text --> */}
                  <p class="text-xs font-bold text-gray-600">My Story</p>
                </div>
                {/* <!-- Story item 5 --> */}
                <div class="flex flex-col items-center justify-center space-y-2 cursor-pointer min-w-[23%]">
                  {/* <!-- Story Image --> */}
                  <div class="h-14 w-14">
                    <img className="rounded-full" src={user} alt="Ali" />
                  </div>
                  {/* <!-- Story text --> */}
                  <p class="text-xs font-bold text-gray-600">My Story</p>
                </div>
                {/* <!-- Story item 6 --> */}
                <div class="flex flex-col items-center justify-center space-y-2 cursor-pointer min-w-[23%]">
                  {/* <!-- Story Image --> */}
                  <div class="h-14 w-14">
                    <img className="rounded-full" src={user} alt="anisha" />
                  </div>
                  {/* <!-- Story text --> */}
                  <p class="text-xs font-bold text-gray-600">My Story</p>
                </div>
                {/* <!-- Story item 7 --> */}
                <div class="flex flex-col items-center justify-center space-y-2 cursor-pointer min-w-[23%]">
                  {/* <!-- Story Image --> */}
                  <div class="h-14 w-14">
                    <img className="rounded-full" src={user} alt="shanai" />
                  </div>
                  {/* <!-- Story text --> */}
                  <p class="text-xs font-bold text-gray-600">My Story</p>
                </div>
                {/* <!-- Story item 8 --> */}
                <div class="flex flex-col items-center justify-center space-y-2 cursor-pointer min-w-[23%]">
                  {/* <!-- Story Image --> */}
                  <div class="h-14 w-14">
                    <img className="rounded-full" src={user} alt="anisha" />
                  </div>
                  {/* <!-- Story text --> */}
                  <p class="text-xs font-bold text-gray-600">My Story</p>
                </div>
              </div>
            </div>
            {/* Contacts */}
            <div className="bg-white drop-shadow-lg shadow-lg mt-2   p-3  rounded-2xl space-y-3">
              <div className="flex p-2 items-center">
                <img className="w-14 h-14 rounded-full" src={user} alt="" />
                <div className="flex justify-between w-full">
                  <div className="p-1">
                    <h1 className="font-semibold text-lg">Derik Liam</h1>
                    <div className="flex justify-between ">
                      <h1 className="text-sm text-[#00000084]">
                        its a long  fact...
                      </h1>
                      <h1 className="text-center bg-gradient-to-l from-indigo-500 to-purple-500 text-white leading-[1.4rem] rounded-full w-[22px] h-[22px] text-xs font-medium">
                        1
                      </h1>
                    </div>
                  </div>
                  <p className="text-xs text-[#000000a2] ">6:23 PM</p>
                </div>
              </div>
              <hr />
              <div className="flex p-1 items-center">
                <img className="w-14 h-14 rounded-full" src={user} alt="" />
                <div className="flex justify-between w-full">
                  <div className="p-1">
                    <h1 className="font-semibold text-lg">Derik Liam</h1>
                    <div className="flex space-x-2 ">
                      <h1 className="text-sm text-[#00000084]">
                        its a long  fact...
                      </h1>
                      <span className="text-center bg-gradient-to-l from-indigo-500 to-purple-500 text-white leading-[1.4rem] rounded-full w-[22px] h-[22px] text-xs font-medium">
                        5
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#000000a2] ">6:23 PM</p>
                </div>
              </div>
              <hr />
              <div className="flex p-1 items-center w-full">
                <img className="w-14 h-14 rounded-full" src={user} alt="" />
                <div className="flex justify-between w-full">
                  <div className="p-1">
                    <h1 className="font-semibold text-lg">Derik Liam</h1>
                    <div className="flex space-x-2 ">
                      <h1 className="text-sm text-[#00000084]">
                        its a long  fact...
                      </h1>
                      <span className="text-center bg-gradient-to-l from-indigo-500 to-purple-500 text-white leading-[1.4rem] rounded-full w-[22px] h-[22px] text-xs font-medium">
                        1
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#000000a2] ">6:23 PM</p>
                </div>
            
                {/* <div className="p-1">
                  <h1 className="font-bold text-lg">Derik Liam</h1>
                  <div className="flex space-x-2 ">
                    <h1 className="text-sm text-[#00000084]">
                      its a long establishment fact...
                    </h1>
                    <span className="text-center bg-gradient-to-l from-indigo-500 to-purple-500 text-white leading-[1.4rem] rounded-full w-[22px] h-[22px] text-xs font-medium">
                      1
                    </span>
                  </div>
                </div> */}
                {/* <p className="text-xs text-[#000000a2] ">6:23 PM</p> */}
              </div>
            </div>
          </div>

          {/* Middle */}
          <div className="bg-white shadow-xl rounded-xl col-span-2  items-center">
            <div class="flex flex-col space-y-10 p-5">
              <div class="col-span-3 ">
                <div className="flex flex-col">
                  <div className="flex justify-between  ">
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-12 h-12 rounded-full"
                        src={user}
                        alt=""
                      />
                      <div>
                        <h1 className="text-lg font-bold">Mark Louis</h1>
                        <h1 className="text-xs text-blue-500 after:block after:absolute after:right-1/2 after:top-1 relative after:h-2 after:w-2 after:bg-green-600 after:rounded-full">Online</h1>
                      </div>
                    </div>
                    <div className="flex items-center space-x-5 ">
                      <FaPhoneAlt />
                      <FiVideo />
                      <MdOutlineSettings />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="col-span-3  ">
                <div class="messages flex-1 overflow-auto">
                  <div class="message mb-4 flex">
                    <div class="flex-1 px-2">
                      <div class="inline-block bg-[#eeeafb] rounded-full p-2 px-6 text-gray-700">
                        <span>Hii</span>
                      </div>
                      <div class="pl-4">
                        <small class="text-gray-500">15 April</small>
                      </div>
                    </div>
                  </div>
                  <div class="message mb-4 flex">
                    <div class="flex-1 px-2">
                      <div class="inline-block bg-[#eeeafb] rounded-full p-2 px-6 text-gray-700">
                        <span>Hello how are you?</span>
                      </div>
                      <div class="pl-4">
                        <small class="text-gray-500">15 April</small>
                      </div>
                    </div>
                  </div>
                  <div class="message me mb-4 flex text-right"></div>
                  <div class="message me mb-4 flex text-right">
                    <div class="flex-1 px-2">
                      <div class="inline-block bg-gradient-to-r from-[#E100FF] to-[#7F00FF] rounded-full p-2 px-6 text-white">
                        <span>I am fine what about you</span>
                      </div>
                      <div class="pr-4">
                        <small class="text-gray-500">15 April</small>
                      </div>
                    </div>
                  </div>
                  <div class="message mb-4 flex">
                    <div class="flex-1 px-2">
                      <div class="inline-block bg-[#eeeafb] rounded-full p-2 px-6 text-gray-700">
                        <span>I am also doing good whats going on?</span>
                      </div>
                      <div class="pl-4">
                        <small class="text-gray-500">15 April</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-3 bg-indigo-500 shadow-xl rounded-xl  items-center ">
                <div className="flex p-4 space-x-3 items-center">
                  <AiOutlineLink className="w-8 h-8 " style={{color:'white'}} />
                  <input
                    className="text-white bg-transparent w-full outline-none text-xl"
                    type="text"
                    name=""
                    placeholder="Write a Message"
                    id=""
                  />
                  <AiOutlineSmile className="w-8 h-8" style={{color:'white'}} />
                  <BsMic className="w-8 h-8" style={{color:'white'}}   />
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col space-y-5 justify-between lg:col-span-1 sm:col-span-3 md:col-span-2">
            <h1 className="text-2xl font-bold">Info Details</h1>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-48 h-48 rounded-full items-center shadow-2xl"
                src={user}
                alt=""
              />
              <h1 className="font-semibold text-xl">Mark Louis</h1>
              <h1 className="text-blue-400">Online</h1>
            </div>
            <div className="flex flex-col space-y-5">
              <h1 className="text-lg font-semibold">SETTINGS</h1>
              <div className="flex justify-between">
                <h1>Mute Notifications</h1>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#9358ea] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#9358ea]"></div>
                </label>
              </div>
              <div className="flex justify-between">
                <h1>Pinned</h1>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#9358ea] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#9358ea]"></div>
                </label>
              </div>
              <div className="flex justify-between">
                <h1>Call Video call</h1>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#9358ea] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#9358ea]"></div>
                </label>
              </div>
              <div className="flex w-full justify-between space-x-4">
                <button className="bg-[#fdf0ee] text-red-400 text-center p-2 w-full rounded-xl">
                  Report
                </button>
                <button className="bg-[#fdf0ee] text-red-400 text-center p-2 w-full rounded-xl">
                  Block
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
