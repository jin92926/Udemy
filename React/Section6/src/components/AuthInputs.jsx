import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import CustomInput from "./Input";

// tagged templates을 입력으로 받음
//하나에서만 사용하는 styled은 동일 파일에 두는 것이 적절하지만
//여러 곳에서 사용되는 styled은 따로 컴포넌트 하는 것이 좋음
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <CustomInput
          label="email"
          $invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <CustomInput
          label="password"
          $invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

// <p>
//   {/* 바닐라css를 섞어서 사용할 수 있음 */}
//   {/* <ControlLabel className={`label ${emailNotValid ? "invalid" : ""}`}> */}
//   {/* $ 사인으로 내장 컴포넌트와 충돌하지 않도록 수정 */}
//   <ControlLabel $invalid={emailNotValid}>Email</ControlLabel>
//   <ControlInput
//     type="email"
//     //인라인 스타일
//     // style={{
//     //   background: emailNotValid ? "red" : "#d1d5db",
//     // }}

//     //이 방법도 가능한 것처럼 보이지만 재로딩하면 에러
//     // className={emailNotValid && "invalid"}

//     // className={emailNotValid ? "invalid" : undefined}
//     $invalid={emailNotValid}
//     onChange={(event) => handleInputChange("email", event.target.value)}
//   />
// </p>;
