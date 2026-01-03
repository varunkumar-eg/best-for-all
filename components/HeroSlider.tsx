
import React, { useState, useEffect } from 'react';
import { SLIDES } from '../constants.tsx';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-70`}></div>
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 font-medium max-w-2xl drop-shadow-md">
              {slide.subtitle}
            </p>
            <button className="mt-8 bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
