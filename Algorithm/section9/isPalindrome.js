// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

const isPalindrome = (str) => {
  const arr = str.split("");
  const reverseStr = arr.reverse().join("");
  if (str === reverseStr) return true;
  return false;
};
//재귀
const isPalindrome2 = (str) => {
  // str의 길이가 1이거나 없으면 true을 반환
  if (str.length <= 1) return true;
  if (str === reverse(str)) return true;
  return false;
};

const reverse = (str) => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};
// 투포인터 방식이 가장 좋은듯
const isPalindrome3 = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};
