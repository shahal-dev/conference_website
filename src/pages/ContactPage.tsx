import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Users, MessageCircle, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-emerald-600" />,
      title: "Email",
      details: "conference@iub.edu.bd",
      description: "General inquiries and information"
    },
    {
      icon: <Phone className="h-6 w-6 text-emerald-600" />,
      title: "Phone",
      details: "+880-1234-567890",
      description: "Direct line for urgent matters"
    },
    {
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
      title: "Location",
      details: "Independent University, Bangladesh",
      description: "Plot 16, Block B, Bashundhara R/A, Dhaka 1229"
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-600" />,
      title: "Office Hours",
      details: "Sunday - Thursday: 9:00 AM - 5:00 PM",
      description: "Friday: 9:00 AM - 1:00 PM"
    }
  ];

  const departments = [
    {
      name: "Registration Support",
      email: "registration@iub.edu.bd",
      phone: "+880-1234-567891",
      description: "Help with registration process and payment"
    },
    {
      name: "Abstract Submissions",
      email: "submissions@iub.edu.bd",
      phone: "+880-1234-567892",
      description: "Support for abstract submission and review"
    },
    {
      name: "Accommodation",
      email: "accommodation@iub.edu.bd",
      phone: "+880-1234-567893",
      description: "Hotel bookings and travel arrangements"
    },
    {
      name: "Technical Support",
      email: "tech@iub.edu.bd",
      phone: "+880-1234-567894",
      description: "Website issues and technical problems"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-800 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hidden md:block">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Contact Information</h1>
            <div className="w-24 sm:w-32 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto">
              Get in touch with us for any questions or support regarding the conference
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{info.title}</h3>
                <p className="text-emerald-600 font-semibold mb-2 text-center">{info.details}</p>
                <p className="text-gray-600 text-center text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a question or need assistance? Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="registration">Registration & Payment</option>
                    <option value="abstract">Abstract Submission</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="technical">Technical Support</option>
                    <option value="general">General Inquiry</option>
                    <option value="media">Media & Press</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Find Us</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-500">Independent University, Bangladesh</p>
                </div>
              </div>
              
              {/* Address Details */}
              <div className="bg-emerald-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conference Venue</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Independent University, Bangladesh</p>
                      <p className="text-gray-600">Plot 16, Block B, Bashundhara R/A</p>
                      <p className="text-gray-600">Dhaka 1229, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                    <p className="text-gray-600">+880-1234-567890</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                    <p className="text-gray-600">conference@iub.edu.bd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Specialized Support</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Contact the right department for specific assistance
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-emerald-600 mr-2" />
                    <p className="text-sm text-gray-600">{dept.email}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-emerald-600 mr-2" />
                    <p className="text-sm text-gray-600">{dept.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">How do I register?</h3>
                </div>
                <p className="text-gray-600">Visit our Registration page and follow the simple 4-step process. Payment can be made online securely.</p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">Can I attend virtually?</h3>
                </div>
                <p className="text-gray-600">Yes, we offer online participation for international attendees. Select the virtual option during registration.</p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">What's the abstract deadline?</h3>
                </div>
                <p className="text-gray-600">Abstract submissions are due by September 1, 2025. Acceptance notifications will be sent by October 1, 2025.</p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">Is accommodation provided?</h3>
                </div>
                <p className="text-gray-600">We can assist with hotel bookings and provide recommendations for nearby accommodations. Contact our accommodation team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 