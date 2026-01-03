
import React from 'react';

interface MarqueeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  speed?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  bgColor = "bg-green-600", 
  textColor = "text-white",
  speed = "40s" // Slowed down from 20s to 40s for better readability
}) => {
  return (
    <div className={`${bgColor} py-2 overflow-hidden sticky top-0 z-50 shadow-md`}>
      <div 
        className={`${textColor} font-bold text-sm md:text-base animate-marquee`}
        style={{ animationDuration: speed }}
      >
        <span className="px-6">{text}</span>
        <span className="px-6">{text}</span>
        <span className="px-6">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
