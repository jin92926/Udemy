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
  if (Object.keys(obj).length === 0) return result;

  for (const key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else {
      result.push(...collectStrings(obj[key]));
    }
  }
  return result;
};
