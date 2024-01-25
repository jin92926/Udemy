// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

const power = (base, exponent) => {
  //탈출 조건 지수가 0이면 1를 반환
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};
