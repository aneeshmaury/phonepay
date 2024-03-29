"use client"
import React from 'react';
import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";

export default function Home() {

const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

  return (
    <>
    <div className="navbar bg-violet-900 flex justify-between px-2 py-4">
      <div className="leftnav flex gap-8">
        <p className="text-white text-xl"><FaArrowLeft/></p>
        <p className="text-white">Help</p>
      </div>
      <div className="rightnav text-white text-sm">VIEW TICKETS</div>
    </div>
    <div className="bg-violet-700	 text-right pb-3 pr-1 pt-1">
      <p className="text-white font-semibold	 text-[12px]">CHANGE LANGUAGE</p>
    </div>
      <div className="max-w-md mx-auto  p-4 rounded-lg">
      <div className="left-chat-top flex gap-6">
<div className="invisible">jh</div>
<div className="bg-violet-50 py-3 px-5 rounded-md">
  <p className="text-blue-700 text-[11px]	font-semibold">I am sorry to know that, ******5472</p>
</div>
      </div>
      <div className="left-chat-top flex gap-3 mt-3">
<img className="h-6 w-6" src="./phonepaylogo.png" />
<div className="bg-violet-50 py-3 px-4 rounded-md ">
  <p className="text-blue-700 text-[11px]	font-semibold">Please help me understand why you made a payment to a froudest</p>
</div>
      </div>


      {/* More messages can be added here */}
    <div className="bg-red-500np">
      <input className="mt-20 border-2 border-black px-3 py-2 text-black rounded-sm"
          type="text"
          placeholder="Write Your Message..."
          value={inputValue}  
          onChange={handleInputChange} 
        />
    </div>
      
    </div>
    </>
   
  
  );
}
