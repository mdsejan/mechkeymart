import { Link } from "react-router-dom";
import Container from "./Container";
import { useGetProductQuery } from "../redux/api/baseApi";
import { Product } from "../types";
import SkelentonCard from "./SkelentonCard";

const FeaturedProducts: React.FC = () => {
  // const [products, setProducts] = useState<TProduct[]>([]);

  const { data, isLoading } = useGetProductQuery({});
  const skCards = [1, 2, 3, 4, 5, 6];

  if (isLoading) {
    return (
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-start">
            Featured Products
          </h2>
          <Link
            to="/products"
            className="hidden lg:inline-block bg-white text-blue-600 py-1 px-4 rounded hover:bg-[#ECF3F7] font-bold border-2 border-blue-600"
          >
            See More
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-3">
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
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-start">
          Featured Products
        </h2>
        <Link
          to="/products"
          className="hidden lg:inline-block bg-white text-blue-600 py-1 px-4 rounded hover:bg-[#ECF3F7] font-bold border-2 border-blue-600"
        >
          See More
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-3">
        {products?.slice(0, 6).map((product: Product) => (
          <div
            key={product._id}
            className="productcard  border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-[150px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[150px] object-cover mb-4 rounded-md"
                />
              </div>

              <div className="p-4">
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
                  {product.availableQuantity}
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
            </div>
            <div className="p-4">
              <Link
                to={`/product/${product._id}`}
                className="mt-4 inline-block bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700 morebtn"
              >
                <span className="flex items-center">
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
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedProducts;
