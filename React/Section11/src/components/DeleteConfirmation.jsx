import { useEffect } from "react";
import ProegressBar from "./ProegressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("timer set");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log("cleaning up timer");
      clearTimeout(timer);
    };
    // 여기서 의존성에 함수값을 넣는 것은 무한루프에 빠질 가능성이 큼
    // 왜냐하면 app컴포넌트에 있는 onConfirm 함수는 객체이기에
    // app컴포넌트가 랜더링될 때마다 같은 값이지만 새로운 함수로 생성됨
    // 여기서는 modal에서 Children이 true일 때만 랜더링되기에 방지가 가능한 것
    // 실제 사용할 때는 주의가 필요함
    // 이렇게 항상 재생성되는 문제를 해결하기 위해 useCallback이 있음
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProegressBar timer={TIMER} />
    </div>
  );
}
