// 비표준의 js문법을 사용하기에 jsx를 사용
// jsx는 js문법 확장자를 의미함, js파일 내에 마크업 코드를 작성할 수 있음
// -> jsx의 목적은 컴포넌트 내 html 코드를 정의할 수 있도록 함
// 리액트에서 컴포넌트로 인식되기 위해선 2가지 규칙이 있음
// 1. 함수의 제목이 대문자로 시작돼야 하고
// -> div, head 같은 내장 컴포넌트와 구분하기위해
// 2. 함수에서 랜더링 가능한 값이 반환돼야 함

//리액트에서 use로 시작하는 건 모두 리액트 hooks
import { useState } from "react";
import { CORE_CONCEPTS, BUTTON_DATA, EXAMPLES } from "./data.js";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  //useState는 컴포넌트 안 최상위에서만 호출
  //일반적으로 두번째의 set를 붙여서 명명, 두번째 요소는 항상 함수이기 때문
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    //상태를 변경하기 전 상태값이 나옴
    // console.log(selectedTopic);
  };

  //이렇게 작성하고 jsx를 깔끔하게 정리하는 방법도 있음
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  console.log(EXAMPLES);

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
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* 함수 내부를 반환할때 ()로 감싸야 함 */}
            {/* {CORE_CONCEPTS.map(({ title, description, image }) => (
              <CoreConcept
                title={title}
                description={description}
                image={image}
              />
            ))} */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* children을 사용하는 방법도 있고 label를 사용하는 방법도 있음 */}
            {BUTTON_DATA.map((title) => (
              // 화살표 함수를 사용하면 추가적인 인자를 전달하거나
              // 이벤트 객체를 사용해야 하는 경우에 편리함,
              // handleSelect 내 증괄호로 묶으면 { title: title } 같은 의미
              <TabButton
                key={title}
                isSelected={selectedTopic === title}
                onSelect={() => handleSelect(title)}
              >
                {title}
              </TabButton>
            ))}
            {/* <TabButton label="Components" /> */}
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              {/* 마침표는 프로퍼티가 정적인 경우에 사용되므로 대괄호가 맞음 */}
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
