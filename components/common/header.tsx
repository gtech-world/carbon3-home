import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import SvgAICD from "@public/AICD.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import classNames from "classnames";

export function Header(p: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...other } = p;
  return (
    <div
      className={classNames(
        "relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] py-6",
        className
      )}
      {...other}
    >
      <Link to="/" className="flex items-center">
        <SvgAICD className="h-9" />
        <div className="flex flex-col ml-4 text-base">
          <span className="leading-snug">Automotive Industry</span>
          <span className="leading-snug">Carbon Database</span>
        </div>
      </Link>
      <div className="flex-1" />
      <button className="text-[2rem] text-white mr-4">
        <HiOutlineMenu />
      </button>
      <button className="text-[2rem] text-white">
        <AiOutlineUser />
      </button>
    </div>
  );
}
