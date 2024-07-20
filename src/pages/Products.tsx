import React, { useState } from "react";
import { useGetFilterdProductQuery } from "../redux/api/baseApi";
import SidebarContent from "../components/SidebarContent";
import Container from "../components/Container";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortOrder, setSortOrder] = useState<"priceAsc" | "priceDesc">(
    "priceAsc"
  );
  const [brand, setBrand] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data, isLoading } = useGetFilterdProductQuery({
    search: searchTerm,
    brand: brand,
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
    sortBy: sortOrder,
  });

  const products = data || [];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as "priceAsc" | "priceDesc");
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${
            isSidebarOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <div className="bg-white w-64 h-full p-4">
            <button onClick={handleToggleSidebar} className="mb-4">
              Close
            </button>
            <SidebarContent
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              priceRange={priceRange}
              handlePriceRangeChange={handlePriceRangeChange}
              sortOrder={sortOrder}
              handleSortOrderChange={handleSortOrderChange}
              brand={brand}
              handleBrandChange={handleBrandChange}
            />
          </div>
        </div>
        <div className="hidden md:block w-64 p-4">
          <SidebarContent
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            priceRange={priceRange}
            handlePriceRangeChange={handlePriceRangeChange}
            sortOrder={sortOrder}
            handleSortOrderChange={handleSortOrderChange}
            brand={brand}
            handleBrandChange={handleBrandChange}
          />
        </div>
        {/* Main Content */}
        <div className="flex-1 p-4">
          <button onClick={handleToggleSidebar} className="md:hidden mb-4">
            Filter
          </button>
          <div className="w-full">
            <h2>Products</h2>
          </div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product: Product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
