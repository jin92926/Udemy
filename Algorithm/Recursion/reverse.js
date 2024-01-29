// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

//재귀 아닌 버전
const reverse = (str) => {
  // add whatever parameters you deem necessary - good luck!
  const arr = str.split("");
  const result = arr.reverse().join("");

  return result;
};

const reverse2 = (str) => {
  //탈출 빈 문자열, 길이가 1인 경우
  if (str === "" || str.length === 1) return str;

  return reverse2(str.slice(1)) + str[0];
};
