import { getUserData } from "@components/common/context";
import axios, { AxiosRequestConfig } from "axios";
import { API_BASE } from "./env";
import { ActivityType, Product, ProductBom, ProductProcess, UserData } from "./type";

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

// function getData<T>(res: AxiosResponse<T>) {
//   return res.data;
// }

export async function login(name: string, password: string) {
  const res = await axios.post<UserData>(creatUrl("/api/v1/base/login"), { name, password });
  return res.data;
}

function authConfig(): AxiosRequestConfig {
  const ud = getUserData();
  if (!ud) return {};
  return { headers: { Authorization: `Bearer ${ud.loginToken}` } };
}

export async function getProductList() {
  const res = await axios.get<Product[]>(creatUrl("/api/v1/npi/product/list"), authConfig());
  return res.data;
}

export async function getProductPcfAccountable(product_id: number) {
  const res = await axios.get<boolean>(creatUrl(`/api/v1/npi/product/${product_id}/pcf_accountable`), authConfig());
  return res.data;
}

export async function getProductBomList(product_id: number) {
  const res = await axios.get<ProductBom[]>(creatUrl(`/api/v1/npi/product/${product_id}/bom/list`), authConfig());
  return res.data;
}

export async function getProductBomActivityTypes(product_bom_id: number | string) {
  const res = await axios.get<ActivityType[]>(
    creatUrl(`/api/v1/npi/product_bom/${product_bom_id}/activity_types`),
    authConfig()
  );
  return res.data;
}

export async function getProductActivityDefination(product_id: number) {
  const res = await axios.get<ProductProcess[]>(creatUrl(`/api/v1/npi/product_process/query`), {
    ...authConfig(),
    params: {
      product_id,
      include_activity_types: true,
    },
  });
  return res.data
}
