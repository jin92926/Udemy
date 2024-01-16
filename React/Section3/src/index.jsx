import React from "react";

// 리액트 출력을 담당함
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

//index.html의 root에 랜더링 시킴
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

//위에는 jsx코드, 아래는 jsx 없이 작성함, jsx 코드 없이 리액트를 만들 수 있지만
//일반적으로 사용하는 게 훨씬 편리함
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));
