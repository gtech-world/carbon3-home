import SvgCO2 from "@public/co2.svg";
import { Phase, SbtPhase } from "@lib/@types/type";
import { AiOutlineUser } from "react-icons/ai";
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

export const MAIN_PAGES: MainPage[] = [
  { icon: AiOutlineUser, txt: "User Dashboard", to: "/dashboard" },
  { icon: IoCarSportOutline, txt: "Product Definition", to: "/product" },
  { icon: SvgCO2, txt: "Carbon Activities", to: "/activities" },
  { icon: RiPieChartLine, txt: "PCF Inventories", to: "/pcf" },
];
