import { useRef, useState } from "react";

export default function StateLogin() {
  //입력값마다 개별 상태를 만들면 너무 많아짐
  //하나의 객체로 만들어 주는게 관리하기 편함
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState('');

  //키가 입력될때마다 유효성 검사를 위해서는 ref나 forData는 값이 제출된 이후에
  //알 수 있기에 state를 기반으로 접근해야함
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
    //기존 상태에 병합시킬수도 있음
    // email: {
    //     value: "",
    //     didEdit: false
    // }
  });

  // const handleEmailchange = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const handlePasswordChage = (event) => {
  //   setEnteredPassword(event.target.value);
  // };

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  //이 방식은 두 가지의 문제점을 가지고 있음
  //1. 유요한 이메일을 입력 후 지우면 오류 메시지가 보이지 않음
  //2. 타이핑을 시작하자마자 보이기 때문에 사용자 경험에 좋지 않음
  //   const emailIsInvalid =
  //     enteredValues.email !== "" && !enteredValues.email.includes("@");

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValues);
    //키 기반의 유효성 검사를 한다고 해도
    //마지막에는 제출 기반의 유효성 검사를 추가하는 것이 좋음
  };

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    //오류가 계속 떠있는 건 사용자 경험에 좋지 않기에
    //재입력하면 다시 사라지도록 설정하는 것이 좋음
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
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
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
            //포커싱이 해제될 때 알기 위해서는 Blur를 사용함
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
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
