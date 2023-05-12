import React from "react";
import Multiselectcheck from "./Multiselectcheck";
// import Multiselect from "multiselect-react-dropdown";
// import {MultiSelectComponent} from '@syncfusion/ej2-react-dropdowns';
import { MdAdd, MdMenu } from "react-icons/md";
// import user from "../assets/user.jpg";
import {
  FaBold,
  FaItalic,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaLink,
} from "react-icons/fa";
import { AiOutlineUnderline, AiOutlineBgColors } from "react-icons/ai";
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
              <div class="flex flex-wrap -mx-3 mb-1">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Job Title
                  </label>
                  <input
                    class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-password"
                    type="text"
                    placeholder="Title here"
                  />
                </div>
              </div>
              {/*  Name ends*/}
              {/* dept type */}
              <div class="flex flex-wrap -mx-3 mb-1">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Department
                  </label>
                  <input
                    class="appearance-none block w-full  text-gray-700 border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                  <select
                    id="countries"
                    class=" border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Intern">Intern</option>
                  </select>
                </div>
              </div>
              {/* dept type ends */}
              {/* 2nd row */}
              <div class="flex flex-wrap -mx-3 mb-1">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Recritment Quota
                  </label>
                  <input
                    class="appearance-none block w-full  text-gray-700 border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="number"
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
                    class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none "
                    id="grid-last-name"
                    type="date"
                    placeholder="Select Date"
                  />
                </div>
              </div>
              {/* 2nd row ends */}
              {/* 3rd row */}
              <div class="flex flex-wrap -mx-3 mb-1">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Experience in years
                  </label>
                  <input
                    class="appearance-none block w-full  text-gray-700 border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="number"
                    placeholder="Experience here"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Location
                  </label>
                  <select
                    id="countries"
                    class=" border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selected Location</option>
                    <option value="Los Angles">Los Angles</option>
                    <option value="California">California</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>
              {/* 3rd row ends */}
              {/* Hiring */}
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Hiring Manager
                  </label>
                  <div className="w-full"> <Multiselectcheck /></div>
                  
                  {/* <div className="flex">
                    <Multiselect
                      options={options}
                      selectedValues={selectedValues}
                      onSelect={handleSelect}
                      displayValue="label"
                    />
                  </div> */}

                  {/* <Multiselect
                    options={options}
                    selectedValues={selectedPeople}
                    onSelect={handleSelect}
                    displayValue="label"
                  /> */}

                  {/* <div className="text-dark">
                    <Multiselect
                      isObject={false}
                      // onRemove={(event) => {
                      //   console.log(event);
                      // }}
                      // onSelect={(event) => {
                      //   console.log(event);
                      // }}
                      options={profiles}
                      showCheckbox
                    />
                  </div> */}
                </div>
              </div>
              {/* Hiring ends */}
              {/* skills */}
              <div class="flex flex-wrap -mx-3 mb-3">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
                    for="grid-password"
                  >
                    Skill Sets
                  </label>
                  <Multiselectcheck />
                  {/* <div className="text-dark">
                    <Multiselect
                      isObject={false}
                      // onRemove={(event) => {
                      //   console.log(event);
                      // }}
                      // onSelect={(event) => {
                      //   console.log(event);
                      // }}
                      options={hiringMembers}
                      showCheckbox
                    />
                  </div> */}
                </div>
              </div>
              {/* skills ends */}
              {/* job desc */}
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Job Description
              </label>
              <div className="flex bg-slate-200 shadow-lg rounded-t-lg p-3 space-x-5 cursor-pointer ">
                <FaBold />
                <AiOutlineUnderline />
                <FaItalic />
                <FaAlignLeft />
                <FaAlignCenter />
                <FaAlignRight />
                <FaLink />
                <AiOutlineBgColors />
              </div>
              <textarea
                class="peer block min-h-[auto] mb-3 w-full rounded-lg border-0 bg-white shadow-lg  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Description here"
              ></textarea>
              {/* job desc ends */}
              {/* Button */}
              <div>
                <button className="bg-indigo-500 p-2 w-20 rounded-lg text-white font-semibold">
                  Post
                </button>
              </div>

              {/* button ends */}
            </form>

            {/* it ends here */}
          </div>
          {/* Left ends */}
        </div>
      </div>
    </div>
  );
}
