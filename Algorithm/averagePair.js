// 정렬된 정수 배열과 목표 평균이 주어졌을 때,
// 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다.
// 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false

const averagePair = (arr, avg) => {
  // 배열의 길이가 0이면 false
  if (arr.length === 0) return false;

  // while를 사용해 배열내 붙어있는 2개의 값의 평균이 avg와 같을 때까지
  // 조건문 반복
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = (arr[left] + arr[right]) / 2;
    //탈출 조건 : arr 내의 두 원소값의 평균이 avg와 같다면 true
    if (sum === avg) {
      return true;
    } else if (sum > avg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};
