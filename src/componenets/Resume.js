import React from 'react'
// import { MdAdd} from "react-icons/md";
// import { BsFillBriefcaseFill } from "react-icons/bs";
// import { SiSimpleanalytics } from "react-icons/si";
// import { FaRegEye } from "react-icons/fa";
// import ocean from "../assets/digocean.jpeg";

export default function Resume() {
  return (
    <div className="bg-[#eee9fd] h-full">
      <div className="max-w-[1200px] mx-auto  min-h-screen">
        <div className="grid xl:grid-cols-4 gap-10 md:grid-cols-1 sm:grid-cols-1">
          {/* Left */}
          <div className="bg-white shadow-md rounded-xl p-1 text-black space-y-5 border-[10px] border-white border-l-[#6b4adf] border-r-[#6b4adf]">
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
            </div>
          {/* Left Ends */}
          {/* Right */}
          {/* 1st */}
          <div className="bg-white shadow-xl xl:col-span-3  p-2 flex flex-col space-y-5 rounded-xl sm:col-span-1"> 
                    
          </div>
          {/* 1st ends */}
          {/* 2nd */}
          <div className="bg-white shadow-xl col-start-2 xl:col-span-3  p-2 flex flex-col space-y-5 rounded-xl sm:col-span-1"> 
                    
          </div>
          {/* 2nd ends */}
          {/* 3rd */}
          <div className="bg-white shadow-xl xl:col-span-3  p-2 flex flex-col space-y-5 rounded-xl sm:col-span-1"> 
                    
          </div>
          {/* 3rd ends */}
          {/* Right Ends */}
        </div>
      </div>
    </div>

  )
}
