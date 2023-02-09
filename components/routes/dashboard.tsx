import { useIsMobile } from "@components/common/context";
import { MainLayout } from "@components/common/mainLayout";
import React from "react";
import { Link } from "react-router-dom";

export function ProfileInfo(p: { label: string; text: string }) {
  const isMobile = useIsMobile();
  return (
    <div className="text-lg whitespace-nowrap [&:nth-child(n+2)]:mt-6 mo:!mt-0 mo:text-[.9375rem] mo:whitespace-pre">
      {isMobile ? (
        <div className="hidden whitespace-normal mo:block text-gray-6">
          <span className="text-black font-bold">{p.label}:</span> {p.text}
        </div>
      ) : (
        <>
          <div className="text-black font-bold">{p.label}</div>
          <div className="text-gray-6">{p.text}</div>
        </>
      )}
    </div>
  );
}

function MLink(p: { to: string; text: string }) {
  return (
    <Link to={p.to}>
      <a className="inline-block whitespace-nowrap mr-5 leading-normal text-sm text-blue-0 mt-[.375rem] mo:mt-[.875rem]">
        {p.text}
      </a>
    </Link>
  );
}
function TargetInventory(p: { data: any }) {
  const { data } = p;
  return (
    <div className="bg-white rounded-lg overflow-hidden p-5 pb-8 mo:pb-5">
      <img className="bg-transparent outline-none border-none w-full aspect-[2/1] object-contain" />
      <div className="font-semibold text-lg text-black mo:text-base">Model Mach-E RWD 2022</div>
      <div className="w-full flex flex-wrap">
        <MLink to="" text="View Product Definition" />
        <MLink to="" text="View PCF Template" />
        <MLink to="" text="Query PCF Data" />
      </div>
    </div>
  );
}
/**
Account Role
Regular User

Authorization Level
Read-Only / Specified Products

Last Login
2022-12-30 14:24
 */
export function UserDashboard() {
  return (
    <MainLayout className="text-black mo:w-full">
      <span className="text-2xl font-bold mo:text-lg">PROFILE</span>
      <div className="mt-5 mb-8 w-full bg-white h-[21.5625rem] rounded-lg p-5 flex mo:flex-col mo:h-auto mo:p-[.9375rem] mo:mb-5">
        <img className="h-full aspect-square bg-transparent rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]" />
        <div className="py-1 ml-[3.75rem] mo:ml-0 mo:py-0">
          <ProfileInfo label="Organization" text="ChangAn Ford CN" />
          <ProfileInfo label="Orgnization Type" text="Auto - OEM" />
          <ProfileInfo label="Site" text="CQM(Chong Qing Manufacturing)" />
          <ProfileInfo label="Account Owner" text="tomlee2" />
        </div>
        <div className="py-1 ml-[5rem] mo:ml-0 mo:py-0">
          <ProfileInfo label="Account Role" text="Regular User" />
          <ProfileInfo label="Authorization Level" text="Read-Only / Specified Products" />
          <ProfileInfo label="Last Login" text="2022-12-30 14:24" />
        </div>
      </div>
      <span className="text-2xl font-bold mo:text-lg">TARGET INVENTORIES</span>
      <div className="mt-5 w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))]">
        <TargetInventory data={1} />
        <TargetInventory data={1} />
        <TargetInventory data={1} />
        <TargetInventory data={1} />
      </div>
    </MainLayout>
  );
}

export default UserDashboard