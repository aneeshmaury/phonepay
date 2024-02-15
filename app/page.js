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
      <div className="max-w-md mx-auto my-8 p-4 rounded-lg">
      <div className="left-chat-top ">
<div></div>
<div className="bg-violet-300">
  <p className="text-violet-700">I'm sorry to know that, ******5472</p>
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
