import React from 'react';
import { Phone, Mail, MapPin, ArrowLeft, Building, Users, Target, TrendingUp } from 'lucide-react';

const ContactPage = ({ onBack }: { onBack: () => void }) => {
  const visionPoints = [
    {
      icon: Target,
      text: "Precision in every financial decision"
    },
    {
      icon: Users,
      text: "Building lasting client relationships"
    },
    {
      icon: TrendingUp,
      text: "Empowering business growth through compliance"
    },
    {
      icon: Building,
      text: "Your trusted partner in financial success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
          alt="Professional tax consultant at work"
          className="w-full h-full object-cover animate-fadeInUp"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/80 to-gray-900/90"></div>
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-8 left-8 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 animate-slideInLeft"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Vision Section */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fadeInUp">
                <span className="animate-slideInLeft">Contact</span> <span className="text-yellow-400 animate-slideInRight animation-delay-300">VN Consultants</span>
              </h1>
              
              {/* Vision Points */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {visionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                    style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white text-sm font-medium animate-slideInUp animation-delay-200">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slideInUp animation-delay-1200">
                <span className="animate-fadeInUp">"Transforming complex financial challenges into simple solutions.</span>
                <span className="block animate-fadeInUp animation-delay-200">Your success is our commitment, your growth is our mission."</span>
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300 animate-fadeInUp animation-delay-1400">
              
              {/* Office Header */}
              <div className="mb-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center animate-bounce-subtle">
                  <img 
                    src="/Untitled_design-removebg-preview.png" 
                    alt="VN Consultants Logo" 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2 animate-slideInLeft animation-delay-200">
                  Chennai Office
                </h2>
                <div className="w-16 h-1 bg-yellow-500 mx-auto animate-expandWidth animation-delay-400"></div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Address */}
                <div className="text-center animate-slideInLeft animation-delay-600">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2 animate-fadeInUp">Address</h3>
                  <div className="text-gray-600 leading-relaxed animate-slideInUp animation-delay-200">
                    <p>14/A, 5th Street, RKV Avenue,</p>
                    <p>Old Pallavaram - 600117</p>
                    <p>Chennai, Tamil Nadu</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="text-center animate-slideInRight animation-delay-800">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2 animate-fadeInUp">Phone</h3>
                  <a 
                    href="tel:+919444605157" 
                    className="text-gray-600 hover:text-yellow-600 transition-colors text-lg font-medium animate-slideInUp animation-delay-200"
                  >
                    +91 94446 05157
                  </a>
                </div>

                {/* Email */}
                <div className="text-center animate-slideInLeft animation-delay-1000">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2 animate-fadeInUp">Email</h3>
                  <a 
                    href="mailto:info.vnconsultants@gmail.com" 
                    className="text-gray-600 hover:text-yellow-600 transition-colors text-lg font-medium break-all animate-slideInUp animation-delay-200"
                  >
                    info.vnconsultants@gmail.com
                  </a>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-10 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-6 animate-fadeInUp animation-delay-1200">
                  Ready to streamline your business operations?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+919444605157"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-200 shadow-lg animate-bounce-subtle animation-delay-1400"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:info.vnconsultants@gmail.com"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-200 shadow-lg animate-slideInUp animation-delay-1600"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto animate-fadeInUp animation-delay-1800">
              <h3 className="text-xl font-bold text-white mb-4 animate-slideInUp">Business Hours</h3>
              <div className="text-gray-300 space-y-2 animate-fadeInUp animation-delay-2000">
                <p className="animate-slideInLeft">Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p className="animate-slideInLeft animation-delay-200">Saturday: 9:00 AM - 5:00 PM</p>
                <p className="animate-slideInLeft animation-delay-400">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-4 h-4 bg-yellow-400 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-300 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-yellow-500 rounded-full animate-float animation-delay-2000"></div>
    </div>
  );
};

export default ContactPage;