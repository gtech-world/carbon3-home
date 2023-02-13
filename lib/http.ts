import { API_BASE } from "./env";
import { AxiosResponse } from "axios";

function creatUrl(path: `/${string}`) {
  return `${API_BASE}${path}`;
}

export interface Res<T> {
  code: number;
  message: string;
  data: T;
}

function getData<T>(res: AxiosResponse<Res<T>>) {
  if (res.data.code === 200) return res.data.data as T;
  throw { _type: "ResError", ...res.data };
}
