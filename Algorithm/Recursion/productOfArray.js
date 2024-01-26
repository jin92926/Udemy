// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (arr) => {
  let result = 1;
  if (arr.length === 0) return result;

  return arr[0] * productOfArray(arr.slice(1));
};
