import reactImg from "../../assets/investment-calculator-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <img src={reactImg} alt="investment-calculator-logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export default Header;
