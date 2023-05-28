import React from 'react';

const Documentation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8 mt-20">Dokumentasi</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-w-4 aspect-h-3 sm:aspect-w-3 sm:aspect-h-2">
            <img src="/images/NewsImg.png" alt="Image 1" className="object-cover rounded-lg w-full h-full" />
          </div>
          <div className="aspect-w-4 aspect-h-3 sm:aspect-w-3 sm:aspect-h-2">
            <img src="/images/NewsImg.png" alt="Image 2" className="object-cover rounded-lg w-full h-full" />
          </div>
          <div className="aspect-w-4 aspect-h-3 sm:aspect-w-3 sm:aspect-h-2">
            <img src="/images/NewsImg.png" alt="Image 3" className="object-cover rounded-lg w-full h-full" />
          </div>
          <div className="aspect-w-4 aspect-h-3 sm:aspect-w-3 sm:aspect-h-2">
            <img src="/images/NewsImg.png" alt="Image 4" className="object-cover rounded-lg w-full h-full" />
          </div>
          <div className="aspect-w-4 aspect-h-3 sm:aspect-w-3 sm:aspect-h-2">
            <img src="/images/NewsImg.png" alt="Image 5" className="object-cover rounded-lg w-full h-full" />
          </div>
          <div className="aspect-w-4 aspect-h-3 sm:aspect-w-3 sm:aspect-h-2">
            <img src="/images/NewsImg.png" alt="Image 6" className="object-cover rounded-lg w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
