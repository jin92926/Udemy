/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
const stringifyNumbers = (obj) => {
  const copy = Object.assign({}, obj);

  for (let key in copy) {
    if (typeof copy[key] === "number") {
      copy[key] = String(copy[key]);
    } else if (typeof copy[key] === "object" && !Array.isArray(copy[key])) {
      copy[key] = stringifyNumbers(copy[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
};

const stringifyNumbers2 = (obj) => {
  // 객체가 아니거나 js 오래된 버그 null 예외처리
  if (typeof obj !== "object" || obj === null) return obj;

  // typeof로 배열도 객체이기에 배열 나오면 구조 깨질 수 있기에 구조에 맞게 생성
  let newObj = Array.isArray(obj) ? [] : {};

  // for (let key in obj) {
  //   const val = obj[key];

  //   if (typeof val === "number") {
  //     //toString() vs String
  //     //1. String이 null, undefined까지도 다 문자열로 변경해줌
  //     //2. toString()은 약간 더 빠르지만 거의 미세함, null, undefined가 있을 때 에러
  //     //타입 확실한 경우 toString(), 그렇지 않다면 String
  //     newObj[key] = val.toString(); // 숫자 → 문자열
  //   } else if (typeof val === "object") {
  //     newObj[key] = stringifyNumbers(val); // 재귀 호출
  //   } else {
  //     newObj[key] = val; // 그대로 복사
  //   }
  // }

  //이런 방식도 있음, in은 상속된 모든 열거를 다 보여주고 순서를 보장하지 않음
  //Object.entries()는 키와 값 모두 사용 가능하고 자체 소유 속성, 순서를 보장함
  //위험 요소가 있는 in 보다는 keys, entries 등을 활용하자, 성능도 비슷하기에 상황에 맞춰 필요한 걸 사용
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "number") {
      result[key] = value.toString();
    } else if (typeof value === "object") {
      result[key] = stringifyNumbers(value);
    } else {
      result[key] = value;
    }
  }

  return newObj;
};
