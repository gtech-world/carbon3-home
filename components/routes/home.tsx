import { HeaderLayout } from "@components/common/headerLayout";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <HeaderLayout
      bg={
        <div className="absolute z-0 top-0 w-full h-full max-h-[48.75rem] bg-green-2">
          <img className="object-cover h-full absolute right-0 top-0" src="/home-bg-r.png" />
          <div
            className="w-full h-full absolute lg:left-[calc(50%_-_45rem)]"
            style={{
              background: "linear-gradient(182.16deg, #000000 -4.66%, rgba(0, 0, 0, 0) 17.13%)",
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
            }}
          />
          <div
            className="w-full h-full absolute lg:left-[calc(50%_-_45rem)]"
            style={{
              background: "linear-gradient(270deg, #227A30 38.28%, rgba(34, 122, 48, 0) 77.8%)",
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
            }}
          />
        </div>
      }
    >
      <div className="text-[2rem] text-white font-semibold w-[37.25rem] mt-36">
        AICD is the global, industry-level database for long-term carbon performance traceability and visibility under
        the 2050 Net Zero commitment.
      </div>
      <button className="mt-[3.75rem] rounded-lg bg-white text-green-2 text-2xl font-medium px-[1.9375rem] py-3">{`Learn More >`}</button>
    </HeaderLayout>
  );
}
