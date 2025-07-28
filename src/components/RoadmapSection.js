import React, { useState } from 'react';

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "Фаза 0: MVP",
      budget: "$12k",
      timeline: "2-3 месяца",
      status: "В разработке",
      color: "from-blue-500 to-cyan-600",
      goals: "Доказательство концепции",
      description: "Мы уже разработали план для сверхэкономного MVP, чтобы проверить основной цикл: генерация, владение, монетизация.",
      metrics: [
        "Создание базового AI-аватара",
        "Интеграция с блокчейном для NFT",
        "Простой маркетплейс",
        "Первые 10 тестовых пользователей"
      ]
    },
    {
      title: "Фаза 1: Pre-Seed",
      budget: "$300k",
      timeline: "6 месяцев",
      status: "Планируется",
      color: "from-purple-500 to-pink-600",
      goals: "Запуск и монетизация",
      description: "За 6 месяцев: запуск SFW-платформы Raritygram, привлечение >100 авторов, активация первых потоков дохода.",
      metrics: [
        "100+ активных авторов",
        "Первые $10k MRR",
        "KYC и верификация",
        "Мобильное приложение"
      ]
    },
    {
      title: "Фаза 2: Seed Round",
      budget: "~$2M",
      timeline: "12 месяцев",
      status: "Будущее",
      color: "from-yellow-500 to-orange-600",
      goals: "Масштабирование и разработка ИИ",
      description: "Масштабирование SFW-базы, достижение прибыльности Raritygram, завершение НИОКР по собственной AI-модели для Umbra.",
      metrics: [
        "1000+ авторов",
        "Прибыльность SFW-платформы",
        "Собственная AI-модель",
        "Подготовка к запуску Umbra"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Дорожная</span>{' '}
            <span className="text-purple-primary">карта</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Четкий, прагматичный и капиталоэффективный путь к доминированию на рынке
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Горизонтальная временная шкала */}
          <div className="relative mb-16">
            {/* Линия временной шкалы */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 transform -translate-y-1/2"></div>
            
            {/* Маркеры фаз */}
            <div className="flex justify-between items-center relative">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setActivePhase(index)}
                >
                  {/* Маркер */}
                  <div className={`w-6 h-6 rounded-full border-4 border-white transition-all duration-300 transform ${
                    activePhase === index ? 'scale-150 shadow-lg' : 'scale-100'
                  }`}
                  style={{ 
                    background: `linear-gradient(135deg, ${phase.color.split(' ')[1]}, ${phase.color.split(' ')[3]})`,
                    boxShadow: activePhase === index ? `0 0 20px ${phase.color.split(' ')[1]}60` : 'none'
                  }}>
                  </div>
                  
                  {/* Номер фазы */}
                  <div className="mt-4 text-center">
                    <div className={`text-sm font-semibold transition-colors duration-300 ${
                      activePhase === index ? 'text-white' : 'text-gray-400'
                    }`}>
                      {phase.title.split(':')[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Детали активной фазы */}
          <div className="bg-dark-card rounded-2xl p-8 border border-purple-primary/30">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Левая колонка - основная информация */}
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${phases[activePhase].color} flex items-center justify-center mr-4`}>
                    <span className="text-2xl font-bold text-white">{activePhase}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {phases[activePhase].title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-purple-primary font-semibold">
                        {phases[activePhase].budget}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-yellow-accent font-semibold">
                        {phases[activePhase].timeline}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Цель:</h4>
                  <p className="text-purple-primary font-semibold text-lg">
                    {phases[activePhase].goals}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Описание:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {phases[activePhase].description}
                  </p>
                </div>

                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold"
                     style={{ 
                       backgroundColor: phases[activePhase].color.split(' ')[1] + '20',
                       color: phases[activePhase].color.split(' ')[1]
                     }}>
                  Статус: {phases[activePhase].status}
                </div>
              </div>

              {/* Правая колонка - метрики */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Ключевые метрики:</h4>
                <div className="space-y-3">
                  {phases[activePhase].metrics.map((metric, index) => (
                    <div key={index} className="flex items-center p-3 bg-dark-bg rounded-lg border border-gray-700">
                      <div className="w-2 h-2 rounded-full mr-3"
                           style={{ backgroundColor: phases[activePhase].color.split(' ')[1] }}>
                      </div>
                      <span className="text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Прогресс бар (для демонстрации) */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Прогресс</span>
                    <span>{activePhase === 0 ? '25%' : activePhase === 1 ? '0%' : '0%'}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: activePhase === 0 ? '25%' : '0%',
                        background: `linear-gradient(90deg, ${phases[activePhase].color.split(' ')[1]}, ${phases[activePhase].color.split(' ')[3]})`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Навигация между фазами */}
          <div className="flex justify-center mt-8 space-x-4">
            {phases.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activePhase === index
                    ? 'bg-purple-primary text-white shadow-lg'
                    : 'bg-dark-card text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                Фаза {index}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
