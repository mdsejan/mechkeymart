import { TestimonialCardProps } from "../types";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  text,
  name,
  company,
}) => {
  return (
    <div className="testimonial p-6 border-2 border-solid flex flex-wrap xl:flex-nowrap hover:border-blue-400 hover:bg-indigo-50 transition-colors duration-300 flex-grow rounded">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 mb-4 flex-shrink-0">
        <img
          src={image}
          alt="profile image"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-gray-600">{text}</p>
        <div className="text-gray-900 font-bold uppercase mt-6">- {name}</div>
        <div className="text-gray-600">{company}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
