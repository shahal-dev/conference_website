import React, { useState, useEffect } from 'react';

const CountdownClock: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-20T09:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-8">
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center min-w-[60px] sm:min-w-[80px] transform hover:scale-105 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.days}</div>
        <div className="text-emerald-200 text-xs sm:text-sm font-semibold">Days</div>
      </div>
      <div className="text-white text-xl sm:text-2xl font-bold">:</div>
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center min-w-[60px] sm:min-w-[80px] transform hover:scale-105 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.hours}</div>
        <div className="text-emerald-200 text-xs sm:text-sm font-semibold">Hours</div>
      </div>
      <div className="text-white text-xl sm:text-2xl font-bold">:</div>
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center min-w-[60px] sm:min-w-[80px] transform hover:scale-105 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.minutes}</div>
        <div className="text-emerald-200 text-xs sm:text-sm font-semibold">Minutes</div>
      </div>
      <div className="text-white text-xl sm:text-2xl font-bold">:</div>
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center min-w-[60px] sm:min-w-[80px] transform hover:scale-105 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.seconds}</div>
        <div className="text-emerald-200 text-xs sm:text-sm font-semibold">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownClock; 