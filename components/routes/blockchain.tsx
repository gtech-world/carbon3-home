import { useIsMobile } from "@components/common/context";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import {getSbtDetail, noArgs} from "@lib/http";
import React, { useMemo } from "react";
import { Loading } from "@components/common/loading";
import { useTranslation } from "react-i18next";
import {HeaderLayout} from "@components/common/headerLayout";
import {useRouter} from "next/router";
import {ProductQrcode} from "@components/common/productQrcode";
import { VscVerified,VscQuestion } from "react-icons/vsc";
import classNames from "classnames";
import {Table} from "@components/common/table";
import {genScanTokenUrl, genScanUrl, shortStr,titleCase} from "@lib/utils";
import Link from "next/link";
import SVGAICD from '/public/AICD.svg'
import SVGPolygon from '/public/polygon.svg'
import moment from 'moment'

function ItemInfo(p: { label: string; text: string; link?: string; tip?: any; className?:string }) {
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
        <VscQuestion data-tooltip-id="tooltip" data-tooltip-content={p.tip} className="absolute text-black left-[-1.6rem] text-xl top-[0.29rem]" />
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
  if(!data?.metadata) return null
  const attributes = JSON.parse(data?.metadata)?.attributes
  const obj:any = {}
  attributes && attributes.map((v:any)=>{
    obj[v.trait_type] = v.value
  })
  const { t } = useTranslation();
  return(
    <div className="break-all">
      <ItemInfo label={t("SBT Token ID")} text={data.sbtTokenId} link={genScanTokenUrl(data.sbtTokenId)} tip={t('SBTs are non-transferable and immutable digital credentials representing the vehicle’s carbon footprint label. Every SBT has a unique token ID.')} />
      <ItemInfo label={t("Label No.")} text={data.labelNumber} />
      <ItemInfo label={t("Label Owner")} text={data.productName} />
      <ItemInfo className="mo:flex mo:flex-col" label={t("Owner Address")} text={data.ownerAddress} link={genScanUrl('address',data.ownerAddress)} tip={t('Trust Labels are minted by their owners. Owner Addresses stand for verified identity credentials for the label owners.')} />
      <ItemInfo label={t("Product Model")} text={obj['Product Model']} />
      <ItemInfo className="mo:flex mo:flex-col" label={t("Product Unique Identifier")} text={obj['VIN']} link={`/car?vin=${obj['VIN']}`} tip={t('The unique identifier number or code for the labelled product, typically a VIN code for the vehicle.')} />
      <ItemInfo label={t("Label Type")} text={obj['Label Type']} tip={t('PCF Type stands for Product Carbon Footprint.')} />
      <ItemInfo label={t("Data Scope")} text={'Cradle-to-Grave'} tip={t('The life cycle scope that the PCF data covers, typically Cradle-to-Grave (full-life-cycle) or Cradle-to-Gate.')} />
      <ItemInfo label={t("Print Timestamp")} text={moment(data.labelPrintDate*1000).format('YYYY-MM-DD HH:mm:ss')} />
    </div>
  )
}


export function Blockchain() {
  const { query } = useRouter();
  const tokenId: string = query.tokenId as string;
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { value, loading }:any = useAsyncM(
    noArgs(() => getSbtDetail(tokenId), [tokenId]),
    [tokenId]
  );
  const columns = [
    {
      title: t('Activity Hash'),
      dataIndex: 'txHash',
      tip: t('The cryptographic hash of an on-chain activity can be used to identify and verify the transaction information on the blockchain.'),
      render: (text:string)=>{
        return(
          <Link className="text-green-2" target="_blank" href={genScanUrl('tx',text)}>{shortStr(text)}</Link>
        )
      }
    },
    {
      title: t('Action'), dataIndex: 'action',tip: t('The business implication of the on-chain activity'),
      render: (text:string)=>{
        return text?t(titleCase(text)):''
      }
    },
    {title: t('Age'), dataIndex: 'blockTimestamp'},
    {title: t('Blockchain'), dataIndex: 'chain',tip:t('The name of the blockchain and the code for its network or version'),
      render:(text:string)=>{
        return <span className="whitespace-nowrap">{text}</span>
      }
    },
    {
      title: t('From'),
      dataIndex: 'fromAddress',
      render: (text:string)=>{
        return(
          <Link className="text-green-2" target="_blank" href={genScanUrl('address',text)}>{shortStr(text)}</Link>
        )
      }
    },
    {
      title: t('To'),
      dataIndex: 'toAddress',
      render: (text:string)=>{
        return(
          <Link className="text-green-2" target="_blank" href={genScanUrl('address',text)}>{shortStr(text)}</Link>
        )
      }
    }
  ]
  const polygonscanDesc = t(
    "You can also view raw data on the Polygon Blockchain via {{value}}. Notice polygonscan’s service may not be accessible from certain countries or regions."
  ).replace(
    "{{value}}",
    `<span class="text-green-2">polygonscan</span>`
  )
  return (
    <div className="bg-gray-16 flex-1 flex flex-col w-full min-h-fit text-black">
      <HeaderLayout className="" tits={t("Trust Label NFT Viewer")}>
        {loading ? (
          <Loading />
        ) : (
          <div className="w-full p-5 max-w-[1480px] mx-auto mo:p-0">
            <div className="flex mo:flex-col">
              <div className="bg-white flex justify-center px-10 flex items-center rounded-lg mo:h-[21rem] mo:px-0">
                <ProductQrcode className="" />
              </div>
              <div className="flex flex-col flex-1 ml-5 mo:ml-0 mo:mt-5">
                <div className="flex mb-5">
                  <VscVerified className="text-3xl mr-2 mo:mt-[-0.45rem] mo:text-[2.8rem]" />
                  <div className="flex text-lg mo:flex-col">
                    <div className="flex flex-col">
                      <span className="w-full">
                        {t('Automotive Carbon Footprint Trust Label')}
                        {
                          isMobile && <span className="font-medium ml-3">#1940327340</span>
                        }
                      </span>
                      {
                        !isMobile && <p>#1940327340</p>
                      }
                    </div>
                    <span className="text-sm ml-3 mo:ml-0 mt-[0.3rem] mo:mt-2 mo:text-gray-6">{t('Certified by AIAG')}</span>
                  </div>
                </div>
                <div className="bg-white px-12 py-5 rounded-lg mo:pl-10 mo:pr-3">
                  <h5 className="text-xl mb-3.5 font-bold mo:text-lg">{t('Label Details')}</h5>
                  <CardInfo data={value} />
                </div>
              </div>
            </div>

            <div className="bg-white mt-5 px-8 py-5 rounded-lg mo:px-4">
              <h3 className="font-bold">{t('Item Activity on Blockchain')}</h3>
              <div className="w-full overflow-hidden overflow-x-auto mo:pb-5">
                <Table className="mt-5 mo:w-[52rem]" columns={columns} data={value.activityList} />
              </div>
            </div>
            <div className="bg-white mt-5 px-8 py-5 rounded-lg leading-[1.8rem] mo:leading-[1.6875rem] mo:px-4 mo:text-[.9375rem]">
              <SVGAICD fill="#227A30" className="w-[6.125rem] mb-5" />
              <p className="font-bold">
                {t('Database powered by:')}
              </p>
              <p className="text-green-2">
                <Link href="https://aicd.gtech.world/" target="_blank">{t('Automotive Industry Carbon Database')}</Link>
              </p>
              <p>
                {t('AICD is the global, industry-level database designed for long-term carbon emission performance traceability and visibility under the AIAG Carbon Initiative. AICD offers public view mode and supply chain view mode (Traceability).')}
              </p>
            </div>
            <div className="bg-white mt-5 px-8 py-5 rounded-lg leading-[1.8rem] mo:leading-[1.6875rem] mo:px-4 mo:text-[.9375rem]">
              <SVGPolygon className="mb-5" />
              <p className="font-bold">
                {t('Blockchain powered by:')}
              </p>
              <p className="text-green-2">
                <Link href="https://polygon.technology/" target="_blank">{t('Polygon Blockchain')}</Link>
              </p>
              <p dangerouslySetInnerHTML={{ __html: polygonscanDesc }}>
              </p>
            </div>
          </div>
        )}
      </HeaderLayout>
    </div>
  );
}

export default Blockchain;
