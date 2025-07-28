import React from 'react';

const HeroSection = () => {
  const scrollToInvestors = () => {
    const element = document.getElementById('investors');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновый GIF */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-animatin.gif"
          alt=""
          className="w-full h-full object-cover opacity-70"
          loading="eager"
        />
        
        {/* Общий градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 via-dark-bg/20 to-dark-bg/60"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Суверенная</span>{' '}
            <span className="text-purple-primary">Цифровая</span>{' '}
            <span className="text-yellow-accent">Идентичность</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-medium mb-4 text-gray-300">
            <span className="text-purple-primary">Владей.</span>{' '}
            <span className="text-yellow-accent">Защищай.</span>{' '}
            <span className="text-white">Монетизируй.</span>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Raritygram — это операционная система для вашей цифровой личности в эпоху искусственного интеллекта. 
            Превратите свой образ в защищенный и масштабируемый актив.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-purple-primary hover:bg-purple-dark px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-primary/25">
              Присоединиться к списку ожидания
            </button>
            
            <button 
              onClick={scrollToInvestors}
              className="border-2 border-yellow-accent text-yellow-accent hover:bg-yellow-accent hover:text-dark-bg px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Для инвесторов
            </button>
          </div>
        </div>


      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-primary rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-yellow-accent rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
