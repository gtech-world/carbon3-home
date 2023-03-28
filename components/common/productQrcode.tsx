import React, {HTMLAttributes} from "react";
import classNames from "classnames";

export function ProductQrcode(p: any) {
  const { qrText,className } = p
  return (
    <div className={classNames('',className)}>
      <div className={classNames("py-2 px-6 rounded-[2.25rem] outline outline-[5px] outline-green-2 outline-offset-4 border-[1.75px] border-green-2 flex justify-center items-center mr-[8px] mo:px-3")}>
        <div className="border-r-[3px] border-green-4 pr-5 mr-5 flex flex-col justify-between h-full">
          <img className="mb-2" src="/carbon3_name.svg" alt=""/>
          <img className="w-[6.875rem]" src="/earth_1.png" alt=""/>
        </div>
        <div className="w-[7.125rem] flex flex-col items-center">
          <p className="text-[0.6875rem] text-center mb-2 leading-[0.945rem] mo:leading-[0.865rem]">{qrText?qrText:'Product Carbon Footprint Certified by AIAG'}</p>
          <img className="w-[5.75rem]" src="/qrcode.svg" alt=""/>
        </div>
      </div>
    </div>
  );
}
