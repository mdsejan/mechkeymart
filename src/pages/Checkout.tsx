import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { clearCart } from "../redux/features/cartSlice";

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalPrice = location.state?.totalPrice || 0;
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handlePlaceOrder = () => {
    // Dispatch action to clear the cart
    dispatch(clearCart());

    // Redirect to success page
    navigate("/success");
  };

  return (
    <div className="w-10/12 md:w-3/5 mx-auto border p-10 lg:p-16 my-28">
      <h1 className="text-3xl text-center font-bold mb-6">Checkout</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Payment Method</h2>
          <div className="mt-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" checked readOnly />
              <span className="ml-2">Cash on Delivery</span>
            </label>
          </div>
          <div className="mt-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" disabled readOnly />
              <span className="ml-2">Stripe (Not available)</span>
            </label>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-lg font-bold">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
        </div>

        <button
          type="button"
          onClick={handlePlaceOrder}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
