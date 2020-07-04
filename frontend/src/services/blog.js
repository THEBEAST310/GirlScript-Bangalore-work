import config from "../config";
import getSheetsData from "./sheets";

export const getData = async () => {
  return await getSheetsData(config.blogSheetId);
};

export const dataKeys = {
  title: "blogtitle",
  author: "authorname",
  img: "imagefortheblog",
  link: "linktotheblog",
  description: "blogsummaryshortdescription",
};
