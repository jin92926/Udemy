import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInValid] = useState(false);

  // useRef를 활용하는 방법도 있지만 복잡한 양식을 갖고 있다면
  // 참조가 많아야하며 직접 dom를 건드리기에 사용하기 좋지 않음
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInValid(true);
      return;
    }
    setEmailIsInValid(false);

    console.log(enteredEmail, enteredPassword);
    console.log("sending http request..");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            // onChange={(event) => handleInputChange("email", event.target.value)}
            // value={enteredValues.email}
            ref={email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // onChange={(event) =>
            //   handleInputChange("password", event.target.value)
            // }
            // value={enteredValues.password}
            ref={password}
          />
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
