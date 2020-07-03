import config from "../config";
import getSheetsData from "./sheets";

export const getData = async() => {
  return (await getSheetsData(config.carouselSheetId))
}

export const dataKeys = {
  image: "image",
}
