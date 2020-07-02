import config from "../config";
import getSheetsData from "./sheets";

export const getData = async() => {
  return (await getSheetsData(config.gallerySheetId))
}

export const dataKeys = {
  title: "heading",
  author: "author",
  img: "imageurl",
  link: "gallery_link",
  description: "shortdesc"
}
