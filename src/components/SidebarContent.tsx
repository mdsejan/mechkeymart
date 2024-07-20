interface SidebarContentProps {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  priceRange: [number, number];
  handlePriceRangeChange: (min: number, max: number) => void;
  sortOrder: "priceAsc" | "priceDesc";
  handleSortOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  brand: string;
  handleBrandChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
  searchTerm,
  handleSearchChange,
  priceRange,
  handlePriceRangeChange,
  sortOrder,
  handleSortOrderChange,
  brand,
  handleBrandChange,
}) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Search</label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Brand</label>
        <select
          value={brand}
          onChange={handleBrandChange}
          className="w-full p-2 border rounded"
        >
          <option value="">All Brands</option>
          <option value="Brand1">Brand1</option>
          <option value="Brand2">Brand2</option>
          {/* Add more brands as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Price Range</label>
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) =>
            handlePriceRangeChange(Number(e.target.value), priceRange[1])
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) =>
            handlePriceRangeChange(priceRange[0], Number(e.target.value))
          }
          className="w-full p-2 border rounded mt-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Sort By Price</label>
        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="w-full p-2 border rounded"
        >
          <option value="priceAsc">Low to High</option>
          <option value="priceDesc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SidebarContent;
