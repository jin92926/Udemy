const capitalizeWords = (arr) => {
  const result = [];
  if (arr.length === 0) return result;

  const firstStr = arr[0].toUpperCase();
  result.push(firstStr);

  return result.concat(capitalizeWords(arr.slice(1)));
};
//이런 식으로 불필요한 상태 없이 하는 방법도 고려해보면 좋을 듯
const capitalizeWords2 = (arr) => {
  if (arr.length === 0) return [];
  return [arr[0].toUpperCase(), ...capitalizeWords2(arr.slice(1))];
};

//헬퍼 메서드 방식
const capitalizeWords3 = (arr) => {
  const result = [];

  const helper = (helperArr) => {
    if (helperArr.length === 0) return;
    const firstStr = helperArr[0];
    if (firstStr) result.push(firstStr.toUpperCase());
    helper(helperArr.slice(1));
  };
  helper(arr);
  return result;
};
