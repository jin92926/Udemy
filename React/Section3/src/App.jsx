// 비표준의 js문법을 사용하기에 jsx를 사용
// jsx는 js문법 확장자를 의미함, js파일 내에 마크업 코드를 작성할 수 있음
// -> jsx의 목적은 컴포넌트 내 html 코드를 정의할 수 있도록 함
// 리액트에서 컴포넌트로 인식되기 위해선 2가지 규칙이 있음
// 1. 함수의 제목이 대문자로 시작돼야 하고
// -> div, head 같은 내장 컴포넌트와 구분하기위해
// 2. 함수에서 랜더링 가능한 값이 반화돼야 함

import { CORE_CONCEPTS, BUTTON_DATA } from "./data.js";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const handleSelect = () => {
    console.log("hello, select");
  };

  return (
    <div>
      {/* 파일을 나눈다고 해서 헤더 컴포넌트에 범위에 적용되는 것이 아님
      <header>
        <h1>dd</h1>
      </header> */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* 함수 내부를 반환할때 ()로 감싸야 함 */}
            {CORE_CONCEPTS.map(({ title, description, image }) => (
              <CoreConcept
                title={title}
                description={description}
                image={image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* children을 사용하는 방법도 있고 label를 사용하는 방법도 있음 */}
            {BUTTON_DATA.map((title) => (
              <TabButton onSelect={handleSelect}>{title}</TabButton>
            ))}
            {/* <TabButton label="Components" /> */}
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
