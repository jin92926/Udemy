// 모든 개별항목을 한번에 하나씩 확인하는 방법을 선형 검색(Linear Search)이라 함
// 내장 메서드로는 indexOf, includes, find, findIndex 등
// 데이터가 분류 되지 않았을 때 사용하는 가장 좋은 방법임
// 시간 복잡도 O(n) -> 선형이라 부르는 이유
const linearSearch = (arr, num) => {
  let result = arr.findIndex((ele) => ele === num);
  return result;
};

const linearSearch2 = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
};

const linearSearch3 = (arr, num) => {
  //예외를 발생시키는 것 외에는
  //forEach() 루프를 중지하거나 중단할 수 있는 방법이 없기에
  //return이 먹히지 않음
  arr.forEach((el, idx) => {
    if (el === num) {
      return idx;
    }
  });
  return -1;
};

const linearSearch4 = (arr, num) => {
  return arr.indexOf(num);
};
