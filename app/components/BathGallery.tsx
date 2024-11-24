import React from "react";
import Image from "next/image";

const BathGallery: React.FC = () => {
  const images = [
    { src: "/bath_1.jpg", alt: "Bathroom 1" },
    { src: "/bath_2.jpg", alt: "Bathroom 2" },
    { src: "/bath_3.jpg", alt: "Bathroom 3" },
    { src: "/bath_4.jpg", alt: "Bathroom 4" },
  ];

  return (
    <>
      <div className="bg-violet-700 flex items-center justify-center h-64">
        <div className="px-6 text-center">
          <h2 className="text-white text-4xl font-work font-light">
            Your New Bathroom
          </h2>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-12 max-w-3xl">
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <Image
                src={image.src}
                alt={image.alt}
                width={2400}
                height={100}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BathGallery;
