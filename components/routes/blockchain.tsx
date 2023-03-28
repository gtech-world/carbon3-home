import { useIsMobile } from "@components/common/context";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import {getSbtDetail, noArgs} from "@lib/http";
import React, { useMemo } from "react";
import { Loading } from "@components/common/loading";
import { useTranslation } from "react-i18next";
import {Empty} from "@components/common/empty";
import {HeaderLayout} from "@components/common/headerLayout";
import {useRouter} from "next/router";
import {ProductQrcode} from "@components/common/productQrcode";
import { VscVerified,VscQuestion } from "react-icons/vsc";
import classNames from "classnames";
import {Table} from "@components/common/table";
import {genScanTokenUrl, genScanUrl, shortStr} from "@lib/utils";
import Link from "next/link";
import 'react-tooltip/dist/react-tooltip.css'
import SVGAICD from '/public/AICD.svg'
import SVGPolygon from '/public/polygon.svg'
import moment from 'moment'

function ItemInfo(p: { label: string; text: string; link?: string; tip?: string; className?:string }) {
  return (
    <div
      className={classNames(
        "w-full text-base whitespace-normal leading-[1.8rem] mo:text-[.9375rem] mo:leading-[1.6875rem] relative",
        {
          "text-green-2": p.link,
          "text-gray-6": !p.link,
        }
      ,p.className)}
    >
      {
        !!p.tip &&
        <VscQuestion data-tooltip-id="tooltip" data-tooltip-content="Hello world!" className="absolute text-black left-[-1.6rem] text-xl top-[0.29rem]" />
      }
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
interface LabelDetail{
  data:{
    sbtTokenId: string
    labelNumber: string
    productName: string
    ownerAddress: string
    metadata: string
    labelPrintDate: number
  }
}
function CardInfo(p: LabelDetail){
  const {data} = p
  const attributes = JSON.parse(data.metadata)?.attributes
  const obj:any = {}
  attributes && attributes.map((v:any)=>{
    obj[v.trait_type] = v.value
  })
  const { t } = useTranslation();
  return(
    <div className="break-all">
      <ItemInfo label={t("SBT Token ID")} text={data.sbtTokenId} link={genScanTokenUrl(data.sbtTokenId)} tip="abc" />
      <ItemInfo label={t("Label No.")} text={data.labelNumber} />
      <ItemInfo label={t("Label Owner")} text={data.productName} />
      <ItemInfo className="mo:flex mo:flex-col" label={t("Owner Address")} text={data.ownerAddress} link={genScanUrl('address',data.ownerAddress)} tip="abc" />
      <ItemInfo label={t("Product Model")} text={obj['Product Model']} />
      <ItemInfo className="mo:flex mo:flex-col" label={t("Product Unique Identifier")} text={obj['VIN']} link={`/car?vin=${obj['VIN']}`} tip="abc" />
      <ItemInfo label={t("Label Type")} text={obj['Label Type']} tip="abc" />
      <ItemInfo label={t("Data Scope")} text={''} tip="abc" />
      <ItemInfo label={t("Print Timestamp")} text={moment(data.labelPrintDate*1000).format('YYYY-MM-DD HH:mm:ss')} />
    </div>
  )
}


export function Blockchain() {
  const { query } = useRouter();
  const vin: string = query.vin as string;
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { value, loading }:any = useAsyncM(
    noArgs(() => getSbtDetail(vin), [vin]),
    [vin]
  );
  const columns = [
    {
      title: 'Activity Hash',
      dataIndex: 'txHash',
      tip: isMobile?false:'aaa',
      render: (text:string)=>{
        return(
          <Link className="text-green-2" target="_blank" href={genScanUrl('tx',text)}>{shortStr(text)}</Link>
        )
      }
    },
    {title: 'Action', dataIndex: 'action',tip: isMobile?false:'aaa',},
    {title: 'Age', dataIndex: 'blockTimestamp'},
    {title: 'Blockchain', dataIndex: 'chain',tip: isMobile?false:'aaa',},
    {
      title: 'From',
      dataIndex: 'fromAddress',
      render: (text:string)=>{
        return(
          <Link className="text-green-2" target="_blank" href={genScanUrl('address',text)}>{shortStr(text)}</Link>
        )
      }
    },
    {
      title: 'To',
      dataIndex: 'toAddress',
      render: (text:string)=>{
        return(
          <Link className="text-green-2" target="_blank" href={genScanUrl('address',text)}>{shortStr(text)}</Link>
        )
      }
    }
  ]
  return (
    <div className="bg-gray-16 flex-1 flex flex-col w-full min-h-fit text-black">
      <HeaderLayout className="">
        {loading ? (
          <Loading />
        ) : (
          <div className="w-full p-5 max-w-[1480px] mx-auto mo:p-0">
            <div className="flex mo:flex-col">
              <div className="bg-white flex justify-center px-10 flex items-center rounded-lg mo:h-[21rem] mo:px-0">
                <ProductQrcode className="ml-2" />
              </div>
              <div className="flex flex-col flex-1 ml-5 mo:ml-0 mo:mt-5">
                <div className="flex mb-5">
                  <VscVerified className="text-3xl mt-1 mr-2 mo:mt-[-0.25rem] mo:text-[2.8rem]" />
                  <div className="flex text-lg mo:flex-col">
                    <div className="flex flex-col">
                      <span className="font-bold">
                        Automotive Carbon Footprint Trust Label
                        {
                          isMobile && <span className="font-medium ml-3">#1940327340</span>
                        }
                      </span>
                      {
                        !isMobile && <p>#1940327340</p>
                      }
                    </div>
                    <span className="text-sm ml-3 mo:ml-0 mt-[0.3rem] mo:mt-2 mo:text-gray-6">Certified by AIAG</span>
                  </div>
                </div>
                <div className="bg-white px-12 py-5 rounded-lg mo:pl-10 mo:pr-3">
                  <h5 className="text-xl mb-3.5 font-bold mo:text-lg">Label Details </h5>
                  <CardInfo data={value} />
                </div>
              </div>
            </div>

            <div className="bg-white mt-5 px-8 py-5 rounded-lg mo:px-4">
              <h3 className="font-bold">Item Activity on Blockchain </h3>
              <div className="w-full overflow-hidden overflow-x-auto mo:pb-5">
                <Table className="mt-5" columns={columns} data={value.activityList} />
              </div>
            </div>
            <div className="bg-white mt-5 px-8 py-5 rounded-lg leading-[1.8rem] mo:leading-[1.6875rem] mo:px-4 mo:text-[.9375rem]">
              <SVGAICD fill="#227A30" className="w-[6.125rem] mb-5" />
              <p className="font-bold">
                Database powered by:
              </p>
              <p className="text-green-2">
                <Link href="https://aicd.gtech.world/" target="_blank">Automotive Industry Carbon Database</Link>
              </p>
              <p>
                AICD is the global, industry-level database designed for long-term carbon emission performance traceability and visibility under the AIAG Carbon Initiative. AICD offers public view mode and supply chain view mode (Traceability).
              </p>
            </div>
            <div className="bg-white mt-5 px-8 py-5 rounded-lg leading-[1.8rem] mo:leading-[1.6875rem] mo:px-4 mo:text-[.9375rem]">
              <SVGPolygon className="mb-5" />
              <p className="font-bold">
                Blockchain powered by:
              </p>
              <p className="text-green-2">
                <Link href="https://polygon.technology/" target="_blank">Polygon Blockchain</Link>
              </p>
              <p>
                You can also view raw data on the Polygon Blockchain via polygonscan. Notice polygonscan’s service may not be accessible from certain countries or regions.
              </p>
            </div>
          </div>
        )}
      </HeaderLayout>
    </div>
  );
}

export default Blockchain;
