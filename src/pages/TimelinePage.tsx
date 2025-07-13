import React from 'react';
import { Globe, FileText, Clock, Mail, DollarSign, Calendar, Star } from 'lucide-react';

const TimelinePage: React.FC = () => {
  const timelineEvents = [
    {
      date: "July 15, 2025",
      title: "Conference Announcement",
      description: "Official announcement of the Environment and Changing Climate conference",
      icon: <Globe className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-blue-500"
    },
    {
      date: "August 1, 2025",
      title: "Call for Abstracts Opens",
      description: "Abstract submission portal opens for researchers and practitioners",
      icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-emerald-500"
    },
    {
      date: "September 1, 2025",
      title: "Abstract Submission Deadline",
      description: "Final deadline for abstract submissions",
      icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-orange-500"
    },
    {
      date: "October 1, 2025",
      title: "Abstract Acceptance Notification",
      description: "Authors will be notified about abstract acceptance",
      icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-purple-500"
    },
    {
      date: "October 15, 2025",
      title: "Early Bird Registration Ends",
      description: "Last chance for discounted registration fees",
      icon: <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-red-500"
    },
    {
      date: "November 1, 2025",
      title: "Final Program Release",
      description: "Complete conference schedule and speaker lineup announced",
      icon: <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-indigo-500"
    },
    {
      date: "November 20-21, 2025",
      title: "Conference Days",
      description: "Main conference event with keynotes, panels, and workshops",
      icon: <Star className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-emerald-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Conference Timeline</h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey from announcement to the main event
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-emerald-300 to-teal-300"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-start mb-8 sm:mb-12 last:mb-0">
              <div className={`${event.color} rounded-full p-2 sm:p-3 mr-4 sm:mr-8 z-10 shadow-lg flex-shrink-0`}>
                <div className="text-white">
                  {event.icon}
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-emerald-100 flex-1 transform hover:scale-105 transition-all duration-300">
                <div className="text-emerald-600 font-semibold text-xs sm:text-sm mb-1">{event.date}</div>
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2">{event.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelinePage; 