import { Phase, SbtPhase } from "@lib/@types/type";
import { InventoryPhase } from "../lib/@types/type";

const phase = ["Material Acquisition & Pre-Processing", "Production", "Distribution & storage", "Use"];

export function genInventoryPhase(): InventoryPhase[] {
  return phase.map((name) => ({
    name,
    processList: [],
    progress: 0,
    carbon_emission: 0,
  }));
}

export function genPhase(): Phase[] {
  return phase.map((name) => ({
    name,
    processList: [],
  }));
}

export function genSbtPhase(): SbtPhase[] {
  return phase.map((name) => ({
    name,
    progress: 0,
    carbon_emission: 0,
    verified: false,
  }));
}
