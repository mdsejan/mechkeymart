import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TProduct } from "../types";
import keyimgone from "../assets/img/keyimg1.png";
import keyimgTwo from "../assets/img/keyimg2.webp";
import keyimgthree from "../assets/img/keyimg3.webp";
import keyimgfour from "../assets/img/keyimg4.webp";
import keyimgfive from "../assets/img/keyimg5.webp";
import keyimgsix from "../assets/img/keyimg6.webp";
import Container from "./Container";

// Dummy data for illustration. Replace with real data fetching.
const fetchFeaturedProducts = async () => {
  return [
    {
      id: 1,
      image: keyimgone,
      name: "Keychron K2",
      brand: "Keychron",
      quantity: 10,
      price: "$99.99",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      image: keyimgTwo,
      name: "Corsair K95 RGB",
      brand: "Corsair",
      quantity: 5,
      price: "$149.99",
      rating: "⭐⭐⭐",
    },
    {
      id: 3,
      image: keyimgthree,
      name: "Razer BlackWidow",
      brand: "Razer",
      quantity: 8,
      price: "$129.99",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      image: keyimgfour,
      name: "Logitech G Pro X",
      brand: "Logitech",
      quantity: 12,
      price: "$199.99",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 5,
      image: keyimgfive,
      name: "Ducky One 2 Mini",
      brand: "Ducky",
      quantity: 7,
      price: "$89.99",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 6,
      image: keyimgsix,
      name: "SteelSeries Apex Pro",
      brand: "SteelSeries",
      quantity: 3,
      price: "$159.99",
      rating: "⭐⭐⭐⭐",
    },
  ].sort((a, b) => b.id - a.id); // Sort by ID for latest products
};

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchFeaturedProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <Container>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-start">
          Featured Products
        </h2>
        <Link
          to="/products"
          className="hidden lg:inline-block bg-gray-100 text-blue-800 py-2 px-4 rounded hover:bg-gray-200 font-bold"
        >
          See More
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-between"
          >
            <div className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-700">
                <span className="text-gray-950 font-medium">
                  Brand: &nbsp;{" "}
                </span>
                {product.brand}
              </p>
              <p className="text-gray-700">
                <span className="text-gray-950 font-medium">
                  Available Quantity: &nbsp;
                </span>
                {product.quantity}
              </p>
              <p className="text-gray-700">
                <span className="text-gray-950 font-medium">
                  Price: &nbsp;{" "}
                </span>
                {product.price}
              </p>
              <p className="text-gray-700">
                <span className="text-gray-950 font-medium">
                  Rating: &nbsp;{" "}
                </span>
                {product.rating}
              </p>
            </div>
            <div className="p-4">
              <Link
                to={`/product/${product.id}`}
                className="mt-4 inline-block bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedProducts;
