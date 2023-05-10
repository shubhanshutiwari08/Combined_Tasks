import React from "react";
import { MdAdd, MdMenu } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";

export default function Jobform() {
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

          {/* LEft */}
          <div className="bg-white shadow-xl xl:col-span-3  p-4 flex flex-col space-y-5 rounded-xl sm:col-span-1">
            <h1>Job Details</h1>
            <form class="w-full">
              {/* NAme */}
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Job Title
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="Title here"
                  />
                </div>
              </div>
              {/*  Name ends*/}
              {/* dept type */}
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Department
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="department here"
                  />
                  
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Job type
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Job type"
                  />
                </div>
              </div>
              {/* dept type ends */}
              {/* 2nd row */}
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Recritment Quota
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="department here"
                  />
                  
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Recruitment period
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Job type"
                  />
                </div>
              </div>
              {/* 2nd row ends */}
              {/* 3rd row */}
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Experience in years
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="department here"
                  />
                  
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Location
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Job type"
                  />
                </div>
              </div>
              {/* 3rd row ends */}
              {/* Hiring */}
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Hiring Manager
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="Title here"
                  />
                </div>
              </div>
              {/* Hiring ends */}
              {/* skills */}
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Skill Sets
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="Title here"
                  />
                </div>
              </div>
              {/* skills ends */}
              {/* job desc */}
              <h1>Job Description</h1>
              {/* job desc ends */}
              
            </form>

            {/* it ends here */}
          </div>
          {/* Left ends */}
        </div>
      </div>
    </div>
  );
}
