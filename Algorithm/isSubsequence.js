// 두 문자열을 받아 첫 번째 문자열의 문자가
// 두 번째 문자열의 문자의 일부에 포함되는지 확인
// 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고
// 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false

const isSubsequence = (str1, str2) => {
  // str1의 첫번째 요소가 str2의 몇 번째 위치에 있는지 확인 후
  // 그 다음 요소가 첫번째 요소에서 찾은 str2 배열의 위치보다 크다면 계속 반복
  // 아니면 false

  let [i, j] = [0, 0];

  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
};
