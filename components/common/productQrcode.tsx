import React, { HTMLAttributes } from "react";
import classNames from "classnames";
import QRCode from "qrcode.react";

export function ProductQrcode(p: any) {
  const { qrText, className, qrcodeDisable, data, orgName, name = "Certified" } = p;
  console.log("data", data);

  return (
    <div className={classNames("", className)}>
      <div className="p-1 border-[4px] border-green-2 rounded-[2.25rem]">
        <div
          className={classNames(
            "py-2 px-6 rounded-[1.90rem] border-[1.75px] border-green-2 flex justify-center items-center mo:px-3",
          )}>
          <div className="border-r-[3px] border-green-4 pr-5 mr-5 flex flex-col justify-between h-full">
            <img className="mb-2" src="/carbon3_name.svg" alt="" />
            <img className="w-[6.875rem]" src="/earth_1.png" alt="" />
          </div>
          <div className="w-[7.125rem] flex flex-col items-center">
            <span className="text-[12px] mo:text-[10px] w-full text-center mb-2 leading-[0.945rem] font-semibold transform scale-[1.1] mo:scale-[0.8] md:scale-[0.9] ">
              {qrText ? qrText : `Product Carbon Footprint ${name} `}
            </span>
            <QRCode style={{ width: "100%", height: "100%" }} value={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
