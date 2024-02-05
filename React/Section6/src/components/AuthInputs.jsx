import { useState } from "react";
import { styled } from "styled-components";

// tagged templates을 입력으로 받음
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ControlLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => (props.$invalid ? "#f87171" : "#6b7280")};
`;

const ControlInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${(props) => (props.$invalid ? "#fed2d2" : "#d1d5db")};
  color: ${(props) => (props.$invalid ? "#ef4444" : "#374151")};
  border: 1px solid ${(props) => (props.$invalid ? "#ef4444" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
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

  // console.log(emailNotValid.toString());
  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p>
          {/* 바닐라css를 섞어서 사용할 수 있음 */}
          {/* <ControlLabel className={`label ${emailNotValid ? "invalid" : ""}`}> */}
          {/* $ 사인으로 내장 컴포넌트와 충돌하지 않도록 수정 */}
          <ControlLabel $invalid={emailNotValid}>Email</ControlLabel>
          <ControlInput
            type="email"
            //인라인 스타일
            // style={{
            //   background: emailNotValid ? "red" : "#d1d5db",
            // }}

            //이 방법도 가능한 것처럼 보이지만 재로딩하면 에러
            // className={emailNotValid && "invalid"}

            // className={emailNotValid ? "invalid" : undefined}
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <ControlLabel $invalid={passwordNotValid}>Password</ControlLabel>
          <ControlInput
            type="password"
            // className={passwordNotValid ? "invalid" : undefined}
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
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
