// 재귀란 자기 자신을 호출하는 함수
// js는 종이 더미 위에서 하나씩 종이를 읽어나가는 듯한 콜스택 구조

//재귀 함수 필수적인 2가지 조건
//1 자기 자신을 재귀적으로 호출
//2 종료 조건

const countDown = (num) => {
  //종료 조건
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
};

const countDown2 = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("all done");
};

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

const sumRange2 = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

const factorial = (num) => {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
};

const factorial2 = (num) => {
  if (num === 1) return 1;
  return num * factorial2(num - 1);
};

//꼬리 재귀
const tailFactorial = (n, acc = 1) => {
  if (n === 1) return acc;
  //이렇게 하면 공간복잡도가 o(n) -> o(1)로 다만 일부엔진에서만 유효하므로
  //실제로는 반복문으로 작성하는게 좋음
  return tailFactorial(n - 1, acc * n); // 재귀 호출이 마지막 작업
};

// 헬퍼 매소드 재귀
const collectOddValues = (arr) => {
  let result = [];
  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  };
  helper(arr);
  return result;
};
//순수 재귀
const collectOddValues2 = (arr) => {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 === 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues2(arr.slice(1)));
  return newArr;
};
