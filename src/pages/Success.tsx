import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoBagCheck } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const Success: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();
  const location = useLocation();
  const { name, email, phone, address, orderId, paymentMethod } =
    location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title> Order Success </title>
      </Helmet>
      <section className="bg-white antialiased py-24">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
          <div className=" text-center flex flex-col justify-center items-center gap-2">
            <IoBagCheck size={64} color="#3B86F2" />
            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl mb-4">
              Thanks for your order!
            </h2>
            <p className="text-gray-500 text-center mb-6 md:mb-8">
              Your order{" "}
              <span className="font-medium text-blue-700 hover:underline">
                #{orderId}
              </span>{" "}
              will be processed within 24 hours during working days. We will
              notify you by email at{" "}
              <span className="font-medium text-blue-700">{email}</span> once
              your order has been shipped.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 mb-6 md:mb-8">
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500">Date</dt>
              <dd className="font-medium text-gray-900 sm:text-end">
                {currentDate}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500">
                Payment Method
              </dt>
              <dd className="font-medium text-gray-900 sm:text-end">
                {paymentMethod}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500">Name</dt>
              <dd className="font-medium text-gray-900 sm:text-end">{name}</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500">
                Address
              </dt>
              <dd className="font-medium text-gray-900 sm:text-end">
                {address}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500">Phone</dt>
              <dd className="font-medium text-gray-900 sm:text-end">{phone}</dd>
            </dl>
          </div>
          <div>
            <Link
              to="/products"
              className="py-2.5 px-5 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white focus:outline-none rounded-md hover:text-primary-700 focus:z-10 focus:ring-4"
            >
              Return to shopping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Success;
