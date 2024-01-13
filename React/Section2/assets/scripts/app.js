// import { apiKey } from "./util.js";

// console.log(apiKey);
// default를 사용할 떄는 이름을 지어주고 가져오면 됨
// import apiKey from "./util.js";

// abc의 이름을 바꾸고 싶다면 as를 사용해 이름을 변경
import { apiKey, abc as content } from "./util.js";
// 한번에 가져오고 싶으면 *를 활용
// import * as util from "./util.js";

// console.log(util.apiKey);
// console.log(content);

// 변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 그 자체
// 또는 그 값을 식별하기 위한 이름
// 1. 재사용성
// 2. 코드 가독성

//소문자로 시작하는 카멜케이스를 주로 사용
let userMessage = "hello world!";
// console.log(userMessage);

function createGreeting(userName, message = "hellow") {
  console.log("hellow");
  return "hi, i am" + userName + ", " + message;
}

const greeting1 = createGreeting("max");
console.log(greeting1);
