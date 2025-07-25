import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-purple-primary/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-purple-primary">Aeterna</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('problem')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Проблема
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Решение
            </button>
            <button 
              onClick={() => scrollToSection('investors')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Рынок
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Дорожная карта
            </button>
            <button 
              onClick={() => scrollToSection('investors')}
              className="bg-purple-primary hover:bg-purple-dark px-6 py-2 rounded-lg transition-colors font-medium"
            >
              Для инвесторов
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
