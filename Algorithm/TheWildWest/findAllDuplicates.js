const findAllDuplicates = (arr) => {
  const obj = checkFrequency(arr);
  const key = Object.keys(obj);
  const result = [];

  for (let i = 0; i < key.length; i++) {
    if (obj[key[i]] > 1) result.push(Number(key[i]));
  }

  return result;
};

const checkFrequency = (arr) => {
  const obj = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  return obj;
};
