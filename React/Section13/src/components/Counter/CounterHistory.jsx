import { useState } from "react";

import { log } from "../../log.js";

function HistoryItem({ count }) {
  log("<HistoryItem /> rendered", 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? "selected" : undefined}>
      {count}
    </li>
  );
}

export default function CounterHistory({ history }) {
  log("<CounterHistory /> rendered", 2);

  return (
    <ol>
      {/* 여기서 각각의 인스턴스는 각각의 상태를 갖는데 하이라이트가 아래로 내려가는
      이유는 동적으로 위치가 바뀌기 때문 
      이러한 이유로 key를 활용해 사용함, 상태를 구체적인 컴포넌트 인스턴스에 매핑할 때
      고려하는 다른 요소이기 때문, 현재는 index가 엄격하게 매핑되는 값이 아니기 때문
      때문에 확실한 키값이 있으면 컴포넌틀를 확실히 식별해낼 수 있음

      또한 index값을 사용하면 리액트가 모든 li를 새로 랜더링하지만
      key값을 사용하면 하나만 새로 생성해서 성능에 더 도움을 줌
      */}
      {history.map((count, index) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}
