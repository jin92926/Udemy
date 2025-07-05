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
