// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55
const recursiveRange = (num) => {
  let result = 0;
  if (num === 0) return result;

  return num + recursiveRange(num - 1);
};
