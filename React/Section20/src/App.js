import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

import Test from "./Test";

function App() {
  //상태를 자동으로 받는 함수를 전달해야함
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Test />
    // <Layout>
    //   {showCart && <Cart />}
    //   <Products />
    // </Layout>
  );
}

export default App;
