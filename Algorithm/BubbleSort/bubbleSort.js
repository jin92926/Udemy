// 정렬하는 방법은 많으나 특정 상황에서 각 알고리즘마다 장단점이 존재
//https://www.toptal.com/developers/sorting-algorithms

// 내장 매소드 sort()는 기본적으로 정렬 순서는 유니코드,
// 매개변수에 함수를 작성해 원하는 값으로 정렬할 수 있음

const sortArr = (arr) => {
  return arr.sort((a, b) => a - b);
};

//버블 정렬은 별로 효율적이지 않고 보통 사용되지 않음
// 개념은 가장 작은 숫자에서 가장 큰 숫자순, 즉 오름차순으로 정렬을 한다면
// 더 큰 숫자가 한번에 하나씩 뒤로 이동한다는 것
// 각 항목이 비교하고 값에 따라 교환하면서 계속 정렬

//값을 교환 하는 방법
//es5
const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

//es2015
const swap2 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
  let result = [...arr];
  let check = true;

  while (check) {
    [result, check] = repeatSort(result);
  }
  return result;
};

const repeatSort = (arr) => {
  let check = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      check = true;
    }
  }
  return [arr, check];
};
