import { CarbonLayout } from "@components/common/carbonLayout";
import { ProductQrcode } from "@components/common/productQrcode";
import { getCarbonTagList } from "@lib/services/carbonTag";
import SvgTeacher from "@public/teacher.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCurrentDate } from "utils";

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
    <div className="flex flex-col justify-between p-5 mb-5 text-base bg-white rounded-lg mo:w-full mo:mr-0">
      <ProductQrcode qrcodeDisable={qrcodeDisable} data={qrCode} orgName={orgName} name={name} />
      <div className="flex flex-col mt-5 ">
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
          qrCode: `${current || "https://aicp.gtech.world"}/car?vin=${uuid}`,
        };
      },
    ) as any;
    setTagList(res);
  };

  useEffect(() => {
    getTagList();
    setCurrent(window?.location?.origin);
  }, []);

  const data = [
    {
      title: "碳足迹谈批次-某某型号车辆LCA示例模型",
      icon: {
        key: null,
        ref: null,
        props: {
          className: "w-[2.75rem]",
        },
        _owner: null,
      },
      by: "2023年10月07日签发 by 测试机构",
      id: "3e49b334-baa5-4b49-ad8d-43a46cd5a6ac-1696646530",
      qrcodeDisable: false,
      name: "Certified",
      link: [
        {
          text: "标签信息",
          href: "/car?vin=3e49b334-baa5-4b49-ad8d-43a46cd5a6ac-1696646530",
        },
        {
          text: "在区块链浏览器查看",
          target: "_blank",
          href: "/blockchain?tokenId=7000000&name=Certified",
        },
      ],
      tokenId: 7000000,
      orgName: "测试机构",
      qrCode: "https://aicp.gtech.world/car?vin=3e49b334-baa5-4b49-ad8d-43a46cd5a6ac-1696646530",
    },
    {
      title: "碳足迹谈批次-某某型号车辆LCA示例模型",
      icon: {
        key: null,
        ref: null,
        props: {
          className: "w-[2.75rem]",
        },
        _owner: null,
      },
      by: "2023年09月28日签发 by 测试机构",
      id: "0938ba31-abcd-455c-a687-e772009e5a26-1695889014",
      qrcodeDisable: false,
      name: "Certified",
      link: [
        {
          text: "标签信息",
          href: "/car?vin=0938ba31-abcd-455c-a687-e772009e5a26-1695889014",
        },
        {
          text: "在区块链浏览器查看",
          target: "_blank",
          href: "/blockchain?tokenId=6000000&name=Certified",
        },
      ],
      tokenId: 6000000,
      orgName: "测试机构",
      qrCode: "https://aicp.gtech.world/car?vin=0938ba31-abcd-455c-a687-e772009e5a26-1695889014",
    },
    {
      title: "3",
      icon: {
        key: null,
        ref: null,
        props: {
          className: "w-[2.75rem]",
        },
        _owner: null,
      },
      by: "2023年09月28日签发 by 测试机构",
      id: "24f96502-9e20-4cb1-a060-111255cb2a69-1695884327",
      qrcodeDisable: false,
      name: "Certified",
      link: [
        {
          text: "标签信息",
          href: "/car?vin=24f96502-9e20-4cb1-a060-111255cb2a69-1695884327",
        },
        {
          text: "在区块链浏览器查看",
          target: "_blank",
          href: "/blockchain?tokenId=5000000&name=Certified",
        },
      ],
      tokenId: 5000000,
      orgName: "测试机构",
      qrCode: "https://aicp.gtech.world/car?vin=24f96502-9e20-4cb1-a060-111255cb2a69-1695884327",
    },
    {
      title: "1",
      icon: {
        key: null,
        ref: null,
        props: {
          className: "w-[2.75rem]",
        },
        _owner: null,
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
      qrCode: "https://aicp.gtech.world/car?vin=b5387977-9615-4528-aa14-7fbcd7b51ba5-1695716134",
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
      qrCode: "https://aicp.gtech.world/car?vin=bd7d4203-60d0-49de-b00e-5946cfe0cd04-1695016205",
    },
  ];

  console.log("current", tagList);

  return (
    <CarbonLayout className="h-full bg-gray-16">
      <div className="grid grid-cols-3 gap-5 mo:flex mo:flex-wrap ">
        {(data || []).map((v: any, i) => {
          return <Card key={`tagData${i}`} data={v} />;
        })}
      </div>
    </CarbonLayout>
  );
}
export default Tag;
