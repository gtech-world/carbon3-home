import moment from "moment";

export const getCurrentDate = (date?: any, dateType = "YYYY-MM-DD HH:mm:ss") => {
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

export const dealResult = (data: string) => {
  const matches = data?.match(/(\d+\.\d{2})/);

  if (matches && matches.length > 1) {
    const extractedNumber = parseFloat(matches[1]).toFixed(2);
    return `${extractedNumber}kg`;
  } else {
    return "";
  }
};
