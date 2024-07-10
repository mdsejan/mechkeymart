import React from "react";
import warranty from "../assets/img/warranty.png";
import shiping from "../assets/img/shiping.png";
import support from "../assets/img/support.png";
import customize from "../assets/img/customizable.png";
import Container from "./Container";

const Service: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Lifetime Warranty",
      image: warranty,
    },
    {
      id: 2,
      title: "Free Shipping",
      image: shiping,
    },
    {
      id: 3,
      title: "Customizable",
      image: customize,
    },
    {
      id: 4,
      title: "Customer Support",
      image: support,
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-16">
        {cards.map((card) => (
          <div key={card.id} className="bg-white">
            <img src={card.image} alt={card.title} className="w-full h-auto " />
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-900">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Service;
