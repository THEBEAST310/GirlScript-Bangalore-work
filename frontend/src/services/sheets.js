import config from "../config";

const CACHE_EXPIRE_TIME_IN_MIN = 48 * 60;
const CACHE = {};
/**
 * To get the formatted google sheet data 
 * @params {String} sheetId The sheet ID to get the data from
 * @params {String} sheetName The name of sheet to get data from
 */
async function getSheetsData(sheetId, sheetName = 'Sheet1') {
  const cacheKey = `${sheetId}-${sheetName}`;
  const cache = CACHE[cacheKey];
  if(cache && cache.data && cache.expireTime > Date.now()) {
    return cache.data;
  }

  const cacheExpireTime = Date.now() + CACHE_EXPIRE_TIME_IN_MIN * 60 * 1000;
  const request = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.accessToken}`,
      },
    },
  );
  const data = await request.json();
  if(data && data.values && data.values.length > 0) {
    const dataArray = [];
    const keys = data.values[0];
    for(let i=1; i<data.values.length; i++) {
      const elem = {};
      for(let j=0;j<data.values[i].length;j++) {
        const key = keys[j];
        elem[key] = data.values[i][j];
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
