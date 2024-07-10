import React from "react";
import heroImg from "../assets/img/hero-img.png";
import Container from "./Container";
const Hero: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-7/12 lg:pl-8">
          <h1 className="text-4xl xl:text-7xl font-bold text-gray-900 mb-4">
            Elevate Your Typing Experience
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Elevate your typing experience with MechKeyMart's exclusive
            collection of mechanical keyboards. Our keyboards provide a tactile
            and responsive typing experience, designed for enthusiasts and
            professionals alike. Whether you prefer clicky switches for precise
            feedback or silent switches for quiet operation, our wide selection
            offers customizable options to suit every preference. Upgrade your
            setup with MechKeyMart and discover the joy of premium mechanical
            keyboards.
          </p>
          <button className="w-full xl:w-[60%] bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 font-bold">
            Shop Now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
