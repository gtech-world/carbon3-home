import { HeaderLayout } from "@components/common/headerLayout";
import React, { ChangeEvent } from "react";
import { useNavigate, useNavigationType, NavigationType } from "react-router-dom";
import SvgQuery from "@public/query.svg";
import { useState } from "react";
import { useCallback } from "react";

export function OpenQuery() {
  const go = useNavigate();
  const type = useNavigationType();
  const onBack = () => {
    if (type !== NavigationType.Pop) {
      go(-1);
    } else {
      go("/");
    }
  };

  const [vin, setVin] = useState("");
  const onVinChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVin(e.target.value || "");
  }, []);
  const onQuery = () => {};
  return (
    <HeaderLayout className="flex flex-col items-center text-black ">
      <button onClick={onBack} className="self-start mb-[5.625rem]">{`< Back`}</button>
      <SvgQuery className="h-[6.125rem]" />
      <div className="mt-8 text-[2rem] font-bold">Open Query</div>
      <div className="mt-3 text-2xl text-center font-medium">Please enter the VIN Code or scan with your phone</div>
      <div
        className="mt-10 mb-40 max-w-[580px] w-full min-h-[40px] h-[3.125rem] rounded-lg overflow-hidden flex"
        style={{ border: "1px solid #DDDDDD", background: "#F8F8F8" }}
      >
        <input value={vin} onChange={onVinChange} className="flex-1 h-full px-4 whitespace-nowrap" />
        <button onClick={onQuery} className="w-[7.5rem] h-full text-center text-2xl text-white bg-green-2">
          Query
        </button>
      </div>
    </HeaderLayout>
  );
}
