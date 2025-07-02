const capitalizeWords = (arr) => {
  const result = [];
  if (arr.length === 0) return result;

  const firstStr = arr[0].toUpperCase();
  result.push(firstStr);

  return result.concat(capitalizeWords(arr.slice(1)));
};
