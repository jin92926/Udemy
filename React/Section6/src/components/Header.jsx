import logo from "../assets/logo.png";
// 바닐라css로 사용할 수 있으며 index에서 분리해서 사용 가능
// 바닐라css의 단점은 해당 컴포넌트로 그 규칙이 스코핑되어있지않아
// 다른 컴포넌트와 스타일 충돌이 발생할 수 있음

// import "./Header.css";

//css모듈화 하는 방법
//module을 붙이고 네이밍은 자유롭게 할 수 있음, 객체처럼 가져와서 사용
//개발자도구에 들어가면 기존의 클래스 이름과 다른데 빌드툴에 의해 자동으로 생성
//이렇게 하면 컴포넌트에서 독립적으로 사용 가능
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p
        // 컴포넌트에 스코핑되는 스타일을 사용하는 방법 중 하나는 인라인 속성을 이용하는 것
        // 장점은 하나의 컴포넌트에만 적용 가능하다는 점이며 단점은 장점과 동일
        // style={{
        //   color: "red",
        // }}
        className={classes.paragraph}
      >
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
