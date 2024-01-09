// arr1, arr2 두 배열이 입력됐을 때
// arr2는 arr1의 제곱의 값을 가지고 있으면 true 아니면 false를 반환, 단 순서는 상관 없음

const same = (arr1, arr2) => {
  //두 배열의 길이가 다르면 false를 반환
  if (arr1.length !== arr2.length) return false;
  //두 배열의 길이가 같을 때 arr2는 arr1의 제곱이어야함
  //우선 배열을 값 순서대로 정리한 후에 arr2와 같은 지 비교
  const [sortArr1, sortArr2] = [ascending(arr1), ascending(arr2)];

  return sortArr1.every((el, idx) => el * el === sortArr2[idx]);
};

const ascending = (arr) => {
  return arr.sort((a, b) => a - b);
};

//인강은 객체로 만들어서 key 순회해서 비교하기

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// 두 개의 문자열이 주어졌을 때,
// 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 함수를 작성합니다.
// 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어, 구 또는 이름입니다.
// (예시: cinema -> iceman), 문자열에 소문자만 있다고 가정

function validAnagram(str1, str2) {
  //두 문자열의 길이가 다르면 false를 반환
  if (str1.length !== str2.length) return false;

  // 객체는 순서가 없으므로 객체로 만들어서 키 순환하면서 비교
  const [obj1, obj2] = [{}, {}];
  frequencyCounter(str1, obj1);
  frequencyCounter(str2, obj2);

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

function frequencyCounter(str, obj) {
  for (const val of str) {
    obj[val] = (obj[val] || 0) + 1;
  }
}
