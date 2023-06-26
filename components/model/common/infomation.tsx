import { Fragment, ReactNode } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useToggle } from "react-use";

export function Infomation(p: { infos: [string, ReactNode][]; title: string }) {
  const { infos, title } = p;
  const [show, toggleShow] = useToggle(true);
  return (
    <div className="">
      <div className="flex items-center  cursor-pointer text-lg text-black" onClick={() => toggleShow()}>
        {title}
        {show ? <FaCaretUp className="text-2xl " /> : <FaCaretDown className="text-2xl" />}
      </div>
      {show && (
        <div className="mt-3 grid grid-cols-[auto_1fr] gap-x-5 gap-y-[10px] text-sm text-black">
          {infos.map(([tit, content], i) => (
            <Fragment key={`infomation_${i}`}>
              <div className="font-bold">{tit}</div>
              {typeof content === "string" ? <div>{content}</div> : content}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
