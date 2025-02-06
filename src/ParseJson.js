function ParseJson(json) {
  let string;

  let time;

  const coatTime = [];

  const array = [];

  const jsonArray = json.body.items.item;

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

    for (const el of jsonArray) {
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

  //이러고 이제 coatTime을 검사해서 배열이 비었으면 코트 시간대 없음
  //배열 순회하면서 처음, 마지막 것만 빼고 가운데 ~ 붙여서

  //코트 가능 시간대는 *~*시, *~*시 입니다 라고 나오게 하기

  if (coatTime.length == 0) {
    string = "오늘의 코트 가능 시간은 없습니다.";
  } else {
    string = "오늘의 코트 가능 시간대는 ";
    for (const al of coatTime) {
      string += al[0] + "~" + al[al.length - 1] + "시 ";
    }
    string += "입니다";
  }

  return string;
}

export default ParseJson;
