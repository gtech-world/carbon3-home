import { Button } from "@components/common/button";
import { useIsMobile, useUser } from "@components/common/context";
import { HomeHeaderLayout } from "@components/common/headerLayout";
import { AICP_SOLUTIONS } from "@lib/env";
// @ts-ignore
import SvgQuery from "@public/query.svg";
import SvgSignIn from "@public/sign-in.svg";
import SvgPentagon from "@public/pentagon.svg";
import SvgTeacher from "@public/teacher.svg";
import SvgCTag from "@public/c_tag.svg";
import SvgMarket from "@public/market.svg";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import React, {useState} from "react";
import classNames from "classnames";
import {ProductQrcode} from "@components/common/productQrcode";
import {scrollToAnchor} from "@lib/utils";

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

function CardTabsItem1(){
  const data = [
    {title: '双碳与数字化培训',text:'在AICP平台获取关于双碳以及数字化减碳的系列培训，提升您的碳管理技能，为后续双碳行动打下基础。完成培训并通过考试，您将被授予数字化证书以及对应标签。'},
    {title: '目标设定与实施规划',text:'在行业专家的帮助下完成个性化的、符合企业现状的双碳目标设定，以及明确未来如何实施相关的减碳行动。我们也鼓励您参与受全球认可的碳目标框架，如SBTi。'},
    {title: '双碳解决方案&咨询',text:'减碳是高度专业性且复杂的工作，需要企业内外部的长期协作与努力。在AICP获取可靠的解决方案支持：双碳实施与认证、碳信息报告与披露、数字化减碳、管理战略咨询等。'}
  ]
  return(
    <ul className="bg-white p-8 rounded-2xl">
      {
        data.map((v,i)=>{
          return(
            <li key={`cardTabsItem1${i}`} className="mb-6 last:mb-0">
              <h5 className="font-semibold text-2xl mb-3">{v.title}</h5>
              <p>{v.text}</p>
            </li>
          )
        })
      }
    </ul>
  )
}
function CardTabsItem2(){
  const data = [
    {
      title: '公司碳核查',
      listText:'范围一类别排放、范围二类别排放、范围三类别排放',
      resultText: '核查报告、温室气体核查声明',
      bgColor:'#DAE3F3'
    },
    {
      title: '产品碳足迹',
      listText:'碳足迹清单、碳足迹模型、碳足迹测算',
      resultText: '产品碳足迹盘查报告、产品碳足迹证书',
      bgColor:'#B4C7E7'
    },
    {
      title: '碳减排',
      listText:'减碳量测算 - 产品级、减碳量测算 - 项目级、减碳量测算 - 技术级',
      resultText: '减排评估报告、减碳证书',
      bgColor:'#8FAADC'
    },
    {
      title: '碳中和',
      listText:'碳中和路径规划、碳中和测算工具',
      resultText: '碳中和评估报告、碳中和证书',
      bgColor:'#2F5597',
      color:'#fff'
    }
  ]
  return(
    <div className="bg-white p-8 rounded-2xl">
      <div style={{width:'calc(100% - 15px)'}} className="bg-gradient-to-r bg-gradient-to-r from-[#FFF2CC] relative to-[#FFE184] font-semibold mb-5 h-10 w-full bg-contain flex justify-center items-center">
        <span>实施清单</span>
        <span className="ml-[20rem]">输出结果</span>
        <div className="triangle">

        </div>
      </div>
      <div className="">
        {
          data.map((v,i)=>{
            return(
              <div key={`cardTabsItem2${i}`} className="flex justify-between items-center mb-4 last:mb-0">
                <div className="h-[3.75rem] relative flex items-center justify-center w-[7.25rem] bg-[url('/pentagon.svg')]">
                  <div style={{color:v.color}} className={classNames('z-10 relative font-semibold mb-3')}>{v.title}</div>
                  <SvgPentagon className="absolute left-0 top-0" fill={v.bgColor} />
                </div>
                <div className="w-[22.25rem] mt-1">{v.listText}</div>
                <div className="w-[19.375rem] mt-1">{v.resultText}</div>
                <div className="h-[3.375rem] scale-[0.3] mt-[-2.55rem] mr-[-5rem] ml-[-8rem]">
                  <ProductQrcode qrcodeDisable={true} className="" />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}
function CardTabsItem3(){
  const data = [
    {
      title: '绿色能源转型',
      text:'使用绿色能源是企业和产品减碳效应最强、也是最为直接和根本的方式。AICP整合全方位的绿色能源转型方案，包括绿色电力接入、工业园区支持、能源管理方案等。'
    },
    {
      title: '绿色金融',
      text:'基于您的减碳活动与行为，尤其是那些经由AICP平台完成并受认证的项目，您有机会享受特定的绿色金融支持。AICP计划与金融机构持续合作，发挥平台优势以引入更多适合汽车行业的绿金资源。'
    },
    {
      title: '碳信用资产与交易',
      text:'碳信用（Carbon Credit）资产及其交易作为全球应对气候变化各类框架中的核心市场机制，目前已经形成一个规模巨大的市场，未来还会继续扩大。购买碳信用来实现碳抵销是实现碳中和的重要手段之一。您的减碳活动也可在满足条件时被认定为一项碳资产。'
    }
  ]
  return(
    <div>
      <div>

      </div>
      <ul className="bg-white p-8 rounded-2xl">
        {
          data.map((v,i)=>{
            return(
              <li key={`cardTabsItem3${i}`} className="mb-6 last:mb-0">
                <h5 className="font-semibold text-2xl mb-3">{v.title}</h5>
                <p>{v.text}</p>
              </li>
            )
          })
        }
      </ul>
    </div>

  )
}

function CardTabs(){
  const [selected,setSelected] = useState(-1)
  const tabsItemComponent = [<CardTabsItem1 key={`CardTabsItem1`} />,<CardTabsItem2 key={`CardTabsItem2`} />,<CardTabsItem3 key={`CardTabsItem3`} />]
  const tabsList = [
    {
      title: '培训、策略与解决方案',
      icon: <SvgTeacher className="w-[5rem]" />,
      text:'在开始着手实施双碳活动之前，您可能需要获取相关的培训、建议与咨询服务。AICP组织行业领域内的专家，为用户解决疑难、明确方向。',
      items:[
        {text:'双碳与数字化培训'},
        {text:'目标设定与实施规划'},
        {text:'双碳解决方案&咨询'},
      ]
    },
    {
      title: '双碳实施与碳标签',
      icon: <SvgCTag className="w-[5rem]" />,
      text:'从碳核查到碳中和，AICP提供明确的双碳路径等待您行动。AIAG碳标签将见证您的努力。',
      items:[
        {text:'范围1/2/3碳核查'},
        {text:'产品碳足迹'},
        {text:'产品/项目/技术层级减碳认证'},
        {text:'碳中和认证'},
      ]
    },
    {
      title: '市场化双碳',
      icon: <SvgMarket />,
      text:'AICP的另一大职责是帮助汽车行业的用户寻找和匹配其双碳活动的市场化资源，并积极提供相关支持方案。',
      items:[
        {text:'绿色能源转型'},
        {text:'绿色金融'},
        {text:'碳信用资产与交易'},
      ]
    }
  ]
  return(
    <div className="w-full flex justify-center">
      <a href="#" id="secondView" />
      <div className="flex text-lg flex-shrink-0 max-w-[90rem] pt-10 pb-5 flex-col px-[7.5rem] w-full mo:flex-col mo:mt-11 mo:mb-0">
        <ul className="flex justify-between w-full pb-8">
          {
            tabsList.map((v,i)=>{
              return(
                <li key={`tabsList${i}`} className={classNames('w-[22.5rem] flex flex-col justify-between bg-white p-5 rounded-2xl border-2',i===selected? 'border-green-2 bubble-box':'border-transparent')}>
                  <div className="flex flex-col justify-between h-[24.8rem]">
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        {/*<div className="w-[5rem] h-[5rem] border border-green-2">*/}
                        {/*</div>*/}
                        {
                          v.icon
                        }
                        <span className="text-2xl flex-1 font-semibold pl-5 mt-1">{v.title}</span>
                      </div>
                      <p className="mt-5">{v.text}</p>
                    </div>
                    <div className="flex flex-col items-start font-semibold">
                      {
                        v.items.map((item,itemIndex)=>{
                          return(
                            <div key={`items${itemIndex}`} className="border-b-2 border-green-2 pb-1 mb-5 last:mb-0">{item.text}</div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <a href="#" id="item" />
                  <button className="mt-8 hover:bg-green-28 w-full h-14 rounded-lg text-white bg-green-2 text-2xl" onClick={()=>{setSelected(i);scrollToAnchor('item')}}>
                    了解更多
                  </button>
                </li>
              )
            })
          }
        </ul>
        {
          selected>-1 &&
          <div className="mb-10">
            {
              tabsItemComponent[selected]
            }
          </div>
        }

      </div>
    </div>
  )
}

export function Home() {
  const { t } = useTranslation();
  const { user } = useUser();
  const isMobile = useIsMobile();
  const {push} = useRouter()
  return (
    <HomeHeaderLayout>
      <div className="flex flex-col flex-shrink-0 mo:items-center mo:h-[37.25rem]">
        <div className="max-w-[90rem] h-[42.875rem] px-[7.5rem] w-full mx-auto">
          <div className="text-[2rem] text-white font-semibold w-[37.25rem] mt-36 mo:text-[1.75rem] mo:leading-normal mo:text-center mo:w-full mo:mt-[5.375rem]">
            {/*{t(*/}
            {/*  "AICP is the global, industry-level platform for OEMs and suppliers to manage, track and display their carbon footprint data under the AIAG Carbon Initiative."*/}
            {/*)}*/}
            AICP是全球性的行业级碳服务平台，帮助主机厂与供应商在AIAG碳倡议框架下管理双碳活动、展示减碳成果。
          </div>
          <button
            onClick={() => scrollToAnchor('secondView')}
            className="mt-[3.75rem] w-[13.75rem] rounded-lg bg-white whitespace-nowrap text-green-2 text-2xl font-medium px-[1.9375rem] py-3 mo:mt-[4.0625rem] mo:text-lg mo:px-[3.125rem]  mo:self-center"
          >
            {/*{`${t("Learn More")} >`}*/}
            了解AICP服务
          </button>
          <button
            onClick={() => user?push('/carbon/allService'):push('/login')}
            className="ml-5 mt-[3.75rem] w-[13.75rem] rounded-lg bg-white whitespace-nowrap text-green-2 text-2xl font-medium px-[1.9375rem] py-3 mo:mt-[4.0625rem] mo:text-lg mo:px-[3.125rem]  mo:self-center"
          >
            {/*{`${t("Learn More")} >`}*/}
            登入AICP账户
          </button>
        </div>
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
      <CardTabs />
      <div className="bg-white flex flex-col items-center">
        <div className="flex justify-between px-[7.5rem] w-full max-w-[90rem] flex-shrink-0 mt-14 mo:flex-col mo:mt-11 mo:mb-0">
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
          <Card icon={<img src="/earth.png" className="w-[6.25rem]" />} to={"https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee"} bt={t("了解更多")}>
            {/*{t("Work with AICP for a Net Zero future")}*/}
            与AIAG一起建筑零碳未来
          </Card>
        </div>
        <div className="w-full px-[7.5rem] w-full max-w-[90rem]">
          <div
            className="text-base pt-6 pb-11 flex-shrink-0"
            dangerouslySetInnerHTML={{
              __html: t(
                "＊ AICP Pro Accounts only serve enterprise-level users within the automotive supply chain. To learn more about Pro Accounts, please contact hi@gtech.world."
              ).replace(
                "hi@gtech.world",
                `<a class="underline" target="_blank" href="mailto:hi@gtech.world">hi@gtech.world</a>`
              ),
            }}
          />
        </div>

      </div>
    </HomeHeaderLayout>
  );
}

export default Home;
