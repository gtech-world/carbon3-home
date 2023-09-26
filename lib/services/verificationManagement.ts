import { getUserData } from "@components/common/context";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE } from "../env";
import { Res } from "@lib/http";

export function createUrl(path: `/${string}`) {
  return `${API_BASE}${path}`;
}

export function authConfig(): AxiosRequestConfig {
  const ud = getUserData();
  if (!ud) return {};
  return { headers: { Authorization: `Bearer ${ud.loginToken}` } };
}

export function getData<T>(res: AxiosResponse<Res<T>>) {
  const mRes = res.data as { code: number; message: string; data: T };
  if (!mRes || mRes.code !== 100000) throw mRes.message;
  return res.data?.data;
}

export async function getVerificationManagementList(pgNum: number) {
  const res = await axios.get<Res<VerificationManagementController.ListPage>>(
    createUrl(`/api/verifyRecord/list/?pageNum=${pgNum}&pageSize=10`),
    authConfig(),
  );
  return getData(res);
}
