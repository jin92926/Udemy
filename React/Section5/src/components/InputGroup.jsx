import Input from "./Input";
const INPUT_LIST = {
  "INITIAL INVESTMENT": "initialInvestment",
  "ANNUAL INVESTMENT": "annualInvestment",
  "EXPECTED RETURN": "expectedReturn",
  DURATION: "duration",
};

const InputGroup = ({ userInput, handleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        {Object.entries(INPUT_LIST).map(([title, name], idx) => (
          <Input
            key={idx}
            title={title}
            value={userInput[name]}
            handleChange={handleChange}
            name={name}
          />
        ))}
      </div>
    </section>
  );
};

export default InputGroup;
