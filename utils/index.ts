import moment from "moment";

export const getCurrentDate = (date = "", dateType = "YYYY-MM-DD HH:mm:ss") => {
  const currentTime = moment(date);
  const formattedTime = currentTime.format(dateType);
  return formattedTime;
};

export const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

export const handleContentRender = (text: any, width: number) => {
  if (text.length > width) {
    return text;
  } else {
    return "";
  }
};
