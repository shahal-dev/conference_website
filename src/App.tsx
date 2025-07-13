import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Globe, DollarSign, Clock, FileText, Mail, Phone, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Star, Award, Zap, Timer } from 'lucide-react';

interface TopicCardProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, isExpanded, onToggle }) => (
  <div className="bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <button
      onClick={onToggle}
      className="w-full p-6 text-left flex items-center justify-between hover:bg-emerald-50/50 transition-colors duration-200 rounded-xl"
    >
      <span className="text-gray-800 font-semibold text-lg">{title}</span>
      {isExpanded ? (
        <ChevronUp className="text-emerald-600 h-6 w-6" />
      ) : (
        <ChevronDown className="text-emerald-600 h-6 w-6" />
      )}
    </button>
  </div>
);

interface CarouselProps {
  events: Array<{
    title: string;
    description: string;
    image: string;
    date: string;
    type: string;
  }>;
}

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
    <div className="flex justify-center items-center space-x-4 mb-8">
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 text-center min-w-[80px] transform hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
        <div className="text-emerald-200 text-sm font-semibold">Days</div>
      </div>
      <div className="text-white text-2xl font-bold">:</div>
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 text-center min-w-[80px] transform hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
        <div className="text-emerald-200 text-sm font-semibold">Hours</div>
      </div>
      <div className="text-white text-2xl font-bold">:</div>
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 text-center min-w-[80px] transform hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
        <div className="text-emerald-200 text-sm font-semibold">Minutes</div>
      </div>
      <div className="text-white text-2xl font-bold">:</div>
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 text-center min-w-[80px] transform hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
        <div className="text-emerald-200 text-sm font-semibold">Seconds</div>
      </div>
    </div>
  );
};

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
            <div className="relative h-96 bg-gradient-to-r from-emerald-600 to-teal-600">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center mb-2">
                  <span className="bg-emerald-500 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                    {event.type}
                  </span>
                  <span className="text-emerald-200">{event.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-emerald-100">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topics = [
    "Locally Led & Community-Based Adaptation",
    "Indigenous Knowledge and Nature-Based Solutions",
    "Biodiversity-Driven Ecosystem Adaptation and Pollution Control",
    "Disaster Risk Reduction and Resilience Building",
    "Climate Governance, Environmental Law & International Agreements",
    "Institutional Capacities and Policy Integration of Local Governments in Climate Adaptation",
    "Urban Climate Adaptation & Sustainability",
    "Climate Finance & Green Investment Models",
    "Public-Private Partnerships & Role of Local Governments",
    "Green Transitions: Net-Zero, Renewable Energy, Waste Management and Decarbonization",
    "Climate Justice and Equity",
    "Youth Engagement & Grassroots Leadership",
    "Climate Education, Media and Public Awareness"
  ];

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

  const timelineEvents = [
    {
      date: "July 15, 2025",
      title: "Conference Announcement",
      description: "Official announcement of the Environment and Changing Climate conference",
      icon: <Globe className="h-5 w-5" />,
      color: "bg-blue-500"
    },
    {
      date: "August 1, 2025",
      title: "Call for Abstracts Opens",
      description: "Abstract submission portal opens for researchers and practitioners",
      icon: <FileText className="h-5 w-5" />,
      color: "bg-emerald-500"
    },
    {
      date: "September 1, 2025",
      title: "Abstract Submission Deadline",
      description: "Final deadline for abstract submissions",
      icon: <Clock className="h-5 w-5" />,
      color: "bg-orange-500"
    },
    {
      date: "October 1, 2025",
      title: "Abstract Acceptance Notification",
      description: "Authors will be notified about abstract acceptance",
      icon: <Mail className="h-5 w-5" />,
      color: "bg-purple-500"
    },
    {
      date: "October 15, 2025",
      title: "Early Bird Registration Ends",
      description: "Last chance for discounted registration fees",
      icon: <DollarSign className="h-5 w-5" />,
      color: "bg-red-500"
    },
    {
      date: "November 1, 2025",
      title: "Final Program Release",
      description: "Complete conference schedule and speaker lineup announced",
      icon: <Calendar className="h-5 w-5" />,
      color: "bg-indigo-500"
    },
    {
      date: "November 20-21, 2025",
      title: "Conference Days",
      description: "Main conference event with keynotes, panels, and workshops",
      icon: <Star className="h-5 w-5" />,
      color: "bg-emerald-600"
    }
  ];

  const toggleTopic = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  const renderTimeline = () => (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Conference Timeline</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey from announcement to the main event
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-300 to-teal-300"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              <div className={`${event.color} rounded-full p-3 mr-8 z-10 shadow-lg`}>
                <div className="text-white">
                  {event.icon}
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-100 flex-1 transform hover:scale-105 transition-all duration-300">
                <div className="text-emerald-600 font-semibold text-sm mb-1">{event.date}</div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{event.title}</h3>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderMainContent = () => (
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
              Environment and <span className="text-white">Changing Climate</span>
            </h1>

            <p className="text-2xl md:text-3xl mb-8 text-emerald-100 font-light">
              Global Strategies and Local Actions
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-emerald-200 drop-shadow-lg">
              Conference 2025
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                <Calendar className="h-6 w-6 mr-3 text-emerald-300" />
                <span className="text-white font-bold">November 20-21, 2025</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                <MapPin className="h-6 w-6 mr-3 text-emerald-300" />
                <span className="text-white font-bold">Independent University, Bangladesh</span>
              </div>

            </div>
            
            {/* Enhanced Register Now Button */}
            <div className="flex flex-col items-center space-y-6 mb-8">
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  setTimeout(() => {
                    const registrationSection = document.getElementById('registration');
                    registrationSection?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl border-4 border-white/20 hover:border-white/40 animate-pulse"
              >
                🎟️ Register Now
              </button>
              
              {/* Countdown Clock */}
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Timer className="h-8 w-8 text-emerald-300 mr-3" />
                  <span className="text-xl font-semibold text-emerald-200">Conference Starts In:</span>
                </div>
                <CountdownClock />
              </div>
            </div>
            
            <div className="flex justify-center">

            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Exciting Events Carousel */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Exciting Events</h2>
            <div className="w-32 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Don't miss these highlight sessions that will shape the future of climate action
            </p>
          </div>
          <EventsCarousel events={excitingEvents} />
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
          <img 
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
            alt="Climate Action"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About the Conference</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                alt="Environmental Conference"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                As global environmental challenges intensify, the urgency to align strategic climate governance with context-specific adaptation becomes increasingly evident. The Environment and Changing Climate: Global Strategies and Local Actions conference at Independent University, Bangladesh (IUB) brings together researchers, policymakers, community leaders, and innovators to explore multidisciplinary approaches to climate resilience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
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
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-xl w-fit mb-6 shadow-lg">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Conference Dates</h3>
              <p className="text-gray-600 text-lg">November 20-21, 2025</p>
              <p className="text-gray-600">Thursday & Friday</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-xl w-fit mb-6 shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Location</h3>
              <p className="text-gray-600 text-lg">Independent University</p>
              <p className="text-gray-600">Bangladesh (IUB)</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl w-fit mb-6 shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Format</h3>
              <p className="text-gray-600 text-lg">Offline for local participants</p>
              <p className="text-gray-600">Online for international</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl w-fit mb-6 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Publications</h3>
              <p className="text-gray-600 text-lg">Conference proceedings</p>
              <p className="text-gray-600">Special journal issue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Topics with Background */}
      <section id="topics" className="py-20 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Conference Topics</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proposed topics include but are not limited to the following areas of research and practice
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {topics.map((topic, index) => (
              <TopicCard
                key={index}
                title={topic}
                isExpanded={expandedTopic === index}
                onToggle={() => toggleTopic(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Registration with Enhanced Design */}
      <section id="registration" className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
            alt="Registration Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Registration & Fees</h2>
            <div className="w-32 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-emerald-300">
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Non-Students</h3>
                <p className="text-4xl font-bold text-emerald-600 mb-6">৳1,000</p>
                <p className="text-gray-600 text-lg">General registration fee for professionals and researchers</p>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border-2 border-emerald-400 relative transform scale-105">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Student Rate
                </span>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Students</h3>
                <p className="text-4xl font-bold text-emerald-600 mb-6">৳500</p>
                <p className="text-gray-600 text-lg">Discounted rate for students from other institutions</p>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-emerald-300">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">IUB Students</h3>
                <p className="text-4xl font-bold text-emerald-600 mb-6">FREE</p>
                <p className="text-gray-600 text-lg">Complimentary registration for Independent University students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section with Images */}
      <section id="speakers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Speakers</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                  alt="Speaker placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Speaker Announcements</h3>
                <p className="text-emerald-600 font-semibold mb-3">Coming Soon</p>
                <p className="text-gray-600">Distinguished panel of climate experts and policy makers</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                  alt="Speaker placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">International Experts</h3>
                <p className="text-emerald-600 font-semibold mb-3">To Be Revealed</p>
                <p className="text-gray-600">Leading researchers in climate science and adaptation</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                  alt="Speaker placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Policy Leaders</h3>
                <p className="text-emerald-600 font-semibold mb-3">Stay Tuned</p>
                <p className="text-gray-600">Government officials and environmental advocates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Enhanced Design */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-800 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Information</h2>
            <div className="w-32 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-emerald-500 p-2 rounded-lg mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-lg">conference@iub.edu.bd</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-emerald-500 p-2 rounded-lg mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-lg">+880-1234-567890</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-500 p-2 rounded-lg mr-4 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg">Independent University, Bangladesh</p>
                    <p className="text-emerald-200">Plot 16, Block B, Bashundhara R/A</p>
                    <p className="text-emerald-200">Dhaka 1229, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Stay Updated</h3>
              <p className="mb-6 text-lg">Subscribe to receive the latest updates about the conference</p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/90"
                />
                <button className="w-full bg-emerald-500 hover:bg-emerald-400 px-6 py-3 rounded-lg transition-colors duration-300 font-semibold">
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/30 backdrop-blur-sm shadow-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-20">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  // Clear hash from URL
                  window.history.pushState('', document.title, window.location.pathname);
                }}
                className={`font-semibold transition-colors duration-200 ${currentPage === 'home' ? 'text-emerald-600' : 'text-gray-800 hover:text-emerald-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('timeline');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  // Clear hash from URL
                  window.history.pushState('', document.title, window.location.pathname);
                }}
                className={`font-semibold transition-colors duration-200 ${currentPage === 'timeline' ? 'text-emerald-600' : 'text-gray-800 hover:text-emerald-600'}`}
              >
                Timeline
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  setTimeout(() => {
                    const element = document.getElementById('topics');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-800 hover:text-emerald-600 transition-colors font-semibold"
              >
                Topics
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  setTimeout(() => {
                    const element = document.getElementById('registration');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-800 hover:text-emerald-600 transition-colors font-semibold"
              >
                Registration
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  setTimeout(() => {
                    const element = document.getElementById('speakers');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-800 hover:text-emerald-600 transition-colors font-semibold"
              >
                Speakers
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-800 hover:text-emerald-600 transition-colors font-semibold"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Conditional Content Rendering */}
      {currentPage === 'timeline' ? renderTimeline() : renderMainContent()}

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
            alt="Footer Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-xl shadow-lg mr-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">Environment and Changing Climate Conference 2025</span>
            </div>
            <p className="text-emerald-300 mb-6 text-xl">Global Strategies and Local Actions</p>
            <div className="flex justify-center space-x-6 mb-8">
              <div className="bg-emerald-600 p-3 rounded-full hover:bg-emerald-500 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
              <div className="bg-emerald-600 p-3 rounded-full hover:bg-emerald-500 transition-colors cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-emerald-600 p-3 rounded-full hover:bg-emerald-500 transition-colors cursor-pointer">
                <Globe className="h-5 w-5" />
              </div>
            </div>
            <p className="text-gray-400">© 2025 Independent University, Bangladesh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;