import React from 'react'
// import user from "../assets/user.jpg";

export default function Resumefinal() {
  return (
    <div className="bg-[#eee9fd] h-full">
      <div className="max-w-[1200px] mx-auto  min-h-screen">
        <div class="grid grid-cols-3 gap-4">
            {/* Profile option */}
            <div className='bg-white shadow-lg'>Profile options</div>
            {/* Profile option Ends */}

            {/* Profile Resume button */}
            <div className='bg-white shadow-lg '>Profile/Resume</div>
            {/* Profile Resume button Ends */}

            {/* Profile */}
            <div className='bg-white shadow-lg col-start-2 '>profile</div>
            {/* Profile Ends */}

            {/* Description */}
            <div className='bg-white shadow-lg col-start-3 '>desc</div>
            {/* Description Ends */}

            {/* Experience  */}
            <div className='bg-white shadow-lg col-start-2 col-span-2 '>Experience </div>
            {/* Experience ends */}

            {/* Education */}
            <div className='bg-white shadow-lg col-start-2 col-span-2 '>Education </div>
            {/* Education Ends */}
            
        </div>
      </div>
    </div>
  )
}
