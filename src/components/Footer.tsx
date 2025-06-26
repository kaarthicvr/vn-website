import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fadeInUp">
            <div className="flex items-center space-x-3">
  <div className="w-16 h-16 flex items-center justify-center">
    <img 
      src="/Untitled_design-removebg-preview.png" 
      alt="VN Consultants Logo" 
      className="w-16 h-16 object-contain"
    />
  </div>
  <div>
    <h3 className="text-xl font-bold animate-slideInLeft">VN Consultants</h3>
    <p className="text-sm text-gray-400 animate-slideInLeft animation-delay-200">Your Trusted Business Partner</p>
  </div>
</div>

            <p className="text-gray-400 text-sm leading-relaxed animate-fadeInUp animation-delay-400">
              Simplifying business operations with expert compliance, accounting, and taxation services. 
              Your success is our commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp animation-delay-200">
            <h4 className="text-lg font-semibold mb-4 animate-slideInUp">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors animate-slideInLeft">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors animate-slideInLeft animation-delay-100">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors animate-slideInLeft animation-delay-200">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors animate-slideInLeft animation-delay-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp animation-delay-400">
            <h4 className="text-lg font-semibold mb-4 animate-slideInUp">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 animate-slideInRight">Secretarial Services</li>
              <li className="text-gray-400 animate-slideInRight animation-delay-100">Bookkeeping & Accounting</li>
              <li className="text-gray-400 animate-slideInRight animation-delay-200">Taxation Services</li>
              <li className="text-gray-400 animate-slideInRight animation-delay-300">Business Registrations</li>
              <li className="text-gray-400 animate-slideInRight animation-delay-400">Compliance Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp animation-delay-600">
            <h4 className="text-lg font-semibold mb-4 animate-slideInUp">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 animate-slideInLeft">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">+91 94446 05157</span>
              </div>
              <div className="flex items-center space-x-2 animate-slideInLeft animation-delay-200">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">info.vnconsultants@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 animate-slideInLeft animation-delay-400">
  <Instagram className="w-4 h-4 text-yellow-400 mt-1" />
  <span className="text-gray-400">@vn_consultants</span>
</div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 animate-fadeInUp animation-delay-800">
            © 2025 VN Consultants. All rights reserved.
          </div>
          
          {/* Instagram Link Only */}
          <div className="animate-fadeInUp animation-delay-1000">
            <a href="https://www.instagram.com/vn_consultants?igsh=MTQ3MjlyNXFpeXB4eA%3D%3D&utm_source=qr" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors transform hover:scale-110 duration-300">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;