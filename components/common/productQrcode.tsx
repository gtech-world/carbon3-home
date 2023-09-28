import React, { HTMLAttributes } from "react";
import classNames from "classnames";
import QRCode from "qrcode.react";

export function ProductQrcode(p: any) {
  const { qrText, className, qrcodeDisable, data, orgName, name = "Certified" } = p;
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
            <p className="text-[0.6875rem] text-center mb-2 leading-[0.945rem] font-semibold mo:leading-[0.865rem]">
              {qrText ? qrText : `Product Carbon Footprint ${name} `}
            </p>
            {qrcodeDisable ? (
              <img className="w-[5.75rem]" src={"/disable_qrcode.svg"} alt="" />
            ) : (
              <QRCode className="w-[5.75rem]" size={92} value={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
