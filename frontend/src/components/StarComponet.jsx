import { Star } from "lucide-react";

export function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={10}
          fill={star <= Math.round(rating) ? "currentColor" : "none"}
          className={
            star <= Math.round(rating) ? "text-amber-500" : "text-gray-300"
          }
        />
      ))}
      <span className="ml-1 text-sm">{rating}</span>
    </div>
  );
}
