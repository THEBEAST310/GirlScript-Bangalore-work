import config from "../config";
import getSheetsData from "./sheets";

export const getData = async () => {
  return await getSheetsData(config.carouselSheetId);
};

export const dataKeys = {
  aboutUs: "aboutus",
  aboutUsImage: "aboutusimage",
  statisticsTitleOne: "statisticstitleone",
  statisticsValueOne: "statisticsvalueone",
  statisticsTitleTwo: "statisticstitletwo",
  statisticsValueTwo: "statisticsvaluetwo",
  statisticsTitleThree: "statisticstitlethree",
  statisticsValueThree: "statisticsvaluethree",
  statisticsTitleFour: "statisticstitlefour",
  statisticsValueFour: "statisticsvaluefour",
  collegesAssociated: "collegesassociated",
  eventsHosted: "eventshosted",
  studentsParticipation: "studentsparticipation",
  firstCarouselImage: "firstcarouselimage",
  secondCarouselImage: "secondcarouselimage",
  thirdCarouselImage: "thirdcarouselimage",
  firstGallaryPhoto: "firstgallaryphoto",
  secondGallaryPhoto: "secondgallaryphoto",
  thirdGallaryPhoto: "thirdgallaryphoto",
  fourthGallaryPhoto: "fourthgallaryphoto",
  statisticsBackground: "statisticsbackground",
};
