import React from "react";
import user from "../assets/user.jpg";
import gift from "../assets/gift.png";

export default function Payement() {
  return (
    <div className="bg-black h-full md:bg-[#363844] ">
      <div className="max-w-[1240px] mx-auto  min-h-screen ">
        <div className="grid grid-rows-2 justify-center  text-white md:grid-cols-2 ">
          {/* Left Side */}
          <div className="bg-black w-full text-white p-8 flex flex-col space-y-8 divide-y-2 divide-gray-500 md:shadow-lg">
            <div className="flex flex-col space-y-8 ">
              <div className="flex space-x-4 items-center md:flex md:justify-center  ">
                <img className="w-24 h-24 rounded-full" src={user} alt="" />
                <h1 className="text-center text-2xl font-bold">Metafy</h1>
              </div>
              {/* <div className='flex space-x-3'>
                        <h1>1</h1>
                        <h1>Gift Card Details</h1>
                        <h1>2</h1>
                        <h1>Payment</h1>
                    </div> */}
              <div className="flex justify-between">
                <div className="flex space-x-5 items-center">
                  <img className="w-16 rounded" src={user} alt="" />
                  <div>
                    <h1 className="text-xl">Metafy Gift Card</h1>
                    <h1 className="text-gray-400">$20000</h1>
                  </div>
                </div>
                <button className="bg-gray-50/10 p-3 text-lg font-semibold">
                  Change Details
                </button>
              </div>
              {/* <hr className='color-gray-400' /> */}
            </div>

            <div className="flex flex-col space-y-5 justify-start  ">
              <div className="flex justify-between">
                <div className="flex space-x-4 items-center">
                  <img className="w-14" src={gift} alt="" />
                  <h1 className="text-sm font-semibold">
                    Metafy Credits Available
                  </h1>
                </div>
                <div className="flex space-x-2 items-center">
                  <h1 className="text-gray-400">Apply my balance :</h1>
                  <h1 className="text-green-300">$15.00 USD</h1>
                  <input
                    className="w-4 h-4 bg-green-400"
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-4  items-center justify-between">
                    <h1 className="text-lg text-gray-300/40">Gift card Code: </h1>
                    <input className="bg-gray-50/10 p-2 w-64" type="text" name="" id="" />
                </div>
                <div className="flex space-x-4  items-center justify-between">
                    <h1 className="text-lg text-gray-300/40">City: </h1>
                    <input className="bg-gray-50/10 p-2 w-64" type="text" name="" id="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <h1 className="text-gray-400 text-xl font-semibold">
                Payment Methods
              </h1>
              <div className="flex flex-col space-y-2">
                <div className="bg-gray-50/10 p-5 text-xl font-semibold">
                  <input className="w-4 h-4" type="radio" name="" id="" />{" "}
                  RazorPay
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="bg-[#15141a] w-full text-white p-8  flex flex-col space-y-5  ">
            <div className="flex space-x-4 sm:hidden">
              <div className="bg-gray-50/10 p-1 rounded-full">
                <img className="w-12 h-12 rounded-full" src={user} alt="" />
              </div>
              <div>
                <h1>Metalfy</h1>
                <h1>Gift Card Payment</h1>
              </div>
            </div>
            {/* <hr /> */}
            <div className="flex flex-col">
              <div className="flex justify-between">
                <h1>Subtotal</h1>
                <h1>$20000</h1>
              </div>
              <div className="flex justify-between">
                <h1>Metlify Credits</h1>
                <h1>$15.00</h1>
              </div>
            </div>
            <hr />
            <div className="flex flex-col space-y-3">
              <div className="flex justify-around">
                <h1>Total Amount</h1>
                <h1>$185.00 USD</h1>
              </div>
              <button className="bg-[#f2da93] p-3 text-center text-black font-bold text-lg">
                Make Payement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
