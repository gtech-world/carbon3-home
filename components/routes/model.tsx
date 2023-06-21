import { HeaderLayout } from "@components/common/headerLayout";
import { Nav } from "@components/model/Nav";
import { Tabs } from "@components/model/Tabs";
import { SelectNavsContextProvider } from "@components/model/context";
import { TypeContent } from "@components/model/typeContent";
import { Category, Descriptor, ModelType, NavNode } from "@lib/@types/lca";
import { ModelTypeName } from "@lib/lca";
import { categories, descriptors } from "@lib/testData";
import { parseRefJson } from "@lib/utils";
import { useMemo } from "react";
import { GrTree } from "react-icons/gr";

export function Model() {
  const node = useMemo(() => {
    const root: NavNode = {
      id: "root",
      children: [],
      type: "folder",
      name: "database",
      modelType: "database",
    };
    const categoryMap: { [k: string]: Category } = {};
    const categoriesMap: { [k: string]: { [k: string]: Category[] } } = {};
    const mCategories = parseRefJson(categories) as Category[];

    mCategories.forEach((c) => {
      if (c.modelType) {
        categoryMap[c.id] = c;
        if (!categoriesMap[c.modelType]) categoriesMap[c.modelType] = {};
        const pId = c.category ? c.category.id : "null";
        if (!categoriesMap[c.modelType][pId]) categoriesMap[c.modelType][pId] = [];
        categoriesMap[c.modelType][pId].push(c);
      }
    });
    const ungroupTypes: ModelType[] = [ModelType.PRODUCT_SYSTEM, ModelType.PROCESS, ModelType.FLOW, ModelType.EPD];
    const group1Types: ModelType[] = [
      ModelType.IMPACT_METHOD,
      ModelType.IMPACT_CATEGORY,
      ModelType.DQ_SYSTEM,
      ModelType.SOCIAL_INDICATOR,
      ModelType.PARAMETER,
    ];
    const group2Types: ModelType[] = [
      ModelType.FLOW_PROPERTY,
      ModelType.UNIT_GROUP,
      ModelType.CURRENCY,
      ModelType.ACTOR,
      ModelType.SOURCE,
      ModelType.LOCATION,
    ];

    const buildChildren = (_type: ModelType, parentId: number | "null"): NavNode[] => {
      const type = _type.toString();
      if (!categoriesMap[type]) categoriesMap[type] = {};
      const cates = (categoriesMap[type][parentId] || []).map<NavNode>((c: Category) => ({
        id: c.refId,
        children: buildChildren(_type, c.id),
        name: c.name,
        type: "folder",
        modelType: c.modelType,
        data: c,
      }));
      if (!descriptors[type.toString()]) descriptors[type] = {};
      const descs = (descriptors[type][parentId] || []).map<NavNode>((c: Descriptor) => ({
        id: c.refId,
        children: buildChildren(_type, c.id),
        name: c.name,
        type: "content",
        modelType: c.type,
        data: c,
      }));
      return [...cates, ...descs];
    };
    const buildGroup = (group: string | null, types: ModelType[]) => {
      if (group != null) {
        const mGroup: NavNode = {
          id: group,
          name: group,
          type: "folder",
          modelType: group,
          children: [],
        };
        root.children.push(mGroup);
        mGroup.children = types.map((type) => ({
          id: type,
          name: ModelTypeName[type],
          type: "folder",
          modelType: type,
          children: buildChildren(type, "null"),
        }));
      } else {
        types.forEach((type) => {
          root.children.push({
            id: type,
            name: ModelTypeName[type],
            type: "folder",
            modelType: type,
            children: buildChildren(type, "null"),
          });
        });
      }
    };
    buildGroup(null, ungroupTypes);
    buildGroup("Indicators and parameters", group1Types);
    buildGroup("Background data", group2Types);
    console.info("root:", root);
    return root;
  }, []);
  return (
    <HeaderLayout isManager={true} className="h-0 flex py-0 px-0">
      <SelectNavsContextProvider>
        <div className="w-[266px] min-w-[266px] max-w-[50%] border-r-[6px] border-solid border-r-gray-16 flex flex-col resize-x overflow-hidden">
          <div className="border-b border-solid border-b-gray-16">
            <div className="flex gap-[6px] text-sm w-min leading-[14px] p-[.625rem] bg-gray-bg border border-solid border-gray-14">
              <GrTree className="text-gray-9 fixGrColor" />
              <span className="text-black">Navigation</span>
            </div>
          </div>
          <div className="flex-1 p-3">
            <Nav node={node} />
          </div>
        </div>
        <div className="flex-1 flex flex-col w-0">
          <Tabs />
          <div className="flex-1 h-0 overflow-y-auto">
            <TypeContent />
          </div>
        </div>
      </SelectNavsContextProvider>
    </HeaderLayout>
  );
}
