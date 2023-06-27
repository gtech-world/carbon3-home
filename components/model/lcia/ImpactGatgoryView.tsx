import { TypeLayout } from "../common/typeLayout";
import { CategoryInfoPage } from "./CategoryInfoPage";
import { CharacterizationFactors } from "./CharacterizationFactors";

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
