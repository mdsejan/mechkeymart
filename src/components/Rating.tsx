import { FaStar } from "react-icons/fa";

interface RatingProps {
  rating: number;
  maxRating?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, maxRating = 5 }) => {
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <div className="flex">
      {stars.map((star) => (
        <FaStar
          key={star}
          className={`h-5 w-5 ${
            star <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default Rating;
