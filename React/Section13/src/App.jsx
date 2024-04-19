import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetClick(newCount) {
    //같은 함수내에서 여러 state 업데이트가 있을 때 다 같이 배칭되어서
    //한번의 컴포넌트 함수 실행만 유도함

    setChosenCount(newCount);
    //log로 확인해보면 state는 리액트로부터 스케줄이 조정돼 즉각 실행되지 않고
    //새로운 상태가 보이지 않고 이전값이 보임
    console.log(chosenCount); //이런 형태는 사용할 수 없음

    //이런식으로 함수형태로 작성해야 실행이 보장돼 최신 상태값으로 볼 수 있음
    setChosenCount((prevChosenCount) => prevChosenCount + 1);
  }

  return (
    <>
      <Header />
      <main>
        {/* input를 여기 두면 바뀔때마다 app 내에 있는 모든 코드들이 재랜더링됨
          1. memo를 활용해서 input과 관련없는 Counter에 적용해 한번만 실행되게 하기
          2.input를 다른 컴포넌트로 분리하기 <- 이 방법이 효율적임
          */}
        {/* <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section> */}
        <ConfigureCounter onSet={handleSetClick} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
