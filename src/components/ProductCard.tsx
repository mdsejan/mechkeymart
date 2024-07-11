import { Link } from "react-router-dom";
import { TProduct } from "../types";

const ProductCard: React.FC<TProduct> = (product) => {
  return (
    <div
      key={product.id}
      className="productcard  border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-between"
    >
      <div className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto mb-4 overflow-hidden"
        />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-700">
          <span className="text-gray-950 font-medium">Brand: &nbsp; </span>
          {product.brand}
        </p>
        <p className="text-gray-700">
          <span className="text-gray-950 font-medium">
            Available Quantity: &nbsp;
          </span>
          {product.quantity}
        </p>
        <p className="text-gray-700">
          <span className="text-gray-950 font-medium">Price: &nbsp; </span>
          {product.price}
        </p>
        <p className="text-gray-700">
          <span className="text-gray-950 font-medium">Rating: &nbsp; </span>
          {product.rating}
        </p>
      </div>
      <div className="p-4">
        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-block bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
        >
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
