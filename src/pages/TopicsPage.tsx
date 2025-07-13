import React, { useState } from 'react';
import TopicCard from '../components/TopicCard';

const TopicsPage: React.FC = () => {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

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

  const toggleTopic = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-teal-50 relative">
        <div className="absolute inset-0 opacity-5 hidden md:block">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Conference Topics</h1>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Proposed topics include but are not limited to the following areas of research and practice
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
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

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Submit?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join researchers and practitioners from around the world in addressing climate challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Submit Abstract
            </button>
            <button className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors">
              View Guidelines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopicsPage; 