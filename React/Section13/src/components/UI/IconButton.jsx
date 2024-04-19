import { memo } from "react";
import { log } from "../../log.js";

const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log("<IconButton /> rendered", 2);
  //여기서 그냥 memo를 사용해도 랜더링 되는 이유는 props로 받아오는
  //handleDecrement 등 같은 함수때문임
  // counter내 함수는 랜더링 될 때마다 함수는 값이기 때문에 재생성되기 때문임

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;
