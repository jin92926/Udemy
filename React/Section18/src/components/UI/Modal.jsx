import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className = "", onClose }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    //클린업 함수로 작성할때 dialog.current를 상수값에 저장하는 것을 추천
    // 그이유는 클린업 함수는 해당 값이 미래에 변하는 때에만 실행되기 때문
    return () => modal.close();
  }, [open]);

  return createPortal(
    // esc버튼을 누르면 브라우저가 모달은 꺼지지만 앱상에서는 떠있다고 파악함
    // 그러므로 onClose로 UserProgress의 값을 확실하게 바꿔줘야함
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
