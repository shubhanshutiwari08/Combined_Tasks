import React from "react";
import './hex.css'
import user from "../assets/user.jpg";
import silver from '../assets/silver.jpeg'
import gold from '../assets/gold.jpg'
import bronze from '../assets/bronje.jpeg'
import {FaFacebook, FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import rocket from '../assets/rocket.png'
// import Card from "./Card";

export default function Leaderboard() {
  return (
    <div className="bg-[#1c1e4e] h-full text-white">
      <h1 className="text-8xl text-center justify-items-stretch">
        LEADERBOARD
      </h1>
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[800px] mx-auto ">
          <div className="flex justify-between my-5">
            <div className="flex items-baseline">
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl  w-24 items-center flex flex-col justify-center shadow-lg">
                <img className="relative -top-8 w-8 h-8 rounded-full" src={silver} alt="" />
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1 className="text-lg font-semibold">Elena</h1>
                <h1>523</h1>
                <h1 className="text-[#8989e7]">coins</h1>
              </div>
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl h-48   w-24 items-center flex flex-col justify-center shadow-lg">
              <img className="relative -top-10 w-8 h-8 rounded-full" src={gold} alt="" />
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1 className="text-lg font-semibold">Elena</h1>
                <h1>523</h1>
                <h1 className="text-[#8989e7]">coins</h1>
              </div>
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl  w-24 items-center flex flex-col justify-center shadow-lg">
              <img className="relative -top-8 w-8 h-8 rounded-full" src={bronze} alt="" />
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1 className="text-lg font-semibold">Elena</h1>
                <h1>523</h1>
                <h1 className="text-[#8989e7]">coins</h1>
              </div>
            </div>
            <div className="flex items-baseline">
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl  w-24 items-center flex flex-col justify-center shadow-lg">
              <img className="relative -top-8 w-8 h-8 rounded-full" src={silver} alt="" />
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1 className="text-lg font-semibold">Elena</h1>
                <h1>523</h1>
                <h1 className="text-[#8989e7]">coins</h1>
              </div>
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl h-48  w-24 items-center flex flex-col justify-center shadow-lg">
              <img className="relative -top-10 w-8 h-8 rounded-full" src={gold} alt="" />
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1 className="text-lg font-semibold">Elena</h1>
                <h1>523</h1>
                <h1 className="text-[#8989e7]">coins</h1>
              </div>
              <div className="p-4 bg-[#2d2d61] mb-5 rounded-t-2xl  w-24 items-center flex flex-col justify-center shadow-lg">
              <img className="relative -top-8 w-8 h-8 rounded-full" src={bronze} alt="" />
                <img className="w-8 h-8 rounded-lg" src={user} alt="" />
                <h1 className="text-lg font-semibold">Elena</h1>
                <h1>523</h1>
                <h1 className="text-[#8989e7]">coins</h1>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container mx-auto my-4">
      <div className="grid grid-cols-3 gap-4">
        <Card title="Card 1" content="Card 1 content" />
        <Card title="Card 2" content="Card 2 content" />
        <Card title="Card 3" content="Card 3 content" />
      </div>
    </div> */}


        {/* Center Div */}
        <div className="flex items-center justify-around mx-auto bg-[#2d2d61] rounded-lg p-8 mb-5">
          <div className="hexagon flex items-center justify-center">
            <img className=" w-24 h-24 rounded-full" src={rocket} alt="" />
          </div>
          <div className="flex flex-col space-y-8">
            <div className="flex items-baseline space-x-3">
              <h1 className="text-[#8989e7] text-xl">Name :</h1>
              <h1 className="text-4xl text-[#01b5ff] font-bold">Surya</h1>
            </div>
            <div className="flex items-baseline space-x-3">
              <h1 className="text-[#8989e7] text-xl">Rank :</h1>
              <h1 className="text-4xl font-bold">23</h1>
            </div>
            <div className="flex items-baseline space-x-3">
              <h1 className="text-[#8989e7] text-xl">Social :</h1>
              <h1 className="flex space-x-5 text-xl"> < FaFacebook/> < FaLinkedin/>  < SiGmail/> </h1>
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
                <h1 className="text-xl font-semibold">320</h1>
                <h1 className="text-[#8989e7]">Followers</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold">120</h1>
                <h1 className="text-[#8989e7]">Following</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold">345</h1>
                <h1 className="text-[#8989e7]">Coins</h1>
              </div>
            </div>
          </div>
        </div>

        {/* third div */}

        <div className="flex  space-x-8">
          <div className="w-full shadow-xl p-2">
            <h1 className="bg-[#2d2d61] p-5 font-bold rounded-t-lg text-lg">
              Top <span className="text-green-500">50</span> Ranks by Countries
            </h1>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                <thead class="text-xs text-white uppercase bg-[#25244e] dark:text-white">
                  <tr className="text-center text-[#8989e7] p-5">
                    <th scope="col" class="px-8 py-6">
                     Name
                    </th>
                    <th scope="col" class="px-8 py-6">
                      Position
                    </th>
                    <th scope="col" class="px-8 py-6">
                      Country
                    </th>
                    <th scope="col" class="px-8 py-6">
                      Coins
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-[#33325a]  border-b border-blue-400 text-center shadow-lg">
                    <th
                      scope="row"
                      class="px-12 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex space-x-3"
                    >
                      <img className="w-6 h-6 rounded-lg" src={user} alt="" />
                      <h1>Surya</h1>
                    </th>
                    <td class="px-6 py-4">23</td>
                    <td class="px-6 py-4">India</td>
                    <td class="px-6 py-4">345</td>
                  </tr>
                  <tr class="bg-[#25244e] border-b border-blue-400 text-center">
                  <th
                      scope="row"
                      class="px-12 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex space-x-3"
                    >
                      <img className="w-6 h-6 rounded-lg" src={user} alt="" />
                      <h1>Surya</h1>
                    </th>
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">India</td>
                    <td class="px-6 py-4">543</td>
                    
                  </tr>
                  <tr class="bg-[#33325a]  border-b border-blue-400 text-center shadow-lg">
                  <th
                      scope="row"
                      class="px-12 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex space-x-3"
                    >
                      <img className="w-6 h-6 rounded-lg" src={user} alt="" />
                      <h1>Surya</h1>
                    </th>
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">India</td>
                    <td class="px-6 py-4">532</td>
                    
                  </tr>
                  <tr class="bg-[#25244e] border-b border-blue-400 text-center">
                  <th
                      scope="row"
                      class="px-12 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex space-x-3"
                    >
                      <img className="w-6 h-6 rounded-lg" src={user} alt="" />
                      <h1>Surya</h1>
                    </th>
                    <td class="px-6 py-4">3</td>
                    <td class="px-6 py-4">USA</td>
                    <td class="px-6 py-4">505</td>
                    
                  </tr>
                  <tr class="bg-[#33325a]  border-blue-40 text-center shadow-xl">
                  <th
                      scope="row"
                      class="px-12 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex space-x-3"
                    >
                      <img className="w-6 h-6 rounded-lg" src={user} alt="" />
                      <h1>Surya</h1>
                    </th>
                    <td class="px-6 py-4">Red</td>
                    <td class="px-6 py-4">Wearables</td>
                    <td class="px-6 py-4">$999</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
            Page 1 of 300  
          </div>
          <div className="w-full shadow-xl p-2">
            <h1 className="bg-[#2d2d61] p-5 font-bold rounded-t-lg text-lg">
              Top <span className="text-green-500">50</span> Ranks by Categories
            </h1>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100 font-semibold">
                <thead class="text-xs text-white uppercase bg-[#25244e] dark:text-white">
                  <tr className="text-center text-[#8989e7] p-5">
                    <th scope="col" class="px-8 py-6">
                     Name
                    </th>
                    <th scope="col" class="px-8 py-6">
                      Position
                    </th>
                    <th scope="col" class="px-8 py-6">
                      Country
                    </th>
                    <th scope="col" class="px-8 py-6">
                      Coins
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-[#33325a]  border-b border-blue-400 text-center font-bold">
                  <th
                      scope="row"
                      class="px-12 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex space-x-3"
                    >
                      <img className="w-6 h-6 rounded-lg" src={user} alt="" />
                      <h1>Surya</h1>
                    </th>
                    <td class="px-6 py-4 font-bold">23</td>
                    <td class="px-6 py-4 font-bold">India</td>
                    <td class="px-6 py-4 font-bold">345</td>
                  </tr>
                  <tr class="bg-[#25244e] border-b border-blue-400 text-center">
                  <th
                      scope="row"
                      class="px-12 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex space-x-3"
                    >
                      <img className="w-6 h-6 rounded-lg" src={user} alt="" />
                      <h1>Surya</h1>
                    </th>
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">India</td>
                    <td class="px-6 py-4">543</td>
                    
                  </tr>
                  <tr class="bg-[#33325a]  border-b border-blue-400 text-center">
                  <th
                      scope="row"
                      class="px-12 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex space-x-3"
                    >
                      <img className="w-6 h-6 rounded-lg" src={user} alt="" />
                      <h1>Surya</h1>
                    </th>
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">India</td>
                    <td class="px-6 py-4">532</td>
                    
                  </tr>
                  <tr class="bg-[#25244e] border-b border-blue-400 text-center">
                  <th
                      scope="row"
                      class="px-12 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex space-x-3"
                    >
                      <img className="w-6 h-6 rounded-lg" src={user} alt="" />
                      <h1>Surya</h1>
                    </th>
                    <td class="px-6 py-4">3</td>
                    <td class="px-6 py-4">USA</td>
                    <td class="px-6 py-4">505</td>
                    
                  </tr>
                  <tr class="bg-[#33325a]  border-blue-40 text-center">
                  <th
                      scope="row"
                      class="px-12 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex space-x-3"
                    >
                      <img className="w-6 h-6 rounded-lg" src={user} alt="" />
                      <h1>Surya</h1>
                    </th>
                    <td class="px-6 py-4">Red</td>
                    <td class="px-6 py-4">Wearables</td>
                    <td class="px-6 py-4">$999</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
            Page 1 of 300 
          </div>
        </div>
      </div>
    </div>
  );
}
