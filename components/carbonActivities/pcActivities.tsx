import { Activities } from "@components/items/activity";
import { CurrentActivityProvider, CurrentActivitySelectContext } from "./context";
import { Source, SourcingList } from "./pcSource";

export function PcActivities(p: { data: any[] }) {
  const { data } = p;
  return (
    <CurrentActivityProvider init={{ activity: data[0] }}>
      <div className="flex w-full h-full max-h-[36.9375rem]">
        <div className="w-[15rem] shrink-0 flex flex-col items-center">
          <Activities data={data} />
        </div>
        <CurrentActivitySelectContext.Consumer>
          {({ activity, sourcing }) => (
            <>
              <div className="flex-1 w-0 h-full overflow-y-auto ml-[.625rem] bg-white p-5 rounded-lg">
                <SourcingList data={activity.sourings} />
              </div>
              <div className="flex-1 w-0 h-full ml-[.625rem] flex flex-col bg-white p-5 rounded-lg overflow-y-auto">
                <Source data={activity.sourings[sourcing]} />
              </div>
            </>
          )}
        </CurrentActivitySelectContext.Consumer>
      </div>
    </CurrentActivityProvider>
  );
}
