import _ from "lodash";

export type BomNode = {
  flowId: string;
  tagType: string | string[];
  flowName: string;
  processId: string;
  partNumbers: string[];
  childFlowIds: string[];
  _child?: BomNode[];
  _depth: number;
};

export function deepSetBomChild(boms: BomNode[]) {
  const mapBoms = _.groupBy(boms, "flowId");
  const deepSet = (items: BomNode[]) => {
    items.forEach((item) => {
      if (!item._child) {
        item._child = (item.childFlowIds || []).map((flowId) => mapBoms[flowId][0]);
        deepSet(item._child);
      }
      if (item._child.length === 0) {
        item._depth = 0;
      } else {
        item._depth = (_.maxBy(item._child, "_depth")?._depth || 0) + 1;
      }
    });
  };
  deepSet(boms)
}

export const isTagType = (
  tagType: string | string[],
  type: `STAGE${"" | "01" | "02" | "03"}` | "BOM" | "REFERENCE",
) => {
  const types = typeof tagType === "string" ? [tagType] : tagType;
  return !!_.find(types, (t) => t.startsWith(type));
};
