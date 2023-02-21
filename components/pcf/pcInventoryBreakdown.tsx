import { CurrentActivityProvider, CurrentActivitySelectContext } from "@components/carbonActivities/context";
import { InventoryPhase } from "@lib/@types/type";
import { PcInventoryLevel1 } from "./pcInventoryLevel1";
import { PcInventoryLevel2 } from "./pcInventoryLevel2";
import { PcInventoryLevel3 } from "./pcInventoryLevel3";

export function PcInventoryBreakdown(p: { data: InventoryPhase[] }) {
  const { data } = p;
  return (
    <CurrentActivityProvider init={{ activity: data[0] }}>
      <CurrentActivitySelectContext.Consumer>
        {({ activity, sourcing }) => (
          <div className="w-full">
            <PcInventoryLevel1 data={data} />
            <div className="w-full flex mt-5">
              <PcInventoryLevel2 data={(activity as InventoryPhase).processList} />
              <PcInventoryLevel3 data={(activity as InventoryPhase).processList[sourcing]} />
            </div>
          </div>
        )}
      </CurrentActivitySelectContext.Consumer>
    </CurrentActivityProvider>
  );
}
