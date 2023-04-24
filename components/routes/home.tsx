import { Button } from "@components/common/button";
import { useIsMobile, useUser } from "@components/common/context";
import { HomeHeaderLayout } from "@components/common/headerLayout";
import { AICP_SOLUTIONS } from "@lib/env";
// @ts-ignore
import SvgQuery from "@public/query.svg";
import SvgSignIn from "@public/sign-in.svg";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function Card(p: { icon: React.ReactNode; to?: string; children?: React.ReactNode; bt?: string | null }) {
  const { icon, to, children, bt } = p;
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
      <div className="text-black mt-16 text-2xl text-center mo:text-lg mo:mt-[3.125rem]">{children}</div>
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
  const isMobile = useIsMobile();
  return (
    <HomeHeaderLayout>
      <div className="flex flex-col flex-shrink-0 mo:items-center mo:h-[37.25rem]">
        <div className="text-[2rem] text-white font-semibold w-[37.25rem] mt-36 mo:text-[1.75rem] mo:leading-normal mo:text-center mo:w-full mo:mt-[5.375rem]">
          {t(
            "AICP is the global, industry-level platform for OEMs and suppliers to manage, track and display their carbon footprint data under the AIAG Carbon Initiative."
          )}
        </div>
        <button
          onClick={() => window.open(AICP_SOLUTIONS, "_blank")}
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

      <div className="flex justify-between flex-shrink-0 mt-[20rem] mo:flex-col mo:mt-11 mo:mb-0">
        <Card icon={<SvgQuery className="h-[6.125rem]" />} to="/openquery">
          <div
            dangerouslySetInnerHTML={{
              __html: t("{{value}} for public accessible").replace(
                "{{value}}",
                `<span class="font-bold">${t("Open Query")}</span>`
              ),
            }}
          />
        </Card>
        <Card icon={<SvgSignIn className="h-[5.875rem]" />} to={user ? "/dashboard" : "/login"}>
          <div
            className="mx-3"
            dangerouslySetInnerHTML={{
              __html: t("{{value}} with authenticated account*")
                .replace("{{value}}", `<span class="font-bold">${t("Sign in")}</span>`)
                .replace(isMobile ? "</br>" : "", ""),
            }}
          />
        </Card>
        <Card icon={<img src="/earth.png" className="w-[6.25rem]" />} to={AICP_SOLUTIONS} bt={t("Explore")}>
          {t("Work with AICP for a Net Zero future")}
        </Card>
      </div>
      <div
        className="text-base mt-6 mb-11 flex-shrink-0"
        dangerouslySetInnerHTML={{
          __html: t(
            "＊ AICP Pro Accounts only serve enterprise-level users within the automotive supply chain. To learn more about Pro Accounts, please contact hi@gtech.world."
          ).replace(
            "hi@gtech.world",
            `<a class="underline" target="_blank" href="mailto:hi@gtech.world">hi@gtech.world</a>`
          ),
        }}
      />
    </HomeHeaderLayout>
  );
}

export default Home;
