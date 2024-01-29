const capitalizeFirst = (arr) => {
  const result = [];
  for (const el of arr) {
    result.push(el.replace(el[0], el[0].toUpperCase()));
  }
  return result;
};

const capitalizeFirst2 = (arr) => {
  //arr의 길이가 0이면결과 뱉기
  const result = [];
  if (arr.length === 0) return result;
  if (isUpper(arr[0])) {
    result.push(arr[0]);
  } else {
    result.push(arr[0].replace(arr[0][0], arr[0][0].toUpperCase()));
  }
  return result.concat(capitalizeFirst2(arr.slice(1)));
};

const isUpper = (str) => {
  const firstStr = str[0];
  if (firstStr === firstStr.toUpperCase()) return true;
  return false;
};
