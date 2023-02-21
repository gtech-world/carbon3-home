import { Activities } from "@components/items/activity";
import { Phase } from "@lib/@types/type";
import { CurrentActivityProvider, CurrentActivitySelectContext } from "./context";
import { PcActL3, PcActL2 } from "./pcActL23";
import { ActivityUIProps } from "./types";

export function PcActivities(p: ActivityUIProps) {
  const { data } = p;
  return (
    <CurrentActivityProvider init={{ activity: data[0] }}>
      <CurrentActivitySelectContext.Consumer>
        {({ activity, sourcing }) => (
          <div className="flex w-full h-full max-h-[36.9375rem]">
            <div className="w-[15rem] shrink-0 flex flex-col items-center">
              <Activities data={data} />
            </div>
            <PcActL2 data={(activity as Phase).processList} />
            <PcActL3 data={(activity as Phase).processList[sourcing]} />
          </div>
        )}
      </CurrentActivitySelectContext.Consumer>
    </CurrentActivityProvider>
  );
}
