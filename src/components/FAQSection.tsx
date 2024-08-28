import { useState } from "react";

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const dataArr = [
    {
      title: "How do I create an account?",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "What is your return policy?",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Can I change my shipping address?",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Are there any discounts for loyal customers?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];

  const toggle = (idx: number) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <section className="bg-white text-gray-900 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {dataArr.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-200 hover:bg-gray-300 transition-colors duration-300 text-gray-900 font-medium focus:outline-none"
              >
                <span>{item.title}</span>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    isOpen === idx ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 py-4 bg-gray-200 transition-max-height duration-500 ease-out overflow-hidden ${
                  isOpen === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
