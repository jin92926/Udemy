//다른 컴포넌트에서 컴포넌트로 ref를 받아오고 싶다면 props으로는 x, forwardRef를 사용해야함
import { forwardRef, useImperativeHandle, useRef } from "react";

//forwardRef 감싸야함, 구조분해할당으로 가져오면 안되고 두번째 인자로 가져와야 함
const ResultModal = forwardRef(({ result, targetTime }, ref) => {
  const dialog = useRef();

  //forwardRef와 사용, 자주 사용하진 않음
  //이렇게 해서 timerchallenge의 dialog와 연결
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
