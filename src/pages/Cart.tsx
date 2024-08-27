import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../types";
import { removeFromCart, updateQuantity } from "../redux/features/cartSlice";
import { RootState } from "../redux/store";
import Container from "../components/Container";

const Cart2: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const calculateTotalPrice = (): number => {
    return cartItems.reduce(
      (total: number, item: CartItem) => total + item.price * item.quantity,
      0
    );
  };

  const isCheckoutDisabled = cartItems.some(
    (item: CartItem) => item.quantity > item.availableQuantity
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cart Items</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Container>
          <div>
            {cartItems.map((item: CartItem) => (
              <div
                key={item._id}
                className="flex justify-between items-center p-4 border rounded-lg shadow"
              >
                <div className="flex justify-around w-2/3">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  <p className="text-sm text-gray-500">
                    Available: {item.availableQuantity}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 py-1 bg-gray-300 rounded-l"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            _id: item._id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b">
                      {item.quantity}
                    </span>
                    <button
                      className="px-2 py-1 bg-gray-300 rounded-r"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            _id: item._id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      disabled={item.quantity >= item.availableQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-1/3 flex justify-end">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => dispatch(removeFromCart(item._id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right mt-8">
              <p className="text-xl font-bold">
                Total: ${calculateTotalPrice()}
              </p>
              <button
                className={`mt-4 px-6 py-2 rounded ${
                  isCheckoutDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                }`}
                disabled={isCheckoutDisabled}
                onClick={() => console.log("Proceeding to checkout...")}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Cart2;
