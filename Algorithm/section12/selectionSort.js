//진행하면서 가장 작은 요소, 즉 최소값을 선택하고 맨 앞으로 배치하는 걸 반복

const selectionSort = (arr) => {
  // 반복문을 통해 배열의 인덱스 0을 최소값으로 지정하고 다음 값과 비교,
  // 처음값보다 작다면 새로운 최소값, 아니라면 다음과 비교
  // 마지막까지 비교 후 위치 인덱스를 바꿔줌
  // 그 후 배열의 다음 인덱스부터 다시 반복

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};

const selectionSort2 = (arr) => {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }
  return arr;
};

// let arr = [5, 3, 4, 1, 2];
// (1)[(1, 3, 4, 5, 2)];
// (2)[(1, 2, 4, 5, 3)];
// (3)[(1, 2, 3, 5, 4)];
// (4)[(1, 2, 3, 4, 5)];
