import { Phase, SbtPhase } from "@lib/@types/type";
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
