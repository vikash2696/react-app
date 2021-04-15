import React, { useEffect, useState } from "react";
import Review from "./Review";


const ListReview = () => {
  useEffect(() => {
    document.title = "Review List";
  });

  const [reviews, setReviews] = useState([
    { title: "First", description: "This is first descritopm" },
    { title: "Second", description: "This is second descritopm" }
  ]);

  return (
    <div>
      <h3 className="text-center">Review List</h3>
      {reviews.length > 0
        ? reviews.map((item) => <Review review={item} />)
        : "No data found"}
    </div>
  );
};

export default ListReview;
