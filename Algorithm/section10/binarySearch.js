//선형 검색보다 개선된 알고리즘
// 단 이진검색은 분류된 배열을 대상으로만 작동하므로 데이터가 분류되어야 함
// 중간점을 확인하고 계속해서 중간점을 기준으로 값을 찾음
// 빅오는 O(log n) 최선은 O(1)

const binarySearch = (arr, num) => {
  let [left, right] = [0, arr.length - 1];

  let median = Math.floor((left + right) / 2);

  while (arr[median] !== num && left <= right) {
    if (arr[median] < num) {
      left = median + 1;
    } else {
      right = median - 1;
    }
    median = Math.floor((left + right) / 2);
  }
  if (arr[median] === num) {
    return median;
  }
  return -1;
};

const binarySearch2 = (arr, num) => {
  let [left, right] = [0, arr.length - 1];

  while (left <= right) {
    // median을 매번 다시 계산하는 것보다 while 루프 안에서만 선언
    // 사실상 매번 다시 선언하는 것과 같지만 스코프가 명확해지고 성능차이가 없기에 이 방법이 더 적절할 듯
    let median = Math.floor((left + right) / 2);
    if (arr[median] === num) {
      return median;
    } else if (arr[median] < num) {
      left = median + 1;
    } else {
      right = median - 1;
    }
  }

  return -1;
};
