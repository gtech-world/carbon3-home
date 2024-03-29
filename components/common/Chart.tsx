import ReactECharts, { EChartsReactProps } from "echarts-for-react";
import { ReactElement } from "react";

export default function Chart(props: EChartsReactProps): ReactElement {
  return <ReactECharts opts={{ locale: "en" }} notMerge={true} lazyUpdate={true} {...props} />;
}
