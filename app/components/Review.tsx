import React from "react";
import Image from "next/image";

interface ReviewProps {
  reviews: {
    body: string;
    author: string;
  }[];
}

const Review: React.FC<ReviewProps> = ({ reviews }) => {
  return (
    <>
      <div className="relative bg-hero-section-google-review py-16 px-8 font-work">
        <div className="absolute inset-0 bg-review bg-opacity-95"></div>
        <div className="relative  z-10 max-w-3xl mx-auto text-white">
          <div className="mb-14 ">
            <h2 className="text-4xl ">What our clients say</h2>

            <div className="flex justify-center items-center mt-4 w-48">
              <Image
                src="/star_image.png"
                alt="bath_image"
                layout="responsive"
                width={1}
                height={1}
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {reviews.map((review, index) => (
              <blockquote
                key={index}
                className="border-l-4 border-gray-400 pl-4"
              >
                <div className="flex items-center mb-4 w-28">
                  <Image
                    src="/star_image_reviews.png"
                    alt={`Review ${index + 1} Stars`}
                    layout="responsive"
                    width={1}
                    height={1}
                    className="object-cover"
                  />
                </div>
                <p className="italic text-lg">"{review.body}"</p>
                <footer className="mt-2 text-gray-300">
                  — {review.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-simplicity-is-beautifull flex items-center justify-center h-64">
        <div className="absolute inset-0 bg-blue-800 bg-opacity-80"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-white text-4xl">Simplicity is beautiful</h2>
        </div>
      </div>
    </>
  );
};

export default Review;
