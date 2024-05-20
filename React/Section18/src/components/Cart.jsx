import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import currencyFormatter from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./UI/CartItem";
import Checkout from "./Checkout";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  const handleGoToCheckout = () => {
    userProgressCtx.showCheckout();
  };

  //   console.log(Cart.items);
  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      //이렇게 onClose를 넣게 되면 checkout컴포넌트가 안 뜨는데 이유는
      // progress의 값이 checkout으로 변할 때 Cart의 open이 false때문
      // 해결하기 위해서 아래와 같이 cart일 때만 handleCloseCart를 넘겨주면 됨
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          //스프레드 문법으로 ...item으로 보내도 됨
          <CartItem
            key={item.id}
            name={item.id}
            quantity={item.quantity}
            price={item.price}
            // CartItem에서 콘텍스트를 불러올 필요 없이 이미 있는 걸
            // 그대로 받아오는 방법도 깔끔함
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
