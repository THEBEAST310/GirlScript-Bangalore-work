import config from "../config";
import getSheetsData from "./sheets";

export const getData = async() => {
  return (await getSheetsData(config.blogSheetId))
}

export const dataKeys = {
  title: "heading",
  author: "author",
  img: "imageurl",
  link: "mediumlink",
  description: "shortdesc"
}
