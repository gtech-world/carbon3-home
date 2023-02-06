import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import SvgAICD from "@public/AICD.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import classNames from "classnames";
import { useGoBack } from "@lib/hooks/useGoBack";

export function Header(p: HTMLAttributes<HTMLDivElement> & { tits?: [string, string] }) {
  const { children, className, tits = ["Automotive Industry", "Carbon Database"], ...other } = p;
  return (
    <div
      className={classNames(
        "relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] py-6",
        className
      )}
      {...other}
    >
      <Link to="/" className="flex items-center">
        <SvgAICD className="h-9 mo:h-[1.75rem]" />
        <div className="flex flex-col ml-4 text-base whitespace-nowrap mo:text-[.8rem] mo:ml-[.8rem]">
          <span className="leading-snug">{tits[0]}</span>
          <span className="leading-snug">{tits[1]}</span>
        </div>
      </Link>
      <div className="flex-1" />
      <button className="text-[2rem] mr-4 mo:text-2xl">
        <HiOutlineMenu />
      </button>
      <button className="text-[2rem] mo:text-2xl">
        <AiOutlineUser />
      </button>
    </div>
  );
}

export function MobileHeader(p: HTMLAttributes<HTMLDivElement> & { tits?: [string, string] }) {
  const { children, className, tits = ["Automotive Industry", "Carbon Database"], ...other } = p;
  const goBack = useGoBack();
  return (
    <div className={classNames("sticky z-[3] w-full text-white flex items-center p-4 bg-green-2", className)} {...other}>
      <button className="text-[2rem]" onClick={goBack}>
        <IoIosArrowBack />
      </button>
      <div className="flex-1" />
      <SvgAICD className="h-[1.75rem] ml-10" />
      <div className="flex-1" />
      <button className="text-2xl mr-4">
        <HiOutlineMenu />
      </button>
      <button className="text-2xl">
        <AiOutlineUser />
      </button>
    </div>
  );
}
