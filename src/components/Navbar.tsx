import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setCurrentPage('home');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState('', document.title, window.location.pathname);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', action: () => { setCurrentPage('home'); scrollToTop(); } },
    { label: 'Timeline', action: () => { setCurrentPage('timeline'); scrollToTop(); } },
    { label: 'Topics', action: () => scrollToSection('topics') },
    { label: 'Registration', action: () => scrollToSection('registration') },
    { label: 'Speakers', action: () => scrollToSection('speakers') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-sm shadow-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo/Brand - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:block">
            <button 
              onClick={() => {
                setCurrentPage('home');
                scrollToTop();
              }}
              className="text-lg font-bold text-emerald-600 hover:text-emerald-500 transition-colors"
            >
              ECC 2025
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <button 
                key={index}
                onClick={item.action}
                className={`font-semibold transition-colors duration-200 text-sm lg:text-base px-2 py-1 rounded-lg ${
                  (item.label === 'Home' && currentPage === 'home') || 
                  (item.label === 'Timeline' && currentPage === 'timeline')
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-800 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-emerald-600 transition-colors p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    (item.label === 'Home' && currentPage === 'home') || 
                    (item.label === 'Timeline' && currentPage === 'timeline')
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-gray-800 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 