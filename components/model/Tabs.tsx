import classNames from "classnames";
import { FiX } from "react-icons/fi";
import { useSelectNavs } from "./context";
import { ModelIcon } from "./common/modelIcon";

export function Tabs() {
  const { active, navs, del, setActive } = useSelectNavs();
  return (
    <div className="flex-shrink-0 flex border-b border-solid border-b-gray-16 overflow-x-auto">
      {navs.map((item, i) => (
        <div
          key={`tabs_${i}`}
          onClick={() => setActive(item)}
          className={classNames("flex gap-1 text-sm w-min leading-[14px] p-[.625rem] cursor-pointer", {
            "bg-gray-bg border border-solid border-gray-14": item === active,
          })}
        >
          <ModelIcon type={item.modelType} />
          <span className="text-black whitespace-nowrap overflow-hidden text-ellipsis max-w-[600px]">{item.name}</span>
          <FiX
            className="text-black cursor-pointer"
            onClick={(e) => {
              del(item);
              e.stopPropagation();
            }}
          />
        </div>
      ))}
    </div>
  );
}
