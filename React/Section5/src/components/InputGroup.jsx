import Input from "./Input";
const INPUT_LIST = [
  "INITIAL INVESTMENT",
  "ANNUAL INVESTMENT",
  "EXPECTED RETURN",
  "DURATION",
];

const InputGroup = () => {
  return (
    <div id="user-input">
      {INPUT_LIST.map((title) => (
        <Input title={title} />
      ))}
    </div>
  );
};

export default InputGroup;
