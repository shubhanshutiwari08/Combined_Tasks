import React from "react";
import LnLogo from "../assets/lnlogo.png";
import user from "../assets/user.jpg";

export default function PayementNew() {
  return (
    <div className="max-w-[1200px] mx-auto  min-h-screen">
      {/* Header */}
      <div className="flex justify-between p-4">
        <img className="h-14" src={LnLogo} alt="" srcset="" />
        <div className="flex items-center space-x-5">
          <h1 className="text-xl font-bold">ANMOL RATHI</h1>
          <img className="w-14 h-14 rounded-full" src={user} alt="" />
        </div>
      </div>
      {/* Header end */}

      {/* Main Div */}

      <div className="flex divide-x-2">
        {/* 1st div */}
        <div className="flex flex-col space-y-5 p-5 w-[55%]">
          <h1 className="font-semibold text-xl">PAYMENT</h1>
          <h2 className="text-sm">SELECT MONTHS</h2>
          <div className="flex flex-col space-y-5 w-[85%]">
            <div className="flex p-3 w-full justify-between border border-[#7065f0] rounded-lg items-center ">
              <input
                className=" w-6 h-6 bg-cyan-500"
                type="radio"
                name=""
                id=""
              />
              <div>
                <h1 className="text-xl font-bold">$95</h1>
                <h1>2 Months</h1>
              </div>
              <div className="bg-[#7065f0] text-white p-2">
                <h1>Save 5%</h1>
              </div>
            </div>
            <div className="flex p-3 w-full justify-between border border-[#7065f0] bg-[#7065f0] text-white rounded-lg items-center ">
              <input
                className=" w-6 h-6 bg-cyan-500"
                type="radio"
                name=""
                id=""
              />
              <div>
                <h1 className="text-xl font-bold">$275</h1>
                <h1>6 Months</h1>
              </div>
              <div className="bg-white p-2 text-black ro">
                <h1>Save 15%</h1>
              </div>
            </div>
          </div>
          <hr />

          <h2>PROMO CODE</h2>
          <div className="flex justify-between w-[85%]">
            <div class="relative mb-3 w-96 h-11" data-te-input-wrapper-init>
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline outline-[#7065f0] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="Form control lg"
              />
              <label
                for="exampleFormControlInput2"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15]  transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
              >
                Enter Placeholder here
              </label>
            </div>
            <button className="bg-[#7065f0] p-3 w-20 text-white rounded-lg">
              Apply
            </button>
          </div>
          <hr />

          <h2>PAYMENTS METHODS</h2>
          <div className="flex space-x-20 bg-[#7065f0] p-5 rounded-lg items-center w-[85%]">
            <input
              className="w-6 h-6 border border-[#7065f0]"
              type="radio"
              name=""
              id=""
            />
            <h1 className="text-white text-xl">PayPal</h1>
          </div>
        </div>
        {/* 1st div ends */}

        {/* 2nd div */}
        <div className="flex flex-col space-y-5 p-5 w-[45%]">
          <h1 className="text-center font-bold text-lg">
            BODYSTATION GYM SPA & CAFETERIA
          </h1>
          <hr />
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <h1 className="text-gray-500">Subtotal</h1>
              <h1 className="font-bold">$275</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-gray-500">Promo Code(7%)</h1>
              <h1 className="font-bold">$20</h1>
            </div>
            <hr />
            <div className="flex justify-between">
              <h1 className="text-gray-500">Total Amount</h1>
              <h1 className="font-bold">$255</h1>
            </div>
            <hr />
          </div>

          <h1 className="font-bold text-lg">TERMS AND CONDITIONS</h1>

          <div className="text-[#7065f0] flex flex-col space-y-3 justify-start">
            <li>
              We cannot accept liability for a payement not reaching the correct
              account due to you quoting an incorrect account number or
              incorrect personal details.
            </li>
            <li>
              Neither can we accept liability if payemnt is refused or declined
              by the credit/debit card supplier for any reason.{" "}
            </li>
            <li>
              If the card supplier declines payment Bodystation is under no
              obligation to bring this fact to your attention.
            </li>
          </div>

          <button className="w-full bg-[#7065f0] p-5 text-white rounded-lg text-xl">
            Make Payment
          </button>
        </div>
        {/* 2nd div ends */}
      </div>

      {/* Main Div end */}
    </div>
  );
}
