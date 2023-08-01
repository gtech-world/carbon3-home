import { AxiosError } from "axios";
import _, { toInteger } from "lodash";
import { LABEL_CONTRACT, SCAN_BASE } from "./env";

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
export function shortStr(str: string, startLen: number = 6, endLen: number = 6) {
  const start = str?.substring(0, startLen) || "";
  const end = str?.substring(str.length - endLen) || "";
  return `${start}...${end}`;
}

export function titleCase(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}
export function handleCarbonStr(str: string) {
  return str.replace("Digital3", `Digital<sup>3</sup>`);
}
export const scrollToAnchor = (anchorName: any) => {
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export const get = (obj: any, path: string) => {
  let temp = obj;
  path.split(".").forEach((key) => {
    temp = temp[key];
  });
  return temp;
};

export const parseRefJson = (_obj: any) => {
  const obj = _.cloneDeep(_obj);
  const cache: any = {};
  const cacheGetRef = (ref: string, parents: any[] = []) => {
    const path = ref.replaceAll("[", ".").replaceAll("]", "").replace("$.", "");
    // console.info("path:", path,"ref:",ref);
    if (path == "..") return parents[parents.length - 2];
    if (path == "../..") return parents[parents.length - 3];
    if (!path || path === "$") return obj;
    if (cache[path]) return cache[path];
    let refValue = _.get(obj, path);
    if (refValue) {
      if (refValue["$ref"]) {
        const keys = _.dropRight(path.split("."));
        const _parents = [obj].concat(keys.map((_i, index) => _.get(obj, keys.slice(0, index + 1).join("."))));
        refValue = cacheGetRef(refValue["$ref"], _parents);
      }
      cache[path] = refValue;
      return refValue;
    }
    const keys = path.split(".");
    if (keys.length === 1) {
      console.info("parseRefJSON: Error:cacheGetRef:", keys[0]);
      return {};
    }
    refValue = cacheGetRef(keys.slice(0, keys.length - 1).join("."), parents)[keys[keys.length - 1]];
    cache[path] = refValue;
    return cache[path];
  };

  const uniqDeepMap = new Map<any, boolean>();
  const deepRefJson = (json: any, parents: any[] = []) => {
    uniqDeepMap.set(json, true);
    for (const key of _.keys(json)) {
      const value = json[key];
      if (typeof value === "object" && value["$ref"] && typeof value["$ref"] === "string") {
        const ref = value["$ref"] as string;
        // console.info("ref:", ref);
        json[key] = cacheGetRef(ref, parents.concat([json]));
      }
      if (typeof json[key] === "object" && !uniqDeepMap.has(json[key])) {
        deepRefJson(json[key], parents.concat([json]));
      }
    }
  };
  deepRefJson(obj);
  // console.info("obj:", obj);
  return obj;
};

export function ftmMilliTime(time: number | string = new Date().getTime()) {
  const mTime = typeof time === "string" ? toInteger(time) : time;
  return new Date(mTime).toLocaleString().replaceAll("/", "-");
}
