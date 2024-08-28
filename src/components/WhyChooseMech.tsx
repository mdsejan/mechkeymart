import { motion } from "framer-motion";
import Container from "./Container";
import { useInView } from "react-intersection-observer";

const WhyChooseMech: React.FC = () => {
  const { ref: sectionRef, inView: isSectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Container>
      <div className="py-16" ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: isSectionVisible ? 1 : 0,
                y: isSectionVisible ? 0 : -30,
              }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Mechanical Keyboards?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isSectionVisible ? 1 : 0,
                y: isSectionVisible ? 0 : 20,
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mechanical keyboards offer a superior typing experience due to
              their distinct switch mechanisms. They provide tactile feedback
              and audible clicks, allowing for more accurate typing and a
              satisfying keystroke. Unlike membrane keyboards, mechanical
              keyboards are built to last, with high-quality switches that
              withstand millions of keystrokes. Whether you're a gamer seeking
              precision or a typist desiring comfort, mechanical keyboards cater
              to all needs with customizable options and ergonomic designs.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="p-8 bg-white border rounded-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: isSectionVisible ? 1 : 0,
                scale: isSectionVisible ? 1 : 0.95,
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tactile Feedback
              </h3>
              <p className="text-gray-600">
                Mechanical keyboards provide distinct tactile feedback with each
                keypress, enhancing typing accuracy and reducing fatigue.
              </p>
            </motion.div>
            <motion.div
              className="p-8 bg-white border rounded-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: isSectionVisible ? 1 : 0,
                scale: isSectionVisible ? 1 : 0.95,
              }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8a4 4 0 014-4h10a4 4 0 014 4v8a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Durability
              </h3>
              <p className="text-gray-600">
                Built with high-quality switches, mechanical keyboards are known
                for their durability and longevity, making them a long-term
                investment.
              </p>
            </motion.div>
            <motion.div
              className="p-8 bg-white border rounded-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: isSectionVisible ? 1 : 0,
                scale: isSectionVisible ? 1 : 0.95,
              }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 12h6M6 12h6M12 16h6M6 16h6M12 8h6M6 8h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customization
              </h3>
              <p className="text-gray-600">
                Mechanical keyboards offer extensive customization options,
                including keycap designs, switch types, and backlighting to suit
                personal preferences.
              </p>
            </motion.div>
            <motion.div
              className="p-8 bg-white border rounded-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: isSectionVisible ? 1 : 0,
                scale: isSectionVisible ? 1 : 0.95,
              }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3l7 7-7 7M13 3l7 7-7 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Ergonomics
              </h3>
              <p className="text-gray-600">
                Mechanical keyboards are designed with ergonomics in mind,
                providing various layouts and key profiles to reduce strain and
                improve typing comfort.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseMech;
