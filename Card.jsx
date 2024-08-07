import React from "react";
import img from "../assets/cardimage.png";

const Card = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white border border-gray-200">
        <img className="w-full" src={img} alt="Card Image" />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Muhammad Tahir</h2>
          <p className="text-gray-600">Passionate Web Developer, Writing the future of web line by line.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
