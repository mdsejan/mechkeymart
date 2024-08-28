import { Link } from "react-router-dom";
import Container from "./Container";
import { useGetProductQuery } from "../redux/api/baseApi";
import { Product } from "../types";
import SkelentonCard from "./SkelentonCard";
import Rating from "./Rating";
import { FaKeyboard } from "react-icons/fa";

const FeaturedProducts: React.FC = () => {
  // const [products, setProducts] = useState<TProduct[]>([]);

  const { data, isLoading } = useGetProductQuery({});
  const skCards = [1, 2, 3, 4, 5, 6];

  if (isLoading) {
    return (
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaKeyboard className="text-blue-500 w-8 h-8 mr-3" />
            <h2 className="text-3xl font-medium text-gray-900 mb-8 text-start">
              Featured Products
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden lg:inline-block bg-white hover:text-blue-600 py-1 px-5 rounded-full font-medium border-2"
          >
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-3">
          {skCards?.map((index) => (
            <SkelentonCard key={index} />
          ))}
        </div>
      </Container>
    );
  }

  const { data: products } = data;

  return (
    <Container>
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center">
          <FaKeyboard className="text-blue-500 w-7 h-7 mr-3" />
          <h2 className="text-3xl font-normal text-gray-900  text-start">
            Featured Products
          </h2>
        </div>
        <Link
          to="/products"
          className="hidden lg:inline-block bg-white hover:text-blue-600 py-1 px-5 rounded-full font-medium border-2"
        >
          Shop All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {products?.slice(0, 8).map((product: Product) => (
          <div key={product._id} className="productcard border p-4 rounded-lg">
            <figure className="w-full h-48 lg:h-32 xl:h-48 rounded-md  overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 lg:h-32 xl:h-48 object-cover"
              />
            </figure>

            <h2 className="text-lg font-bold mb-3">{product.name}</h2>
            <div className="flex flex-col gap-1">
              <p>Brand: {product.brand}</p>
              <p>Available Quantity: {product.availableQuantity}</p>
              <p>Price: ${product.price}</p>

              <Rating rating={Math.round(product.rating)} />
            </div>
            <Link
              to={`/product/${product._id}`}
              className="inline-block px-3 py-1 mt-6 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-200 morebtn"
            >
              <span className="flex items-center">
                Details
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
              </span>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedProducts;
