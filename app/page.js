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
    <div className="bg-purple-700 text-right pb-2 pr-1 pt-1">
      <p className="text-white font-w text-[12px]">CHANGE LANGUAGE</p>
    </div>
      <div className="max-w-md mx-auto my-8 p-4 rounded-lg">
      <div className="mb-4">
      
        <div className="bg-[#e6ebeb] bg-blur-2xl w-[270px] p-2 pr-4 rounded-tr-lg rounded-bl-lg rounded-br-lg inline-block">
          <p className="text-[14px]"> Please elaborate your issue for faster resolution</p>
        </div>
        <p className="text-slate-400 text-[13px]">Bank Assistant <span className="text-[11px] ml-2">a few seconds ago</span></p>
      </div>
      <div className="mb-4 text-right">
        <div className="bg-sky-200 bg-opacity-90  p-3 rounded-tl-lg rounded-bl-lg rounded-br-lg inline-block">
          <p className="text-[14px] text-left"style={{ width: '250px', wordWrap: 'break-word', padding:"1px" }} >{inputValue} </p>
        </div>
      <p className="text-slate-400 text-[9px]">Delivered a few seconds ago</p>

      </div>
      <div className="mb-4">
        <div className="bg-[#e6ebeb] w-[270px] p-3 pr-5 rounded-tr-lg rounded-bl-lg rounded-br-lg inline-block">
          <p className="text-[14px]">I understand how upsetting it is to loose your money.We have raised a ticket for your issue.We are working on resolving your issue and once correct and complete details are received we do action on it.</p>
        </div>
      <p className="text-slate-400 text-[13px]">Bank Assistant <span className="text-[11px] ml-2">a few seconds ago</span></p>

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
