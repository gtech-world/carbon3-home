declare module "*.svg" {
  import * as  React from "react";

  const Svg: React.FC<React.SVGAttributes<SVGSVGElement>>;

  export default Svg;
}
