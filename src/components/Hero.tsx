import React from "react";
import Container from "./Container";
import switches from "/dist/assets/switches.png";
import keycaps from "/dist/assets/keycaps.png";
import deskmats from "/dist/assets/deskmats.png";
import switchLube from "/dist/assets/switchlube.png";
import keyboardIcon from "/dist/assets/keyboard-icon.png";
import unboxing from "/dist/assets/unboxing.png";

const Hero: React.FC = () => {
  return (
    <Container>
      <div className="w-full flex flex-col justify-center items-center gap-4 text-4xl md:text-6xl font-semibold  py-12">
        <h2 className="text-[#141116] text center">The best mechanical</h2>
        <h2 className="bg-gradient-to-r from-[#2F96FF] via-[#4AA0FF] to-[#B847BC] bg-clip-text text-transparent text center">
          <span className="text-[#7F7F7F]">keyboards</span> for you
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-16 p-4 text-xs lg:text-lg">
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={switches}
            alt="Keyboards Icon"
            className="w-12 h-12 lg:w-16 lg:h-16"
          />
          <p>Switches</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={keycaps}
            alt="Keyboards Icon"
            className="w-12 h-12 lg:w-16 lg:h-16"
          />
          <p>Keycaps</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={deskmats}
            alt="Keyboards Icon"
            className="w-12 h-12 lg:w-16 lg:h-16"
          />
          <p>Desk Mats</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={switchLube}
            alt="Keyboards Icon"
            className="w-12 h-12 lg:w-16 lg:h-16"
          />
          <p>Lube</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={keyboardIcon}
            alt="Keyboards Icon"
            className="w-12 h-12 lg:w-16 lg:h-16"
          />
          <p>Keyboards</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={unboxing}
            alt="Accessories Icon"
            className="w-12 h-12 lg:w-16 lg:h-16"
          />
          <p>Accessories</p>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
