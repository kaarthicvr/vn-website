import React, { useState } from 'react';
import { 
  FileText, 
  Calculator, 
  Receipt, 
  Building2, 
  ClipboardList,
  X
} from 'lucide-react';

const Services = ({ onGetQuoteClick }: { onGetQuoteClick: () => void }) => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: FileText,
      title: "Secretarial Services",
      description: "Company incorporation & compliance",
      features: [
        "Company incorporation & compliance",
        "Maintenance of statutory registers",
        "Preparation & filing of board resolutions",
        "Annual return filing (ROC)"
      ],
      color: "from-amber-100 to-amber-200",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
      detailedContent: {
        overview: "Our comprehensive secretarial services ensure your company remains compliant with all statutory requirements while maintaining proper corporate governance.",
        services: [
          {
            title: "Company Incorporation",
            description: "Complete assistance in incorporating your company including name reservation, documentation, and ROC filing."
          },
          {
            title: "Statutory Compliance",
            description: "Regular maintenance of statutory registers, board meetings, and annual compliance requirements."
          },
          {
            title: "Board Resolutions",
            description: "Professional preparation and filing of board resolutions for all corporate decisions and transactions."
          },
          {
            title: "Annual Returns",
            description: "Timely filing of annual returns with ROC to maintain your company's good standing."
          }
        ],
        benefits: [
          "100% compliance with MCA regulations",
          "Timely filing of all statutory documents",
          "Professional corporate governance",
          "Reduced legal risks and penalties"
        ]
      }
    },
    {
      icon: Calculator,
      title: "Bookkeeping & Accounting",
      description: "Day-to-day bookkeeping & financial management",
      features: [
        "Day-to-day bookkeeping",
        "Ledger & journal maintenance",
        "Monthly financial statements",
        "Accounts reconciliation"
      ],
      color: "from-yellow-100 to-yellow-200",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      detailedContent: {
        overview: "Professional bookkeeping and accounting services to maintain accurate financial records and provide insights for better business decisions.",
        services: [
          {
            title: "Daily Bookkeeping",
            description: "Systematic recording of all business transactions with proper categorization and documentation."
          },
          {
            title: "Financial Statements",
            description: "Monthly preparation of profit & loss statements, balance sheets, and cash flow statements."
          },
          {
            title: "Account Reconciliation",
            description: "Regular reconciliation of bank accounts, credit cards, and other financial accounts."
          },
          {
            title: "Financial Analysis",
            description: "Detailed analysis of financial performance with actionable insights and recommendations."
          }
        ],
        benefits: [
          "Accurate financial records",
          "Better cash flow management",
          "Informed business decisions",
          "Reduced accounting errors"
        ]
      }
    },
    {
      icon: Receipt,
      title: "Taxation Services",
      description: "Comprehensive tax solutions",
      features: [
        "GST registration & returns",
        "Income tax return filing",
        "Tax audit support",
        "TDS return filing"
      ],
      color: "from-orange-100 to-orange-200",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg",
      detailedContent: {
        overview: "Expert taxation services covering all aspects of direct and indirect taxes to ensure compliance and optimize your tax liability.",
        services: [
          {
            title: "GST Services",
            description: "Complete GST registration, monthly/quarterly return filing, and compliance management."
          },
          {
            title: "Income Tax",
            description: "Professional income tax return preparation and filing for individuals and businesses."
          },
          {
            title: "Tax Planning",
            description: "Strategic tax planning to minimize tax liability while ensuring full compliance."
          },
          {
            title: "Tax Audits",
            description: "Comprehensive support during tax audits and assessments by tax authorities."
          }
        ],
        benefits: [
          "Minimized tax liability",
          "100% compliance with tax laws",
          "Timely filing of all returns",
          "Expert audit support"
        ]
      }
    },
    {
      icon: Building2,
      title: "Business Registrations",
      description: "Complete business setup services",
      features: [
        "Company/LLP registration",
        "GST, PAN, TAN applications",
        "MSME/Udyam registration",
        "Import Export Code (IEC)",
        "DSC (Digital Signature Certificate)"
      ],
      color: "from-amber-50 to-amber-150",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
      detailedContent: {
        overview: "End-to-end business registration services to help you establish your business with all necessary licenses and registrations.",
        services: [
          {
            title: "Business Entity Formation",
            description: "Registration of companies, LLPs, partnerships, and sole proprietorships with complete documentation."
          },
          {
            title: "Tax Registrations",
            description: "GST, PAN, TAN, and other tax-related registrations for your business operations."
          },
          {
            title: "MSME Registration",
            description: "Udyam registration for small and medium enterprises to avail government benefits."
          },
          {
            title: "Trade Licenses",
            description: "Import Export Code (IEC) and other trade licenses for business expansion."
          },
          {
            title: "Digital Signature Certificate",
            description: "DSC registration for secure digital transactions and online filing of documents with government portals."
          }
        ],
        benefits: [
          "Quick business setup",
          "All licenses under one roof",
          "Government benefit eligibility",
          "Legal business operations",
          "Secure digital transactions"
        ]
      }
    },
    {
      icon: ClipboardList,
      title: "Other Compliance Services",
      description: "Additional regulatory support",
      features: [
        "Trademark registration",
        "FSSAI license application",
        "Professional tax, ESI & PF registration",
        "Compliance calendar management"
      ],
      color: "from-yellow-50 to-yellow-150",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
      detailedContent: {
        overview: "Comprehensive compliance services covering intellectual property, labor laws, and industry-specific regulations.",
        services: [
          {
            title: "Intellectual Property",
            description: "Trademark registration and protection of your brand and intellectual assets."
          },
          {
            title: "Industry Licenses",
            description: "FSSAI, drug licenses, and other industry-specific regulatory approvals."
          },
          {
            title: "Labor Compliance",
            description: "Professional tax, ESI, PF registrations, and ongoing labor law compliance."
          },
          {
            title: "Compliance Management",
            description: "Comprehensive compliance calendar and reminder system for all regulatory requirements."
          }
        ],
        benefits: [
          "Complete regulatory compliance",
          "Brand protection",
          "Reduced compliance risks",
          "Systematic compliance tracking"
        ]
      }
    }
  ];

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeInUp">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp animation-delay-200">
              <span className="animate-slideInLeft">Comprehensive business solutions tailored to meet</span>
              <span className="block animate-slideInRight animation-delay-300">all your compliance and financial needs</span>
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 animate-expandWidth animation-delay-500"></div>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 group overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Header - Changed to beige shades */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-gray-800`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold animate-slideInLeft">{service.title}</h3>
                      <p className="text-sm opacity-80 animate-fadeInUp animation-delay-100">{service.description}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 animate-slideInLeft" style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <button 
                    onClick={() => setSelectedService(index)}
                    className="w-full bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-1000">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 animate-slideInUp">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-6 animate-fadeInUp animation-delay-200">
                <span className="animate-slideInLeft">We offer personalized business solutions</span>
                <span className="block animate-slideInRight animation-delay-300">tailored to your unique requirements.</span>
              </p>
              <button 
                onClick={onGetQuoteClick}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 animate-bounce-subtle animation-delay-400"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeInUp">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideInUp">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-4 animate-slideInLeft">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  {React.createElement(services[selectedService].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{services[selectedService].title}</h2>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors animate-slideInRight"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Overview */}
              <div className="mb-8 animate-fadeInUp">
                <h3 className="text-xl font-bold text-gray-800 mb-4 animate-slideInLeft">Overview</h3>
                <p className="text-gray-600 leading-relaxed animate-slideInUp animation-delay-200">{services[selectedService].detailedContent.overview}</p>
              </div>

              {/* Detailed Services */}
              <div className="mb-8 animate-fadeInUp animation-delay-300">
                <h3 className="text-xl font-bold text-gray-800 mb-6 animate-slideInLeft">Our Services Include</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {services[selectedService].detailedContent.services.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl animate-fadeInUp" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 animate-slideInLeft">{item.title}</h4>
                      <p className="text-gray-600 animate-slideInUp animation-delay-200">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8 animate-fadeInUp animation-delay-800">
                <h3 className="text-xl font-bold text-gray-800 mb-4 animate-slideInLeft">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services[selectedService].detailedContent.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 animate-slideInLeft" style={{ animationDelay: `${0.9 + index * 0.1}s` }}>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-yellow-50 p-6 rounded-xl text-center animate-fadeInUp animation-delay-1200">
                <h4 className="text-lg font-bold text-gray-800 mb-2 animate-slideInUp">Ready to Get Started?</h4>
                <p className="text-gray-600 mb-4 animate-slideInUp animation-delay-200">Contact us today for a personalized consultation</p>
                <button 
                  onClick={() => {
                    closeModal();
                    onGetQuoteClick();
                  }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 animate-bounce-subtle animation-delay-400"
                >
                  Get Quote Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;