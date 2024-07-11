import { Brand } from "../types";
import Container from "./Container";
import logo1 from "../assets/img/1.webp";
import logo2 from "../assets/img/2.webp";
import logo3 from "../assets/img/3.webp";
import logo4 from "../assets/img/4.webp";

const brands: Brand[] = [
  {
    logo: logo1,
    title: "Brand 1",
  },
  {
    logo: logo2,
    title: "Brand 2",
  },
  {
    logo: logo3,
    title: "Brand 3",
  },
  {
    logo: logo4,
    title: "Brand 3",
  },
];

const TopFeaturedBrands: React.FC = () => {
  return (
    <div className="py-8">
      <Container>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-start">
            Top Featured Brands
          </h2>
        </div>
        <div className="border rounded-md flex justify-center items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-16 p-12">
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={brand.logo}
                  alt={`${brand.title} logo`}
                  className="object-contain cursor-pointer grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopFeaturedBrands;
