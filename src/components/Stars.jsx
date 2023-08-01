import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const roundedStars = Math.round(stars * 2) / 2;

  const starIcons = Array.from({ length: 5 }, (_, index) => {
    if (roundedStars >= index + 1) {
      return <BsStarFill key={index} className="text-yellow-500 text-lg" />;
    } else if (roundedStars >= index + 0.5) {
      return <BsStarHalf key={index} className="text-yellow-500 text-lg" />;
    } else {
      return <BsStar key={index} className="text-yellow-500 text-lg" />;
    }
  });

  return (
    <div className="flex items-center">
      <div className="flex mr-1">{starIcons}</div>
      <span className="text-slate-500 text-sm font-semibold">
        ( {reviews} people reviews)
      </span>
    </div>
  );
};

export default Stars;
