const constructNote = (str, message) => {
  const [strObj, messageObj] = [checkFrequency(str), checkFrequency(message)];
  const [strKey, messageKey] = [Object.keys(strObj), Object.keys(messageObj)];

  //message의 문자의 갯수가 str의 문자의 갯수보다 작다면 false
  if (messageKey.length < strKey.length) return false;

  for (let i = 0; i < strKey.length; i++) {
    if (messageObj[strKey[i]] < strObj[strKey[i]]) return false;
  }
  return true;
};

const checkFrequency = (str) => {
  const arr = str.split("");
  const obj = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  return obj;
};
