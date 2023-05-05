import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import './trap.css'

export default function Rhom() {
  const percentage1 = 60;
  const percentage2 = 70;
  return (
    <>
    <div className='bg-[#1e2736]'>
      <div className="max-w-[1440px] mx-auto min-h-screen ">
        <div className="max-w-[65rem] mx-auto  px-5 lg:px-0 ">
          <h1 className="text-white text-xl lg:text-3xl py-4 lg:py-11">Java</h1>
          <div className="shadow-[0px_10px_30px_rgba(1,182,255,0.25)] w-[100%] mx-auto">
            <div className="bg-[#333F50] relative h-[4rem] lg:h-[6.75rem] ">
              <div className="h-full absolute top-0 -left-4 w-[9.5%] transform skew-x-[18deg] bg-[#333F50]"></div>
              <div className="flex justify-between  absolute z-10 items-center w-[70%] ml-[6%]  h-full ">
                  <p className="text-cyan-400 font-semibold text-xs md:text-xl lg:text-2xl">
                    Java Variable
                  </p>
                  <div className="w-[3.2rem] relative  font-bold shadow-2xl text-[#01B6FF]">
                    <CircularProgressbar
                      value={percentage1}
                      text={`${percentage1}%`}
                      styles={buildStyles({
                        pathColor: `#00BFFF`,
                        textSize: '32px',
                        textColor: '#00BFFF',
                        trailColor: 'transparent',
                        backgroundColor: '#3e98c7',
                        width:'full',
                     })}
                    />
                    <p className="text-[10px] lg:text-sm absolute -top-[0.2rem] right-[2.4rem]  smm:top-0     smm:right-[97%] text-[#00FF2A]">
                      Attempted 
                    </p>
                  </div>
                  <div className="w-[3.2rem] relative font-bold shadow-2xl text-[#01B6FF]">
                    <CircularProgressbar
                      value={percentage2}
                      text={`${percentage2}%`}
                      styles={buildStyles({
                         pathColor: `#00BFFF`,
                         textColor: '#00BFFF',
                         trailColor: 'transparent',
                         backgroundColor: '#000000',
                         textSize: '32px',
                      })}
                    />
                    <p className="text-[10px] lg:text-sm absolute -top-[0.2rem] right-[2.4rem]  smm:top-0 smm:right-[97%] text-cyan-500">
                      Questions
                    </p>
                  </div>
                  <p className="taxt-2xl lg:text-4xl  flex items-start text-cyan-400 font-semibold">
                    309{" "}
                    <span className="text-xs mt-1 text-[#FFC836] font-semibold ">Coins</span>
                  </p>
                </div>
                <div className="h-full absolute -right-[1.5%] top-0 w-[18%] transform -skew-x-[18deg] bg-sky-400 text-center flex justify-center items-center">
                  <h1 className="text-lg lg:text-xl absolute text-white font-bold transform skew-x-[18deg]  ">
                    Solve
                  </h1>
                </div>
            </div>

            {/* new */}

            <div className="bg-[#333F50] relative h-[4rem] lg:h-[6.75rem] ">
              <div className="h-full absolute top-0 -left-4 w-[9.5%] transform skew-x-[18deg] bg-[#333F50]"></div>
              <div className="flex justify-between  absolute z-10 items-center w-[70%] ml-[6%]  h-full ">
                  <p className="text-cyan-400 font-semibold text-xs md:text-xl lg:text-2xl">
                    Java Variable
                  </p>
                  <div className="w-[3.2rem] relative  font-bold shadow-2xl text-[#01B6FF]">
                    <CircularProgressbar
                      value={percentage1}
                      text={`${percentage1}%`}
                      styles={buildStyles({
                        pathColor: `#00BFFF`,
                        textColor: '#00BFFF',
                        trailColor: 'transparent',
                        backgroundColor: '#3e98c7',
                        textSize: '32px',
                     })}
                    />
                    <p className="text-[10px] lg:text-sm absolute -top-[0.2rem] right-[2.4rem]  smm:top-0     smm:right-[97%] text-[#00FF2A]">
                      Attempted 
                    </p>
                  </div>
                  <div className="w-[3.2rem] relative font-bold shadow-2xl text-[#01B6FF]">
                    <CircularProgressbar
                      value={percentage2}
                      text={`${percentage2}%`}
                      styles={buildStyles({
                         pathColor: `#00BFFF`,
                         textColor: '#00BFFF',
                         trailColor: 'transparent',
                         backgroundColor: '#3e98c7',
                         textSize: '32px',
                      })}
                    />
                    <p className="text-[10px] lg:text-sm absolute -top-[0.2rem] right-[2.4rem]  smm:top-0 smm:right-[97%] text-[#01B6FF]">
                      Questions
                    </p>
                  </div>
                  <p className="taxt-2xl lg:text-4xl  flex items-start text-cyan-400 font-semibold">
                    309{" "}
                    <span className="text-xs mt-1 text-[#FFC836] font-semibold ">Coins</span>
                  </p>
                </div>
                <div className="h-full absolute -right-[1.5%] top-0 w-[18%] transform -skew-x-[18deg] bg-sky-400 text-center flex justify-center items-center">
                  <h1 className="text-lg lg:text-xl absolute text-white font-bold transform skew-x-[18deg]  ">
                    Solve
                  </h1>
                </div>
            </div>

            {/* new 2 */}
            <div className="bg-[#333F50] relative h-[4rem] lg:h-[6.75rem] ">
              <div className="h-full absolute top-0 -left-4 w-[9.5%] transform skew-x-[18deg] bg-[#333F50]"></div>
              <div className="flex justify-between  absolute z-10 items-center w-[70%] ml-[6%]  h-full ">
                  <p className="text-cyan-400 font-semibold text-xs md:text-xl lg:text-2xl">
                    Java Variable
                  </p>
                  <div className="w-[3.2rem] relative  font-bold shadow-2xl text-[#01B6FF]">
                    <CircularProgressbar
                      value={percentage1}
                      text={`${percentage1}%`}
                      styles={buildStyles({
                        pathColor: `#00BFFF`,
                        textColor: '#00BFFF',
                        trailColor: 'transparent',
                        backgroundColor: '#3e98c7',
                        textSize: '32px',
                     })}
                    />
                    <p className="text-[10px] lg:text-sm absolute -top-[0.2rem] right-[2.4rem]  smm:top-0     smm:right-[97%] text-[#00FF2A]">
                      Attempted 
                    </p>
                  </div>
                  <div className="w-[3.2rem] relative font-bold shadow-2xl text-[#01B6FF]">
                    <CircularProgressbar
                      value={percentage2}
                      text={`${percentage2}%`}
                      styles={buildStyles({
                         pathColor: `#00BFFF`,
                         textColor: '#00BFFF',
                         trailColor: 'transparent',
                         backgroundColor: '#3e98c7',
                         textSize: '32px',
                      })}
                    />
                    <p className="text-[10px] lg:text-sm absolute -top-[0.2rem] right-[2.4rem]  smm:top-0 smm:right-[97%] text-[#01B6FF]">
                      Questions
                    </p>
                  </div>
                  <p className="taxt-2xl lg:text-4xl  flex items-start text-cyan-400 font-semibold">
                    309{" "}
                    <span className="text-xs mt-1 text-[#FFC836] font-semibold ">Coins</span>
                  </p>
                </div>
                <div className="h-full absolute -right-[1.5%] top-0 w-[18%] transform -skew-x-[18deg] bg-sky-400 text-center flex justify-center items-center">
                  <h1 className="text-lg lg:text-xl absolute text-white font-bold transform skew-x-[18deg]  ">
                    Solve
                  </h1>
                </div>
            </div>
            {/* new 3 */}
            <div className="bg-[#333F50] relative h-[4rem] lg:h-[6.75rem] ">
              <div className="h-full absolute top-0 -left-4 w-[9.5%] transform skew-x-[18deg] bg-[#333F50]"></div>
              <div className="flex justify-between  absolute z-10 items-center w-[70%] ml-[6%]  h-full ">
                  <p className="text-cyan-400 font-semibold text-xs md:text-xl lg:text-2xl">
                    Java Variable
                  </p>
                  <div className="w-[3.2rem] relative  font-bold shadow-2xl text-[#01B6FF]">
                    <CircularProgressbar
                      value={percentage1}
                      text={`${percentage1}%`}
                      styles={buildStyles({
                        pathColor: `#00BFFF`,
                        textColor: '#00BFFF',
                        trailColor: 'transparent',
                        backgroundColor: '#3e98c7',
                        textSize: '32px',
                     })}
                    />
                    <p className="text-[10px] lg:text-sm absolute -top-[0.2rem] right-[2.4rem]  smm:top-0     smm:right-[97%] text-[#00FF2A]">
                      Attempted 
                    </p>
                  </div>
                  <div className="w-[3.2rem] relative font-bold shadow-2xl text-[#01B6FF]">
                    <CircularProgressbar
                      value={percentage2}
                      text={`${percentage2}%`}
                      styles={buildStyles({
                         pathColor: `#00BFFF`,
                         textColor: '#00BFFF',
                         trailColor: 'transparent',
                         backgroundColor: '#3e98c7',
                         textSize: '32px',
                      })}
                    />
                    <p className="text-[10px] lg:text-sm absolute -top-[0.2rem] right-[2.4rem]  smm:top-0 smm:right-[97%] text-[#01B6FF]">
                      Questions
                    </p>
                  </div>
                  <p className="taxt-2xl lg:text-4xl  flex items-start text-cyan-400 font-semibold">
                    309{" "}
                    <span className="text-xs mt-1 text-[#FFC836] font-semibold ">Coins</span>
                  </p>
                </div>
                <div className="h-full absolute -right-[1.5%] top-0 w-[18%] transform -skew-x-[18deg] bg-sky-400 text-center flex justify-center items-center">
                  <h1 className="text-lg lg:text-xl absolute text-white font-bold transform skew-x-[18deg]  ">
                    Solve
                  </h1>
                </div>
            </div>
            {/* new 4 */}
            <div className="bg-[#333F50] relative h-[4rem] lg:h-[6.75rem] ">
              <div className="h-full absolute top-0 -left-4 w-[9.5%] transform skew-x-[18deg] bg-[#333F50]"></div>
              <div className="flex justify-between  absolute z-10 items-center w-[70%] ml-[6%]  h-full ">
                  <p className="text-cyan-400 font-semibold text-xs md:text-xl lg:text-2xl">
                    Java Variable
                  </p>
                  <div className="w-[3.2rem] relative  font-bold shadow-2xl text-[#01B6FF]">
                    <CircularProgressbar
                      value={percentage1}
                      text={`${percentage1}%`}
                      styles={buildStyles({
                        pathColor: `#00BFFF`,
                        textColor: '#00BFFF',
                        trailColor: 'transparent',
                        backgroundColor: '#3e98c7',
                        textSize: '32px',
                     })}
                    />
                    <p className="text-[10px] lg:text-sm absolute -top-[0.2rem] right-[2.4rem]  smm:top-0     smm:right-[97%] text-[#00FF2A]">
                      Attempted 
                    </p>
                  </div>
                  <div className="w-[3.2rem] relative font-bold shadow-2xl text-[#01B6FF]">
                    <CircularProgressbar
                      value={percentage2}
                      text={`${percentage2}%`}
                      styles={buildStyles({
                         pathColor: `#00BFFF`,
                         textColor: '#00BFFF',
                         trailColor: 'transparent',
                         backgroundColor: '#3e98c7',
                         textSize: '32px',
                      })}
                    />
                    <p className="text-[10px] lg:text-sm absolute -top-[0.2rem] right-[2.4rem]  smm:top-0 smm:right-[97%] text-[#01B6FF]">
                      Questions
                    </p>
                  </div>
                  <p className="taxt-2xl lg:text-4xl  flex items-start text-cyan-400 font-semibold">
                    309{" "}
                    <span className="text-xs mt-1 text-[#FFC836] font-semibold ">Coins</span>
                  </p>
                </div>
                <div className="h-full absolute -right-[1.5%] top-0 w-[18%] transform -skew-x-[18deg] bg-sky-400 text-center flex justify-center items-center">
                  <h1 className="text-lg lg:text-xl absolute text-white font-bold transform skew-x-[18deg]  ">
                    Solve
                  </h1>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}
