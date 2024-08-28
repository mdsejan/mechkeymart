import React, { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../redux/api/baseApi";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../types";
import { addToCart } from "../redux/features/cartSlice";
import { RootState } from "../redux/store";
import Container from "../components/Container";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const ProductDetails: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetProductByIdQuery(id);

  const product = data?.data;
  const productTitle = product?.name || "Product Details";

  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cart = useSelector((state: RootState) => state?.cart?.items);

  // Find if product is already in the cart
  const AlreadyAdded = cart?.find(
    (item: CartItem) => item?._id === product?._id
  );

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (quantity > product.availableQuantity) {
      alert("Cannot add more than available stock!");
      return;
    }
    if (product.availableQuantity === 0) {
      alert("Product is out of stock!");
      return;
    }
    dispatch(addToCart({ ...product, quantity }));

    toast.success(`${product.name} has been added to your cart!`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title> {productTitle} </title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-32">
        {isLoading ? (
          <Loading />
        ) : (
          <Container>
            <div className="flex flex-col lg:flex-row border  p-12 xl:p-24 rounded-md shadow-sm">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full lg:w-1/2 object-cover rounded-lg shadow-lg md:mb-12"
              />
              <div className="md:ml-8 mt-4 md:mt-0">
                <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
                <Rating rating={Math.round(product?.rating)} />
                <p className="text-lg text-gray-700 mt-4">
                  <b>Brand:</b> {product?.brand}
                </p>
                <p className="text-lg text-gray-700 mt-2">
                  <b>Price:</b> ${product?.price}
                </p>
                <p className="text-lg text-gray-700 mt-2">
                  <b>Available Quantity:</b> {product?.availableQuantity}
                </p>

                <p className="mt-4">{product?.description}</p>

                {product?.availableQuantity > 0 ? (
                  <div className="mt-6 flex items-center space-x-4">
                    <button
                      onClick={handleAddToCart}
                      disabled={
                        AlreadyAdded &&
                        AlreadyAdded?.quantity >= AlreadyAdded.availableQuantity
                      }
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600"
                    >
                      Add to Cart
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      min={1}
                      max={product?.availableQuantity}
                      className="border border-gray-300 p-2 rounded-md w-16"
                    />
                  </div>
                ) : (
                  <p className="mt-6 text-red-500">Out of Stock</p>
                )}
              </div>
            </div>
          </Container>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
