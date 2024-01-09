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

// 객체로 만든 후에 키값 길이로
function countUniqueValues(arr) {
  const obj = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const result = Object.keys(obj).length;
  return result;
}

// 기존 풀이
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
