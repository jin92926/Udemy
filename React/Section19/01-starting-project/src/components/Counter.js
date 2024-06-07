import classes from "./Counter.module.css";
// useStore로 저장소에 직접 액세스 할 수 있지만 useSelector가 더 사용하기 편함
// 저장소가 관리하는 상태 부분을 자동으로 선택할 수 있기 때문임
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
