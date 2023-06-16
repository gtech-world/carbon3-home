import { Product } from './@types/type';
import { ModelType } from '@lib/@types/lca';
import { Category, RefCategory } from "./@types/lca";
import { categories } from "./testData";
import { get } from "./utils";

export function refCategoryToCategory(ref: RefCategory[]): Category[] {
  function deepRef(c: RefCategory): RefCategory {
    if (c.$refObj) return c.$refObj;
    if (!c.$ref) return c;
    const path = c.$ref.replaceAll("[", ".").replaceAll("]", "").substring(2);
    const key = path.split(".")[0];
    const first = ref[Number.parseInt(key)] as RefCategory;
    // console.info("first:", path, key, first);
    if (first.$ref) {
      first.$refObj = deepRef(first);
    }
    const data = get(ref, path) as RefCategory;
    if (data.$ref) {
      data.$refObj = deepRef(data);
      return data.$refObj;
    }
    return data;
  }

  function deepCate(c: RefCategory): Category {
    let rc = c;
    if (c.$ref) {
      rc = deepRef(c);
      if (rc.category && rc.category.$ref) {
        rc.category = deepCate(rc.category);
      }
    }
    rc.childCategories?.forEach(deepCate);
    return rc as Category;
  }
  return categories.map(deepCate);
}

export const ModelTypeName = {
    [ModelType.PRODUCT_SYSTEM]: "Product systems",
    [ModelType.PROCESS]: "Processes",
    [ModelType.FLOW]: "Flows",
    [ModelType.EPD]: "EPDs",

    [ModelType.IMPACT_METHOD]: "Impact assessment methods",
    [ModelType.IMPACT_CATEGORY]: "Impact categories",
    [ModelType.SOCIAL_INDICATOR]: "Social indicators",
    [ModelType.PARAMETER]: "Global parameters",
    [ModelType.DQ_SYSTEM]: "Data quality systems",

    [ModelType.FLOW_PROPERTY]: "Flow properties",
    [ModelType.UNIT_GROUP]: "Unit groups",
    [ModelType.CURRENCY]: "Currencies",
    [ModelType.ACTOR]: "Actors",
    [ModelType.SOURCE]: "Sources",
    [ModelType.LOCATION]: "Locations",
}