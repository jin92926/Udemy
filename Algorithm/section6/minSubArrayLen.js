const minSubArrayLen = (arr, num) => {
  let left = 0;
  let sum = 0;
  //Infinity로 설정하면 조건을 처음으로 만족하는 길이가 나오면 무조건 그게 minLen보다 작아서 갱신
  let minLen = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    // 조건 만족할 때, 윈도우를 왼쪽으로 줄여보기
    // 조건을 만족할 때만 앞 포인터 줄이기 때문에 O(n)
    while (sum >= num) {
      minLen = Math.min(minLen, right - left + 1); // 최소 길이 업데이트
      sum -= arr[left]; // 왼쪽 값 하나 제거
      left++; // 윈도우 왼쪽 축소
    }
  }

  return minLen === Infinity ? 0 : minLen;
};
