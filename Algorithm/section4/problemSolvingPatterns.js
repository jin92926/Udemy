// 알고리즘이란? 특정 작업을 달성하기 위한 과정이나 일련의 단계

// 알고리즘을 잘 이해하기 위한 방법
// 1. 문제 해결을 위한 계획 수립
// 2. 일반적인 문제 해결 패턴 파악

// 문제해결을 위한 5단계
// 1. 문제의 이해
// 2. 구체적 예시
// 3. 세부 분석
// 4. 해결 또는 단순화
// 5. 돌아보기와 리팩터

function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

//리팩토링
function charCount1(str) {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

//정규식보다 이 방법이 더 빠르다고 함
function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
