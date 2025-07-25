import React, { useState, useEffect, useRef } from 'react';

const TokenomicsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSegment, setActiveSegment] = useState(0);
  const sectionRef = useRef(null);

  const segments = [
    {
      title: "Стейкинг",
      description: "Авторы стейкают $IDENTITY для повышения видимости контента",
      color: "#8B5CF6",
      icon: "🔒"
    },
    {
      title: "Видимость",
      description: "Больше стейка = больше охват и вовлеченность аудитории",
      color: "#06B6D4",
      icon: "👁️"
    },
    {
      title: "Доход",
      description: "Увеличенный охват приводит к росту доходов автора",
      color: "#10B981",
      icon: "💰"
    },
    {
      title: "Спрос на токен",
      description: "Успешные авторы покупают больше токенов для стейкинга",
      color: "#F59E0B",
      icon: "📈"
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
      const interval = setInterval(() => {
        setActiveSegment((prev) => (prev + 1) % segments.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isVisible, segments.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Экономический двигатель</span>{' '}
            <span className="text-yellow-accent">$IDENTITY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Самоусиливающийся маховик, превращающий пользователей в стейкхолдеров
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Анимированный маховик */}
            <div className="relative">
              <div className="flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Основной круг */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Фоновый круг */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    
                    {/* Сегменты маховика */}
                    {segments.map((segment, index) => {
                      const circumference = 2 * Math.PI * 45;
                      const segmentLength = circumference / segments.length;
                      const offset = (circumference / segments.length) * index;
                      
                      return (
                        <circle
                          key={index}
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={segment.color}
                          strokeWidth="4"
                          strokeDasharray={`${segmentLength * 0.8} ${segmentLength * 0.2}`}
                          strokeDashoffset={-offset}
                          className={`transition-all duration-500 ${
                            activeSegment === index ? 'opacity-100' : 'opacity-40'
                          }`}
                          style={{
                            filter: activeSegment === index ? 'drop-shadow(0 0 10px currentColor)' : 'none'
                          }}
                        />
                      );
                    })}
                  </svg>

                  {/* Центральный логотип */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-primary to-yellow-accent rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">$ID</span>
                    </div>
                  </div>

                  {/* Сегменты с иконками */}
                  {segments.map((segment, index) => {
                    const angle = (360 / segments.length) * index - 90;
                    const radian = (angle * Math.PI) / 180;
                    const x = 50 + 35 * Math.cos(radian);
                    const y = 50 + 35 * Math.sin(radian);

                    return (
                      <div
                        key={index}
                        className={`absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                          activeSegment === index 
                            ? 'scale-125 shadow-lg' 
                            : 'scale-100'
                        }`}
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: `translate(-50%, -50%) scale(${activeSegment === index ? 1.25 : 1})`,
                          backgroundColor: segment.color + '20',
                          border: `2px solid ${segment.color}`,
                          boxShadow: activeSegment === index ? `0 0 20px ${segment.color}40` : 'none'
                        }}
                      >
                        <span className="text-2xl">{segment.icon}</span>
                      </div>
                    );
                  })}

                  {/* Стрелки между сегментами */}
                  {segments.map((_, index) => {
                    const angle = (360 / segments.length) * index - 90 + (360 / segments.length) / 2;
                    const radian = (angle * Math.PI) / 180;
                    const x = 50 + 42 * Math.cos(radian);
                    const y = 50 + 42 * Math.sin(radian);

                    return (
                      <div
                        key={`arrow-${index}`}
                        className={`absolute transition-all duration-500 ${
                          activeSegment === index ? 'opacity-100 scale-110' : 'opacity-60 scale-100'
                        }`}
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`
                        }}
                      >
                        <svg className="w-6 h-6 text-yellow-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Описание текущего сегмента */}
            <div className="space-y-8">
              <div className="bg-dark-card rounded-2xl p-8 border border-purple-primary/30">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Как работает маховик $IDENTITY
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Наш нативный токен $IDENTITY — это не просто валюта, а двигатель экосистемы. 
                  Ключевая функция — <span className="text-yellow-accent font-semibold">'Стейкинг для видимости'</span>.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Авторы могут стейкать токены для повышения охвата своего контента, что создает прямую связь 
                  между экономическим участием и коммерческим успехом. Это мощный механизм удержания, 
                  превращающий пользователей в стейкхолдеров.
                </p>
              </div>

              {/* Активный сегмент */}
              <div className="bg-dark-card rounded-2xl p-6 border-2 transition-all duration-500"
                   style={{ borderColor: segments[activeSegment].color + '60' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                       style={{ backgroundColor: segments[activeSegment].color + '20' }}>
                    <span className="text-2xl">{segments[activeSegment].icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {segments[activeSegment].title}
                  </h4>
                </div>
                <p className="text-gray-300">
                  {segments[activeSegment].description}
                </p>
              </div>

              {/* Индикаторы */}
              <div className="flex justify-center space-x-3">
                {segments.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSegment(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeSegment === index 
                        ? 'scale-125' 
                        : 'scale-100 opacity-60'
                    }`}
                    style={{ 
                      backgroundColor: segments[index].color,
                      boxShadow: activeSegment === index ? `0 0 10px ${segments[index].color}60` : 'none'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
