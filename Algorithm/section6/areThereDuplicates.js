// 가변적인 수의 인수를 받아들이고 전달된 인자 중 중복이 있는지 확인 하는함수를 구현
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
//제약 조건:Time - O(n) Space - O(n)
//보너스:Time - O(n log n) Space - O(1)

//화살표 함수에서는 스코프 상의 이유로 arguments는 작동하지 않음,
// const areThereDuplicates = () => {
//   //객체에 담아 키의 값이 2이상이면 true 아니면 false
//   const obj = {};

//   // arguments 객체는 함수 내 모든 인수를 참조할 수 있고 인덱스0부터 시작
//   for (const val in arguments) {
//     obj[arguments[val]] = (obj[arguments[val]] || 0) + 1;
//   }
//   for (const key in obj) {
//     if (obj[key] > 1) return true;
//   }
//   return false;
// };

//이 방법은 시간, 공간 복잡도는 모두 O(n)
const areThereDuplicates = (...arg) => {
  //객체에 담아 키의 값이 2이상이면 true 아니면 false
  const obj = {};

  for (const val of arg) {
    obj[val] = (obj[val] || 0) + 1;
  }
  for (const key in obj) {
    if (obj[key] > 1) return true;
  }
  return false;
};

const areThereDuplicates1 = (...args) => {
  //set은 중복을 허용하지 않음, 그렇기에 길이가 다르다면 중복
  //시간, 공간 복잡도는 모두 O(n)
  return new Set(args).size !== args.length;
};

function areThereDuplicates2(...args) {
  //정렬은 O(n log n)복잡도 가짐
  args.sort((a, b) => a - b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
