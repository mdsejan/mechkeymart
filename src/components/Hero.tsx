import React from "react";
import Container from "./Container";
import switches from "../assets/img/switches.png";
import keycaps from "../assets/img/keycaps.png";
import deskmats from "../assets/img/deskmats.png";
import switchLube from "../assets/img/switchlube.png";
import keyboardIcon from "../assets/img/keyboard.png";
import unboxing from "../assets/img/unboxing.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const items = [
  { src: switches, label: "Switches" },
  { src: keycaps, label: "Keycaps" },
  { src: deskmats, label: "Desk Mats" },
  { src: switchLube, label: "Lube" },
  { src: keyboardIcon, label: "Keyboards" },
  { src: unboxing, label: "Accessories" },
];

const Hero: React.FC = () => {
  const { ref: sectionRef, inView: isSectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger animation when 10% of the section is visible
  });

  return (
    <Container>
      <div
        ref={sectionRef}
        className="w-full flex flex-col justify-center items-center gap-4 text-4xl md:text-6xl font-semibold py-12"
      >
        <motion.h2
          className="text-[#141116] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSectionVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          The best mechanical
        </motion.h2>
        <motion.h2
          className="bg-gradient-to-r from-[#2F96FF] via-[#4AA0FF] to-[#B847BC] bg-clip-text text-transparent text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: isSectionVisible ? 1 : 0.9,
            opacity: isSectionVisible ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#7F7F7F]">keyboards</span> for you
        </motion.h2>
      </div>
      <div className="flex flex-wrap justify-center gap-16 py-6 px-4 text-xs lg:text-lg">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isSectionVisible ? 1 : 0,
              scale: isSectionVisible ? 1 : 0.8,
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animation
          >
            <img
              src={item.src}
              alt={`${item.label} Icon`}
              className="w-12 h-12 lg:w-16 lg:h-16"
            />
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Hero;
