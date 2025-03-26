import { ChevronLeftIcon, ChevronRightIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { reviews } from "../assets/reviews/index.js";

export default function ReviewSlider() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const reviewsPerSlide = window.innerWidth > 1200 ? 3 : 1;

  const handleSlide = (direction) => {
    const nextIndex =
      direction === 'next'
        ? (activeIndex + reviewsPerSlide) % reviews.length
        : (activeIndex - reviewsPerSlide + reviews.length) % reviews.length;
    setActiveIndex(nextIndex);
  };



  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => handleSlide('prev')}
          className="text-gray-400 hover:text-gray-600"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleSlide('next')}
          className="text-gray-400 hover:text-gray-600"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews
          .slice(activeIndex, activeIndex + reviewsPerSlide)
          .map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
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
                {[...Array(Math.floor(Math.random() * 2 + 4))].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
                {[...Array(5 - Math.floor(Math.random() * 2 + 4))].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-gray-300" />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
