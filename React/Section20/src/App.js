import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import app from "./firebase";

function App() {
  //상태를 자동으로 받는 함수를 전달해야함
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  console.log(app);

  // const test = app.collection("test");
  // console.log(test);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
