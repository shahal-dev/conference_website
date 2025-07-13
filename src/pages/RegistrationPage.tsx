import React from 'react';
import { DollarSign, Users, Star, Calendar, CheckCircle, CreditCard } from 'lucide-react';

const RegistrationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hidden md:block">
          <img 
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
            alt="Registration Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Registration & Fees</h1>
            <div className="w-24 sm:w-32 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto">
              Join us for the Environment and Changing Climate Conference 2025
            </p>
          </div>
        </div>
      </section>

      {/* Registration Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-emerald-300">
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 sm:p-4 rounded-full w-fit mx-auto mb-4 sm:mb-6 shadow-lg">
                  <DollarSign className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Non-Students</h3>
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-4 sm:mb-6">৳1,000</p>
                <p className="text-gray-600 text-base sm:text-lg mb-6">General registration fee for professionals and researchers</p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Access to all sessions</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Conference materials</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Networking opportunities</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Certificate of participation</li>
                </ul>
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl border-2 border-emerald-400 relative transform lg:scale-105 order-first sm:order-none">
              <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Student Rate
                </span>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 sm:p-4 rounded-full w-fit mx-auto mb-4 sm:mb-6 shadow-lg">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Students</h3>
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-4 sm:mb-6">৳500</p>
                <p className="text-gray-600 text-base sm:text-lg mb-6">Discounted rate for students from other institutions</p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Access to all sessions</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Conference materials</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Student networking events</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Certificate of participation</li>
                </ul>
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-emerald-300 sm:col-span-2 lg:col-span-1">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 sm:p-4 rounded-full w-fit mx-auto mb-4 sm:mb-6 shadow-lg">
                  <Star className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">IUB Students</h3>
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-4 sm:mb-6">FREE</p>
                <p className="text-gray-600 text-base sm:text-lg mb-6">Complimentary registration for Independent University students</p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Access to all sessions</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Conference materials</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Special IUB events</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />Certificate of participation</li>
                </ul>
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">How to Register</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to complete your registration
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Select Category</h3>
              <p className="text-gray-600">Choose your registration category</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fill Form</h3>
              <p className="text-gray-600">Complete registration details</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Payment</h3>
              <p className="text-gray-600">Secure online payment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Confirmation</h3>
              <p className="text-gray-600">Receive confirmation email</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Important Dates</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-emerald-600 mr-3" />
                <span className="font-semibold text-gray-900">Early Bird Deadline</span>
              </div>
              <p className="text-2xl font-bold text-emerald-600 mb-2">October 15, 2025</p>
              <p className="text-gray-600">Last chance for discounted rates</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-emerald-600 mr-3" />
                <span className="font-semibold text-gray-900">Final Registration</span>
              </div>
              <p className="text-2xl font-bold text-emerald-600 mb-2">November 10, 2025</p>
              <p className="text-gray-600">Final deadline for registration</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-emerald-600 mr-3" />
                <span className="font-semibold text-gray-900">Conference Dates</span>
              </div>
              <p className="text-2xl font-bold text-emerald-600 mb-2">November 20-21, 2025</p>
              <p className="text-gray-600">Main conference event</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage; 