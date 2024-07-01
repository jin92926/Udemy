import { Link, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const HomePage = () => {
  // 타이머 같은 경우 프로그램적으로 이동을 원할 때는 useNavigate를 사용
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <div>HomePage</div>
      <p>
        Go to <Link to="/products"> the list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>navigate</button>
      </p>
    </>
  );
};

export default HomePage;
