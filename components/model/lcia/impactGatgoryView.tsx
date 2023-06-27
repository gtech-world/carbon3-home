import { TypeLayout } from "../common/typeLayout";
import { CategoryInfoPage } from "./categoryInfoPage";
import { CharacterizationFactors } from "./characterizationFactors";

export function ImpactGatgoryView(p: { data: any; json: any }) {
  const { data } = p;
  return (
    <TypeLayout
      map={{
        "General infomation": CategoryInfoPage,
        "Characterization factors": CharacterizationFactors,
      }}
      data={data}
    />
  );
}
