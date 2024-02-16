import { useState, useRef } from "react";

export default function Player() {
  // 이렇게 했을 경우 타이핑 하면 계속 리랜더링됨
  // const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   setSubmitted(false);
  //   setEnteredPlayerName(e.target.value);
  // };

  // const handleClick = () => {
  //   setSubmitted(true);
  // };

  // 상태값은 함수를 통해 변화가 있을 경우 컴포넌트들을 재실행 시킴
  // 그러므로 ui에 바로 반영되어야 하는 값들이 있을 때 사용
  // 시스템 내부에 보이지 않는 쪽에서 다루는 값들이나 ui에 직접 영향을 끼치지 않는 값은 사용하지 말아야함

  // 참조는 컴포넌트들이 다시 실행되게 하지 않음
  // dom요소에 직접적인 접근이 필요할 때 사용함

  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    //돔을 직접 조작하는 것은 바람직한 방법은 아님
    playerName.current.value = "";
  };

  return (
    <section id="player">
      {/* 삼항연산자 단축표현 */}
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
