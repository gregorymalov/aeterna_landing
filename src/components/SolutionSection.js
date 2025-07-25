import React, { useState, useEffect, useRef } from 'react';

const SolutionSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Создание",
      subtitle: "Создайте своего Цифрового Двойника",
      description: "Используйте передовые AI-технологии для создания фотореалистичного аватара, который выглядит, говорит и взаимодействует как вы.",
      icon: "🧠",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Защита",
      subtitle: "Заверьте право собственности с Мастер-NFT",
      description: "Пройдите верификацию личности (KYC) и закрепите свое право на образ в виде уникального Мастер-NFT в блокчейне. Это ваше цифровое свидетельство о собственности.",
      icon: "🛡️",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Монетизация",
      subtitle: "Откройте новые источники дохода",
      description: "Лицензируйте контент, созданный вашим AI-двойником, на нашем маркетплейсе, принимайте донаты и предлагайте эксклюзивные подписки. Все в одном месте.",
      icon: "💰",
      color: "from-yellow-500 to-orange-600"
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
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible, steps.length]);

  return (
    <section id="solution" ref={sectionRef} className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Интегрированная Платформа</span>{' '}
            <span className="text-purple-primary">Aeterna</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ваша цифровая операционная система для создания, защиты и монетизации вашей личности в эпоху ИИ
          </p>
        </div>

        {/* Анимированная горизонтальная схема */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-1 relative">
                {/* Соединительная линия */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-primary to-transparent transform -translate-y-1/2 z-10">
                    <div 
                      className={`h-full bg-gradient-to-r from-purple-primary to-yellow-accent transition-all duration-1000 ${
                        isVisible && activeStep >= index ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                )}

                {/* Карточка шага */}
                <div 
                  className={`bg-dark-card rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                    activeStep === index 
                      ? 'border-purple-primary shadow-lg shadow-purple-primary/25' 
                      : 'border-gray-700 hover:border-purple-primary/50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Иконка */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl mb-6 mx-auto transform transition-transform duration-300 ${
                    activeStep === index ? 'scale-110' : 'scale-100'
                  }`}>
                    {step.icon}
                  </div>

                  {/* Номер шага */}
                  <div className="text-center mb-4">
                    <span className="inline-block w-8 h-8 bg-purple-primary rounded-full text-white font-bold flex items-center justify-center text-sm">
                      {step.id}
                    </span>
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {step.title}
                  </h3>

                  {/* Подзаголовок */}
                  <h4 className="text-lg font-semibold text-purple-primary mb-4 text-center">
                    {step.subtitle}
                  </h4>

                  {/* Описание */}
                  <p className="text-gray-300 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Индикаторы прогресса */}
          <div className="flex justify-center mt-12 space-x-3">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-purple-primary scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
