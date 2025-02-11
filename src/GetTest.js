async function Test() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const yyyymmdd = `${year}${month}${day}`;
  const baseurl =
    "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
  const key =
    ;
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

  let res = await fetch(requrl, {
    method: "GET",
  });

  const look = await res.json();
  const item = look.response.body.items.item;
  console.log(item);
  return item;
}

export default Test;
