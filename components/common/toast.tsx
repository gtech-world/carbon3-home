import classNames from "classnames";
import { useEffect } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { useToast } from "./context";

export function Toast() {
  const { current, toast } = useToast();
  useEffect(() => {
    if (!current) return () => {};
    const task = setTimeout(() => {
      toast();
    }, 5000);
    return () => {
      clearTimeout(task);
    };
  }, [current]);
  if (!current) return null;
  const Icon = current.type === "info" ? AiFillCheckCircle : AiFillCloseCircle;
  return (
    <div className={classNames("fixed right-5 top-20 z-[60] ")}>
      <div
        className={classNames(
          "flex items-center text-sm text-black rounded-lg border-1 py-4 w-full px-5 mo:mx-auto",
          current.type === "info" ? "border-[#32CB9D] bg-green-50" : "border-[#EF4C56] bg-rose-50"
        )}
      >
        <Icon className={classNames("text-xl mr-3", current.type === "info" ? "text-[#32CB9D]" : "text-[#EF4C56]")} />
        <span>{current.msg}</span>
      </div>
    </div>
  );
}
