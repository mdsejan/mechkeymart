import React, { useState } from "react";
import { Product, ProductModalProps } from "../types";

const ProductModal: React.FC<ProductModalProps> = ({
  title,
  product,
  onSave,
  onClose,
}) => {
  const [formData, setFormData] = useState<Product>(
    product || {
      name: "",
      price: 0,
      brand: "",
      description: "",
      availableQuantity: 0,
      rating: 0,
      image: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Convert numeric fields to numbers
    const numericFields = ["price", "availableQuantity", "rating"];
    const newValue = numericFields.includes(name) ? Number(value) : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Quantity</label>
              <input
                type="number"
                name="availableQuantity"
                value={formData.availableQuantity}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Rating</label>
              <input
                type="number"
                name="rating"
                min={1}
                max={5}
                value={formData.rating}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Image URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="flex justify-between items-center mb-4">
              <button
                type="button"
                className="bg-gray-500 text-white  py-2 px-4 rounded me-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
