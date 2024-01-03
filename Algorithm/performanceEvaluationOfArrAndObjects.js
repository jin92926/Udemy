// 객체는 정렬되어 있지 않는 데이터 구조, 키값 구조로 저장
// 빠른 접근, 입력과 제거를 원할때 좋음
// 탐색은 일반적으로 어떤 특정 정보가 어떤 값에 있는지 확인하는 것
// 접근은 특정 위치의 값을 읽거나 쓰는 작업
// 입력, 제거, 접근이 모두 O(1), 탐색만 O(n)
// Object.keys/ Object.values / Object.entries는 O(n), hasOwnProperty는 O(1)
let instructor = {
  firstName: "kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3],
};

// 배열은 정렬되어 있음,
// 접근은 O(1), 탐색은 O(n), 입력과 제거는 상황에 따라 다름
// 앞쪽에 추가, 제거 시 인덱스가 다 새롭게 배정되어야 하기에 O(n)
// 성능을 위해선 되도록이면 뒤쪽에 추가 및 제거를 해야함

let names = ["nam", "lee", "choi"];

//객체가 거의 모든 것이 더 빠르지만 정렬이 되어있지 않고
//배열은 정렬되어 있지만 추가, 제거가 필요하면 뒤에서부터 작업해야함
