import React from 'react';
import { CheckCircle, Users, DollarSign, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Accurate & Timely Services",
      description: "We ensure precision in every task and deliver on time, every time."
    },
    {
      icon: Users,
      title: "Expert Professionals",
      description: "Our team consists of qualified chartered accountants and tax experts."
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing Plans",
      description: "Competitive rates without compromising on quality or service."
    },
    {
      icon: Shield,
      title: "Complete Confidentiality",
      description: "Your business information is secure with our strict privacy policies."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeInUp">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp animation-delay-200">
              <span className="animate-slideInLeft">We combine expertise, reliability, and personalized service</span>
              <span className="block animate-slideInRight animation-delay-300">to deliver exceptional results for your business</span>
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 animate-expandWidth animation-delay-500"></div>
          </div>

          {/* Professional Team Image */}
          <div className="mb-16 animate-fadeInUp animation-delay-600">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" 
              alt="Professional team discussing business strategies"
              className="w-full h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-yellow-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-yellow-200 animate-fadeInUp"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce-subtle">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300 animate-slideInLeft animation-delay-200">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed animate-fadeInUp animation-delay-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;