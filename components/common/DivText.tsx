import classNames from "classnames";
import { FC } from "react";

interface TextType {
  textArray: { text: string; value: string | number; link?: string }[];
}

const DivText: FC<TextType> = ({ textArray = [] }) => {
  return (
    <div>
      {textArray.length &&
        textArray.map((item, key) => {
          return (
            <div key={`text_${key}`} className="lg:mb-[4px] mo:mb-2 md:mb-4">
              <span className=" font-bold leading-7 text-[#000000] text-[16px]  ">{item.text}：</span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={classNames("text-[16px]", {
                    "text-green-2": item.link,
                    "text-gray-6": !item.link,
                  })}>
                  {item.value}
                </a>
              ) : (
                <span className=" font-normal text-[#666666] text-[16px] ">{item.value}</span>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default DivText;
