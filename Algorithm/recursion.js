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
