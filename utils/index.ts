import moment from "moment";

export const getCurrentDate = () => {
  const currentTime = moment();
  const formattedTime = currentTime.format("YYYY-MM-DD HH:mm:ss");
  return formattedTime;
};

export const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

export const handleContentRender = (text: string, width: number) => {
  if (text.length > width) {
    return text;
  } else {
    return "";
  }
};
