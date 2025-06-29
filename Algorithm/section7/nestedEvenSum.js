// const obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// const obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" },
// };

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

const nestedEvenSum = (obj) => {
  let result = 0;
  // obj의 키가 없으면 result 반환
  if (Object.keys(obj).length === 0) return result;

  for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      result += obj[key];
    } else if (typeof obj[key] === "object") {
      result += nestedEvenSum(obj[key]);
    }
  }
  return result;
};
