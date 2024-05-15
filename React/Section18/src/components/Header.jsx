import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        {/* 리액트는 자동으로 속성을 true로 설정하기에 굳이 안넣어도 됨 */}
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
