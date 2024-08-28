import React from "react";
import {
  FaShippingFast,
  FaDollarSign,
  FaTools,
  FaKeyboard,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service: React.FC = () => {
  const { ref: sectionRef, inView: isSectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger animation when 10% of the section is visible
  });

  const cards = [
    {
      icon: <FaShippingFast className="text-blue-500 w-12 h-12" />,
      title: "Fast Shipping",
      description: "We ship most orders within 24-48 hours from New Jersey.",
    },
    {
      icon: <FaDollarSign className="text-green-500 w-12 h-12" />,
      title: "Flexible Payments",
      description:
        "Multiple payment options and interest-free plans available.",
    },
    {
      icon: <FaTools className="text-yellow-500 w-12 h-12" />,
      title: "Custom Builds",
      description: "Create your dream mechanical keyboard from scratch.",
    },
    {
      icon: <FaKeyboard className="text-purple-500 w-12 h-12" />,
      title: "Quality Products",
      description:
        "We offer the best mechanical keyboard products and accessories.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white border rounded-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: isSectionVisible ? 1 : 0,
                scale: isSectionVisible ? 1 : 0.95,
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }} // Stagger effect
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Scale down on click
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
