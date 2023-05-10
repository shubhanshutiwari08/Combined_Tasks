import React from "react";
import { MdAdd, MdMenu } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";
import ocean from "../assets/digocean.jpeg";

export default function Job() {
  return (
    <div className="bg-[#eee9fd] h-full">
      <div className="max-w-[1200px] mx-auto  min-h-screen">
        <div className="grid xl:grid-cols-4 gap-10 md:grid-cols-1 sm:grid-cols-1">
          <div className="flex flex-col space-y-5">
            <div className="flex bg-[#6b4adf]  p-5 items-center justify-center rounded-full border-4 border-white space-x-2 shadow-lg ">
              <MdAdd
                className="text-white"
                style={{ width: "30px", height: "30px" }}
              />
              <h1 className="text-white font-semibold text-xl">
                Create a New job
              </h1>
            </div>
            <div className="bg-white rounded-3xl flex flex-col shadow-xl ">
              <div className="flex bg-[#6b4adf] text-white  rounded-t-3xl p-4 items-center space-x-3 ">
                <MdMenu />
                <h1>My Job list</h1>
              </div>
              <div className="flex p-4 items-center space-x-3 ">
                <BsFillBriefcaseFill />
                <h1>Discover Jobs</h1>
              </div>
              <div className="flex p-4 items-center space-x-3 ">
                <SiSimpleanalytics />
                <h1>Job analytics</h1>
              </div>
            </div>
            <div className="flex bg-white shadow-xl rounded-3xl  w-full  p-2">
              <button className="bg-[#6b4adf] w-full  text-white text-center p-1 rounded-xl">
                Open job
              </button>
              <button className=" w-full   text-center p-1 rounded-xl">
                Close job
              </button>
            </div>
          </div>
          <div className="bg-white shadow-xl xl:col-span-3  p-2 flex flex-col space-y-5 rounded-xl sm:col-span-1">
            {/* 1st */}
            <div className="bg-[#6b4adf] shadow-md rounded-xl flex flex-col space-y-5 text-white  border-[10px] border-[#6b4adf] border-l-white border-r-white border-leading-4">
              <div className="p-3 flex flex-col space-y-5">
                <div className="flex justify-between ">
                  <div className="flex text-white items-center space-x-5">
                    <img className=" w-16 h-16 rounded-md" src={ocean} alt="" />
                    <div>
                      <h1 className="text-md">Digital Ocean</h1>
                      <h1 className="text-xl ">Sr. Back-End Developer</h1>
                      <h1 className="text-sm">Bokara, Jharkhand</h1>
                    </div>
                  </div>
                  <div className="flex space-x-3 text-white items-center">
                    <FaRegEye />
                    <h1 className="text-sm">540</h1>
                    <h1 className="text-sm">
                      <span>35 </span>Applied
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-4 w-2/5 text-white">
                    <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                      C++
                    </h1>
                    <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                      Open 5g
                    </h1>
                    <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                      GPSS
                    </h1>
                  </div>
                  <div className=" items-center">
                    <h1 className="text-sm">4 Weeks Ago</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div className="bg-white shadow-md rounded-xl p-3 text-black space-y-5 border-[10px] border-white border-l-[#6b4adf] border-r-[#6b4adf]">
              <div className="flex justify-between ">
                <div className="flex  items-center space-x-5">
                  <img className=" w-16 h-16 rounded-md" src={ocean} alt="" />
                  <div>
                    <h1 className="text-md">Digital Ocean</h1>
                    <h1 className="text-xl ">Sr. Back-End Developer</h1>
                    <h1 className="text-sm">Bokara, Jharkhand</h1>
                  </div>
                </div>
                <div className="flex space-x-3 text-[#6b4adf]  items-center">
                  <FaRegEye />
                  <h1 className="text-sm">540</h1>
                  <h1 className="text-sm">
                    <span>35 </span>Applied
                  </h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-4  w-2/5 ">
                  <h1 className="bg-gray-300/50  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    C++
                  </h1>
                  <h1 className="bg-gray-300/50 text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="bg-gray-300/50  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    GPSS
                  </h1>
                </div>
                <div className=" text-[#6b4adf] items-center">
                  <h1 className="text-sm">4 Weeks Ago</h1>
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div className="bg-[#6b4adf] shadow-md rounded-xl p-3 flex flex-col space-y-5 text-white  border-[10px] border-[#6b4adf] border-l-white border-r-white ">
              <div className="flex justify-between ">
                <div className="flex text-white items-center space-x-5">
                  <img className=" w-16 h-16 rounded-md" src={ocean} alt="" />
                  <div>
                    <h1 className="text-md">Digital Ocean</h1>
                    <h1 className="text-xl ">Sr. Back-End Developer</h1>
                    <h1 className="text-sm">Bokara, Jharkhand</h1>
                  </div>
                </div>
                <div className="flex space-x-3 text-white items-center text-sm">
                  <FaRegEye />
                  <h1>540</h1>
                  <h1>
                    <span>35 </span>Applied
                  </h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-4 w-2/5 text-white">
                  <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    C++
                  </h1>
                  <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    GPSS
                  </h1>
                </div>
                <div className=" items-center">
                  <h1 className="text-sm">4 Weeks Ago</h1>
                </div>
              </div>
            </div>
            {/* 4th */}
            <div className="bg-white shadow-md rounded-xl p-3 text-black space-y-5 border-[10px] border-white border-l-[#6b4adf] border-r-[#6b4adf]">
              <div className="flex justify-between ">
                <div className="flex  items-center space-x-5">
                  <img className=" w-16 h-16 rounded-md" src={ocean} alt="" />
                  <div>
                    <h1 className="text-md">Digital Ocean</h1>
                    <h1 className="text-xl ">Sr. Back-End Developer</h1>
                    <h1 className="text-sm">Bokara, Jharkhand</h1>
                  </div>
                </div>
                <div className="flex space-x-3 text-[#6b4adf]  items-center text-sm">
                  <FaRegEye />
                  <h1>540</h1>
                  <h1>
                    <span>35 </span>Applied
                  </h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-4  w-2/5 ">
                  <h1 className="bg-gray-300/50  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    C++
                  </h1>
                  <h1 className="bg-gray-300/50 text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="bg-gray-300/50  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    GPSS
                  </h1>
                </div>
                <div className=" text-[#6b4adf] items-center">
                  <h1 className="text-sm">4 Weeks Ago</h1>
                </div>
              </div>
            </div>
            {/* 5th */}
            <div className="bg-[#6b4adf] shadow-md rounded-xl p-3 flex flex-col space-y-5 text-white border-[10px] border-[#6b4adf] border-l-white border-r-white ">
              <div className="flex justify-between ">
                <div className="flex text-white items-center space-x-5">
                  <img className=" w-16 h-16 rounded-md" src={ocean} alt="" />
                  <div>
                    <h1 className="text-md">Digital Ocean</h1>
                    <h1 className="text-xl ">Sr. Back-End Developer</h1>
                    <h1 className="text-sm">Bokara, Jharkhand</h1>
                  </div>
                </div>
                <div className="flex space-x-3 text-white items-center text-sm">
                  <FaRegEye />
                  <h1>540</h1>
                  <h1>
                    <span>35 </span>Applied
                  </h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-4 w-2/5 text-white">
                  <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    C++
                  </h1>
                  <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    GPSS
                  </h1>
                </div>
                <div className=" items-center">
                  <h1 className="text-sm">4 Weeks Ago</h1>
                </div>
              </div>
            </div>
            {/* 6th */}
            <div className="bg-white shadow-md rounded-xl p-3 text-black space-y-5 border-[10px] border-white border-l-[#6b4adf] border-r-[#6b4adf]">
              <div className="flex justify-between ">
                <div className="flex  items-center space-x-5">
                  <img className=" w-16 h-16 rounded-md" src={ocean} alt="" />
                  <div>
                    <h1 className="text-md">Digital Ocean</h1>
                    <h1 className="text-xl ">Sr. Back-End Developer</h1>
                    <h1 className="text-sm">Bokara, Jharkhand</h1>
                  </div>
                </div>
                <div className="flex space-x-3 text-[#6b4adf]  items-center text-sm">
                  <FaRegEye />
                  <h1>540</h1>
                  <h1>
                    <span>35 </span>Applied
                  </h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-4  w-2/5 ">
                  <h1 className="bg-gray-300/50  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    C++
                  </h1>
                  <h1 className="bg-gray-300/50 text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="bg-gray-300/50  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    GPSS
                  </h1>
                </div>
                <div className=" text-[#6b4adf] items-center">
                  <h1 className="text-sm">4 Weeks Ago</h1>
                </div>
              </div>
            </div>
            {/* 7th */}
            <div className="bg-[#6b4adf] shadow-md rounded-xl p-3 flex flex-col space-y-5 text-white  border-[8px] border-[#6b4adf] border-l-white border-r-white ">
              <div className="flex justify-between ">
                <div className="flex text-white items-center space-x-5">
                  <img className=" w-16 h-16 rounded-md" src={ocean} alt="" />
                  <div>
                    <h1 className="text-md">Digital Ocean</h1>
                    <h1 className="text-xl ">Sr. Back-End Developer</h1>
                    <h1 className="text-sm">Bokara, Jharkhand</h1>
                  </div>
                </div>
                <div className="flex space-x-3 text-white items-center text-sm">
                  <FaRegEye />
                  <h1>540</h1>
                  <h1>
                    <span>35 </span>Applied
                  </h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-4 w-2/5 text-white">
                  <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    C++
                  </h1>
                  <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="bg-[#beaaf486]  text-center p-1 w-full shadow-sm text-sm  rounded-lg">
                    GPSS
                  </h1>
                </div>
                <div className=" items-center">
                  <h1 className="text-sm">4 Weeks Ago</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
