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

const flatten2 = (arr) => {
  let result = [];

  for (let el of arr) {
    if (Array.isArray(el)) {
      result = result.concat(flatten(el)); // 재귀 호출
    } else {
      result.push(el);
    }
  }

  return result;
};
const flatten3 = (arr) => {
  // es10에서 추가된 flat 기본값은 1로 숫자 지정만큼 평탄화
  // 최신환경 아닌 곳에선 사용 힘듬
  return arr.flat(Infinity);
};
