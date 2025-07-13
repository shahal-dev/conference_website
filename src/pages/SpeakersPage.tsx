import React from 'react';
import { Users, Award, Globe, Calendar, MapPin, Mic } from 'lucide-react';

const SpeakersPage: React.FC = () => {
  const speakerCategories = [
    {
      title: "Keynote Speakers",
      description: "World-renowned experts leading the climate conversation",
      icon: <Mic className="h-6 w-6 text-emerald-600" />,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "International Experts",
      description: "Leading researchers from top institutions worldwide",
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Policy Leaders",
      description: "Government officials and environmental advocates",
      icon: <Award className="h-6 w-6 text-purple-600" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Industry Innovators",
      description: "Business leaders driving sustainable solutions",
      icon: <Users className="h-6 w-6 text-teal-600" />,
      color: "from-teal-500 to-teal-600"
    }
  ];

  const confirmedSpeakers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Climate Scientist",
      organization: "International Climate Research Institute",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      bio: "Leading expert in climate adaptation strategies with 15+ years of research experience.",
      sessionType: "Keynote",
      topic: "Global Climate Adaptation: Challenges and Opportunities"
    },
    {
      name: "Prof. Ahmed Rahman",
      title: "Environmental Policy Expert",
      organization: "Bangladesh Environmental Institute",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      bio: "Specialist in environmental governance and policy implementation in developing countries.",
      sessionType: "Panel",
      topic: "Policy Integration for Climate Resilience"
    },
    {
      name: "Dr. Maria Santos",
      title: "Renewable Energy Specialist",
      organization: "Green Energy Foundation",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      bio: "Pioneer in renewable energy solutions and sustainable development practices.",
      sessionType: "Workshop",
      topic: "Renewable Energy Transitions in Developing Nations"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hidden md:block">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
            alt="Speakers Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Featured Speakers</h1>
            <div className="w-24 sm:w-32 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto">
              Learn from distinguished experts, researchers, and leaders shaping the future of climate action
            </p>
          </div>
        </div>
      </section>

      {/* Speaker Categories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Speaker Categories</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse perspectives from various fields and expertise areas
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {speakerCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-full w-fit mx-auto mb-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{category.title}</h3>
                <p className="text-gray-600 text-center">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confirmed Speakers */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Confirmed Speakers</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our distinguished speakers who will be sharing their expertise
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {confirmedSpeakers.map((speaker, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-1">{speaker.title}</p>
                  <p className="text-gray-600 mb-4">{speaker.organization}</p>
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {speaker.sessionType}
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{speaker.bio}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Session Topic:</p>
                    <p className="text-sm text-gray-600 italic">{speaker.topic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Speakers */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">More Speakers Coming Soon</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center">
                <Users className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Climate Scientists</h3>
                <p className="text-emerald-600 font-semibold mb-2 sm:mb-3">Announcements Coming</p>
                <p className="text-gray-600 text-sm sm:text-base">Leading researchers in climate science and environmental studies</p>
              </div>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                <Award className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Policy Makers</h3>
                <p className="text-emerald-600 font-semibold mb-2 sm:mb-3">To Be Revealed</p>
                <p className="text-gray-600 text-sm sm:text-base">Government officials and international policy experts</p>
              </div>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center">
                <Globe className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Global Experts</h3>
                <p className="text-emerald-600 font-semibold mb-2 sm:mb-3">Stay Tuned</p>
                <p className="text-gray-600 text-sm sm:text-base">International experts from various climate organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Speakers */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Interested in Speaking?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            We welcome proposals from experts who want to share their knowledge and experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Submit Speaker Proposal
            </button>
            <button className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors">
              View Speaker Guidelines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeakersPage; 