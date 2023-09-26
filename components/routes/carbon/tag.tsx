import { CarbonLayout } from "@components/common/carbonLayout";
import { ProductQrcode } from "@components/common/productQrcode";
import { getCarbonTagList } from "@lib/services/carbonTag";
import SvgTeacher from "@public/teacher.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import moment from "moment";
import { getCurrentDate } from "utils";

function PartInfo(p: { label: string; text: string }) {
  return (
    <div className="flex flex-col text-base">
      <label className="font-bold">{p.label} :</label>
      <span className="text-gray-6">{p.text}</span>
    </div>
  );
}

function Card(p: {
  data: { title: string; icon: any; qrcodeDisable: boolean; by: string; id: string; link: any; qrCode: string };
}) {
  const { title, icon, qrcodeDisable, by, id, link, qrCode } = p.data;
  return (
    <div className="bg-white mr-5 w-[22.875rem] mo:w-full p-5 rounded-lg mb-5 text-base mo:mr-0">
      <ProductQrcode qrcodeDisable={qrcodeDisable} data={qrCode} />
      <div className="flex flex-col mt-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span>{by}</span>
        <span>标签ID : {id}</span>
      </div>
      <div className="flex flex-col text-blue-0 underline mt-2.5 font-semibold">
        {link.map((v: { href: string; text: string; target: string }, i: number) => {
          return (
            <Link key={`link${i}`} target={v.target} className="mt-2.5" href={v.href}>
              {v.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const tagData = [
  {
    title: "完成[AT01]系列培训-双碳基础 认证",
    icon: <SvgTeacher className="w-[2.75rem]" />,
    by: "2023年4月30日签发 by AIAG",
    id: "144095402",
    qrcodeDisable: true,
    link: [
      { text: "标签信息", href: "" },
      { text: "在区块链浏览器查看", target: "", href: "" },
    ],
  },
  {
    title: "完成[AI09]产品碳足迹测算",
    icon: <SvgTeacher className="w-[2.75rem]" />,
    by: "2023年4月30日签发 by AIAG",
    id: "144049913",
    qrcodeDisable: false,
    link: [
      { text: "标签信息", href: "/car?vin=1500101202311001" },
      {
        text: "在区块链浏览器查看",
        target: "_blank",
        href: "/blockchain?tokenId=1000000",
      },
    ],
  },
];

export function Tag() {
  const [tagList, setTagList] = useState<SbtTokenController.Records>();

  const currentTime = moment("2023-09-15 17:34:02");
  const formattedTime = currentTime.format("YYYY年MM月DD日");

  const getTagList = async () => {
    const res = await getCarbonTagList();
    res.records = (res?.records || []).map(({ loadName, proofTime, tokenId, tokenUrl, uuid, verifyUserName }) => {
      return {
        title: loadName,
        icon: <SvgTeacher className="w-[2.75rem]" />,
        by: `${getCurrentDate(proofTime, "YYYY年MM月DD日")}签发 by AIAG`,
        id: uuid,
        qrcodeDisable: false,
        link: [
          { text: "标签信息", href: `/car?vin=${uuid}` },
          {
            text: "在区块链浏览器查看",
            target: "_blank",
            href: `/blockchain?tokenId=${tokenId}`,
          },
        ],
        tokenId,
        qrCode: ` https://aicp.gtech.world/car?vin=${uuid}`,
      };
    }) as any;
    setTagList(res);
  };

  useEffect(() => {
    getTagList();
  }, []);
  return (
    <CarbonLayout className="h-full bg-gray-16">
      <div className="flex flex-wrap">
        {tagList?.records.map((v: any, i) => {
          return <Card key={`tagData${i}`} data={v} />;
        })}
      </div>
    </CarbonLayout>
  );
}

export default Tag;
