/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
const stringifyNumbers = (obj) => {
  //에러남
  //let copy = { ...obj };
  const copy = Object.assign({}, obj);

  for (let key in copy) {
    if (typeof copy[key] === "number") {
      copy[key] = String(copy[key]);
    } else if (typeof copy[key] === "object" && !Array.isArray(copy[key])) {
      copy[key] = stringifyNumbers(copy[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
};
