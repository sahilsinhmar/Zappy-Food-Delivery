import { useSelector, useDispatch } from "react-redux";
import { addItem, clearCart } from "./Cartslice";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1>Cart {console.log(cartItems)}</h1>
      <button
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
      {Object.values(cartItems).map((item) => {
        return (
          <div>
            <h1>
              {item.name} {(item.price / 100) * item.quantity}Rs
            </h1>
            <h1>{item.quantity}</h1>
          </div>
        );
      })}
      <h1></h1>
    </div>
  );
};
