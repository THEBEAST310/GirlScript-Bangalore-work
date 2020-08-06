import config from "../config";
import getSheetsData from "./sheets";

export const getData = async () => {
  return await getSheetsData(config.aboutSheetId);
};

export const dataKeys = {
  aboutgirlscript: "aboutgirlscript",
  aboutgirlscriptbangalore: "aboutgirlscriptbangalore",
  girlscriptbangaloreimagelink: "girlscriptbangaloreimagelink",
  girlscriptimagelink: "girlscriptimagelink",
  goals: "goals",
  missionpoints: "missionpoints",
  ourmission: "ourmission",
};
