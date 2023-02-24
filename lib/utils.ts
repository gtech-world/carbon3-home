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
  return new Date(t).toLocaleString().replaceAll("/", "-");
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
