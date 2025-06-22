import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';

function App() {
  const [showContactPage, setShowContactPage] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const handleContactClick = () => {
    setShowContactPage(true);
  };

  const handleBackToHome = () => {
    setShowContactPage(false);
  };

  const handleGetQuoteClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showContactPage) {
    return <ContactPage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onContactClick={handleContactClick} />
      <About />
      <Services onGetQuoteClick={handleGetQuoteClick} />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;