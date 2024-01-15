// 리액트 출력을 담당함
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

//index.html의 root에 랜더링 시킴
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
