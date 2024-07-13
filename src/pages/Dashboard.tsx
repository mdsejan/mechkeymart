import React, { useState } from "react";
import ProductModal from "../components/ProductModal";
import Container from "../components/Container";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { Product } from "../types";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../redux/api/baseApi";
import { toast } from "sonner";

const Dashboard: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { data, isLoading } = useGetProductQuery({});

  const [updateProduct] = useUpdateProductMutation();

  if (isLoading) {
    return (
      <p className="text-2xl text-yellow-500 flex justify-center items-center">
        Loading...
      </p>
    );
  }

  const products = data?.data || [];

  const handleAddProduct = (newProduct: Product) => {
    // setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    console.log(newProduct);
    setIsAddModalOpen(false);
  };

  const handleUpdateProduct = async (updatedProduct: Product) => {
    const id = updatedProduct._id;
    try {
      const res = await updateProduct({ id, data: updatedProduct }).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update product");
    }
    setIsUpdateModalOpen(false);
  };

  // const handleDeleteProduct = (productId) => {
  //   // setProducts(products.filter((p) => p.id !== productId));
  //   console.log(productId);
  // };

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
          {products.map((product: Product) => (
            <div key={product._id} className="bg-white rounded-lg shadow p-4">
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
                    // onClick={() => handleDeleteProduct(product._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <p className="mb-2">Price: ${product.price}</p>
              <p className="mb-2">Brand: {product.brand}</p>
              <p className="mb-2">
                availableQuantity: {product.availableQuantity}
              </p>
              <p className="mb-2">Description: {product.description}</p>
              {/* <div>{product._id}</div> */}
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
