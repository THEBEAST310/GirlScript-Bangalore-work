import config from "../config";
import getSheetsData from "./sheets";

export const getData = async() => {
  return (await getSheetsData(config.partnershipSheetId))
}

export const dataKeys = {
  title: "companyname",
  img: "companylogo",
  
}