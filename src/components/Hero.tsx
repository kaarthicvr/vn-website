import React from 'react';
import { Phone } from 'lucide-react';

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg')] bg-cover bg-center opacity-5"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Logo */}
          <div className="mb-8 animate-fadeInUp">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <img 
                src="/Untitled_design-removebg-preview.png" 
                alt="VN Consultants Logo" 
                className="w-24 h-24 object-contain animate-bounce-subtle"
              />
            </div>
          </div>

          {/* Headline - Reduced size by 30% */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 animate-fadeInUp animation-delay-200">
            <span className="animate-slideInLeft">Your Trusted Partner in</span>
            <span className="block text-yellow-500 mt-2 animate-slideInRight animation-delay-400">Business Compliance</span>
            <span className="block text-gray-700 text-2xl md:text-3xl lg:text-4xl mt-2 animate-slideInLeft animation-delay-600">& Financial Clarity</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-800">
            <span className="animate-slideInUp">Reliable secretarial services, precise bookkeeping, expert taxation,</span>
            <span className="block animate-slideInUp animation-delay-1000">and hassle-free business registrations — all under one roof.</span>
          </p>

          {/* Call to Action Button - Single button only */}
          <div className="flex justify-center animate-fadeInUp animation-delay-1200">
            <button
              onClick={onContactClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transform hover:scale-105 transition-all duration-200 shadow-lg animate-bounce-subtle animation-delay-1400"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us Today</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-4 h-4 bg-yellow-400 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-300 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-yellow-500 rounded-full animate-float animation-delay-2000"></div>
    </section>
  );
};

export default Hero;