import { getUserData } from "@components/common/context";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  ActivityType,
  InventoryProductProcess,
  Product,
  ProductBom,
  ProductProcess, SbtDetail,
  SbtEmissionInventory,
  SbtInfo,
  UserData,
} from "./@types/type";
import { API_BASE } from "./env";
import { sleep } from "./utils";

function creatUrl(path: `/${string}`) {
  return `${API_BASE}${path}`;
}

export interface Res<T> {
  code: number;
  message: string;
  data: T;
}

// function getResData<T>(res: AxiosResponse<Res<T>>) {
//   if (res.data.code === 200) return res.data.data as T;
//   throw { _type: "ResError", ...res.data };
// }

function getData<T>(res: AxiosResponse<T>) {
  const mRes = res.data as { code: number; msg: string; data: T };
  if (!mRes) return undefined;
  if (mRes.code && mRes.code !== 200) throw mRes.msg;
  return res.data;
}

export function noArgs<T>(fn: () => Promise<T>, deeps: any[]) {
  return () => {
    if (deeps.some((item) => !item)) return sleep();
    return fn();
  };
}

export async function login(name: string, password: string) {
  const res = await axios.post<UserData>(creatUrl("/api/v1/base/login"), { name, password });
  return getData(res);
}

function authConfig(): AxiosRequestConfig {
  const ud = getUserData();
  if (!ud) return {};
  return { headers: { Authorization: `Bearer ${ud.loginToken}` } };
}

export async function getProductList() {
  const res = await axios.get<Product[]>(creatUrl("/api/v1/npi/product/list"), authConfig());
  return getData(res);
}

export async function getProductPcfAccountable(product_id: number) {
  const res = await axios.get<boolean>(creatUrl(`/api/v1/npi/product/${product_id}/pcf_accountable`), authConfig());
  return getData(res);
}

export async function getProductBomList(product_id: number) {
  const res = await axios.get<ProductBom[]>(creatUrl(`/api/v1/npi/product/${product_id}/bom/list`), authConfig());
  return getData(res);
}

export async function getProductBomActivityTypes(product_bom_id: number | string) {
  const res = await axios.get<ActivityType[]>(
    creatUrl(`/api/v1/npi/product_bom/${product_bom_id}/activity_types`),
    authConfig()
  );
  return getData(res);
}

export async function getProductActivityDefination(product_id: number) {
  const res = await axios.get<ProductProcess[]>(creatUrl(`/api/v1/npi/product_process/query`), {
    ...authConfig(),
    params: {
      product_id,
      include_activity_types: true,
    },
  });
  return getData(res);
}

export async function getVINCodes() {
  const res = await axios.get<string[]>(creatUrl("/api/v1/inventory/product/serial_number/list"), authConfig());
  return res.data;
}

export async function getProductByVIN(vin: string | number) {
  const res = await axios.get<Product>(creatUrl(`/api/v1/npi/product/serial_number/${vin}/info`), authConfig());
  return getData(res);
}

export async function getPCFInventory(vin: string | number) {
  const res = await axios.get<InventoryProductProcess[]>(
    creatUrl(`/api/v1/inventory/product/${vin}/inventory`),
    authConfig()
  );
  return getData(res);
}

//
export async function getSbtInfo(vin: string | number) {
  const res = await axios.get<SbtInfo>(creatUrl(`/api/v1/sbt/${vin}/info`));
  return getData(res);
}

export async function getSbgEmissionInventory(vin: string | number) {
  const res = await axios.get<SbtEmissionInventory[]>(creatUrl(`/api/v1/sbt/${vin}/emission/inventory`));
  return getData(res);
}
export async function getSbtDetail(tokenId: string | number) {
  const res = await axios.get<SbtDetail>(creatUrl(`/api/v1/sbt/token/${tokenId}/detail`));
  return getData(res);
}


// export async function getSbtDetail(product_bom_id: number | string) {
//   const res = await axios.get<ActivityType[]>(
//     creatUrl(`/api/v1/sbt/token/${product_bom_id}/detail`),
//     // authConfig()
//   );
//   return getData(res);
// }
