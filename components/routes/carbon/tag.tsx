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
  data: {
    title: string;
    orgName: string;
    icon: any;
    qrcodeDisable: boolean;
    by: string;
    id: string;
    link: any;
    qrCode: string;
    name: string;
  };
}) {
  const { title, icon, qrcodeDisable, by, id, link, qrCode, orgName, name } = p.data;

  return (
    <div className="bg-white mr-5 w-[22.875rem] mo:w-full p-5 rounded-lg mb-5 text-base mo:mr-0">
      <ProductQrcode qrcodeDisable={qrcodeDisable} data={qrCode} orgName={orgName} name={name} />
      <div className="flex flex-col mt-5">
        <h3 className="text-xl font-semibold">完成[{title}]产品碳足迹测算</h3>
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
  const [current, setCurrent] = useState("");

  const getTagList = async () => {
    const res = await getCarbonTagList();
    res.records = (res?.records || []).map(
      ({ loadName, proofTime, tokenId, tokenUrl, orgName, orgType, uuid, verifyUserName }) => {
        const name = orgType !== "aicp" ? "Certified" : "Verified";
        return {
          title: loadName,
          icon: <SvgTeacher className="w-[2.75rem]" />,
          by: `${getCurrentDate(proofTime, "YYYY年MM月DD日")}签发 by ${orgName}`,
          id: uuid,
          qrcodeDisable: false,
          name,
          link: [
            { text: "标签信息", href: `/car?vin=${uuid}` },
            {
              text: "在区块链浏览器查看",
              target: "_blank",
              href: `/blockchain?tokenId=${tokenId}&name=${name}`,
            },
          ],
          tokenId,
          orgName,
          qrCode: `${window?.location?.origin || "https://aicp-beta.gtech.world"}/car?vin=${uuid}`,
        };
      },
    ) as any;
    setTagList(res);
  };

  const data = [
    {
      title: "1",
      icon: {
        key: null,
        ref: null,
        props: {
          className: "w-[2.75rem]",
        },
        _owner: null,
        _store: {},
      },
      by: "2023年09月26日签发 by 测试机构",
      id: "b5387977-9615-4528-aa14-7fbcd7b51ba5-1695716134",
      qrcodeDisable: false,
      name: "Certified",
      link: [
        {
          text: "标签信息",
          href: "/car?vin=b5387977-9615-4528-aa14-7fbcd7b51ba5-1695716134",
        },
        {
          text: "在区块链浏览器查看",
          target: "_blank",
          href: "/blockchain?tokenId=4000000&name=Certified",
        },
      ],
      tokenId: 4000000,
      orgName: "测试机构",
      qrCode: `${
        window?.location?.origin || "https://aicp-beta.gtech.world"
      }/car?vin=${"b5387977-9615-4528-aa14-7fbcd7b51ba5-1695716134"}`,
    },
    {
      title: "2",
      icon: {
        key: null,
        ref: null,
        props: {
          className: "w-[2.75rem]",
        },
        _owner: null,
        _store: {},
      },
      by: "2023年09月15日签发 by 测试机构",
      id: "bd7d4203-60d0-49de-b00e-5946cfe0cd04-1695016205",
      qrcodeDisable: false,
      name: "Certified",
      link: [
        {
          text: "标签信息",
          href: "/car?vin=bd7d4203-60d0-49de-b00e-5946cfe0cd04-1695016205",
        },
        {
          text: "在区块链浏览器查看",
          target: "_blank",
          href: "/blockchain?tokenId=3000000&name=Certified",
        },
      ],
      tokenId: 3000000,
      orgName: "测试机构",
      qrCode: `${
        window?.location?.origin || "https://aicp-beta.gtech.world"
      }/car?vin=${"bd7d4203-60d0-49de-b00e-5946cfe0cd04-1695016205"}`,
    },
  ];

  console.log("dasdasd", tagList);

  useEffect(() => {
    getTagList();
    setCurrent(window?.location?.origin);
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
