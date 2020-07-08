import config from "../config";
import getSheetsData from "./sheets";

export const getData = async() => {
  return (await getSheetsData(config.gallerySheetId))
}

export const dataKeys = {
  event_name: "Event_Name",
  details: "Details",
  img: "Image_Link",
  link: "Folder_link"
  
}
