import config from "../config";

const CACHE_EXPIRE_TIME_IN_MIN = 48 * 60;
const CACHE = {};

/**
 * To get the formatted google sheet data 
 * @params {String} sheetId The sheet ID to get the data from
 * @params {String} sheetName The name of sheet to get data from
 */
async function getSheetsData(sheetId, sheetName = '1') {
  const cacheKey = `${sheetId}-${sheetName}`;
  const cache = CACHE[cacheKey];
  if(cache && cache.data && cache.expireTime > Date.now()) {
    return cache.data;
  }

  const cacheExpireTime = Date.now() + CACHE_EXPIRE_TIME_IN_MIN * 60 * 1000;
  const response = await fetch(
    `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetName}/public/values?alt=json`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if(response.status >= 400) {
    console.error("Sheets API error");
    return null;
  }

  const data = await response.json();
  if(data && data.feed && data.feed.entry && data.feed.entry.length > 0) {
    const dataArray = [];
    for(const row of data.feed.entry) {
      const elem = {};
      for(const key in row) {
        if(key.startsWith("gsx$")) {
          const keyToStore = key.slice(4); 
          if(row[key]["$t"] !== undefined) {
            elem[keyToStore] = row[key]["$t"];
          } else {
            elem[keyToStore] = row[key];
          }
        }
      }

      dataArray.push(elem);
    }
    CACHE[cacheKey] = {
      data: dataArray,
      expireTime: cacheExpireTime
    };
    return dataArray;
  }
  console.error(data);
  return null;
}

export async function getBlogData() {
  return (await getSheetsData(config.blogSheetId));
}

export const blogHeadings = {
  title: "heading",
  description: "shortdesc",
  img: "imageurl",
  link: "mediumlink",
  author: "author"
}
