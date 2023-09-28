import { authConfig, createUrl, getData } from "./verificationManagement";
import { Res } from "../http";
import axios from "axios";

export async function getCarbonTagList(pgNum: number = 0) {
  const res = await axios.get<Res<SbtTokenController.Records>>(
    createUrl(`/api/sbt/token/list/?pageNum=${pgNum}&pageSize=999`),
    authConfig(),
  );
  return getData(res);
}

export async function getSbtUUIDInfo(vin: string | number) {
  const res = await axios.get<Res<SbtTokenController.TagList>>(createUrl(`/api/sbt/token/uuid/${vin}`));
  return getData(res);
}

export async function getSbtDetail(tokenId: string | number) {
  const res = await axios.get<Res<SbtTokenController.SbtNftList>>(createUrl(`/api/sbt/token/nft/${tokenId}`));
  return getData(res);
}
