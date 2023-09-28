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

function getData<T>(res: AxiosResponse<Res<T>>) {
  const mRes = res.data as { code: number; message: string; data: T };
  if (!mRes || mRes.code !== 100000) throw mRes.message;
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
  const res = await axios.post<Res<UserData>>(creatUrl("/api/base/login"), {
    name,
    password,
  });
  return getData(res);
}

function authConfig(): AxiosRequestConfig {
  const ud = getUserData();
  if (!ud) return {};
  return { headers: { Authorization: `Bearer ${ud.loginToken}` } };
}

export async function getProductList() {
  const res = await axios.get<Res<Product[]>>(creatUrl("/api/npi/product/list"), authConfig());
  return getData(res);
}

export async function getProductPcfAccountable(product_id: number) {
  const res = await axios.get<Res<boolean>>(creatUrl(`/api/npi/product/${product_id}/pcf_accountable`), authConfig());
  return getData(res);
}

export async function getProductBomList(product_id: number) {
  const res = await axios.get<Res<ProductBom[]>>(creatUrl(`/api/npi/product/${product_id}/bom/list`), authConfig());
  return getData(res);
}

export async function getProductBomActivityTypes(product_bom_id: number | string) {
  const res = await axios.get<Res<ActivityType[]>>(
    creatUrl(`/api/npi/product_bom/${product_bom_id}/activity_types`),
    authConfig(),
  );
  return getData(res);
}

export async function getProductActivityDefination(product_id: number) {
  const res = await axios.get<Res<ProductProcess[]>>(creatUrl(`/api/npi/product_process/query`), {
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
  const res = await axios.get<Res<Product>>(creatUrl(`/api/npi/product/serial_number/${vin}/info`), authConfig());
  return getData(res);
}

export async function getPCFInventory(vin: string | number) {
  const res = await axios.get<Res<InventoryProductProcess[]>>(
    creatUrl(`/api/inventory/product/${vin}/inventory`),
    authConfig(),
  );
  return getData(res);
}

export async function getSbtInfo(vin: string | number) {
  const res = await axios.get<Res<SbtInfo>>(creatUrl(`/api/sbt/token/uuid/${vin}`));
  return getData(res);
}

export async function getSbgEmissionInventory(vin: string | number) {
  const res = await axios.get<Res<SbtEmissionInventory[]>>(creatUrl(`/api/sbt/${vin}/emission/inventory`));
  return getData(res);
}
export async function getSbtDetail(tokenId: string | number) {
  const res = await axios.get<Res<SbtDetail>>(creatUrl(`/api/sbt/token/${tokenId}/detail`));
  return getData(res);
}

export async function getLcaModelList({ pgNum, productId }: any) {
  const res = await axios.get(
    creatUrl(`/api/product-lca/model/query?pageNum=${pgNum}&pageSize=10&productId=${productId > -1 ? productId : ""}`),
    authConfig(),
  );
  return getData(res);
}
export async function getResultList(pgNum: number) {
  const res = await axios.get<Res<InventoryController.InventoryList>>(
    creatUrl(`/api/inventory/list/?pageNum=${pgNum}&pageSize=10`),
    authConfig(),
  );
  return getData(res);
}
export async function getLcaResultDetail(loadNumber: any) {
  if (!loadNumber) return;

  const res = await axios.get<Res<InventoryController.InventoryDetail>>(
    creatUrl(`/api/inventory/item/${loadNumber}/detail`),
    authConfig(),
  );
  return getData(res);
}
export async function updateLcaModelState(id: number, state: number) {
  const res = await axios.post(creatUrl(`/api/product-lca/model/state/${id}/update/${state}`), null, authConfig());
  return getData(res);
}
export async function uploadLcaModel(formData: FormData, config: AxiosRequestConfig = {}) {
  let headers = authConfig();
  if (headers.headers) {
    headers.headers["Content-Type"] = "multipart/form-data";
  }
  const res = await axios.post<Res<number>>(creatUrl(`/api/product-lca/model/upload`), formData, {
    ...headers,
    ...config,
  });
  return getData(res);
}

export async function getLcaProductDetailList(id: number) {
  const res = await axios.get<Res<any>>(creatUrl(`/api/product-lca/model/${id}/detail`), authConfig());
  return getData(res);
}

export async function getProductDetailList(id: number) {
  const res = await axios.get<Res<any>>(creatUrl(`/api/product-system/${id}/detail`), authConfig());
  return getData(res);
}

export async function getLcaProductTypeList() {
  const res = await axios.get<Res<any>>(creatUrl(`/api/product/category/query`), authConfig());
  return getData(res);
}
export async function upsertLcaProduct({
  id,
  name,
  description,
  modelId,
}: {
  id?: number;
  name?: string;
  description?: string;
  modelId?: number;
}) {
  const res = await axios.post(
    creatUrl(`/api/product-system/upsert`),
    { id, name, description, modelId },
    authConfig(),
  );
  return getData(res);
}
export async function getLcaProductList(pgNum: number) {
  const res = await axios.get<Res<any>>(
    creatUrl(`/api/product-system/list/?pageNum=${pgNum}&pageSize=10`),
    authConfig(),
  );
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
  const res = await axios.get<Res<string>>(creatUrl(`/api/product-lca/model/${id}/descriptors`), authConfig());
  return JSON.parse(getData(res) as string);
}

export async function getLcaModelCategories(id: string) {
  const res = await axios.get<Res<string>>(creatUrl(`/api/product-lca/model/${id}/categories`), authConfig());
  return JSON.parse(getData(res) as string);
}

export async function getLcaModelNavData(id: string) {
  const categories = await getLcaModelCategories(id);
  const descriptors = await getLcaModelDescirptors(id);
  return [categories, descriptors];
}
export async function getLcaModelItem(id: string, type: string, typeId: number | string, fromMethod: boolean = false) {
  const res = await axios.get<Res<string>>(
    creatUrl(`/api/product-lca/model/${id}/item/${type}/${typeId}/info?fromMethod=${fromMethod}`),
    authConfig(),
  );
  return JSON.parse(getData(res) as string);
}

export async function exportLcaResultExcel(loadNumber: any) {
  let config = authConfig();
  const res = await axios.get<string>(
    creatUrl(`/api/inventory/item/${loadNumber}/export`),
    Object.assign(config, { responseType: "blob" }),
  );
  return res;
}

export async function authGetResData<T>(path: Parameters<typeof creatUrl>[0], params: any = {}) {
  const res = await axios.get<Res<T>>(creatUrl(path), { ...authConfig(), params });
  return getData(res);
}

export async function getProductSystemAllList() {
  const res = await axios.get<Res<InventoryController.InventoryProductSystemList[]>>(
    creatUrl(`/api/product-system/all`),
    authConfig(),
  );
  return getData(res);
}

export async function uploadResult(obj: InventoryController.uploadResult) {
  const res = await axios.post<Res<any>>(creatUrl("/api/inventory/item/upload"), obj, authConfig());
  return getData(res);
}

export async function getAddRealDataList<T>(id: T) {
  const res = await axios.get<Res<InventoryController.InventoryRealDataAllList>>(
    creatUrl(`/api/product-system/${id}/params`),
    authConfig(),
  );
  return getData(res);
}

export async function upFile(file: File, config: AxiosRequestConfig = {}) {
  const form = new FormData();
  form.append("file", file);
  form.append("name", file.webkitRelativePath);
  const res = await axios.post<Res<number>>(creatUrl("/api/common/file/upload"), form, { ...authConfig(), ...config });
  return getData(res);
}

export type CreateVerifyRecordConfig = {
  name: string;
  loadNumber: string;
  description: string;
  fileList: number[];
  verifyUserId: number;
};
export async function createVerifyRecord(config: CreateVerifyRecordConfig) {
  const res = await axios.post<Res<any>>(creatUrl("/api/verifyRecord/create"), config, authConfig());
  return getData(res);
}

export async function updateVerifyRecord(id: number, config: Partial<CreateVerifyRecordConfig>) {
  const res = await axios.post<Res<any>>(creatUrl(`/api/verifyRecord/${id}/update`), config, authConfig());
  return getData(res);
}

export async function verifyVerifyRecord(
  id: number,
  params: {
    functionalUnit?: string;
    evaluationBoundary?: string;
    evaluationBasis?: string;
    evaluationExpireTime?: string;
    fileList: number[];
    state: boolean;
  },
) {
  const res = await axios.post<Res<any>>(creatUrl(`/api/verifyRecord/${id}/verify`), { ...params }, authConfig());
  return getData(res);
}
