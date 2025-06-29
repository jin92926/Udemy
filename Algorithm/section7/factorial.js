//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

const factorial = (num) => {
  // num이 0이면 1를 반환
  if (num === 1) return 1;
  return num * factorial(num - 1);
};
