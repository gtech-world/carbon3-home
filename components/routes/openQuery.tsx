import { Button } from "@components/common/button";
import { useIsMobile, useOnError } from "@components/common/context";
import { HeaderLayout } from "@components/common/headerLayout";
import { useGoBack } from "@lib/hooks/useGoBack";
import SvgQuery from "@public/query.svg";
import { useRouter } from "next/router";
import React, { ChangeEvent, useCallback, useState } from "react";

export function OpenQuery() {
  const onBack = useGoBack();
  const [vin, setVin] = useState("");
  const onVinChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVin(e.target.value || "");
  }, []);
  const { push } = useRouter();
  const onError = useOnError();
  const onQuery = () => {
    if (!vin) return onError("Please input VIN Code");
    push(`car?vin=${vin}`);
  };
  const isMobile = useIsMobile();
  return (
    <HeaderLayout className="flex flex-col items-center text-black ">
      {!isMobile && <button onClick={onBack} className="self-start mb-[5.625rem]">{`< Back`}</button>}
      <SvgQuery className="h-[6.125rem] mo:mt-[5.125rem]" />
      <div className="mt-8 text-[2rem] font-bold mo:text-lg">Open Query</div>
      <div className="mt-3 text-2xl text-center font-medium mo:text-base">
        Please enter the VIN Code or scan with your phone
      </div>
      {isMobile ? (
        <div className="w-full mt-[3.75rem] text-sm">
          <input
            value={vin}
            onChange={onVinChange}
            onKeyDown={(e) => e.code === "Enter" && onQuery()}
            style={{ border: "1px solid #DDDDDD", background: "#F8F8F8" }}
            className="flex-1 w-full p-4 whitespace-nowrap outline-none rounded-lg"
          />
          <Button onClick={onQuery} className="w-full mt-5 rounded-lg p-3 text-center text-lg text-white bg-green-2">
            Query
          </Button>
        </div>
      ) : (
        <div className="mt-10 mb-40 max-w-[580px] w-full min-h-[40px] h-[3.125rem] overflow-hidden flex">
          <input
            style={{
              borderTop: "1px solid #DDDDDD",
              borderBottom: "1px solid #DDDDDD",
              borderLeft: "1px solid #DDDDDD",
              background: "#F8F8F8",
            }}
            value={vin}
            onChange={onVinChange}
            onKeyDown={(e) => e.code === "Enter" && onQuery()}
            className="flex-1 h-full px-4 rounded-l-lg whitespace-nowrap outline-none"
          />
          <Button
            onClick={onQuery}
            className="w-[7.5rem] rounded-r-lg  h-full text-center text-2xl text-white bg-green-2"
          >
            Query
          </Button>
        </div>
      )}
    </HeaderLayout>
  );
}

export default React.memo(OpenQuery);
