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
            <div key={`text_${key}`}>
              <span className=" font-bold leading-7 text-[#000000] mo:text-[15px]">{item.text}：</span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={classNames({
                    "text-green-2": item.link,
                    "text-gray-6": !item.link,
                  })}>
                  {item.value}
                </a>
              ) : (
                <span className=" font-normal text-[#666666] text-[15px]  mo:text-[15px]">{item.value}</span>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default DivText;
