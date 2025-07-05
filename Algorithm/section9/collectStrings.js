// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

const collectStrings = (obj) => {
  const result = [];
  // if (Object.keys(obj).length === 0) return result;

  for (const key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else {
      result.push(...collectStrings(obj[key]));
    }
  }
  return result;
};

const collectStrings2 = (obj) => {
  const result = [];

  // 위에처럼 초기 조건문이 없는게 더 좋은 이유는
  // for of, in forEach 모두가 빈 배열을 순회하면 그냥 실행문 없이 넘어감
  // 그렇기에 불필요함

  for (const value of Object.values(obj)) {
    if (typeof value === "string") {
      result.push(value);
    } else {
      result.push(...collectStrings2(value));
    }
  }
  return result;
};
