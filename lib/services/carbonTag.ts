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
  const res = await axios.get<Res<SbtTokenController.TagList>>(
    `https://api-v2.gtech.world/api/sbt/token/uuid/bd7d4203-60d0-49de-b00e-5946cfe0cd04-1695016205`,
  );
  return getData(res);
}

export async function getSbtDetail(tokenId: string | number) {
  const res = await axios.get<Res<SbtTokenController.SbtNftList>>(
    `https://api-v2.gtech.world/api/sbt/token/nft/${3000000}`,
  );
  return getData(res);
}
