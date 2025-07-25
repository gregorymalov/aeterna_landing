import React, { useState, useEffect, useRef } from 'react';

const MarketSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  const marketData = [
    {
      title: "Экономика Авторов",
      value: 715,
      suffix: "млрд",
      year: "к 2032",
      color: "from-purple-500 to-blue-600",
      description: "Растущий рынок создателей контента"
    },
    {
      title: "Рынок Утилитарных NFT",
      value: 703,
      suffix: "млрд",
      year: "к 2034", 
      color: "from-blue-500 to-cyan-600",
      description: "Функциональные NFT с реальной утилитой"
    },
    {
      title: "Виртуальные Инфлюенсеры",
      value: 111,
      suffix: "млрд",
      year: "к 2033",
      color: "from-cyan-500 to-teal-600",
      description: "AI-персонажи и цифровые личности"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      marketData.forEach((_, index) => {
        const targetValue = marketData[index].value;
        let currentValue = 0;
        const increment = targetValue / 50;
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }
          
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(currentValue);
            return newValues;
          });
        }, 30);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <section id="investors" ref={sectionRef} className="py-20 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Возможность на</span>{' '}
            <span className="text-yellow-accent">триллион долларов</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aeterna находится в точке слияния трех мегатрендов, формируя новый совокупный рынок
          </p>
        </div>

        {/* Карточки рынков */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {marketData.map((market, index) => (
            <div
              key={index}
              className={`bg-dark-card rounded-2xl p-8 border border-gray-700 hover:border-purple-primary/50 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Иконка градиента */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${market.color} flex items-center justify-center mb-6 mx-auto`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>

              {/* Заголовок */}
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {market.title}
              </h3>

              {/* Анимированное значение */}
              <div className="text-center mb-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  ${animatedValues[index]}
                  <span className="text-2xl text-purple-primary ml-1">{market.suffix}</span>
                </div>
                <div className="text-gray-400 text-sm">{market.year}</div>
              </div>

              {/* Описание */}
              <p className="text-gray-300 text-center text-sm">
                {market.description}
              </p>

              {/* Анимированная линия тренда */}
              <div className="mt-6">
                <svg className="w-full h-8" viewBox="0 0 100 20">
                  <path
                    d="M5,15 Q25,10 50,8 T95,5"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      strokeDasharray: '100',
                      strokeDashoffset: isVisible ? '0' : '100',
                      transitionDelay: `${index * 300 + 500}ms`
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#FDE047" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Итоговый блок */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-purple-primary/20 to-yellow-accent/20 border border-purple-primary/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Совокупный рынок: <span className="text-yellow-accent">$1.5+ триллиона</span>
            </h3>
            <p className="text-xl text-gray-300">
              Aeterna создает новую рыночную категорию на пересечении этих мегатрендов, 
              становясь критической инфраструктурой для цифровой экономики будущего.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
