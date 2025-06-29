// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

const flatten = (multiDimensionalArr) => {
  const checkArr = multiDimensionalArr.filter((el) => Array.isArray(el));
  if (checkArr.length === 0) return multiDimensionalArr;

  const convertArr = multiDimensionalArr.reduce((acc, cur) => {
    return Array.isArray(cur) ? [...acc, ...cur] : [...acc, cur];
  }, []);

  return flatten(convertArr);
};
