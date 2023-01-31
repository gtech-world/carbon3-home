import { NavigationType, useNavigate, useNavigationType } from "react-router-dom";

export function useGoBack() {
  const go = useNavigate();
  const type = useNavigationType();
  const onBack = () => {
    if (type !== NavigationType.Pop) {
      go(-1);
    } else {
      go("/");
    }
  };

  return onBack;
}
