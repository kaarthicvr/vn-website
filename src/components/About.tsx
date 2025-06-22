import React from 'react';
import { Users, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success"
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "Keen eye for detail and passion for accuracy"
    },
    {
      icon: TrendingUp,
      title: "Growth Partners",
      description: "Helping businesses scale and achieve their goals"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeInUp">
              About Us
            </h2>
            <h3 className="text-2xl md:text-3xl text-yellow-500 mb-6 animate-slideInLeft animation-delay-200">
              Simplifying Business, One Service at a Time
            </h3>
            <div className="w-24 h-1 bg-yellow-500 mx-auto animate-expandWidth animation-delay-400"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              {/* Professional Image */}
              <div className="mb-8 animate-fadeInUp animation-delay-300">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                  alt="Professional team working on financial documents"
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              
              <div className="space-y-6">
  {/* Paragraph 1 */}
  <div className="text-lg text-gray-600 leading-relaxed animate-fadeInUp animation-delay-500 space-y-1">
    <p className="animate-slideInLeft">
      We are a team of experienced professionals dedicated to helping entrepreneurs, startups, and established companies manage their compliance, accounting, and regulatory needs.
    </p>

  </div>

  {/* Paragraph 2 */}
  <div className="text-lg text-gray-600 leading-relaxed animate-fadeInUp animation-delay-800 space-y-1">
    <p className="animate-slideInRight">
      With a keen eye for detail and a passion for accuracy, we take the stress out of paperwork so you can focus on growing your business. Our comprehensive approach ensures all your business needs are met under one roof.
    </p>
  
  </div>
</div>

            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-yellow-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg group animate-fadeInUp"
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 animate-slideInLeft animation-delay-200">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm animate-fadeInUp animation-delay-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;