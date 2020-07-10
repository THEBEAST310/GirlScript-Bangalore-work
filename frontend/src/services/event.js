import config from "../config";
import getSheetsData from "./sheets";

export const getData = async () => {
  return await getSheetsData(config.eventSheetId);
};

export const dataKeys = {
  name: "eventname",
  date: "eventdate",
  venue: "eventvenue",
  img: "coverphoto",
  type: "type"
};
