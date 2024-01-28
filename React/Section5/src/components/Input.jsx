const Input = ({ title, value, handleChange, name }) => {
  //하나의 컴포넌트로 개별적인 인스턴스를 생성했으나 상태끌어올리기 위해선
  //객체로 변경하는 게 효율적
  // const [inputValue, setInputValue] = useState(0);
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  return (
    <div>
      <label>{title}</label>
      <input
        type="number"
        required
        id={title}
        name={title}
        value={value}
        onChange={(event) => handleChange(name, event.target.value)}
      />
    </div>
  );
};

export default Input;
