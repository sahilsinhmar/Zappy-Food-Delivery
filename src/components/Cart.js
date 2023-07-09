import { useSelector, useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "./Cartslice";
import useItemTotal from "./utils/useItemTotal";
import ItemQuantity from "./ItemQuantity";

import emptycart from "./assets/emptycart.png";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const getItemTotal = useItemTotal();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return Object.values(cartItems).length > 0 ? (
    <div className="flex m-10 justify-between p-10  h-[400px] max-h-screen">
      <div className="flex flex-col w-[400px] min-w-[500px] h-full border p-5 items-center ">
        <div className="flex justify-between w-full mb-7">
          <h3 className="text-2xl">Cart Items</h3>
          <button
            className="border px-2 bg-red-700 text-white rounded-md text-lg"
            onClick={() => {
              handleClearCart();
            }}
          >
            Clear Cart
          </button>
        </div>

        {Object.values(cartItems).map((item) => {
          return (
            <div className="flex justify-between w-full p-1">
              <h1>{item.name}</h1>
              <div className="flex justify-between w-[150px] items-center px-2">
                <ItemQuantity item={item} key={item.id} />
                <div>
                  ₹{" "}
                  {Math.trunc(
                    (item.price / 100) * item.quantity ||
                      (item.defaultPrice / 100) * item.quantity
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <div className="border border-black my-2 w-full"></div>
        <div className="flex justify-between w-full items-center px-5 font-bold">
          <p>To Pay</p>
          <p> ₹ {Math.trunc(getItemTotal())}</p>
        </div>
        <div className="border border-black my-2 w-full"></div>
        <h1></h1>
      </div>
    </div>
  ) : (
    <div className="max-h-screen flex justify-center items-center flex-col">
      <div>
        <img src={emptycart} className="w-[500px] h-[400px]" />
      </div>
      <div className="text-4xl ml-10">Cart is empty :(</div>
      <button></button>
    </div>
  );
};
