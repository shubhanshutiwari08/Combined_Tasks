import React from "react";
import user from "../assets/user.jpg";
// import { MdAdd} from "react-icons/md";
// import { BsFillBriefcaseFill } from "react-icons/bs";
// import { SiSimpleanalytics } from "react-icons/si";
// import { FaRegEye } from "react-icons/fa";
// import ocean from "../assets/digocean.jpeg";

export default function Resume() {
  return (
    <div className="bg-[#eee9fd] h-full">
      <div className="max-w-[1200px] mx-auto  min-h-screen">
        <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-1 sm:grid-cols-1">
          {/* Left */}
          <div className="bg-white shadow-md rounded-xl col-span-2 h-auto  text-black space-y-5 p-5">
            <div className="flex flex-col space-y-5">
              <div className="flex items-center space-x-2">
                <img className="w-14 h-14 rounded-full" src={user} alt="" />
                <div>
                  <h1 className="text-sm text-gray-400">Alex Hector</h1>
                  <h1 className="text-xl ">UI Designer</h1>
                  <h1 className="text-xs text-gray-400">Bokaro, Jharkhand</h1>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="flex space-x-2 w-52  ">
                  <h1 className="bg-gray-300/50 p-1  text-center  w-full shadow-sm text-sm  rounded-lg">
                    C++
                  </h1>
                  <h1 className="bg-gray-300/50 p-1 text-center  w-full shadow-sm text-sm  rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="bg-gray-300/50 p-1  text-center  w-full shadow-sm text-sm  rounded-lg">
                    GPSS
                  </h1>
                </div>
                <button className="p-1 outline outline-offset-2 outline-yellow-500 text-yellow-300 rounded-2xl">
                  Pending
                </button>
              </div>
            </div>
          </div>
          {/* Left Ends */}
          {/* Right */}
          {/* 1st */}
          
            {/*Button  */}
            <div className="bg-white shadow-md p-4  flex rounded-xl h-16 w-80  ">
                <button className="bg-[#6b4adf] w-full  text-white text-center p-1 rounded-xl">Open</button>
                <button className=" w-full   text-center p-1 rounded-xl">Close</button>
            </div>
            
            {/*Button ends  */}
  
          {/* 1st ends */}
          {/* 2nd */}
          {/* <div className="bg-white shadow-xl col-start-2 xl:col-span-3  p-2 flex flex-col space-y-5 rounded-xl sm:col-span-1"> 
                    
          </div> */}
          {/* 2nd ends */}
          {/* 3rd */}
          {/* <div className="bg-white shadow-xl xl:col-span-3  p-2 flex flex-col space-y-5 rounded-xl sm:col-span-1"> 
                    
          </div> */}
          {/* 3rd ends */}
          {/* Right Ends */}
        </div>
      </div>
    </div>
  );
}
