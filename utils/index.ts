import moment from "moment";

export const getCurrentDate = () =>{
  const currentTime = moment();
  const formattedTime = currentTime.format('YYYY-MM-DD HH:mm:ss');
  return formattedTime
}
