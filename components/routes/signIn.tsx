import { Button } from "@components/common/button";
import { useOnError, useUser } from "@components/common/context";
import { HeaderLayout } from "@components/common/headerLayout";
import { useGoBack } from "@lib/hooks/useGoBack";
import { login } from "@lib/http";
import SvgSignIn from "@public/sign-in.svg";
import { useRouter } from "next/router";
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
  const { push } = useRouter();
  const onError = useOnError();
  const { setUser } = useUser();
  const onSign = () => {
    if (!account || !pwd) return;
    login(account, pwd)
      .then((ud) => {
        setUser(ud);
        push("/dashboard");
      })
      .catch(onError);
  };
  return (
    <HeaderLayout className="flex flex-col items-center text-black">
      <button onClick={onBack} className="self-start mb-[5.625rem] mo:hidden">{`< back`}</button>
      <SvgSignIn className="h-[6.125rem] mo:mt-[5.125rem] mo:h-[5rem]" />
      <input
        value={account}
        type="text"
        maxLength={24}
        onChange={onAccountChange}
        placeholder="Account"
        className="outline-none w-full mt-[5.75rem] mb-5 max-w-[420px] min-h-[40px] h-[3.125rem] px-4 whitespace-nowrap rounded-lg mo:text-sm mo:px-5 mo:py-4"
        style={{ border: "1px solid #DDDDDD", background: "#F8F8F8" }}
      />
      <input
        value={pwd}
        type="password"
        maxLength={32}
        onChange={onPwdChange}
        placeholder="Password"
        className="outline-none w-full mb-5 max-w-[420px] min-h-[40px] h-[3.125rem] px-4 whitespace-nowrap rounded-lg mo:text-sm mo:px-5 mo:py-4"
        style={{ border: "1px solid #DDDDDD", background: "#F8F8F8" }}
      />
      <Button
        onClick={onSign}
        className="w-full max-w-[420px] min-h-[40px] h-[3.125rem] mb-40 text-center text-2xl text-white bg-green-2 rounded-lg mo:text-lg"
      >
        Sign in
      </Button>
    </HeaderLayout>
  );
}

export default SignIn;
