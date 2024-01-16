// 비표준의 js문법을 사용하기에 jsx를 사용
// jsx는 js문법 확장자를 의미함, js파일 내에 마크업 코드를 작성할 수 있음
// -> jsx의 목적은 컴포넌트 내 html 코드를 정의할 수 있도록 함
// 리액트에서 컴포넌트로 인식되기 위해선 2가지 규칙이 있음
// 1. 함수의 제목이 대문자로 시작돼야 하고
// -> div, head 같은 내장 컴포넌트와 구분하기위해
// 2. 함수에서 랜더링 가능한 값이 반환돼야 함

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  // 기존의 app에 있을 때는 app 컴포넌트 전체가 리랜더링 돼
  // 원치 않은 부분까지 같이 랜더링 됐음
  // 해결하기 위해선 원하는 위치에 컴포넌트를 잘게 잘라 구성해야 함
  return (
    // 여기서 div가 필요한 이유는 상위 부모 요소가 하나 꼭 필요하기 때문임
    // 그 이유는 한번에 하나가 아닌 두개의 값을 반환할 수 없기 때문임
    // 대안으로 리액트에 내장된 프래그먼트가 있음,
    // fragment를 가져올 필요 없이 <> 표시만 하면 됨
    <>
      {/* 파일을 나눈다고 해서 css가 헤더 컴포넌트에 범위에 적용되는 것이 아님
      <header>
        <h1>dd</h1>
      </header> */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
