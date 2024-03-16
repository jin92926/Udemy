//context api는 전체 상태값으로 모든 컴포넌트에서 사용 가능함
import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  // 자동완성 기능을 위해 더미함수 추가,
  addItemToCart: () => {},
  updatedItemQuantity: () => {},
});
