// memo는 재랜더링을 막기 위해 사용하지만 남용해서는 안됨
// 되도록 상위컴포넌트 트리에 있는 컴포넌트에만 사용해야함
// 그 이유는 memo는 받아온 속성값이 바뀔때만 재랜더링이 되는데
// 이것은 속성값을 확인하기 때문에 성능에 문제를 일으킬 수 있음

// useCallback은 함수의 재생성을 방지하기 위해 사용
// 가끔은 useEffect의 의존성으로 갖고 있을 때나 memo를 사용할 때 필요함

// memo는 컴포넌트 함수를 감쌀때 사용
// useMemo는 컴포넌트 함수 안의 있는 일반 함수들을 감싸고 그 실행을 방지
// useMemo는 복잡한 계산이 있을 때만 사용해야함
// 의존성 값을 비교하기 때문에 실행할 때마다 비교하게 되서 성능에 문제가 생김
import { memo, useState, useCallback, useMemo, useEffect } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.js";
import CounterHistory from "./CounterHistory.jsx";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

//리액트가 작동하는 원리는 처음 페이지가 랜더링되면 모든 부분이 새로 만들어짐
//그 이후에는 컴포넌트 트리를 만들고 마지막에는 랜더링되어야 하는 실제 html 코드를 컴포넌트 트리로부터 전달함
// 이후 가상 dom 스냅샵을 생성해서 이전과 비교해 모든 부분을 비교하고
// 실제 dom에서 변동 사항들을 적용함

const Counter = memo(function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);
  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  //set값을 설정하기 위해 useEffect를 사용해도 되지만
  //useEffect 최대한 사용을 자제해야 좋음, 추가적인 컴포넌트 실행을 요구하기 때문
  //더 좋은 방법은 initialCount달라질 때마다 key값을 넣어주면 됨

  // useEffect(() => {
  //   setCounterChanges([{ value: initialCount, id: Math.random() * 1000 }]);
  // }, [initialCount]);

  // const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState([
    { value: initialCount, id: Math.random() * 1000 },
  ]);

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value,
    0
  );

  //useCallback를 사용해 함수의 재생성을 방지
  const handleDecrement = useCallback(function handleDecrement() {
    // setCounter((prevCounter) => prevCounter - 1);
    setCounterChanges((prevCounterChanges) => [
      { value: -1, id: Math.random() * 1000 },
      ...prevCounterChanges,
    ]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    // setCounter((prevCounter) => prevCounter + 1);
    setCounterChanges((prevCounterChanges) => [
      { value: 1, id: Math.random() * 1000 },
      ...prevCounterChanges,
    ]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});

export default Counter;
