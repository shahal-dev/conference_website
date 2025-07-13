import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  events: Array<{
    title: string;
    description: string;
    image: string;
    date: string;
    type: string;
  }>;
}

const EventsCarousel: React.FC<CarouselProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {events.map((event, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-emerald-600 to-teal-600">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-3">
                  <span className="bg-emerald-500 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-0 sm:mr-3 w-fit">
                    {event.type}
                  </span>
                  <span className="text-emerald-200 text-sm sm:text-base">{event.date}</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 line-clamp-2">{event.title}</h3>
                <p className="text-emerald-100 text-sm sm:text-base line-clamp-2 sm:line-clamp-3">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsCarousel; 