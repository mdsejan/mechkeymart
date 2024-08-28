import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { clearCart } from "../redux/features/cartSlice";
import { Helmet } from "react-helmet-async";

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalPrice = location.state?.totalPrice || 0;
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const generateOrderId = (): string => {
    return `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  };

  const handlePlaceOrder = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior

    const orderId = generateOrderId();

    const orderDetails = {
      name,
      email,
      phone,
      address,
      orderId,
      paymentMethod: "Cash on Delivery",
    };

    // Dispatch action to clear the cart
    dispatch(clearCart());

    // Redirect to success page
    navigate("/success", { state: orderDetails });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Checkout - MechKeyMart</title>
      </Helmet>
      <div className="w-10/12 md:w-3/5 mx-auto border p-10 lg:p-16 my-28">
        <h1 className="text-3xl text-center font-bold mb-6">Checkout</h1>

        <form onSubmit={handlePlaceOrder} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              autoComplete="tel"
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={address}
              autoComplete="street-address"
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  className="form-radio"
                  checked
                  readOnly
                />
                <span className="ml-2">Cash on Delivery</span>
              </label>
            </div>
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  className="form-radio"
                  disabled
                  readOnly
                />
                <span className="ml-2">
                  Stripe <span className="text-gray-400">(Not available)</span>
                </span>
              </label>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-lg font-bold">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Place Order
          </button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
