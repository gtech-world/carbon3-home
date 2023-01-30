import React from "react";
import { Link } from "react-router-dom";
import SvgAICD from "@public/AICD.svg";

export function Header() {
  return (
    <div className="sticky z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] py-6">
      <Link to="/" className="flex items-center">
        <SvgAICD className="h-9" />
        <div className="flex flex-col ml-4 text-base">
          <span className="leading-snug">Automotive Industry</span>
          <span className="leading-snug">Carbon Database</span>
        </div>
      </Link>
      <div className="flex-1" />
      
    </div>
  );
}
