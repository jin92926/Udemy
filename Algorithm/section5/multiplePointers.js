// O(n^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

//O(n), 배열은 정렬되어 있음
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[rigth]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//중복되지 않는 고유한 숫자값이 몇 개 있는지 반환하는 함수 작성
// 객체로 만든 후에 키값 길이로
function countUniqueValues(arr) {
  //초기 조건 길이가 0이라면 0
  if (arr.length === 0) return 0;

  const obj = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const result = Object.keys(obj).length;
  return result;
}

countUniqueValues([1, 1, 1, 2, 2, 2, 2, 3]);

function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  //Set은 중복되지 않는 유일한 값들만 저장하는 컬렉션 객체로 이용하면 훨씬 간편함
  return new Set(arr).size;
}

// 기존 풀이, 포인터 방식이 코드는 더 길지만 정렬되어 있다면 공간 복잡도가 O(1)으로 공간 효율이 좋음
function countUniqueValues2(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return 0;
  let idx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[idx] !== arr[i]) {
      idx++;
      arr[idx] = arr[i];
    }
  }
  return idx + 1;
}
