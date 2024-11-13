"use client";

import React from "react";
import Image from "next/image";
import {FaStar} from "react-icons/fa";
import {ReviewType} from "../../types/apiType";

interface ReviewCardProps {
  review: ReviewType;
}

/**
 * ReviewCard component displays a user's review with profile image, name, rating, date, and comment.
 * @param {ReviewType} review - Review data object.
 */
const ReviewCard: React.FC<ReviewCardProps> = ({review}) => {
  const {reviewRating, reviewComment, dateCreated, users} = review;
  const {reviewerName, reviewerImage = "/images/default-user.png"} = users; // Fallback to default image

  return (
    <div className="mx-auto max-w-sm">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Latest Review</h3>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
        {/* Profile and Reviewer Information */}
        <div className="mb-4 flex items-center">
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src={reviewerImage}
              alt={`${reviewerName}'s profile`}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h4 className="text-md font-semibold text-gray-900">{reviewerName}</h4>
            <p className="text-sm text-gray-500">{dateCreated}</p>
            <div className="mt-1 flex items-center">
              {/* Star Rating Display */}
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-xs ${i < reviewRating ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Review Comment Section */}
        <p className="text-sm leading-relaxed text-gray-700">{reviewComment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
