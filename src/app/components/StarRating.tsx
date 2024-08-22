import { FC } from 'react';

interface StarRatingProps {
  rating: number | undefined;
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {

  if (!rating) {
    return null;
  }

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l-5.39 2.83 1.03-6.04L.26 7.21l6.11-.89L10 .91l2.63 5.31 6.11.89-4.39 4.58 1.03 6.04z" />
          </svg>
        ))}
      {halfStar && (
        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.39 2.83 1.03-6.04L.26 7.21l6.11-.89L10 .91v14.09z" />
        </svg>
      )}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l-5.39 2.83 1.03-6.04L.26 7.21l6.11-.89L10 .91l2.63 5.31 6.11.89-4.39 4.58 1.03 6.04z" />
          </svg>
        ))}
    </div>
  );
};

export default StarRating;
