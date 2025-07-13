import React from 'react';
import { Calendar, MapPin, Users, Globe, DollarSign, FileText, Award, Timer } from 'lucide-react';
import CountdownClock from '../components/CountdownClock';
import EventsCarousel from '../components/EventsCarousel';
import LogoCarousel from '../components/LogoCarousel';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const excitingEvents = [
    {
      title: "Opening Keynote: Climate Leadership in Action",
      description: "Join world-renowned climate scientists and policy makers for an inspiring opening session",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      date: "November 20, 2025 - 9:00 AM",
      type: "Keynote"
    },
    {
      title: "Youth Climate Innovation Showcase",
      description: "Discover groundbreaking solutions from young climate innovators around the globe",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      date: "November 20, 2025 - 2:00 PM",
      type: "Innovation"
    },
    {
      title: "Indigenous Knowledge Panel",
      description: "Learn from indigenous communities about traditional ecological wisdom and climate adaptation",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      date: "November 21, 2025 - 10:00 AM",
      type: "Panel"
    },
    {
      title: "Climate Finance Workshop",
      description: "Interactive session on green investment models and sustainable financing strategies",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      date: "November 21, 2025 - 3:00 PM",
      type: "Workshop"
    }
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="download.webp" 
            alt="Climate Conference"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-emerald-900/90 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
              Environment and <span className="text-white">Changing Climate</span>
            </h1>
 
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-emerald-100 font-light">
              Global Strategies and Local Actions
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-emerald-200 drop-shadow-lg">
              Conference 2025
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full border border-white/30">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-emerald-300" />
                <span className="text-white font-bold text-sm sm:text-base">November 20-21, 2025</span>
              </div>
              <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full border border-white/30">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-emerald-300" />
                <span className="text-white font-bold text-sm sm:text-base">Independent University, Bangladesh</span>
              </div>
            </div>
            
            {/* Enhanced Register Now Button */}
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 mb-8">
              <button 
                onClick={() => setCurrentPage('registration')}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-6 rounded-full font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl border-4 border-white/20 hover:border-white/40 animate-pulse"
              >
                🎟️ Register Now
              </button>
              
              {/* Countdown Clock */}
              <div>
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Timer className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-300 mr-2 sm:mr-3" />
                  <span className="text-lg sm:text-xl font-semibold text-emerald-200">Conference Starts In:</span>
                </div>
                <CountdownClock />
              </div>
            </div>
            
            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onClick={() => setCurrentPage('topics')}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                View Topics
              </button>
              <button 
                onClick={() => setCurrentPage('speakers')}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Meet Speakers
              </button>
              <button 
                onClick={() => setCurrentPage('author-guidelines')}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Submit Abstract
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="h-8 w-8 text-white/70" />
        </div>
      </section>


      {/* Exciting Events Carousel */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Exciting Events</h2>
            <div className="w-24 sm:w-32 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto">
              Don't miss these highlight sessions that will shape the future of climate action
            </p>
          </div>
          <EventsCarousel events={excitingEvents} />
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 hidden md:block">
          <img 
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
            alt="Climate Action"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">About the Conference</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                alt="Environmental Conference"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                As global environmental challenges intensify, the urgency to align strategic climate governance with context-specific adaptation becomes increasingly evident. The Environment and Changing Climate: Global Strategies and Local Actions conference at Independent University, Bangladesh (IUB) brings together researchers, policymakers, community leaders, and innovators to explore multidisciplinary approaches to climate resilience.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Through thematic sessions and collaborative dialogue, the conference aims to foster actionable insights that advance environmental resilience and sustainable development, highlighting solutions that are adaptive, inclusive, and responsive to environmental challenges.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">International Recognition</h4>
                  <p className="text-gray-600">Proceedings will be published in special journal issues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Details with Enhanced Design */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 sm:p-4 rounded-xl w-fit mb-4 sm:mb-6 shadow-lg">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl">Conference Dates</h3>
              <p className="text-gray-600 text-base sm:text-lg">November 20-21, 2025</p>
              <p className="text-gray-600 text-sm sm:text-base">Thursday & Friday</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 sm:p-4 rounded-xl w-fit mb-4 sm:mb-6 shadow-lg">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl">Location</h3>
              <p className="text-gray-600 text-base sm:text-lg">Independent University</p>
              <p className="text-gray-600 text-sm sm:text-base">Bangladesh (IUB)</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 sm:p-4 rounded-xl w-fit mb-4 sm:mb-6 shadow-lg">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl">Format</h3>
              <p className="text-gray-600 text-base sm:text-lg">Offline for local participants</p>
              <p className="text-gray-600 text-sm sm:text-base">Online for international</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 sm:p-4 rounded-xl w-fit mb-4 sm:mb-6 shadow-lg">
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl">Publications</h3>
              <p className="text-gray-600 text-base sm:text-lg">Conference proceedings</p>
              <p className="text-gray-600 text-sm sm:text-base">Special journal issue</p>
            </div>
          </div>
        </div>
      </section>
      {/* Logo Carousel Section */}
      <LogoCarousel />

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Join the Climate Action Movement</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Be part of the solution. Register today and contribute to meaningful climate action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('registration')}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Register Now
            </button>
            <button 
              onClick={() => setCurrentPage('author-guidelines')}
              className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
            >
              Submit Abstract
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage; 