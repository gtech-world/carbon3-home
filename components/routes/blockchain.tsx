import { useIsMobile } from "@components/common/context";
import { Loading } from "@components/common/loading";
import { ProductQrcode } from "@components/common/productQrcode";
import { SCAN_BASE } from "@lib/env";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { useT } from "@lib/hooks/useT";
import { getSbtDetail, noArgs } from "@lib/oldHttp";
import { genScanTokenUrl, genScanUrl, shortStr, titleCase } from "@lib/utils";
import classNames from "classnames";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { VscQuestion, VscVerified } from "react-icons/vsc";
import SVGAICP from "/public/AICP.svg";
import SVGPolygon from "/public/polygon.svg";
import { Table } from "@components/common/table";

function ItemInfo(p: { label: string; text: string; link?: string; tip?: any; className?: string }) {
  return (
    <div
      className={classNames(
        "w-full  text-base whitespace-normal leading-[1.8rem] mo:text-[.9375rem] mo:leading-[1.6875rem] relative",
        {
          "text-green-2": p.link,
          "text-gray-6": !p.link,
        },
        p.className,
      )}>
      {!!p.tip && (
        <VscQuestion
          data-tooltip-id="tooltip"
          data-tooltip-content={p.tip}
          className="absolute text-black left-[-1.6rem] text-xl top-[0.29rem]"
        />
      )}
      <span className="font-bold text-black">{p.label}:</span>{" "}
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
interface LabelDetail {
  data: {
    sbtTokenId: string;
    labelNumber: string;
    productName: string;
    ownerAddress: string;
    metadata: string;
    labelPrintDate: number;
  };
}
function CardInfo(p: LabelDetail) {
  const { data } = p;
  const attributes = JSON.parse(data.metadata)?.attributes;
  const obj: any = {};
  attributes &&
    attributes.map((v: any) => {
      obj[v.trait_type] = v.value;
    });
  const { t } = useT();
  return (
    <div className="break-all">
      <ItemInfo
        label={t("SBT Token ID")}
        text={data.sbtTokenId}
        link={genScanTokenUrl(data.sbtTokenId)}
        tip={t(
          "SBTs are non-transferable and immutable digital credentials representing the vehicle’s carbon footprint label. Every SBT has a unique token ID.",
        )}
      />
      <ItemInfo label={t("Label No.")} text={data.labelNumber} />
      <ItemInfo label={t("Label Owner")} text={data.productName} />
      <ItemInfo
        className="mo:flex mo:flex-col"
        label={t("Owner Address")}
        text={data.ownerAddress}
        link={genScanUrl("address", data.ownerAddress)}
        tip={t(
          "Trust Labels are minted by their owners. Owner Addresses stand for verified identity credentials for the label owners.",
        )}
      />
      <ItemInfo label={t("Product Model")} text={obj["Product Model"]} />
      <ItemInfo
        className="mo:flex mo:flex-col"
        label={t("Product Unique Identifier")}
        text={obj["VIN"]}
        link={`/car?vin=${obj["VIN"]}`}
        tip={t("The unique identifier number or code for the labelled product, typically a VIN code for the vehicle.")}
      />
      <ItemInfo
        label={t("Label Type")}
        text={obj["Label Type"]}
        tip={t("PCF Type stands for Product Carbon Footprint.")}
      />
      <ItemInfo
        label={t("Data Scope")}
        text={"Cradle-to-Grave"}
        tip={t(
          "The life cycle scope that the PCF data covers, typically Cradle-to-Grave (full-life-cycle) or Cradle-to-Gate.",
        )}
      />
      <ItemInfo label={t("Print Timestamp")} text={moment(data.labelPrintDate * 1000).format("YYYY-MM-DD HH:mm:ss")} />
    </div>
  );
}

export function Blockchain() {
  const { query } = useRouter();
  const tokenId: string = query.tokenId as string;
  const { t } = useT();
  const isMobile = useIsMobile();
  const { value, loading }: any = useAsyncM(
    noArgs(() => getSbtDetail(tokenId), [tokenId]),
    [tokenId],
  );
  const data = useMemo(() => {
    const obj = {
      activityList: [],
      metadata: "{}",
    };
    return Object.assign(obj, value);
  }, [value]);
  const columns = [
    {
      title: t("Activity Hash"),
      dataIndex: "txHash",
      tip: t(
        "The cryptographic hash of an on-chain activity can be used to identify and verify the transaction information on the blockchain.",
      ),
      render: (text: string) => {
        return (
          <Link className="text-green-2" target="_blank" href={genScanUrl("tx", text)}>
            {shortStr(text)}
          </Link>
        );
      },
    },
    {
      title: t("Action"),
      dataIndex: "action",
      tip: t("The business implication of the on-chain activity"),
      render: (text: string) => {
        return text ? t(titleCase(text)) : "";
      },
    },
    {
      title: t("Age"),
      dataIndex: "blockTimestamp",
      render: (text: number) => {
        return moment(text * 1000).fromNow();
      },
    },
    {
      title: t("Blockchain"),
      dataIndex: "chain",
      tip: t("The name of the blockchain and the code for its network or version"),
      render: (text: string) => {
        return <span className="whitespace-nowrap">{text}</span>;
      },
    },
    {
      title: t("From"),
      dataIndex: "fromAddress",
      render: (text: string) => {
        return (
          <Link className="text-green-2" target="_blank" href={genScanUrl("address", text)}>
            {shortStr(text)}
          </Link>
        );
      },
    },
    {
      title: t("To"),
      dataIndex: "toAddress",
      render: (text: string) => {
        return (
          <Link className="text-green-2" target="_blank" href={genScanUrl("address", text)}>
            {shortStr(text)}
          </Link>
        );
      },
    },
  ];
  const polygonscanDesc = t(
    "You can also view raw data on the Polygon Blockchain via {{value}}. Notice polygonscan’s service may not be accessible from certain countries or regions.",
  ).replace(
    "{{value}}",
    // `<a href="https://polygonscan.com/" target="_blank" rel="noreferrer" class="text-green-2">polygonscan</a>`
    `<a href="${SCAN_BASE}" target="_blank" rel="noreferrer" class="text-green-2">polygonscan</a>`,
  );
  return (
    <div className="flex flex-col flex-1 w-full text-black bg-gray-16 min-h-fit">
      <header className="bg-green-2 text-white flex items-center h-[4.25rem]  w-full">
        <SVGAICP fill="#29953A" className="h-[2.25rem] mo:h-[1.75rem] fill-white ml-[3.125rem] mo:ml-4" />
        <div className="w-[5.9rem] mo:w-[4.5rem] ml-4 mo:ml-3 text-base mo:text-[0.8rem] mo:leading-[1.125rem]">
          {t("Trust Label NFT Viewer")}
        </div>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full py-5 px-[3.125rem] max-w-[1480px] mx-auto mo:p-5">
          <div className="flex mo:flex-col">
            <div className="bg-white flex justify-center px-10 items-center rounded-lg mo:h-[21rem] mo:px-0">
              <ProductQrcode className="" />
            </div>
            <div className="flex flex-col flex-1 ml-5 mo:ml-0 mo:mt-5">
              <div className="flex mb-5">
                <VscVerified className="text-3xl mr-2 mo:mt-[-0.45rem] mo:text-[2.8rem]" />
                <div className="flex text-lg mo:flex-col">
                  <div className="flex flex-col">
                    <span className="w-full font-bold">
                      {t("Automotive Carbon Footprint Trust Label")}
                      {isMobile && <span className="ml-3 font-medium">#1940327340</span>}
                    </span>
                    {!isMobile && <p>#1940327340</p>}
                  </div>
                  <span className="text-sm ml-3 mo:ml-0 mt-[0.3rem] mo:mt-2 mo:text-gray-6">
                    {t("Certified by AIAG")}
                  </span>
                </div>
              </div>
              <div className="px-12 py-5 bg-white rounded-lg mo:pl-10 mo:pr-3">
                <h5 className="text-xl mb-3.5 font-bold mo:text-lg">{t("Label Details")}</h5>
                <CardInfo data={data} />
              </div>
            </div>
          </div>

          <div className="px-8 py-5 mt-5 bg-white rounded-lg mo:px-4">
            <h3 className="font-bold">{t("Item Activity on Blockchain")}</h3>
            <div className="w-full overflow-hidden overflow-x-auto mo:pb-5">
              <Table className="mt-5 mo:w-[52rem]" columns={columns} data={data.activityList} />
            </div>
          </div>
          <div className="bg-white mt-5 px-8 py-5 rounded-lg leading-[1.8rem] mo:leading-[1.6875rem] mo:px-4 mo:text-[.9375rem]">
            <SVGAICP fill="#29953A" className="w-[6.125rem] mb-5" />
            <p className="font-bold">{t("Platform powered by:")}</p>
            <p className="text-green-2">
              <Link href="https://aicp.gtech.world/" target="_blank">
                {t("Automotive Industry Carbon Platform")}
              </Link>
            </p>
            <p>
              {t(
                "AICP is the global, industry-level platform designed for long-term carbon emission performance traceability and visibility under the AIAG Carbon Initiative. AICP offers public view mode and supply chain view mode.",
              )}
            </p>
          </div>
          <div className="bg-white mt-5 px-8 py-5 rounded-lg leading-[1.8rem] mo:leading-[1.6875rem] mo:px-4 mo:text-[.9375rem]">
            <SVGPolygon className="mb-5" />
            <p className="font-bold">{t("Blockchain powered by:")}</p>
            <p className="text-green-2">
              {/* <Link href="https://polygon.technology/" target="_blank">{t('Polygon Blockchain')}</Link> */}
              {t("Polygon Blockchain")}
            </p>
            <p dangerouslySetInnerHTML={{ __html: polygonscanDesc }}></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blockchain;
