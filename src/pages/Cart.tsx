import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../types";
import { removeFromCart, updateQuantity } from "../redux/features/cartSlice";
import { RootState } from "../redux/store";
import Container from "../components/Container";
import { TbTrashXFilled } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const Cart: React.FC = () => {
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

  const handleRemoveFromCart = (itemId: string, itemName: string) => {
    dispatch(removeFromCart(itemId));
    toast.error(`${itemName} has been removed from your cart.`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Page refresh warning effect
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  return (
    <Container>
      <Helmet>
        <title>Cart - MechKeyMart</title>
      </Helmet>
      {cartItems?.length > 0 && (
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      )}

      {cartItems?.length === 0 ? (
        <div className="min-h-80 mx-auto p-12 flex flex-col justify-center items-center">
          <LuShoppingCart size={84} />
          <p className="mt-8 text-xl">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="w-full justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg lg:w-2/3">
              {cartItems.map((item: CartItem) => (
                <div
                  key={item._id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 border sm:flex sm:justify-start"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-400 mt-3">
                        ${item.price}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between items-center sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <button
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
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
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
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
                        <div
                          className="ms-4 text-red-700 cursor-pointer"
                          onClick={() =>
                            handleRemoveFromCart(item._id, item.name)
                          }
                        >
                          <TbTrashXFilled size={28} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Sub total */}

            <div className="mt-6 h-full rounded-lg bg-white p-6 border md:mt-0 lg:w-1/3">
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    ${calculateTotalPrice().toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-400">including VAT</p>
                </div>
              </div>

              <Link
                to="/checkout"
                state={{ totalPrice: calculateTotalPrice() }}
                className={`block text-center mt-6 w-full rounded-md py-1.5 font-medium text-blue-50 ${
                  isCheckoutDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
