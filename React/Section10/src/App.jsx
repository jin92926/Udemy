import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";
import { CartContext } from "./store/shoppng-cart-context.jsx";
import { CartContextProvider } from "./store/shoppng-cart-context.jsx";

function App() {
  return (
    //Provider를 붙여야 컴포넌트로 사용 가능, 사용하기 위해서는 항상 value를 입력해야함
    <CartContextProvider>
      <Header />
      {/* 기존의 prop drolling 대신 shop에 컴포넌트 합성을 통해 전달
      다만 모든 곳에서 사용하기 어려움
      */}
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
