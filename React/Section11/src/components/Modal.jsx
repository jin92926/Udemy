import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }

    //노란 경고창이 안뜨지만 의존성 배열을 빈 배열로 둘 때
    // 의존성이 필요하기 때문에 경고창이 뜨는 것, 그 이유는 props으로 받는
    // open값이 계속 변경되기 때문임
  }, [open]);

  return createPortal(
    // dialog는 esc로도 닫을 수 있는데 이 경우에 모달은 사라지지만,
    // prop으로 받은 open 값은 변경되지 않아 에러가 발생함
    // 그렇기에 dialog에 내장된 onClose에 prop을 추가해야함
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
