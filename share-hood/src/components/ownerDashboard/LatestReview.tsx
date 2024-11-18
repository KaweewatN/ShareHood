"use client";

import ReviewCard from "@components/hood.ui/ReviewCard";
import { ReviewType } from "../../types/apiType";

const sampleReview: ReviewType = {
  reviewID: "123",
  reviewRating: 4,
  reviewComment: "Good and comfortable shoes. The shipping was also excellent.",
  dateCreated: "25/10/2024",
  users: {
    userID: "456",
    reviewerName: "Nunthaphak Boripunt",
    reviewerImage: "/images/Default-LINE-moon.jpg", // Optional custom image
  },
};

export default function LatestReview() {
  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Latest Review</h3>
      <ReviewCard review={sampleReview} />
    </div>
  );
}