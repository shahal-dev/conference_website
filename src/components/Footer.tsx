import React from 'react';
import { Globe, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <img 
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2 sm:p-3 rounded-xl shadow-lg mb-3 sm:mb-0 sm:mr-4">
              <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
              Environment and Changing Climate Conference 2025
            </span>
          </div>
          <p className="text-emerald-300 mb-4 sm:mb-6 text-lg sm:text-xl">Global Strategies and Local Actions</p>
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <div className="bg-emerald-600 p-2 sm:p-3 rounded-full hover:bg-emerald-500 transition-colors cursor-pointer">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="bg-emerald-600 p-2 sm:p-3 rounded-full hover:bg-emerald-500 transition-colors cursor-pointer">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="bg-emerald-600 p-2 sm:p-3 rounded-full hover:bg-emerald-500 transition-colors cursor-pointer">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">© 2025 Independent University, Bangladesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 