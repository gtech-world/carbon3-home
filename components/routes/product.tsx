import { useIsMobile } from "@components/common/context";
import { MainLayout } from "@components/common/mainLayout";
import { Select, useSelectState } from "@components/common/select";
import { ProfileInfo } from "./dashboard";
//@ts-ignore
import { MobileBom } from "@components/boms/mobilebom";
import { PcBom } from "@components/boms/pcbom";

export function ProductDefinition() {
  const { current, items, onChange } = useSelectState([
    { text: "Ford / CQM / Ford Mach-E RWD 2022" },
    { text: "Ford / CQM / Ford Mach-E RWD 2023" },
    { text: "Ford / CQM / Ford Mach-E RWD 2024" },
  ]);
  const isMobile = useIsMobile();
  const treeData = {
    name: "Ford Mach-E RWD 2022",
    id: "root-1",
    children: [
      {
        id: "child-1",
        name: "Exteriors",
        children: [],
      },
      {
        id: "child-2",
        name: "Interiors",
        children: [],
      },
      {
        id: "child-3",
        name: "Wheels & Tires",
        children: [
          {
            id: "child-3-1",
            name: "Wheels 1 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa",
            children: [],
          },
          {
            id: "child-3-2",
            name: "Wheels 2",
            children: [],
          },
          {
            id: "child-3-3",
            name: "Wheels 3",
            children: [],
          },
        ],
      },
      {
        id: "child-4",
        name: "Climate System",
        children: [],
      },
      {
        id: "child-5",
        name: "Chassis System",
        children: [],
      },
      {
        id: "child-6",
        name: "Powertrain",
        children: [],
      },
      {
        id: "child-7",
        name: "Body Shell",
        children: [],
      },
    ],
  };
  return (
    <MainLayout className="text-black">
      <Select current={current} items={items} onChange={onChange} className="mo:w-full" />
      <div className="text-2xl font-bold my-5 mo:text-lg">PRODUCT INFO</div>
      <div className="w-full bg-white rounded-lg p-5 flex items-center justify-between mo:flex-col mo:items-start">
        <img className="w-[15.625rem] aspect-square rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]" />
        <div className="py-1 ml-[3.75rem] mo:ml-0 mo:py-0">
          <ProfileInfo label="Product Name" text="Ford Mach-E RWD 2022" />
          <ProfileInfo label="Display Name" text="Ford Mach-E RWD 2022" />
          <ProfileInfo label="Product UID" text="00104" />
        </div>
        <div className="py-1 ml-[3.75rem] mo:ml-0 mo:py-0">
          <ProfileInfo label="From Organization" text="ChangAn Ford CN" />
          <ProfileInfo label="Product Type" text="Vehicle Model" />
          <ProfileInfo label="PCF Accountable" text="YES" />
        </div>
        <div className="py-1 ml-[3.75rem] mo:ml-0 mo:py-0">
          <ProfileInfo label="Manufacturing Status" text="Active" />
          <ProfileInfo label="Created At" text="2021-11-03 09:55" />
          <ProfileInfo label="Last Update" text="2023-01-04 18:43" />
        </div>
      </div>
      <div className="text-2xl font-bold my-5 mo:text-lg">PRODUCT BOM</div>
      {isMobile ? <MobileBom data={treeData} /> : <PcBom data={treeData} />}
    </MainLayout>
  );
}
