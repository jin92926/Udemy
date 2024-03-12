// 퀵정렬은 합병 정렬과 같은 가정으로 작동
// 피벗포인트라 불리는 단일 요소를 선택해 수행
// 정렬된 배열에서 최소값만 선택할 경우 O(n^2) 발생할 수 있으니 중간값이나
// 랜덤값을 선택하는 것도 방법

const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};
const swap = (arr, i, j) => {
  //   let temp = arr[i];
  //   arr[i] = arr[j];
  //   arr[j] = temp;
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};
