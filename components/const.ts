import SvgCO2 from "@public/co2.svg";
import { Phase, SbtPhase } from "@lib/@types/type";
import { AiOutlineUser } from "react-icons/ai";
import { FiLayers,FiFileText,FiSettings } from "react-icons/fi";
import { IoCarSportOutline } from "react-icons/io5";
import { RiPieChartLine } from "react-icons/ri";
import { InventoryPhase } from "../lib/@types/type";

export const PHASE = ["Sourcing & Pre-treatment", "Production", "Distribution", "Use & Disposal"];

export function genInventoryPhase(): InventoryPhase[] {
  return PHASE.map((name) => ({
    name,
    processList: [],
    progress: 0,
    carbon_emission: 0,
  }));
}

export function genPhase(): Phase[] {
  return PHASE.map((name) => ({
    name,
    processList: [],
  }));
}

export function genSbtPhase(): SbtPhase[] {
  return PHASE.map((name) => ({
    name,
    progress: 0,
    carbon_emission: 0,
    verified: false,
  }));
}

export const CAR_SRC = "/car.png";
export const ORG_SRC = "/org.png";

export const SupportLngs = ["en-US", "zh-CN"];
export const LngsText: { [k: string]: string } = {
  "en-US": "English",
  "zh-CN": "简体中文",
};

export interface MainPage {
  icon: any;
  txt: string;
  to: `/${string}`;
}
export interface CarbonPage {
  icon: any;
  txt: string;
  to: string;
}

export const MAIN_PAGES: MainPage[] = [
  { icon: AiOutlineUser, txt: "User Dashboard", to: "/tools/dashboard" },
  { icon: IoCarSportOutline, txt: "Product Definition", to: "/tools/product" },
  { icon: SvgCO2, txt: "Carbon Activities", to: "/tools/activities" },
  { icon: RiPieChartLine, txt: "PCF Inventories", to: "/tools/pcf" },
];
export const CARBON_PAGES: CarbonPage[] = [
  { icon: FiLayers, txt: "全部碳服务", to: "/carbon/allService" },
  { icon: AiOutlineUser, txt: "我的碳服务", to: "/carbon/service" },
  { icon: SvgCO2, txt: "我的碳标签", to: "/carbon/tag" },
  { icon: FiFileText, txt: "我的碳文档", to: "/carbon/document" },
  { icon: RiPieChartLine, txt: "我的碳资产", to: "" },
  { icon: FiSettings, txt: "用户管理与设定", to: "" },
];