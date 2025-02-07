import { useEffect } from "react";
function Test() {
  let res;
  const getXMLfromAPI = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const yyyymmdd = `${year}${month}${day}`;
    const baseurl =
      "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
    const key =
      "a2oztIG5JsxHBXVNjE53UbaiMeal7ZmM2CQpxcCd9bvmhEvcDgE%2FTALYpGxEI7Dso%2F4BHROoWZVQGcrUiHUPLQ%3D%3D";
    const params = {
      // 필요한 query params를 {} 형태에 담아준다.
      pageNo: 1,
      numOfRows: 1000,
      dataType: "JSON",
      base_date: yyyymmdd,
      base_time: "0500",
      nx: 61,
      ny: 126,
    };

    const queryString = new URLSearchParams(params).toString(); // url에 쓰기 적합한 querySting으로 return 해준다.
    const requrl = `${baseurl}?serviceKey=${key}&${queryString}`;

    try {
      const response = await fetch(requrl, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          return JSON.parse(data);
        });
      res = response;
    } catch (error) {
      console.log(error);
    }
  };

  return res;
}

export default Test;
