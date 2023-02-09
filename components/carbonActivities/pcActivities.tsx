import { Activities } from "@components/items/activity";
import { CurrentActivityProvider, CurrentActivitySelectContext } from "./context";
import { PcActL3, PcActL2 } from "./pcActL23";

export function PcActivities(p: { data: any[] }) {
  const { data } = p;
  return (
    <CurrentActivityProvider init={{ activity: data[0] }}>
      <CurrentActivitySelectContext.Consumer>
        {({ activity, sourcing }) => (
          <div className="flex w-full h-full max-h-[36.9375rem]">
            <div className="w-[15rem] shrink-0 flex flex-col items-center">
              <Activities data={data} />
            </div>
            <PcActL2 data={activity.sourcings} />
            <PcActL3 data={activity.sourcings[sourcing]} />
          </div>
        )}
      </CurrentActivitySelectContext.Consumer>
    </CurrentActivityProvider>
  );
}
