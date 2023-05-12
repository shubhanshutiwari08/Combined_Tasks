import React from "react";
import user from "../assets/user.jpg";
import ms from '../assets/ms.png'
import { FaAngleDown } from "react-icons/fa";

export default function Resumefinal() {
  return (
    <div className="bg-[#eee9fd] h-full">
      <div className="max-w-[1200px] mx-auto  min-h-screen">
        <div class="grid grid-cols-3 gap-4">
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
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
                    C++
                  </h1>
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
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
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
                    C++
                  </h1>
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
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
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
                    C++
                  </h1>
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
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
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
                    C++
                  </h1>
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
                    Open 5g
                  </h1>
                  <h1 className="p-1 bg-gray-300/50  text-center rounded-lg">
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

          <div className="col-start-2 col-span-2 ">
            <div class="grid grid-cols-3 gap-4 p-1">
                {/* profile resume button */}
                <div class="bg-white shadow-md flex justify-between p-2 rounded-xl col-start-1">
                    <button className="bg-[#6b4adf] w-full  text-white text-center p-1 rounded-xl">Profile</button>
                    <button className=" w-full   text-center p-1 rounded-xl">Resume</button>
                </div>
                {/* profile reume button ends */}
                
                {/* profile desc */}
                <div class="bg-white shadow-md p-3 rounded-xl col-start-1 space-y-5">
                    <div className="flex justify-between">
                        <h1>Youtube</h1>
                        <h1>Instagram</h1>
                    </div>
                    <div className="flex flex-col  items-center justify-center">
                        <img className="w-24 h-24 rounded-full" src={user} alt="" />
                        <h1>Dian Copper</h1>
                        <h1>diancopper@gmail.com</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="outline outline-offset-1 outline-indigo-950 w-full rounded-xl p-1">Send Message</button>
                    </div>
                    <div className="flex justify-between">
                        <button>dropdown</button>
                        <button className="bg-red-500 p-1 rounded-full w-full text-white">Never apply</button>
                    </div>
                </div>
                {/* profile desc ends */}

                {/* Profile Details */}
                <div className="bg-white shadow-md col-start-2 col-span-2 rounded-xl p-3">
                    <div className="flex flex-col space-y-3">
                        <div className="flex justify-between">
                            <h1>Gender</h1>
                            <h1>Birthday</h1>
                            <h1>Phone</h1>
                        </div>
                        <div className="flex justify-between">
                            <h1>Female</h1>
                            <h1>Feb 24th 1997</h1>
                            <h1>(232) 532-0180</h1>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <h1>City / States</h1>
                            <h1>Skills</h1>
                        </div>
                        <div className="flex justify-between">
                            <h1>Chicago , Uttar pradesh</h1>
                            <h1>Adobe Xd, Figma</h1>
                        </div>
                        <hr />
                        <div className="flex flex-col space-y-2">
                            <h1>Title</h1>
                            <p className="border p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tenetur perferendis magni illum excepturi in earum deserunt quo ipsa adipisci?</p>
                        </div>
                    </div>
                </div>
                {/* Profile Details ends */}

                {/* Experience */}
                <div className="bg-white col-start-1 col-span-3 shadow-md p-2">
                    <h1>Experience</h1>
                    <div className="flex flex-col space-y-5">
                        <div className="bg-white shadow-md flex justify-around p-2 items-center ">
                            <div className="flex space-x-2">
                                <img className="w-12 h-12" src={ms} alt="" />
                                <div>
                                    <h1>UX Designer</h1>
                                    <h1>Microsoft Delhi</h1>
                                </div>
                            </div>
                            <div>
                                <h1>UX Designer at Microsoft</h1>
                                <h1>Dec 2021 - Oct- 2022</h1>
                            </div>
                            <FaAngleDown />
                        </div>

                        <div className="bg-white shadow-md flex justify-around p-2 items-center ">
                            <div className="flex space-x-2">
                                <img className="w-12 h-12" src={ms} alt="" />
                                <div>
                                    <h1>UX Designer</h1>
                                    <h1>Microsoft Delhi</h1>
                                </div>
                            </div>
                            <div>
                                <h1>UX Designer at Microsoft</h1>
                                <h1>Dec 2021 - Oct- 2022</h1>
                            </div>
                            <FaAngleDown />
                        </div>

                        <div className="bg-white shadow-md flex justify-around p-2 items-center ">
                            <div className="flex space-x-2">
                                <img className="w-12 h-12" src={ms} alt="" />
                                <div>
                                    <h1>UX Designer</h1>
                                    <h1>Microsoft Delhi</h1>
                                </div>
                            </div>
                            <div>
                                <h1>UX Designer at Microsoft</h1>
                                <h1>Dec 2021 - Oct- 2022</h1>
                            </div>
                            <FaAngleDown />
                        </div>
                    </div>
                </div>
                {/* Experience ends */}

                {/* Education */}
                <div className="bg-white col-start-1 col-span-3 shadow-md p-2">
                    <h1>Education</h1>
                    <div className="flex flex-col space-y-5">
                        <div className="bg-white shadow-md flex justify-around p-2 items-center ">
                            <div className="flex space-x-2">
                                <img className="w-12 h-12" src={ms} alt="" />
                                <div>
                                    <h1>UX Designer</h1>
                                    <h1>Microsoft Delhi</h1>
                                </div>
                            </div>
                            <div>
                                <h1>UX Designer at Microsoft</h1>
                                <h1>Dec 2021 - Oct- 2022</h1>
                            </div>
                            <FaAngleDown />
                        </div>

                        <div className="bg-white shadow-md flex justify-around p-2 items-center ">
                            <div className="flex space-x-2">
                                <img className="w-12 h-12" src={ms} alt="" />
                                <div>
                                    <h1>UX Designer</h1>
                                    <h1>Microsoft Delhi</h1>
                                </div>
                            </div>
                            <div>
                                <h1>UX Designer at Microsoft</h1>
                                <h1>Dec 2021 - Oct- 2022</h1>
                            </div>
                            <FaAngleDown />
                        </div>

                        <div className="bg-white shadow-md flex justify-around p-2 items-center ">
                            <div className="flex space-x-2">
                                <img className="w-12 h-12" src={ms} alt="" />
                                <div>
                                    <h1>UX Designer</h1>
                                    <h1>Microsoft Delhi</h1>
                                </div>
                            </div>
                            <div>
                                <h1>UX Designer at Microsoft</h1>
                                <h1>Dec 2021 - Oct- 2022</h1>
                            </div>
                            <FaAngleDown />
                        </div>
                    </div>
                </div>
                {/* Education ends */}


          
            </div>            
          </div>
          

          



          {/* Previous Code */}
          {/* Profile Resume button */}
          {/* <div className="flex h-20 -mb-3 bg-white shadow-xl rounded-3xl  w-full  p-2">
            <button className="bg-[#6b4adf] w-full  text-white text-center p-1 rounded-xl">
              Open job
            </button>
            <button className=" w-full   text-center p-1 rounded-xl">
              Close job
            </button>
          </div> */}
          {/* Profile Resume button Ends */}

          {/* Profile Details */}
          {/* <div className="relative bg-white shadow-lg col-start-2 row-span-3 ">
            profile
          </div> */}
          {/* Profile Details Ends */}

          {/* Description */}
          {/* <div className="bg-white shadow-lg col-start-3 ">desc</div> */}
          {/* Description Ends */}

          {/* Experience  */}
          {/* <div className="bg-white shadow-lg col-start-2 col-span-2 ">
            Experience{" "}
          </div> */}
          {/* Experience ends */}

          {/* Education */}
          {/* <div className="bg-white shadow-lg col-start-2 col-span-2 ">
            Education{" "}
          </div> */}
          {/* Education Ends */}
        </div>
      </div>
    </div>
  );
}
