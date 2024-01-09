// arr1, arr2 두 배열이 입력됐을 때
// arr2는 arr1의 제곱의 값을 가지고 있으면 true 아니면 false를 반환, 단 순서는 상관 없음

const same = (arr1, arr2) => {
  //두 배열의 길이가 다르면 false를 반환
  if (arr1.length !== arr2.length) return false;
  //두 배열의 길이가 같을 때 arr2는 arr1의 제곱이어야함
  //우선 배열을 값 순서대로 정리한 후에 arr2와 같은 지 비교
  const [sortArr1, sortArr2] = [ascending(arr1), ascending(arr2)];

  sortArr1.forEach((el, idx) => {
    if (sortArr2[idx] === el * 2) {
      return true;
    } else {
      return false;
    }
  });
};

const ascending = (arr) => {
  return arr.sort((a, b) => a - b);
};
