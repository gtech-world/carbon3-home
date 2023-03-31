import { AxiosError } from "axios";
import { LABEL_CONTRACT, SCAN_BASE } from "./env";
import numbro from "numbro";

export function getErrorMsg(error: AxiosError | any): string {
  if (!error) return "Unkown Error";
  if (typeof error === "string") return error as string;
  if (error instanceof AxiosError) {
    return error.response?.data?.msg || error.response?.data?.message || error.message || "Unkown Error";
  }
  return error.message || "Unkown Error";
}

export function ftmUTC(t: string) {
  return new Date(t.includes("GMT") ? t : `${t} GMT`).toLocaleString().replaceAll("/", "-");
}

export function parseUTC(t: string) {
  return Date.parse(t.includes("GMT") ? t : `${t} GMT`);
}

export function ftmTimestamp(t: number) {
  return new Date(t * 1000).toLocaleString().replaceAll("/", "-");
}

export function genScanUrl(type: "address" | "token" | "tx", address: string) {
  return `${SCAN_BASE}/${type}/${address}`;
}

export function genScanTokenUrl(tokenId: string) {
  return `${SCAN_BASE}/token/${LABEL_CONTRACT}?a=${tokenId}`;
}

export function ftmCarbonEmission(ce: number | any, space: boolean = false) {
  if (ce === "-") return ce;
  return `${ce}${space ? " " : ""}kg`;
  // const mCe = Math.round(ce);
  // if (mCe < 1000) return `${mCe}g`;
  // if (mCe < 1000) return `${Math.round(mCe / 100) * 0.1}kg`;
  // return `${Math.round(mCe / 10000) * 0.01}t`;
}

export function textTo2(str: string) {
  if (str.includes(" ")) {
    const strMid = Math.round(str.length / 2);
    const tits = str.split(" ");
    let mid = Math.round(tits.length / 2);
    let cLength = 0;
    tits.forEach((t, i) => {
      const lastLength = cLength;
      cLength = t.length + cLength + 1;
      if (cLength > strMid) {
        if (cLength - strMid <= strMid - lastLength) {
          mid = i;
        } else {
          mid = i - 1;
        }
      }
    });
    return [tits.slice(0, mid).join(" "), tits.slice(mid).join(" ")];
  }
  if (str.length < 2) return [str];
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    total += str.charCodeAt(i) > 255 ? 2 : 1;
  }
  let mid = Math.round(str.length / 2);
  let tmp = 0;
  for (let i = 0; i < str.length; i++) {
    tmp += str.charCodeAt(i) > 255 ? 2 : 1;
    if (tmp > total / 2) {
      mid = i;
      break;
    }
  }
  return [str.slice(0, mid), str.slice(mid)];
}

export function sleep(t: number = 0) {
  return new Promise<undefined>((resolve) => {
    setTimeout(() => resolve(undefined), t);
  });
}
export function shortStr(str:string,startLen:number=6,endLen:number=6) {
  const start = str.substring(0,startLen)
  const end = str.substring(str.length-endLen)
  return `${start}...${end}`
}

export function titleCase(str:string) {
  return str.slice(0,1).toUpperCase() +str.slice(1).toLowerCase();
}
