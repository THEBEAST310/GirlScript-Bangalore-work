import config from "../config";
import getSheetsData from "./sheets";

export const getData = async () => {
  return await getSheetsData(config.joinUsSheetId);
};

export const dataKeys = {
  title: "title",
  img: "imagelink",
  description: "description",
  link: "formlink",
};
