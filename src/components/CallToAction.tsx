import { Link } from "react-router-dom";
import keyboardImage from "../assets/img/keyboardimage.png";
import Container from "./Container";
const CallToAction = () => {
  return (
    <Container>
      <section className="bg-black text-white relative  rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="md:w-2/3 lg:w-1/2 flex flex-col items-center md:items-start py-8 px-8 md:px-16">
            <h2 className="text-4xl font-extrabold mb-4 text-center md:text-left leading-tight">
              Elevate Your Typing Experience
            </h2>
            <p className="text-lg mb-6 text-center md:text-left">
              Discover our range of premium mechanical keyboards and find the
              perfect match for your setup.
            </p>
            <div className="text-center md:text-left">
              <Link
                to="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 lg:w-1/2 flex justify-end items-end">
            <img
              src={keyboardImage}
              alt="Mechanical Keyboard"
              className="w-full h-full object-cover rounded-lg  transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CallToAction;
