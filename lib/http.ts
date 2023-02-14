import { UserData } from "./type";
import { API_BASE } from "./env";
import axios, { AxiosResponse } from "axios";

function creatUrl(path: `/${string}`) {
  return `${API_BASE}${path}`;
}

export interface Res<T> {
  code: number;
  message: string;
  data: T;
}

function getResData<T>(res: AxiosResponse<Res<T>>) {
  if (res.data.code === 200) return res.data.data as T;
  throw { _type: "ResError", ...res.data };
}

function getData<T>(res: AxiosResponse<T>) {
  return res.data;
}

export function login(name: string, password: string) {
  return axios.post<UserData>(creatUrl("/api/v1/base/login"), { name, password }).then(getData);
}
