import Input from "./Input";
const INPUT_LIST = [
  "INITIAL INVESTMENT",
  "ANNUAL INVESTMENT",
  "EXPECTED RETURN",
  "DURATION",
];

const InputGroup = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        {INPUT_LIST.map((title, idx) => (
          <Input key={idx} title={title} />
        ))}
      </div>
    </section>
  );
};

export default InputGroup;
