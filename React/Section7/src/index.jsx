import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import App from "./App.jsx";
import Test from "./Test.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //개발모드에서 모든 컴포넌트 함수를 두번 실행함,
  <StrictMode>
    <App />
  </StrictMode>
);
