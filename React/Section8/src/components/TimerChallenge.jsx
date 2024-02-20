import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

//이렇게 바깥에 변수를 선언하고 사용하면 컴포넌트의 모든 인스턴스와 공유하기 때문에
//원하는 대로 작동하지 않음, 이럴 때 참조를 사용
// let timer;

const TimerChallenge = ({ title, targetTime }) => {
  // const [timerExpired, setTimerExpired] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();

  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }

  // 참조는 UI에 직접적으로 영향을 주지 않는 것을 사용할 때 좋은 방법
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : null}>
          {timerIsActive ? "Time is running..." : "Timer inactice"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
