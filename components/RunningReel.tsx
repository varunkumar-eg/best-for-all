
import React from 'react';
import { REEL_IMAGES } from '../constants.tsx';

const RunningReel: React.FC = () => {
  const doubledImages = [...REEL_IMAGES, ...REEL_IMAGES];

  return (
    <div className="bg-white py-8 overflow-hidden border-b border-gray-100">
      <div className="animate-reel">
        {doubledImages.map((img, index) => (
          <div key={index} className="flex-shrink-0 px-4">
            <div className="w-64 h-40 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <img 
                src={img} 
                alt={`Reel ${index}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningReel;
