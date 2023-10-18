import React from 'react'

interface CardProps {
  image: string;
  name: string;
  role: string;
}

const ImageCard: React.FC<CardProps> = ({ image, name, role }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="mb-4">
        <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Facebook
        </button>
        <button className="bg-blue-400 text-white px-4 py-2 rounded-full">
          Twitter
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full">
          Google Plus
        </button>
      </div>
    </div>
  );
};

export default ImageCard;

