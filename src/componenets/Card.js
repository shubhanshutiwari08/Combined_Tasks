import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-500">{content}</p>
    </div>
  );
};

export default Card;
