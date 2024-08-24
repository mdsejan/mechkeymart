import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { FaStar, FaRegStar } from "react-icons/fa";
import Rating from "react-rating";

const ProductsPage = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const filteredProducts = [
    {
      id: "1",
      name: "Cherry MX Red Keyboard",
      brand: "Cherry",
      quantity: 50,
      price: 120,
      rating: 4.5,
      image:
        "https://i.pinimg.com/564x/fd/42/6b/fd426b4705f3f93210606453b7659f4e.jpg",
    },
    {
      id: "2",
      name: "Logitech G Pro X",
      brand: "Logitech",
      quantity: 30,
      price: 150,
      rating: 4.7,
      image:
        "https://i.pinimg.com/564x/80/83/b9/8083b918f9f09560a04c2e8501d763f6.jpg",
    },
    {
      id: "3",
      name: "Corsair K95 RGB Platinum",
      brand: "Corsair",
      quantity: 20,
      price: 180,
      rating: 4.8,
      image:
        "https://i.pinimg.com/564x/6d/5e/35/6d5e3544bcf4072c747ecdfe26e9fe6a.jpg",
    },
    {
      id: "4",
      name: "Razer BlackWidow Elite",
      brand: "Razer",
      quantity: 25,
      price: 170,
      rating: 4.6,
      image:
        "https://i.pinimg.com/564x/a6/86/e9/a686e9fcc95e63d3e7192de869d96e7c.jpg",
    },
    {
      id: "5",
      name: "SteelSeries Apex Pro",
      brand: "SteelSeries",
      quantity: 15,
      price: 200,
      rating: 4.9,
      image:
        "https://i.pinimg.com/564x/26/06/da/2606dadb35bf67e86111409cff6e5866.jpg",
    },
    {
      id: "6",
      name: "Ducky One 2 Mini",
      brand: "Ducky",
      quantity: 40,
      price: 100,
      rating: 4.4,
      image:
        "https://i.pinimg.com/564x/3c/c0/c1/3cc0c15c0ad52c149eea35f2e980c6a3.jpg",
    },
  ];

  const loading = false;

  const handlePriceRangeChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange(value as [number, number]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-20">
        {/* Left Column - Filters */}
        <div className="lg:col-span-1">
          <div className="flex flex-col gap-4 p-4 border rounded-md">
            <input
              type="text"
              placeholder="Search by name..."
              className="p-2 border rounded-md"
            />
            <input
              type="text"
              name="brand"
              placeholder="Filter by brand..."
              className="p-2 border rounded-md"
            />
            <div>
              <label className="block mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <Slider
                range
                min={0}
                max={1000}
                value={priceRange}
                onChange={handlePriceRangeChange}
                trackStyle={[{ backgroundColor: "#4A90E2" }]}
                handleStyle={[
                  { borderColor: "#4A90E2" },
                  { borderColor: "#4A90E2" },
                ]}
              />
            </div>
            <select className="p-2 border rounded-md">
              <option value="">Sort by</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
            <button className="p-2 bg-red-500 text-white rounded-md">
              Clear Filters
            </button>
          </div>
        </div>

        {/* Right Column - Products */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <p>Loading...</p>
            ) : (
              filteredProducts.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p>Brand: {product.brand}</p>
                  <p>Available Quantity: {product.quantity}</p>
                  <p>Price: ${product.price}</p>
                  <div className="flex items-center">
                    <Rating
                      initialRating={product.rating}
                      readonly
                      emptySymbol={<FaRegStar color="#FFD700" />}
                      fullSymbol={<FaStar color="#FFD700" />}
                    />
                  </div>
                  <Link
                    to={`/product/${product.id}`}
                    className="inline-block px-4 py-1 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    Show Details
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
