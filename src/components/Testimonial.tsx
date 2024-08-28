import { FaComment } from "react-icons/fa";
import Container from "./Container";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  image: string;
  text: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    image:
      "https://i.pinimg.com/564x/0d/00/fa/0d00faf7e0a04fe724ecd886df774e4c.jpg",
    text: `"MechKeyMart has an impressive selection of mechanical keyboards. The site is user-friendly, and the product descriptions are detailed. It has become my go-to store for all keyboard needs. Highly recommended!"`,
    name: "Jesse D.",
    company: "Tech Enthusiasts Inc.",
  },
  {
    image:
      "https://i.pinimg.com/564x/d2/39/26/d239263755899e88c7f51f5ef874b4ed.jpg",
    text: `"I was able to find the perfect mechanical keyboard that suits my gaming needs. The customer service is outstanding and the delivery was quick. MechKeyMart never disappoints!"`,
    name: "Annabell M.",
    company: "Gaming Pros",
  },
  {
    image:
      "https://i.pinimg.com/564x/f2/f0/bd/f2f0bd0ab2ad2190eb3ccdca98e6392b.jpg",
    text: `"The variety of keyboards available on MechKeyMart is incredible. The detailed filters helped me find exactly what I was looking for. Excellent quality and competitive prices!"`,
    name: "Candace H.",
    company: "Keyboard Aficionados",
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="py-4 md:py-12">
      <Container>
        <div className="flex items-center mb-2">
          <FaComment className="text-orange-500 w-7 h-7 mr-3" />{" "}
          <h2 className="text-3xl font-normal text-gray-900 text-start">
            Customer Reviews
          </h2>
        </div>
        <div className="md:flex md:flex-wrap md:-mx-4 mb-4">
          {testimonials.map((testimonial, index) => (
            <div className="md:w-1/3 px-1 md:px-4 mt-6 flex" key={index}>
              <TestimonialCard
                image={testimonial.image}
                text={testimonial.text}
                name={testimonial.name}
                company={testimonial.company}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
