import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetClick(newCount) {
    setChosenCount(newCount);
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
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
