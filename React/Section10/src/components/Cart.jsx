// context api를 사용하기 위해서는 사용하는 위치에 useContext 훅을 사용
// 이를 통해 컨텍스트 값에 접근해 사용할 수 있게 함
import { useContext } from "react";
import { CartContext } from "../store/shoppng-cart-context";

export default function Cart() {
  const { items, updatedItemQuantity } = useContext(CartContext);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updatedItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updatedItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}

// 아래 처럼 하는 방법도 있지만 현대적이지 않고 잘 사용안함
<CartContext.Consumer>
  {(cartCtx) => {
    const totalPrice = cartCtx.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
    return (
      <div id="cart">
        {cartCtx.length === 0 && <p>No items in cart!</p>}
        {cartCtx.length > 0 && (
          <ul id="cart-items">
            {cartCtx.map((item) => {
              const formattedPrice = `$${item.price.toFixed(2)}`;

              return (
                <li key={item.id}>
                  <div>
                    <span>{item.name}</span>
                    <span> ({formattedPrice})</span>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <p id="cart-total-price">
          Cart Total: <strong>{formattedTotalPrice}</strong>
        </p>
      </div>
    );
  }}
</CartContext.Consumer>;
