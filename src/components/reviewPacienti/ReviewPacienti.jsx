import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./ReviewPacienti.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
      fetch("/reviews.json")
          .then((res) => res.json())
          .then((data) => setReviews(data))
          .catch((err) => console.error("Eroare la fetch:", err));
  }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    const truncateText = (text, length = 150) => {
        if (text.length <= length) return text;
        return text.slice(0, length) + "...";
    };

  return (
    <div className="reviews-wrapper">
        <h2 className="reviews-title">Ce spun pacienții noștri</h2>
            
            {reviews.length > 0 ? (
                <Slider {...settings}>
                    {reviews.map((rev, i) => (
                        <div key={i} className="review-slide">
                            <div className="review-card">
                                <div className="review-header">
                                    <div>
                                        <p className="review-author">{rev.author}</p>
                                        <p className="review-date">{rev.time}</p>
                                    </div>
                                </div>
                                <div className="review-stars">
                                    {"⭐".repeat(rev.rating)}
                                </div>
                                <div className="review-text">
                                    {truncateText(rev.text)}
                                </div>
                                {rev.text.length > 150 && (
                                    <button className="read-more" onClick={() => setSelectedReview(rev)}>
                                        Citește mai mult
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>Se încarcă recenziile...</p>
        )} 

            {selectedReview && (
                <div className="modal-overlay" onClick={() => setSelectedReview(null)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedReview(null)}>
                            ✕
                        </button>
                        <div className="modal-content">
                            <div className="modal-header">
                                <div>
                                    <p className="review-author">{selectedReview.author}</p>
                                    <p className="review-date">{selectedReview.time}</p>
                                    <p className="review-stars">{"★".repeat(selectedReview.rating)}</p>
                                </div>
                            </div>
                            <p className="modal-text">{selectedReview.text}</p>
                        </div>
                    </div>
                </div>
            )}  
    </div>
  );
}

export default Reviews;
