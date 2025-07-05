//긴 문자열에서 부분 문자열을 찾는 알고리즘
// wowomgzomg, omg

// 일치하는 문자열 갯수 찾기
const stringSearch = (str1, str2) => {
  let count = 0;
  for (let i = 0; i <= str1.length - str2.length; i++) {
    if (str1.substring(i, i + str2.length) === str2) count++;
  }
  return count;
};

// 인강버전
const naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
};
