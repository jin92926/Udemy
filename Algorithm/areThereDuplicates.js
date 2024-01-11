// 가변적인 수의 인수를 받아들이고 전달된 인자 중 중복이 있는지 확인 하는함수를 구현
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

const areThereDuplicates = () => {
  //객체에 담아 키의 값이 2이상이면 true 아니면 false
  const obj = {};

  // arguments 객체는 함수 내 모든 인수를 참조할 수 있고 인덱스0부터 시작
  for (const val in arguments) {
    obj[arguments[val]] = (obj[arguments[val]] || 0) + 1;
  }
  for (const key in obj) {
    if (obj[key] > 1) return true;
  }
  return false;
};
