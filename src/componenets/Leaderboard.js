import React from "react";
import user from "../assets/user.jpg";

export default function Leaderboard() {
  return (
    <div className="bg-[#1c1e4e] h-full text-white">
      <h1 className="text-8xl text-center justify-items-stretch">
        LEADERBOARD
      </h1>
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex justify-between">
            <div className="flex">
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl  w-24 items-center flex flex-col justify-center shadow-lg">
                <h1>Star</h1>
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1>Name</h1>
                <h1>523</h1>
                <h1>coins</h1>
              </div>
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl  w-24 items-center flex flex-col justify-center shadow-lg">
                <h1>Star</h1>
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1>Name</h1>
                <h1>523</h1>
                <h1>coins</h1>
              </div>
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl  w-24 items-center flex flex-col justify-center shadow-lg">
                <h1>Star</h1>
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1>Name</h1>
                <h1>523</h1>
                <h1>coins</h1>
              </div>
            </div>
            <div className="flex">
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl  w-24 items-center flex flex-col justify-center shadow-lg">
                <h1>Star</h1>
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1>Name</h1>
                <h1>523</h1>
                <h1>coins</h1>
              </div>
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl  w-24 items-center flex flex-col justify-center shadow-lg">
                <h1>Star</h1>
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1>Name</h1>
                <h1>523</h1>
                <h1>coins</h1>
              </div>
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl  w-24 items-center flex flex-col justify-center shadow-lg">
                <h1>Star</h1>
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1>Name</h1>
                <h1>523</h1>
                <h1>coins</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Center Div */}
        <div className="flex items-center justify-around mx-auto bg-[#2d2d61] rounded-lg p-8 mb-5">
          <div>img</div>
          <div className="flex flex-col space-y-3">
            <div className="flex">
              <h1>Name :</h1>
              <h1>Surya</h1>
            </div>
            <div className="flex">
              <h1>Rank :</h1>
              <h1>23</h1>
            </div>
            <div className="flex">
              <h1>Social :</h1>
              <h1>Insta facebook google</h1>
            </div>
          </div>
          <div className="flex flex-col space-y-5 items-center">
            <img
              className=" w-36 h-36 rounded-full shadow-lg"
              src={user}
              alt=""
            />
            <div className="flex justify-between space-x-5 ">
              <div className="flex flex-col justify-center items-center">
                <h1>320</h1>
                <h1>Followers</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1>120</h1>
                <h1>Following</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1>345</h1>
                <h1>Coins</h1>
              </div>
            </div>
          </div>
        </div>

        {/* third div */}

        <div className="flex  space-x-8">
          <div className="w-full shadow-xl">
            <h1 className="bg-[#2d2d61] p-3 rounded-t-lg">
              Top 50 Ranks by Countries
            </h1>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                <thead class="text-xs text-white uppercase bg-[#25244e] dark:text-white">
                  <tr className="text-center">
                    <th scope="col" class="px-6 py-3">
                     Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Position
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Country
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Coins
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-[#33325a]  border-b border-blue-400 text-center">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Surya
                    </th>
                    <td class="px-6 py-4">23</td>
                    <td class="px-6 py-4">India</td>
                    <td class="px-6 py-4">345</td>
                  </tr>
                  <tr class="bg-[#25244e] border-b border-blue-400 text-center">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Abhi
                    </th>
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">India</td>
                    <td class="px-6 py-4">543</td>
                    
                  </tr>
                  <tr class="bg-[#33325a]  border-b border-blue-400 text-center">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Ajay
                    </th>
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">India</td>
                    <td class="px-6 py-4">532</td>
                    
                  </tr>
                  <tr class="bg-[#25244e] border-b border-blue-400 text-center">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Elena
                    </th>
                    <td class="px-6 py-4">3</td>
                    <td class="px-6 py-4">USA</td>
                    <td class="px-6 py-4">505</td>
                    
                  </tr>
                  <tr class="bg-[#33325a]  border-blue-40 text-center">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Apple Watch 5
                    </th>
                    <td class="px-6 py-4">Red</td>
                    <td class="px-6 py-4">Wearables</td>
                    <td class="px-6 py-4">$999</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
          <div className="w-full shadow-xl">
            <h1 className="bg-[#2d2d61] p-3 rounded-t-lg">
              Top 50 Ranks by Categories
            </h1>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                <thead class="text-xs text-white uppercase bg-[#25244e] dark:text-white">
                  <tr className="text-center">
                    <th scope="col" class="px-6 py-3">
                     Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Position
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Country
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Coins
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-[#33325a]  border-b border-blue-400 text-center">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Surya
                    </th>
                    <td class="px-6 py-4">23</td>
                    <td class="px-6 py-4">India</td>
                    <td class="px-6 py-4">345</td>
                  </tr>
                  <tr class="bg-[#25244e] border-b border-blue-400 text-center">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Abhi
                    </th>
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">India</td>
                    <td class="px-6 py-4">543</td>
                    
                  </tr>
                  <tr class="bg-[#33325a]  border-b border-blue-400 text-center">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Ajay
                    </th>
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">India</td>
                    <td class="px-6 py-4">532</td>
                    
                  </tr>
                  <tr class="bg-[#25244e] border-b border-blue-400 text-center">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Elena
                    </th>
                    <td class="px-6 py-4">3</td>
                    <td class="px-6 py-4">USA</td>
                    <td class="px-6 py-4">505</td>
                    
                  </tr>
                  <tr class="bg-[#33325a]  border-blue-40 text-center">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Apple Watch 5
                    </th>
                    <td class="px-6 py-4">Red</td>
                    <td class="px-6 py-4">Wearables</td>
                    <td class="px-6 py-4">$999</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
