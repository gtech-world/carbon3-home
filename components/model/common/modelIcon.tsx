import { ModelType } from "@lib/@types/lca";
import { IconType } from "react-icons";
import { FaBook, FaBookOpen, FaFolder, FaMapMarkerAlt, FaSitemap, FaUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GrDocumentConfig } from "react-icons/gr";
import { MdBalance, MdGridOn } from "react-icons/md";
import { CgMenuGridR, CgRuler } from "react-icons/cg";
import classNames from "classnames";

type IconConfig = {
  Icon: IconType;
  color: string;
  needFixColor?: boolean;
};
const def: IconConfig = { Icon: GrDocumentConfig, color: "#9C27B0", needFixColor: true };
const TypeIconConfig: {
  [k: string]: IconConfig;
} = {
  [ModelType.PRODUCT_SYSTEM]: { Icon: FaSitemap, color: "#1565C0" },
  [ModelType.FLOW]: { Icon: FiSettings, color: "#0084FF" },
  [ModelType.FLOW_PROPERTY]: { Icon: MdBalance, color: "#CE6D2F" },
  [ModelType.UNIT_GROUP]: { Icon: CgRuler, color: "#1D4F64" },
  [ModelType.ACTOR]: { Icon: FaUser, color: "#556164" },
  [ModelType.SOURCE]: { Icon: FaBookOpen, color: "#556164" },
  [ModelType.LOCATION]: { Icon: FaMapMarkerAlt, color: "#556164" },
  [ModelType.DQ_SYSTEM]: { Icon: MdGridOn, color: "#3A8772" },

  [`folder-${ModelType.PRODUCT_SYSTEM}`]: { Icon: FaFolder, color: "#1565C0" },
  [`folder-${ModelType.PROCESS}`]: { Icon: FaFolder, color: "#9C27B0" },
  [`folder-${ModelType.FLOW}`]: { Icon: FaFolder, color: "#CE6D2F" },
  [`folder-${ModelType.FLOW_PROPERTY}`]: { Icon: FaFolder, color: "#CE6D2F" },
  [`folder-${ModelType.EPD}`]: { Icon: FaFolder, color: "#21C393" },
  [`folder-${ModelType.IMPACT_METHOD}`]: { Icon: FaFolder, color: "#69B13E" },
  [`folder-${ModelType.IMPACT_CATEGORY}`]: { Icon: FaFolder, color: "#69B13E" },
  [`folder-${ModelType.SOCIAL_INDICATOR}`]: { Icon: FaFolder, color: "#EA9119" },
  [`folder-${ModelType.DQ_SYSTEM}`]: { Icon: FaFolder, color: "#37997D" },
  [`folder-${ModelType.PARAMETER}`]: { Icon: FaFolder, color: "#C60116" },
  [`folder-${ModelType.UNIT_GROUP}`]: { Icon: FaFolder, color: "#2F363A" },
  [`folder-${ModelType.CURRENCY}`]: { Icon: FaFolder, color: "#22614E" },
  [`folder-${ModelType.ACTOR}`]: { Icon: FaFolder, color: "#3388AF" },
  [`folder-${ModelType.SOURCE}`]: { Icon: FaFolder, color: "#577889" },
  [`folder-${ModelType.LOCATION}`]: { Icon: FaFolder, color: "#173855" },
  [`folder-Indicators and parameters`]: { Icon: FaBook, color: "#556164" },
  [`folder-Background data`]: { Icon: CgMenuGridR, color: "#999999" },
};

export function ModelIcon(p: { className?: string; type: string }) {
  const { Icon, color, needFixColor } = TypeIconConfig[p.type] || def;
  return <Icon color={color} className={classNames(p.className, { fixGrColor: needFixColor })} />;
}
