import React, { useState } from "react";
import ProductModal from "../components/ProductModal";
import Container from "../components/Container";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { Product } from "../types";

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Keyboard A",
    price: 100,
    brand: "Brand A",
    description: "A great keyboard.",
    quantity: 10,
    rating: 4.5,
    image: "",
  },
  {
    id: 2,
    name: "Keyboard B",
    price: 150,
    brand: "Brand B",
    description: "An even better keyboard.",
    quantity: 5,
    rating: 4.7,
    image: "",
  },
];

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setIsAddModalOpen(false);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setIsUpdateModalOpen(false);
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  return (
    <Container>
      <div className="w-full py-16">
        <div className="w-full flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">Manage Products</h1>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add Product
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <div className="flex space-x-2">
                  <button
                    className="bg-yellow-500 text-white py-2 px-2 rounded"
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsUpdateModalOpen(true);
                    }}
                  >
                    <FaPenToSquare />
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-2 rounded"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <p className="mb-2">Price: ${product.price}</p>
              <p className="mb-2">Brand: {product.brand}</p>
              <p className="mb-2">Description: {product.description}</p>
            </div>
          ))}
        </div>
        {isAddModalOpen && (
          <ProductModal
            title="Add Product"
            product={null}
            onSave={handleAddProduct}
            onClose={() => setIsAddModalOpen(false)}
          />
        )}
        {isUpdateModalOpen && selectedProduct && (
          <ProductModal
            title="Update Product"
            product={selectedProduct}
            onSave={handleUpdateProduct}
            onClose={() => setIsUpdateModalOpen(false)}
          />
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
