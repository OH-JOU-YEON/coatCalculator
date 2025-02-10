async function ParseJson(promise) {
  let string;

  let time;

  const coatTime = [];

  const array = [];
  const jsonArray = promise.json();

  //i는 시간대
  for (let i = 6; i <= 18; i++) {
    i = i % 24;

    if (i.toString.length > 1) {
      time = i + "00";
    } else {
      time = "0" + i + "00";
    }

    //반복문 돌면서 기온이 9도에서 11도면 array에 집어넣고 아니면 안집어넣고 이전에 있던 모든 것들을 뺀다
    //뺀 것들을 새 배열에 펼쳐넣고 배열의 길이가 2이상이면 그 배열을 coatTime에 넣는다

    for (const el in jsonArray) {
      if (el.baseTime == time && el.category == "TMP") {
        if (parseInt(el.fcstValue) >= 9 || parseInt(el.fcstValue) <= 11) {
          array.push(i);
        } else {
          let tempArray = [...array];
          if (tempArray.length >= 2) coatTime.push(tempArray);

          array.length = 0;
        }
      }
    }
  }

  if (coatTime.length == 0) {
    string = "오늘의 코트 가능 시간대는 없습니다";
  } else {
    let tempString;
    for (const coat of coatTime) {
      tempString += coat[0] + "~" + coat[coat.length - 1] + " ";
      string = "오늘의 코트 가능 시간대는 " + tempString + " 입니다";
    }
  }

  return string;
}

export default ParseJson;
