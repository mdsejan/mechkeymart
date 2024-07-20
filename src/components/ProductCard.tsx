// src/components/ProductCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getStars = (rating: number) => {
    return "⭐".repeat(Math.floor(rating)) + (rating % 1 ? "⭐" : "");
  };

  return (
    <div className="productcard border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-between">
      <div>
        <div className="w-full h-[150px] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[150px] object-cover mb-4 rounded-md"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-700">
            <span className="text-gray-950 font-medium">Brand: </span>
            {product.brand}
          </p>
          <p className="text-gray-700">
            <span className="text-gray-950 font-medium">
              Available Quantity:{" "}
            </span>
            {product.availableQuantity}
          </p>
          <p className="text-gray-700">
            <span className="text-gray-950 font-medium">Price: </span>$
            {product.price.toFixed(2)}
          </p>
          <p className="text-gray-700">
            <span className="text-gray-950 font-medium">Rating: </span>
            {getStars(product.rating)}
          </p>
        </div>
      </div>
      <div className="p-4">
        <Link
          to={`/product/${product._id}`}
          className="mt-4 inline-block bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700 morebtn"
        >
          <span className="flex items-center">
            See Details
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
