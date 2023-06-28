import { Fragment, ReactNode } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useToggle } from "react-use";

export function Infomation(p: { infos: ([string, ReactNode] | ReactNode)[]; title: string }) {
  const { infos, title } = p;
  const [show, toggleShow] = useToggle(true);
  return (
    <div className="">
      <div className="flex items-center  font-bold cursor-pointer text-lg text-black" onClick={() => toggleShow()}>
        {title}
        {show ? <FaCaretUp className="text-2xl " /> : <FaCaretDown className="text-2xl" />}
      </div>
      {show && (
        <div className="mt-3 grid grid-cols-[auto_1fr] gap-x-5 gap-y-[10px] text-sm text-black">
          {infos.map((item, i) => {
            const isSingle = !(item as [string, ReactNode]).length;
            if (isSingle) return <div key={`infomation_${i}`} className="col-span-2">{item}</div>;
            const [tit, content] = item as [string, ReactNode];
            return (
              <Fragment key={`infomation_${i}`}>
                <div className="font-bold">{tit}</div>
                <div className="whitespace-pre-wrap">{content || "none"}</div>
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}
