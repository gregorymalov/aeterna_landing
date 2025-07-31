import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-purple-primary/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-purple-primary">Raritygram</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('problem')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Problem
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Solution
            </button>
            <button 
              onClick={() => scrollToSection('investors')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Market
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Roadmap
            </button>
            <button 
              onClick={() => scrollToSection('investors')}
              className="bg-purple-primary hover:bg-purple-dark px-6 py-2 rounded-lg transition-colors font-medium"
            >
              For Investors
            </button>
          </div>
          
          {/* Hamburger button for mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-purple-primary/20 mt-4">
            <button 
              onClick={() => scrollToSection('problem')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Problem
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Solution
            </button>
            <button 
              onClick={() => scrollToSection('investors')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Market
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Roadmap
            </button>
            <button 
              onClick={() => scrollToSection('investors')}
              className="block w-full bg-purple-primary hover:bg-purple-dark px-6 py-3 rounded-lg transition-colors font-medium text-center mt-4"
            >
              For Investors
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
