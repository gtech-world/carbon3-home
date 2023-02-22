import SVGAicdRound from "@public/aicd-round.svg";
import SVGArrowRight from "@public/arrow-right.svg";
import SVGCar from "@public/car.svg";
import SVGCarbon3 from "@public/carbon3.svg";
import SVGCO2 from "@public/co2.svg";
import SVGLeaf2 from "@public/leaf2.svg";
import SVGLeaf3 from "@public/leaf3.svg";
import { useRouter } from "next/router";

import { Button } from "@components/common/button";
import { useIsMobile } from "@components/common/context";
import { Progress } from "@components/common/progress";
import { genSbtPhase, PHASE } from "@components/const";
import { SbtInfo, SbtPhase } from "@lib/@types/type";
import { getSbgEmissionInventory, getSbtInfo } from "@lib/http";
import { ftmTimestamp, genScanTokenUrl } from "@lib/utils";
import classNames from "classnames";
import React, { useCallback, useMemo, useRef } from "react";
import { IoCheckmarkCircleOutline, IoEllipsisHorizontalCircle } from "react-icons/io5";
import { useAsync, useToggle } from "react-use";
import { HeaderLayout } from "@components/common/headerLayout";
interface CarUIProps {
  data: {
    sbt: SbtInfo;
    sbtPhase: SbtPhase[];
    totalEmission: number;
    tonnes: string;
    trees: string;
    recyclable: string;
    use: string;
  };
}

function ItemInfo(p: { label: string; text: string; link?: string }) {
  return (
    <div
      className={classNames(
        "w-full text-base whitespace-normal leading-[1.8rem] mo:text-[.9375rem] mo:leading-[1.6875rem]",
        {
          "text-green-2": p.link,
          "text-gray-6": !p.link,
        }
      )}
    >
      <span className="text-black font-bold">{p.label}:</span>{" "}
      {p.link ? (
        <a href={p.link} target="_blank" rel="noreferrer">
          {p.text}
        </a>
      ) : (
        p.text
      )}
    </div>
  );
}
function CarInfos(p: CarUIProps) {
  const {
    data: { sbt },
  } = p;
  return (
    <div className="w-full">
      <ItemInfo label="Label No" text={sbt.sbtTokenId} />
      <ItemInfo label="Vehicle Identifier Number(VIN)" text={sbt.serialNumber} />
      <ItemInfo label="Vehicle Model" text={sbt.productName} />
      <ItemInfo label="Label Printed Date" text={ftmTimestamp(sbt.sbtMintTimestamp)} />
      <ItemInfo
        label="Label Certified by"
        text="AIAG Automotive Carbon Advisory Commmitee"
        link="https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee"
      />
      <ItemInfo label="Label SBT Address" text="View on blockchain explorer" link={genScanTokenUrl(sbt.sbtTokenId)} />
    </div>
  );
}

function ItemEmission(p: { icon: React.ReactNode; value: string; sub: string }) {
  const { icon, value, sub } = p;
  return (
    <div className="flex flex-col items-center w-[9.125rem] mo:w-[8.75rem]">
      <div className="text-green-2">{icon}</div>
      <div className="text-2xl font-bold leading-normal">{value}</div>
      <div className="text-base text-center whitespace-pre-wrap leading-normal mo:text-[.9375rem]">{sub}</div>
    </div>
  );
}

function ItemPhase(p: { data: SbtPhase }) {
  const { data } = p;
  return (
    <div
      className={classNames(
        "flex flex-col w-0 flex-1 h-[11.5rem] p-5 bg-white rounded-lg text-black mo:h-auto mo:w-full mo:mt-5"
      )}
    >
      <Progress value={data.progress} className="mb-5 flex-shrink-0" />
      <div className="w-full whitespace-normal font-bold text-base">{data.name}</div>
      <div className="w-full whitespace-nowrap text-sm mt-[.625rem]">{`${data.carbon_emission} / ${data.progress}%`}</div>
      <div className="flex-1" />
      <div className="flex items-center mt-3">
        {data.verified ? (
          <>
            <IoCheckmarkCircleOutline className="text-2xl mr-3" />
            <div className="text-sm text-green-2">{"verified"}</div>
          </>
        ) : (
          <>
            <IoEllipsisHorizontalCircle className="text-2xl mr-3" />
            <div className="text-sm text-orange-169">{"estimated"}</div>
          </>
        )}
      </div>
    </div>
  );
}

function Phases(p: { data: SbtPhase[] }) {
  const isMobile = useIsMobile();
  const { data } = p;
  return (
    <div className="flex items-center h-auto w-full mt-5 mo:flex-col mo:mt-0 bg-white rounded-lg mo:bg-transparent">
      <ItemPhase data={data[0]} />
      {!isMobile && <SVGArrowRight className="text-green-2 text-[1.875rem] mx-[.9375rem] flex-shrink-0" />}
      <ItemPhase data={data[1]} />
      {!isMobile && <SVGArrowRight className="text-green-2 text-[1.875rem] mx-[.9375rem] flex-shrink-0" />}
      <ItemPhase data={data[2]} />
      {!isMobile && <SVGArrowRight className="text-green-2 text-[1.875rem] mx-[.9375rem] flex-shrink-0" />}
      <ItemPhase data={data[3]} />
    </div>
  );
}

function ItemQA(p: { type: number; sbt: SbtInfo }) {
  const { type, sbt } = p;
  return (
    <div className="flex-1 w-0 p-5 bg-white rounded-lg flex flex-col items-center [&:nth-child(n+2)]:ml-5 mo:!ml-0 mo:w-full mo:mt-5">
      {type === 1 ? (
        <SVGCarbon3 className="text-[5.375rem] mt-[.625rem] mb-[1.875rem]" />
      ) : type === 2 ? (
        <SVGAicdRound className="text-[5.375rem] mt-[.625rem] mb-[1.875rem]" />
      ) : (
        <img src="/nft.png" className="w-[5.8125rem] mt-[.375rem] mb-[1.625rem]" />
      )}
      <div className="text-lg font-bold mb-[.9375rem]">
        {type === 1
          ? "What is AIAG Carbon3 Trust Label?"
          : type === 2
          ? "The Raw Data Behind Trust Label"
          : "Immutability and Traceability"}
      </div>
      <div className="text-[.9375rem] font-medium">
        {type === 1 ? (
          <>
            The AIAG Carbon3 Trust Label is an industry-level certification framework for every vehicle produced under{" "}
            <a
              className="text-green-2 cursor-pointer"
              href="https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee"
            >
              AIAG’s carbon reduction / Net Zero 2050 initiatives
            </a>
            . The Trust Label guarantees that any raw data behind the label is verified and recorded in an immutable
            manner for the ultimate transparency and traceability for the vehicle’s carbon performance.
          </>
        ) : type === 2 ? (
          <>
            AICD is the global, industry-level database for long-term carbon performance traceability and visibility
            under the 2050 Net Zero commitment. The data on this label is supported by the Automotive Industry Carbon
            Database. Click{" "}
            <a className="text-green-2 cursor-pointer" href="/openquery">
              here
            </a>{" "}
            to query information about this vehicle.
          </>
        ) : (
          <>
            A Soul-bounded Token (a special type of NFT that is not allowed to transfer after created) has been
            generated on blockchain to make sure the information in this label is immutable and will be maintain for
            traceability forever. Check{" "}
            <a className="text-green-2 cursor-pointer" href={genScanTokenUrl(sbt.sbtTokenId)}>
              here
            </a>{" "}
            to verify the SBT on blockchain explorer.
          </>
        )}
      </div>
    </div>
  );
}

function QAS(p: { sbt: SbtInfo }) {
  const { sbt } = p;
  return (
    <div className="w-full flex mt-5 mo:block mo:mt-0">
      <ItemQA type={1} sbt={sbt} />
      <ItemQA type={2} sbt={sbt} />
      <ItemQA type={3} sbt={sbt} />
    </div>
  );
}

function MobileCar(p: CarUIProps) {
  const { data } = p;
  const [show, setShow] = useToggle(false);
  const ref = useRef<HTMLDivElement>();
  const onClickShow = useCallback(() => {
    setShow(true);
    ref.current?.scrollIntoView({ block: "start" });
  }, []);
  return (
    <div className="w-full p-5" ref={ref as any}>
      <div className="flex px-[.9375rem] mt-5 py-5 rounded-lg bg-white" onClick={() => setShow(false)}>
        <SVGCarbon3 className="mr-[.625rem] text-[5.375rem]" />
        <div className="flex-1 flex flex-col leading-normal">
          <div className="font-bold text-lg w-full">Product Carbon Footprint Certified</div>
          <span className="font-medium text-sm">by AIAG</span>
        </div>
      </div>
      {!show ? (
        <div className="w-full">
          <div className="flex items-center p-4 w-full bg-white rounded-lg mt-5">
            <img className="w-[8.75rem]" />
            <div className="w-0 flex-1 ml-5 whitespace-normal">
              <div
                className="font-semibold text-lg"
                style={{ WebkitLineClamp: 2, display: "-webkit-box", WebkitBoxOrient: "vertical" }}
              >
                {"Ford Mach-E PWD 2023"}
              </div>
              <div className="text-base">{"VIN #111923789123"}</div>
              <Button className="mt-[.625rem] text-green-2 text-base font-semibold" onClick={onClickShow}>
                Check Details
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg mt-5 grid p-5 gap-y-8" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            <div />
            <ItemEmission
              icon={<SVGCO2 className="text-[2.9644rem]" />}
              value={data.tonnes}
              sub="tonnes of CO2e Cradle-to-Gate emission"
            />
            <div />
            <ItemEmission
              icon={<SVGLeaf2 className="text-[2.9506rem] my-[4px]" />}
              value={data.trees}
              sub="trees (8-yr old) to absorbe for one year"
            />
            <div />
            <div />
            <ItemEmission
              icon={<SVGLeaf3 className="text-[2.8213rem] mt-[1px]" />}
              value={data.recyclable}
              sub="of the materials used in this vehicle is recyclable"
            />
            <div />
            <ItemEmission
              icon={<SVGCar className="text-[3.51rem] my-[4px]" />}
              value={data.use}
              sub="tonnes of CO2e emission estimated from use"
            />
            <div />
          </div>
          <Phases data={data.sbtPhase} />
          <div className="text-green-2 cursor-pointer text-[.9375rem] my-6 mb-3 text-center" onClick={onClickShow}>
            Learn More about AIAG’s Carbon3 Trust Label
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full p-5 rounded-lg bg-white mt-5">
            <div className="text-lg font-bold mb-[.9375rem]">Label Information</div>
            <CarInfos data={data} />
          </div>
          <QAS sbt={data.sbt} />
        </div>
      )}
    </div>
  );
}

function PcCar(p: CarUIProps) {
  const { data } = p;
  return (
    <div className="w-full p-5 max-w-[90rem] mx-auto">
      <div className="text-2xl leading-normal font-bold ">
        Product Carbon Footprint Certified <span className="text-base font-medium">by AIAG</span>
      </div>
      <div className="flex">
        <div className="w-0 flex-1 p-5 mt-5 mr-5 bg-white rounded-lg flex items-center">
          <img className="w-[16.25rem] h-[12.375rem] mr-5" />
          <div className="w-0 flex-1">
            <CarInfos data={data} />
          </div>
        </div>
        <div className="w-0 flex-1 p-5 mt-5 bg-white rounded-lg flex justify-between items-center">
          <ItemEmission
            icon={<SVGCO2 className="text-[2.9644rem]" />}
            value={data.tonnes}
            sub="tonnes of CO2e Cradle-to-Gate emission"
          />
          <ItemEmission
            icon={<SVGLeaf2 className="text-[2.9506rem] my-1" />}
            value={data.trees}
            sub="trees (8-yr old) to absorbe for one year"
          />
          <ItemEmission
            icon={<SVGLeaf3 className="text-[2.8213rem] my-[1px]" />}
            value={data.recyclable}
            sub="of the materials used in this vehicle is recyclable"
          />
          <ItemEmission
            icon={<SVGCar className="text-[3.51rem] my-1" />}
            value={data.use}
            sub="tonnes of CO2e emission estimated from use"
          />
        </div>
      </div>
      <Phases data={data.sbtPhase} />
      <QAS sbt={data.sbt} />
    </div>
  );
}

export function Car() {
  const { query } = useRouter();
  const lno: string = query.lno as string;
  const isMobile = useIsMobile();
  const { value, loading } = useAsync(
    () => (!lno ? Promise.resolve(undefined) : Promise.all([getSbtInfo(lno), getSbgEmissionInventory(lno)])),
    [lno]
  );
  const data = useMemo<CarUIProps["data"] | undefined>(() => {
    if (!value) return undefined;
    const [sbt, sbtEmissions] = value;
    const sbtPhase = genSbtPhase();
    const mapPhase: { [k: string]: SbtPhase } = {};
    sbtPhase.forEach((item) => (mapPhase[item.name] = item));
    let totalEmission = 0;
    sbtEmissions.forEach((emi) => {
      if (mapPhase[emi.phase]) {
        mapPhase[emi.phase].carbon_emission += emi.ghgEmission;
        totalEmission += emi.ghgEmission;
      }
    });
    sbtPhase.forEach((p) => {
      p.progress = totalEmission > 0 ? Math.round((p.carbon_emission / totalEmission) * 100) : 0;
      p.verified = p.carbon_emission > 0 && p.name !== PHASE.at(PHASE.length - 1);
    });

    return {
      sbt,
      sbtPhase,
      totalEmission,
      tonnes: `${totalEmission > 0 ? Math.round(totalEmission * 0.5) : 0}`,
      trees: `${totalEmission > 0 ? Math.round(totalEmission * 10) : 0}`,
      recyclable: "35%",
      use: `${Math.round(sbtPhase[3].carbon_emission * 0.5 * 10) * 0.1}`,
    };
  }, [value]);
  if (!query.lno || loading || !data) return null;
  return (
    <div className="bg-gray-16 w-full min-h-full text-black">
      {isMobile ? (
        <MobileCar data={data} />
      ) : (
        <HeaderLayout>
          <PcCar data={data} />
        </HeaderLayout>
      )}
    </div>
  );
}

export default Car;
