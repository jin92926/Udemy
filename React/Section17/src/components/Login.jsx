import { useState } from "react";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* type의 기본값은 submit이며 양식을 제출해 페이지가 새로고침됨 
        막는 방법은
        1. type을 button으로 설정함 -> 양식을 제출하지 않음
        2. onClick을 없애고 form에 onSubmit에 handleSubmit 설정
        -> handleSubmit 함수에 event.preventDefault() 설정
         : 페이지가 새로고침 되지 않음, 리액트앱에서 양식 제출을 관리하는 방법
        */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}
