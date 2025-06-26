import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slideInLeft">
  <div className="w-18 h-18 flex items-center justify-center">
    <img 
      src="/Untitled_design-removebg-preview.png" 
      alt="VN Consultants Logo" 
      className="w-16 h-16 object-contain"
    />
  </div>
  <div>
    <h1 className="text-xl font-bold text-gray-800 animate-fadeInUp">VN Consultants</h1>
    <p className="text-xs text-gray-600 animate-fadeInUp animation-delay-200">Your Trusted Business Partner</p>
  </div>
</div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 animate-slideInUp animation-delay-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 animate-slideInUp animation-delay-400">About</a>
            <a href="#services" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 animate-slideInUp animation-delay-500">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 animate-slideInUp animation-delay-600">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 animate-slideInRight animation-delay-700">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+91 94446 05157</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>info.vnconsultants@gmail.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slideInUp">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200">Home</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200">About</a>
              <a href="#services" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;