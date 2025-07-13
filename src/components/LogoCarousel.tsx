import React from 'react';

interface Organization {
  name: string;
  logo: string;
  type: 'host' | 'participant';
}

const LogoCarousel: React.FC = () => {
  const organizations: Organization[] = [
    // Host Organizations
    {
      name: "Independent University, Bangladesh",
      logo: "/logo/iub.svg",
      type: "host"
    },
    {
      name: "Environment Ministry",
      logo: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg",
      type: "host"
    },
    
    // Participating Organizations
    {
      name: "United Nations Environment Programme",
      logo: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      type: "participant"
    },
    {
      name: "World Wildlife Fund",
      logo: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg",
      type: "participant"
    },
    {
      name: "Green Climate Fund",
      logo: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      type: "participant"
    },
    {
      name: "Climate Action Network",
      logo: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg",
      type: "participant"
    },
    {
      name: "International Solar Alliance",
      logo: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
      type: "participant"
    },
    {
      name: "Global Green Growth Institute",
      logo: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg",
      type: "participant"
    },
    {
      name: "Climate Technology Centre",
      logo: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      type: "participant"
    },
    {
      name: "International Renewable Energy Agency",
      logo: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg",
      type: "participant"
    }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedLogos = [...organizations, ...organizations];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join us alongside leading organizations committed to climate action and environmental sustainability
          </p>
        </div>

        {/* Host Organizations */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-6">
            Host Organizations
          </h3>
          <div className="flex justify-center gap-8 sm:gap-12">
            {organizations.filter(org => org.type === 'host').map((org, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24  group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <img 
                    src={org.logo}
                    alt={org.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2 text-center max-w-[120px]">
                  {org.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Participating Organizations - Auto-scrolling */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-6">
            Participating Organizations
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicatedLogos.filter(org => org.type === 'participant').map((org, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 flex flex-col items-center group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20  group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <img 
                      src={org.logo}
                      alt={org.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 mt-2 text-center max-w-[100px] sm:max-w-[120px]">
                    {org.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 mb-4">
            Interested in becoming a partner?
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel; 