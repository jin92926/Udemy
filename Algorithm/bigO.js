//빅오란 내용이 늘어날수록 알고리즘 실행 시간이 어떻게 변하는지 설명하는 공식적인 방법
//O(N)
const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

//항상 3가지 연산이므로 O(1)
const addUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};

// 1. 얼마나 빠른가 -> 가장 쉬운 방법은 타이밍 펑션 사용
// 기기마다 다르고 정확한 방법이라 볼 수 없음
let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();
console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds`);
// 2. 적은 메모리를 쓰는가
// 3. 더 읽기 쉬운가
// 중 1,2번이 중요함

//O(N^2)
const printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

// 객체와 배열, strings은 O(n)의 공간 복잡도를 필요
// 그 외는 모두 불변 공간
// total에서 한번, i에서 한번 총 O(1)의 공간 복잡도를 가짐
const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

// O(n)의 공간 복잡도
const double = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};
