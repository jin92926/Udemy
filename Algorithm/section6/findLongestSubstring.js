//문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성
function findLongestSubstring(str) {
  //초기 조건 - 길이가 0이라면 0를 반환
  //문자가 같았을 경우 위치를 나타낼 idx 선언
  //최대길이를 반환할 maxSum과 현재 최대길이를 반환할 tempSum 선언
  //반복문에서 인접한 두 개가 같다면 idx는 +1, tempSum = 1
  //첫번쨰 반복문에서 인접한 두 개가 다르다면 계속해서 tempSum에 1를 더하며 구하다 같으면 중단
  //maxSum은 tempSum
  //tempSum 인덱스에서부터 남은 길이가 구한 maxSum은 작다면 maxSum 리턴
  //두번째 반복문은 시작은 tempSum 다음부터이며 만약 남은 길이가 이전에 구한 tempSum보다 작다면 tempSum을 반환
  //
}
