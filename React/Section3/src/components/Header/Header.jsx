//이렇게 표현하면 이미지를 js 객체라 할 수 있음
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Curcial", "Core"];
const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
  // 보통 변수로 저장해서 return 내에 깔끔하게 사용하는 것이 좋음
  const description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      {/* 이렇게 소스 속성 값을 작성하는 건 최선의 방법은 아님 이런 식으로 불러오면
        이미지가 사라질 수 있음, 경로를 알려주는 것이 좋음
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
