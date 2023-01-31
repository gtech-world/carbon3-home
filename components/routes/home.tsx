import { HomeHeaderLayout } from "@components/common/headerLayout";
import SvgQuery from "@public/query.svg";
import SvgSignIn from "@public/sign-in.svg";
import numbro from "numbro";
import { useNavigate } from "react-router-dom";

function NumData(p: { num: number; label: string }) {
  const { num, label } = p;
  return (
    <div className="flex flex-col items-center leading-normal">
      <span className="text-green-3 text-[2rem]">{numbro(num).format({ thousandSeparated: true })}</span>
      <span className=" text-black text-xl">{label}</span>
    </div>
  );
}

function Card(p: { icon: React.ReactNode; to?: string; text: React.ReactNode | string; bt?: string }) {
  const { icon, to, text, bt = "Enter" } = p;
  const push = useNavigate();
  const onClick = () => {
    if (to) {
      if (to.startsWith("/")) {
        push(to);
      } else {
        window.open(to, "_blank");
      }
    }
  };
  return (
    <div className="flex flex-col items-center p-5 w-[22.5rem] h-[23.25rem] border-solid border-black border-[3px] rounded-2xl">
      {icon}
      <div className="flex-1" />
      <div className="text-black text-2xl text-center">{text}</div>
      <button onClick={onClick} className="w-full bg-green-2 rounded-lg text-white text-2xl py-3 mt-8">
        {bt}
      </button>
    </div>
  );
}

export function Home() {
  return (
    <HomeHeaderLayout>
      <div className="text-[2rem] text-white font-semibold w-[37.25rem] mt-36">
        AICD is the global, industry-level database for long-term carbon performance traceability and visibility under
        the 2050 Net Zero commitment.
      </div>
      <button className="mt-[3.75rem] rounded-lg bg-white text-green-2 text-2xl font-medium px-[1.9375rem] py-3">{`Learn More >`}</button>
      <div
        className="w-full rounded-2xl mt-[10.375rem] flex justify-around items-center py-[1.4375rem] bg-white"
        style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.15)" }}
      >
        <NumData num={5569} label="Reporting Sites" />
        <NumData num={63} label="Collaborative Partners" />
        <NumData num={277148} label="Labelled Vehicles" />
        <NumData num={909128401} label="Piece of Data Collected" />
      </div>

      <div className="flex justify-between my-[3.75rem]">
        <Card
          icon={<SvgQuery className="h-[6.125rem]" />}
          to="/query"
          text={
            <div>
              <span className="font-bold">Open Query</span> for public accessible data
            </div>
          }
        />
        <Card
          icon={<SvgSignIn className="h-[5.875rem]" />}
          to="/sign"
          text={
            <div>
              <span className="font-bold">Sign in</span> with authenticated account
            </div>
          }
        />
        <Card icon={<img src="/earth.png" className="w-[6.25rem]" />} text="Work with AICD for a Net Zero future" />
      </div>
    </HomeHeaderLayout>
  );
}
