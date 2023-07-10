import { getUserData } from "@components/common/context";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  ActivityType,
  InventoryProductProcess,
  Product,
  ProductBom,
  ProductProcess,
  SbtDetail,
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
  const mRes = res.data as { code: number; message: string; data: T };
  if (!mRes) return undefined;
  if (mRes.code && mRes.code !== 100000) throw mRes.message;
  // @ts-ignore
  return res.data?.data;
}

export function noArgs<T>(fn: () => Promise<T>, deeps: any[]) {
  return () => {
    if (deeps.some((item) => !item)) return sleep();
    return fn();
  };
}

export async function login(name: string, password: string) {
  const res = await axios.post<UserData>(creatUrl("/api/base/login"), { name, password });
  return getData(res);
}

function authConfig(): AxiosRequestConfig {
  const ud = getUserData();
  if (!ud) return {};
  return { headers: { Authorization: `Bearer ${ud.loginToken}` } };
}

export async function getProductList() {
  const res = await axios.get<Product[]>(creatUrl("/api/npi/product/list"), authConfig());
  return getData(res);
}

export async function getProductPcfAccountable(product_id: number) {
  const res = await axios.get<boolean>(creatUrl(`/api/npi/product/${product_id}/pcf_accountable`), authConfig());
  return getData(res);
}

export async function getProductBomList(product_id: number) {
  const res = await axios.get<ProductBom[]>(creatUrl(`/api/npi/product/${product_id}/bom/list`), authConfig());
  return getData(res);
}

export async function getProductBomActivityTypes(product_bom_id: number | string) {
  const res = await axios.get<ActivityType[]>(
    creatUrl(`/api/npi/product_bom/${product_bom_id}/activity_types`),
    authConfig()
  );
  return getData(res);
}

export async function getProductActivityDefination(product_id: number) {
  const res = await axios.get<ProductProcess[]>(creatUrl(`/api/npi/product_process/query`), {
    ...authConfig(),
    params: {
      product_id,
      include_activity_types: true,
    },
  });
  return getData(res);
}

export async function getVINCodes() {
  const res = await axios.get<string[]>(creatUrl("/api/inventory/product/serial_number/list"), authConfig());
  return res.data;
}

export async function getProductByVIN(vin: string | number) {
  const res = await axios.get<Product>(creatUrl(`/api/npi/product/serial_number/${vin}/info`), authConfig());
  return getData(res);
}

export async function getPCFInventory(vin: string | number) {
  const res = await axios.get<InventoryProductProcess[]>(
    creatUrl(`/api/inventory/product/${vin}/inventory`),
    authConfig()
  );
  return getData(res);
}

//
export async function getSbtInfo(vin: string | number) {
  const res = await axios.get<SbtInfo>(creatUrl(`/api/sbt/${vin}/info`));
  return getData(res);
}

export async function getSbgEmissionInventory(vin: string | number) {
  const res = await axios.get<SbtEmissionInventory[]>(creatUrl(`/api/sbt/${vin}/emission/inventory`));
  return getData(res);
}
export async function getSbtDetail(tokenId: string | number) {
  const res = await axios.get<SbtDetail>(creatUrl(`/api/sbt/token/${tokenId}/detail`));
  return getData(res);
}

export async function getLcaModelList({ pgNum, productId }: any) {
  const res = await axios.get(
    creatUrl(`/api/product-lca/model/query?pageNum=${pgNum}&pageSize=10&productId=${productId > -1 ? productId : ""}`),
    authConfig()
  );
  return getData(res);
}
export async function getLcaResultList({ pgNum }: any) {
  const res = await axios.get(creatUrl(`/api/product-lca/result/query?pageNum=${pgNum}&pageSize=10`), authConfig());
  return getData(res);
}
export async function getLcaResultDetail(id: any) {
  const res = await axios.get(creatUrl(`/api/product-lca/result/detail/${id}`), authConfig());
  return getData(res);
}
export async function updateLcaModelState(id: number, state: number) {
  const res = await axios.post(creatUrl(`/api/product-lca/model/state/${id}/update/${state}`), null, authConfig());
  return getData(res);
}
export async function uploadLcaModel(formData: FormData) {
  let headers = authConfig();
  if (headers.headers) {
    headers.headers["Content-Type"] = "multipart/form-data";
  }
  try {
    return await axios.post(creatUrl(`/api/product-lca/model/upload`), formData, headers);
  } catch (e) {
    console.log(e);
  }
}
export async function getLcaProductTypeList() {
  const res = await axios.get(creatUrl(`/api/product/category/query`), authConfig());
  return getData(res);
}
export async function insertLcaProduct({
  name,
  categoryId,
  orgId,
  description,
}: {
  name: string;
  categoryId: number;
  orgId: number;
  description: string;
}) {
  const res = await axios.post(
    creatUrl(`/api/product/upsert`),
    { name, categoryId, orgId, partNumber: "1", imageUrl: "", description },
    authConfig()
  );
  return getData(res);
}
export async function getLcaProductList() {
  const res = await axios.get(creatUrl(`/api/product/list?pageSize=500`), authConfig());
  return getData(res);
}
// export async function getSbtDetail(product_bom_id: number | string) {
//   const res = await axios.get<ActivityType[]>(
//     creatUrl(`/api/sbt/token/${product_bom_id}/detail`),
//     // authConfig()
//   );
//   return getData(res);
// }

export async function getLcaModelDescirptors(id: string) {
  const res = await axios.get<string>(creatUrl(`/api/product-lca/model/${id}/descriptors`), authConfig());
  return JSON.parse(getData(res) as string);
}

export async function getLcaModelCategories(id: string) {
  const res = await axios.get<string>(creatUrl(`/api/product-lca/model/${id}/categories`), authConfig());
  return JSON.parse(getData(res));
}

export async function getLcaModelNavData(id: string) {
  const categories = await getLcaModelCategories(id);
  const descriptors = await getLcaModelDescirptors(id);
  return [categories, descriptors];
}
export async function getLcaModelItem(id: string, type: string, typeId: number | string, fromMethod: boolean = false) {
  const res = await axios.get<string>(
    creatUrl(`/api/product-lca/model/${id}/item/${type}/${typeId}/info?fromMethod=${fromMethod}`),
    authConfig()
  );
  return JSON.parse(getData(res));
}

export async function exportLcaResultExcel(id: any) {
  let config = authConfig();

  const res = await axios.get<string>(
    creatUrl(`/api/product-lca/result/${id}/export`),
    Object.assign(config, { responseType: "blob" })
  );
  return res;
}
