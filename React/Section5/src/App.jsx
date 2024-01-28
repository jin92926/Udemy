import { useState } from "react";
import Header from "./components/Header/Header";
import InputGroup from "./components/InputGroup";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 1,
    duration: 1,
  });

  // 각 Input 컴포넌트의 값이 변경될 때 호출되는 콜백 함수
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <InputGroup userInput={userInput} handleChange={handleChange} />
      {!inputIsValid && (
        <p className="center">please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
