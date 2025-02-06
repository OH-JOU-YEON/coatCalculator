function Test() {
  // 컴포넌트
  let res;
  const getXMLfromAPI = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const yyyymmdd = `${year}${month}${day}`;

    // 국토교통부 xml
    const baseurl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";
    const key =
      "a2oztIG5JsxHBXVNjE53UbaiMeal7ZmM2CQpxcCd9bvmhEvcDgE%2FTALYpGxEI7Dso%2F4BHROoWZVQGcrUiHUPLQ%3D%3D";
    const params = {
      // 필요한 query params를 {} 형태에 담아준다.
      serviceKey: key,
      pageNo: 1,
      numOfRows: 288,
      dataType: JSON,
      base_date: yyyymmdd,
      base_time: "0500",
      nx: 61,
      ny: 126,
    };

    const queryString = new URLSearchParams(params).toString(); // url에 쓰기 적합한 querySting으로 return 해준다.
    const requrl = `${baseurl}?${queryString}`; // 완성된 요청 url.

    try {
      const response = await fetch(requrl);
      const jsonString = JSON.parse(response); // 해석할 xml문자열.
      console.log(jsonString);
      res = jsonString;
    } catch (error) {
      console.log(error);
    }
  };

  return res;
}

export default Test;
