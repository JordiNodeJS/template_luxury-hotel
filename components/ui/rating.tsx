import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  showValue?: boolean;
  reviews?: number;
  className?: string;
}

export default function Rating({
  rating,
  maxRating = 5,
  size = 16,
  showValue = false,
  reviews,
  className,
}: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-0.5">
        {/* Full Stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star
            key={`full-${index}`}
            size={size}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

        {/* Half Star */}
        {hasHalfStar && (
          <div className="relative inline-block">
            <Star size={size} className="text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={size} className="fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}

        {/* Empty Stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <Star key={`empty-${index}`} size={size} className="text-gray-300" />
        ))}
      </div>

      {/* Rating Value and Reviews */}
      {(showValue || reviews) && (
        <span className="text-sm text-gray-600">
          {showValue && rating.toFixed(1)}
          {reviews && <span className="ml-1">({reviews} reviews)</span>}
        </span>
      )}
    </div>
  );
}
