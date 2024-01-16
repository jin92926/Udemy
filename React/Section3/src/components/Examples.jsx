//리액트에서 use로 시작하는 건 모두 리액트 hooks
import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES, BUTTON_DATA } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
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

  //   const tabContent1 = !selectedTopic ? (
  //     <p>Please select a topic.</p>
  //   ) : (
  //     <div id="tab-content">
  //       {/* 마침표는 프로퍼티가 정적인 경우에 사용되므로 대괄호가 맞음 */}
  //       <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].description}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>
  //   );

  const buttons = BUTTON_DATA.map((title) => (
    // 화살표 함수를 사용하면 추가적인 인자를 전달하거나
    // 이벤트 객체를 사용해야 하는 경우에 편리함,
    // handleSelect 내 증괄호로 묶으면 { title: title } 같은 의미

    // onSelect 대신 ...props로 바로 사용할 수 있게 만들 수 있음
    <TabButton
      key={title}
      isSelected={selectedTopic === title}
      onClick={() => handleSelect(title)}
    >
      {title}
    </TabButton>
  ));

  return (
    <Section id="examples" title="Examples">
      {/* children을 사용하는 방법도 있고 label를 사용하는 방법도 있음 */}
      {/* <TabButton label="Components" /> */}
      <Tabs buttons={buttons}>{tabContent}</Tabs>
    </Section>
  );
};

export default Examples;
