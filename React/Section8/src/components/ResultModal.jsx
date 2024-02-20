//다른 컴포넌트에서 컴포넌트로 ref를 받아오고 싶다면 props으로는 x, forwardRef를 사용해야함
import { forwardRef, useImperativeHandle, useRef } from "react";
// modal같이 시각적으로 밖으로 표현되는 컴포넌트는 위치도 바깥으로 빼는게 이상적
import { createPortal } from "react-dom";

//forwardRef 감싸야함, 구조분해할당으로 가져오면 안되고 두번째 인자로 가져와야 함
const ResultModal = forwardRef(
  ({ targetTime, remainingTime, onReset }, ref) => {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    //forwardRef와 사용, 자주 사용하진 않음
    //이렇게 해서 timerchallenge의 dialog와 연결
    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog ref={dialog} className="result-modal" onClose={onReset}>
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>You Score: {score}</h2>}
        <p>
          The Target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formattedRemainingTime} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default ResultModal;
