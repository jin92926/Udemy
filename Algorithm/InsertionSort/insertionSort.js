// 삽입정렬은 하나의 항목을 올바른 위치에 삽입해서 배열을 점진적으로 구축하는 방법

const insertSort = () => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
};
