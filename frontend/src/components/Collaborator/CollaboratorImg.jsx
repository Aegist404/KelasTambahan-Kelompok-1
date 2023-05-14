import React from 'react';
import Image from 'next/image';

const Card = ({ imgSrc }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img className="w-full" src={imgSrc} />
      </div>
    </div>
  );
};

const CollaboratorImg = () => {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 flex justify-center">
          <Card imgSrc="/Nusantech.png" />
          <Card imgSrc="/GameLabb.png" />
          <Card imgSrc="/Sinarmas.png" />
          <Card imgSrc="/Astra.png" />
      </div>
    </div>
  );
};

export default CollaboratorImg;
