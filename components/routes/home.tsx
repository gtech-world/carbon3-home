import { HomeHeaderLayout } from "@components/common/headerLayout";
import SvgQuery from "@public/query.svg";
import SvgSignIn from "@public/sign-in.svg";
import { useRouter } from "next/router";
import numbro from "numbro";

function NumData(p: { num: number; label: string }) {
  const { num, label } = p;
  return (
    <div className="flex flex-col items-center leading-normal mo:[&:nth-child(n+2)]:mt-[3.125rem]">
      <span className="text-green-3 text-[2rem]">{numbro(num).format({ thousandSeparated: true })}</span>
      <span className=" text-black text-xl">{label}</span>
    </div>
  );
}

function Card(p: { icon: React.ReactNode; to?: string; text: React.ReactNode | string; bt?: string }) {
  const { icon, to, text, bt = "Enter" } = p;
  const {push} = useRouter()
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
    <div className="flex flex-col items-center p-5 w-[22.5rem] h-[23.25rem] border-solid border-black border-[3px] rounded-2xl mo:mb-5 mo:w-full mo:pt-[3.125rem] mo:h-auto">
      {icon}
      <div className="flex-1 mo:hidden" />
      <div className="text-black text-2xl text-center mo:text-lg mo:mt-[3.125rem]">{text}</div>
      <button
        onClick={onClick}
        className="w-full bg-green-2 rounded-lg text-white text-2xl py-3 mt-8 mo:mt-[3.75rem] mo:text-lg"
      >
        {bt}
      </button>
    </div>
  );
}

export function Home() {
  return (
    <HomeHeaderLayout>
      <div className="text-[2rem] text-white font-semibold w-[37.25rem] mt-36 mo:text-[1.75rem] mo:leading-normal mo:text-center mo:w-full mo:mt-[5.375rem]">
        AICD is the global, industry-level database for long-term carbon performance traceability and visibility under
        the 2050 Net Zero commitment.
      </div>
      <button className="mt-[3.75rem] rounded-lg bg-white whitespace-nowrap text-green-2 text-2xl font-medium px-[1.9375rem] py-3 mo:mt-[4.0625rem] mo:text-lg mo:px-[3.125rem] mo:w-[13.75rem] mo:self-center">{`Learn More >`}</button>
      <div
        className="w-full rounded-2xl mt-[10.375rem] flex justify-around items-center py-[1.4375rem] bg-white mo:flex-col mo:mt-[4.375rem] mo:py-8"
        style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.15)" }}
      >
        <NumData num={5569} label="Reporting Sites" />
        <NumData num={63} label="Collaborative Partners" />
        <NumData num={277148} label="Labelled Vehicles" />
        <NumData num={909128401} label="Piece of Data Collected" />
      </div>

      <div className="flex justify-between my-[3.75rem] mo:flex-col mo:mt-[3.125rem] mo:mb-0">
        <Card
          icon={<SvgQuery className="h-[6.125rem]" />}
          to="/openquery"
          text={
            <div>
              <span className="font-bold">Open Query</span> for public
              <br />
              accessible data
            </div>
          }
        />
        <Card
          icon={<SvgSignIn className="h-[5.875rem]" />}
          to="/login"
          text={
            <div>
              <span className="font-bold">Sign in</span> with
              <br />
              authenticated account
            </div>
          }
        />
        <Card
          icon={<img src="/earth.png" className="w-[6.25rem]" />}
          text={
            <div>
              Work with AICD for a Net
              <br />
              Zero future
            </div>
          }
        />
      </div>
    </HomeHeaderLayout>
  );
}

export default Home