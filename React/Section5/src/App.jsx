import { useState } from "react";
import Header from "./components/Header/Header";
import InputGroup from "./components/InputGroup";
function App() {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Header />
      <InputGroup onChange={handleInputChange} inputValue={inputValue} />
    </>
  );
}

export default App;
