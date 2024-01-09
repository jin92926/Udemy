// 두 개의 양의 정수가 주어졌을 때,
// 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false

const sameFrequency = (num1, num2) => {
  //두 숫자의 길이를 알기 위해 문자열로 변경
  //각 숫자의 빈도 수 체크하기 위해 빈 객체 생성
  const [str1, str2] = [String(num1), String(num2)];
  const [obj1, obj2] = [{}, {}];
  //두 숫자의 길이가 같지 않으면 false
  if (str1.length !== str2.length) return false;

  // 두 숫자의 길이가 같을 때 객체의 키와 값이 일치하지 않으면 false
  // 일치하면 true
  frequencyCounter(str1, obj1);
  frequencyCounter(str2, obj2);

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const frequencyCounter = (str, obj) => {
  for (const el of str) {
    obj[el] = (obj[el] || 0) + 1;
  }
};

// 이전 풀이
function sameFrequency2(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  let str1 = String(num1);
  let str2 = String(num2);

  if (str1.length !== str2.length) return false;
  let frequecnyCounter1 = {};
  let frequecnyCounter2 = {};

  for (let val of str1) {
    frequecnyCounter1[val] = (frequecnyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequecnyCounter2[val] = (frequecnyCounter2[val] || 0) + 1;
  }

  if (JSON.stringify(frequecnyCounter1) !== JSON.stringify(frequecnyCounter2)) {
    return false;
  }
  return true;
}
