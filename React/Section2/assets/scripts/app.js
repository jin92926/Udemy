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
//화살표 함수로 익명 함수 생성 가능
export default (userName, message) => {
  console.log("leoo");
  return userName + message;
};
const greeting1 = createGreeting("max");
// console.log(greeting1);

//클래스 네임은 대문자로 시작
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("hi");
//   }
// }

// const user1 = new User("manuel", 35);
// console.log(user1);
// user1.greet();

const hobbies = ["Sports", "Cooking", "Reading"];

// 배열을 객체로 만들 수도 있는데 소괄호로 전체를 감싸야 함
// 그렇지 않으면 함수 본문을 감싸는 중괄호로 취급함
// 객체뿐 아니라 모든 값을 원하는 대로 만들 수 있음
const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

//구조분해할당 배열은 이름을 원하는대로 정할 수 있지만
//객체는 키 값을 정확하게 사용하고 별칭을 따로 정해야함

const { name: userName, age } = {
  name: "max",
  age: 34,
};

const user = {
  name: "max",
  age: 34,
};

// console.log(userName, age);

//스프레드는 배열, 객체에 모두 유용하게 사용
const extendedUser = {
  isAdmin: true,
  ...user,
};
// console.log(extendedUser);

//리액트에서는 직접 dom 건드리는 일이 없음
const list = document.querySelector("ul");
// list.remove();

//함수가 일급 객체인 조건
//1 무명의 리터럴로 생성 가능
//2 변수나 자료구조에 저장 가능
//3 함수의 매개변수로 전달 가능
//4 함수의 반환값으로 ahfmse
function handleTimeout() {
  console.log("timed out!");
}
const handleTimeout2 = () => {
  console.log("timed out .. again");
};
// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("more timing out");
// }, 4000);

function greeter(greetFn) {
  greetFn();
}
// greeter(() => console.log("hi"));
