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
  // obj의 키가 없으면 result 반환, for in은 키가 없으면 반복하지 않기에 안넣어도 무방
  // if (Object.keys(obj).length === 0) return result;

  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "number" && val % 2 === 0) {
      result += val;
    } else if (typeof val === "object") {
      result += nestedEvenSum(val);
    }
  }
  return result;
};
