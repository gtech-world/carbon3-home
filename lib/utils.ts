import { gunzip } from "zlib";
import { LABEL_CONTRACT, SCAN_BASE } from "./env";

export function getErrorMsg(error: any): string {
  if (!error) return "Unkown Error";
  if (typeof error === "string") return error as string;
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

export function genScanTokenUrl(tokenId: string){
  return `${SCAN_BASE}/token/${LABEL_CONTRACT}?a=${tokenId}`
}
