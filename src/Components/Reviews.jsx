import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { reviews } from "../assets/reviews/index.js";

export default function ReviewSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reviewsPerSlide, setReviewsPerSlide] = useState(getReviewsPerSlide());

  function getReviewsPerSlide() {
    const width = window.innerWidth;
    return width > 1280 ? 3 : width > 768 ? 2 : 1;
  }

  useEffect(() => {
    const handleResize = () => {
      setReviewsPerSlide(getReviewsPerSlide());
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Инициализация при первом рендере

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSlide = (direction) => {
    const nextIndex = direction === 'next'
      ? (activeIndex + reviewsPerSlide) % reviews.length
      : (activeIndex - reviewsPerSlide + reviews.length) % reviews.length;
    setActiveIndex(nextIndex);
  };

  return (
    <section className="container max-w-screen-2xl mx-auto space-x-2 w-full h-full my-20 relative">
      <h2 className="text-2xl font-bold text-gray-100 text-center mb-6">Отзывы</h2>

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => handleSlide('prev')}
          className="text-gray-400 hover:text-gray-600 absolute top-[50%] left-[0.5%]"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>
        <button
          onClick={() => handleSlide('next')}
          className="text-gray-400 hover:text-gray-600 hover:scale-110 absolute top-[50%] right-[0.5%]"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {reviews
          .slice(activeIndex, activeIndex + reviewsPerSlide)
          .map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg ">
              <div className="w-24 h-24 mx-auto mb-6">
                {review.img ? (
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <UserCircleIcon className="w-full h-full text-gray-400" />
                )}
              </div>

              <h3 className="text-center text-xl font-semibold mb-4">{review.name}</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">{review.review}</p>

              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
