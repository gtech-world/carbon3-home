import { Button } from "@components/common/button";
import { useUser } from "@components/common/context";
import { HomeHeaderLayout } from "@components/common/headerLayout";
import { AICD_SOLUTIONS } from "@lib/env";
import { htmlDecode } from "@lib/utils";
// @ts-ignore
import SvgQuery from "@public/query.svg";
import SvgSignIn from "@public/sign-in.svg";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function Card(p: { icon: React.ReactNode; to?: string; text: React.ReactNode | string; bt?: string | null }) {
  const { icon, to, text, bt } = p;
  const { push } = useRouter();
  const { t } = useTranslation();
  const mBt = bt || t("Enter");
  const onClick = () => {
    if (to) {
      if (to.startsWith("/")) {
        console.info("to:", to);
        push(to);
      } else {
        window.open(to, "_blank");
      }
    }
  };
  return (
    <div className="flex flex-col items-center p-5 pt-10 w-[22.5rem] h-[23.25rem] border-solid border-black border-[3px] rounded-2xl mo:mb-5 mo:w-full mo:pt-[3.125rem] mo:h-auto">
      {icon}
      <div className="text-black mt-16 text-2xl text-center mo:text-lg mo:mt-[3.125rem]">{text}</div>
      <div className="flex-1 mo:hidden" />
      <Button
        onClick={onClick}
        className="w-full bg-green-2 rounded-lg text-white text-2xl py-3 mo:mt-[3.75rem] mo:text-lg"
      >
        {mBt}
      </Button>
    </div>
  );
}

export function Home() {
  const { t } = useTranslation();
  const { user } = useUser();
  return (
    <HomeHeaderLayout>
      <div className="flex flex-col mo:items-center mo:h-[37.25rem]">
        <div className="text-[2rem] text-white font-semibold w-[37.25rem] mt-36 mo:text-[1.75rem] mo:leading-normal mo:text-center mo:w-full mo:mt-[5.375rem]">
          {t(
            "AICD is the global, industry-level database for long-term carbon performance traceability and visibility under the 2050 Net Zero commitment."
          )}
        </div>
        <button
          onClick={() => window.open(AICD_SOLUTIONS, "_blank")}
          className="mt-[3.75rem] w-[13.75rem] rounded-lg bg-white whitespace-nowrap text-green-2 text-2xl font-medium px-[1.9375rem] py-3 mo:mt-[4.0625rem] mo:text-lg mo:px-[3.125rem]  mo:self-center"
        >{`${t("Learn More")} >`}</button>
      </div>
      {/* <div
        className="invisible
         w-full rounded-2xl mt-[10.375rem] flex justify-around items-center py-[1.4375rem] bg-white mo:flex-col mo:mt-[4.375rem] mo:py-8"
        style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.15)" }}
      >
        <NumData num={5569} label="Reporting Sites" />
        <NumData num={63} label="Collaborative Partners" />
        <NumData num={277148} label="Labelled Vehicles" />
        <NumData num={909128401} label="Piece of Data Collected" />
      </div> */}

      <div className="flex justify-between mt-[20rem] my-[3.75rem] mo:flex-col mo:mt-11 mo:mb-0">
        <Card
          icon={<SvgQuery className="h-[6.125rem]" />}
          to="/openquery"
          text={
            <div
              dangerouslySetInnerHTML={{
                __html: htmlDecode(
                  t("{{value}} for public accessible", {
                    value: `<span class="font-bold">${t("Open Query")}</span>`,
                  })
                ),
              }}
            />
          }
        />
        <Card
          icon={<SvgSignIn className="h-[5.875rem]" />}
          to={user ? "/dashboard" : "/login"}
          text={
            <div
              className="mx-3"
              dangerouslySetInnerHTML={{
                __html: htmlDecode(
                  t("{{value}} with authenticated account", { value: `<span class="font-bold">${t("Sign in")}</span>` })
                ),
              }}
            />
          }
        />
        <Card
          icon={<img src="/earth.png" className="w-[6.25rem]" />}
          to={AICD_SOLUTIONS}
          bt={t("Explore")}
          text={<div>{t("Work with AICD for a Net Zero future")}</div>}
        />
      </div>
    </HomeHeaderLayout>
  );
}

export default Home;
