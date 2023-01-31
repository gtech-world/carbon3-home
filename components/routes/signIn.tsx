import { HeaderLayout } from "@components/common/headerLayout";
import { useGoBack } from "@lib/hooks/useGoBack";
import SvgSignIn from "@public/sign-in.svg";
import { ChangeEvent, useCallback, useState } from "react";

export function SignIn() {
  const onBack = useGoBack();
  const [account, setAccount] = useState("");
  const onAccountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAccount(e.target.value || "");
  }, []);

  const [pwd, setPwd] = useState("");
  const onPwdChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value || "");
  }, []);
  const onSign = () => {};
  return (
    <HeaderLayout className="flex flex-col items-center text-black">
      <button onClick={onBack} className="self-start mb-[5.625rem]">{`< Back`}</button>
      <SvgSignIn className="h-[6.125rem]" />
      <input
        value={account}
        onChange={onAccountChange}
        placeholder="Account"
        className="outline-none w-full mt-[5.75rem] mb-5 max-w-[420px] min-h-[40px] h-[3.125rem] px-4 whitespace-nowrap rounded-lg"
        style={{ border: "1px solid #DDDDDD", background: "#F8F8F8" }}
      />
      <input
        value={pwd}
        onChange={onPwdChange}
        placeholder="Password"
        className="outline-none w-full mb-5 max-w-[420px] min-h-[40px] h-[3.125rem] px-4 whitespace-nowrap rounded-lg"
        style={{ border: "1px solid #DDDDDD", background: "#F8F8F8" }}
      />
      <button
        onClick={onSign}
        className="w-full max-w-[420px] min-h-[40px] h-[3.125rem] mb-40 text-center text-2xl text-white bg-green-2 rounded-lg"
      >
        Query
      </button>
    </HeaderLayout>
  );
}
