import React, { useRef, useState } from "react";

//이렇게 바깥에 변수를 선언하고 사용하면 컴포넌트의 모든 인스턴스와 공유하기 때문에
//원하는 대로 작동하지 않음, 이럴 때 참조를 사용
let timer;

const TimerChallenge = ({ title, targetTime }) => {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const timer = useRef();

  // 참조는 UI에 직접적으로 영향을 주지 않는 것을 사용할 때 좋은 방법
  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : null}>
        {timerStarted ? "Time is running..." : "Timer inactice"}
      </p>
    </section>
  );
};

export default TimerChallenge;
