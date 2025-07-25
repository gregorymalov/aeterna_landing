import React, { useState } from 'react';

const CompetitionSection = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const competitors = [
    {
      name: 'Aeterna',
      aiGeneration: '✅',
      ipManagement: '✅ (Мастер-NFT)',
      monetization: '✅ (Маркетплейс)',
      isAeterna: true
    },
    {
      name: 'Midjourney, HeyGen',
      aiGeneration: '✅',
      ipManagement: '❌',
      monetization: '❌',
      isAeterna: false
    },
    {
      name: 'CelebMakerAI, Genies',
      aiGeneration: '✅',
      ipManagement: '⚠️ (Централизованно)',
      monetization: '⚠️ (Ограниченно)',
      isAeterna: false
    },
    {
      name: 'Fanvue, Patreon',
      aiGeneration: '⚠️ (Интеграция)',
      ipManagement: '❌',
      monetization: '✅',
      isAeterna: false
    },
    {
      name: 'Lens Protocol, Farcaster',
      aiGeneration: '❌',
      ipManagement: '✅ (Протокол)',
      monetization: '❌',
      isAeterna: false
    }
  ];

  const getStatusColor = (status) => {
    if (status.includes('✅')) return 'text-green-400';
    if (status.includes('❌')) return 'text-red-400';
    if (status.includes('⚠️')) return 'text-yellow-400';
    return 'text-gray-400';
  };

  const getStatusBg = (status) => {
    if (status.includes('✅')) return 'bg-green-500/10 border-green-500/30';
    if (status.includes('❌')) return 'bg-red-500/10 border-red-500/30';
    if (status.includes('⚠️')) return 'bg-yellow-500/10 border-yellow-500/30';
    return 'bg-gray-500/10 border-gray-500/30';
  };

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Конкуренты решают</span>{' '}
            <span className="text-red-400">часть проблемы</span>
          </h2>
          <p className="text-2xl font-semibold text-purple-primary mb-4">
            Мы перестраиваем всю систему
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Интегрированный подход против фрагментированного рынка
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Десктопная версия таблицы */}
          <div className="hidden lg:block">
            {/* Заголовки таблицы */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white">Платформа</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-purple-primary">Генерация AI</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-yellow-accent">Управление ИС</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-400">Монетизация</h3>
              </div>
            </div>

            {/* Строки таблицы */}
            <div className="space-y-3">
              {competitors.map((competitor, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    competitor.isAeterna
                      ? 'bg-gradient-to-r from-purple-primary/20 to-yellow-accent/20 border-purple-primary/50 shadow-lg'
                      : hoveredRow === index
                      ? 'bg-dark-card border-gray-600'
                      : 'bg-dark-card/50 border-gray-700'
                  }`}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  {/* Название платформы */}
                  <div className="flex items-center">
                    <div className={`font-semibold ${
                      competitor.isAeterna ? 'text-white text-lg' : 'text-gray-300'
                    }`}>
                      {competitor.name}
                      {competitor.isAeterna && (
                        <div className="text-sm text-purple-primary font-normal mt-1">
                          (Наше решение)
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Генерация AI */}
                  <div className="flex justify-center">
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium transition-all duration-300 ${
                      getStatusBg(competitor.aiGeneration)
                    } ${
                      hoveredRow === index && !competitor.isAeterna && competitor.aiGeneration.includes('✅')
                        ? 'scale-105 shadow-lg'
                        : ''
                    }`}>
                      <span className={getStatusColor(competitor.aiGeneration)}>
                        {competitor.aiGeneration}
                      </span>
                    </div>
                  </div>

                  {/* Управление ИС */}
                  <div className="flex justify-center">
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium transition-all duration-300 ${
                      getStatusBg(competitor.ipManagement)
                    } ${
                      hoveredRow === index && !competitor.isAeterna && competitor.ipManagement.includes('✅')
                        ? 'scale-105 shadow-lg'
                        : ''
                    }`}>
                      <span className={getStatusColor(competitor.ipManagement)}>
                        {competitor.ipManagement}
                      </span>
                    </div>
                  </div>

                  {/* Монетизация */}
                  <div className="flex justify-center">
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium transition-all duration-300 ${
                      getStatusBg(competitor.monetization)
                    } ${
                      hoveredRow === index && !competitor.isAeterna && competitor.monetization.includes('✅')
                        ? 'scale-105 shadow-lg'
                        : ''
                    }`}>
                      <span className={getStatusColor(competitor.monetization)}>
                        {competitor.monetization}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Мобильная версия - карточки */}
          <div className="lg:hidden space-y-6">
            {competitors.map((competitor, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  competitor.isAeterna
                    ? 'bg-gradient-to-r from-purple-primary/20 to-yellow-accent/20 border-purple-primary/50 shadow-lg'
                    : 'bg-dark-card/50 border-gray-700'
                }`}
              >
                {/* Название платформы */}
                <div className="mb-4 text-center">
                  <h3 className={`text-xl font-bold ${
                    competitor.isAeterna ? 'text-white' : 'text-gray-300'
                  }`}>
                    {competitor.name}
                  </h3>
                  {competitor.isAeterna && (
                    <div className="text-sm text-purple-primary font-medium mt-1">
                      (Наше решение)
                    </div>
                  )}
                </div>

                {/* Характеристики */}
                <div className="space-y-4">
                  {/* Генерация AI */}
                  <div className="flex justify-between items-center">
                    <span className="text-purple-primary font-semibold">Генерация AI:</span>
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium ${
                      getStatusBg(competitor.aiGeneration)
                    }`}>
                      <span className={getStatusColor(competitor.aiGeneration)}>
                        {competitor.aiGeneration}
                      </span>
                    </div>
                  </div>

                  {/* Управление ИС */}
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-accent font-semibold">Управление ИС:</span>
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium ${
                      getStatusBg(competitor.ipManagement)
                    }`}>
                      <span className={getStatusColor(competitor.ipManagement)}>
                        {competitor.ipManagement}
                      </span>
                    </div>
                  </div>

                  {/* Монетизация */}
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-semibold">Монетизация:</span>
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium ${
                      getStatusBg(competitor.monetization)
                    }`}>
                      <span className={getStatusColor(competitor.monetization)}>
                        {competitor.monetization}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Вывод */}
        <div className="mt-12 text-center">
          <div className="bg-dark-card rounded-2xl p-8 border border-purple-primary/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Только Aeterna предлагает полное решение
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Пока конкуренты решают отдельные задачи, мы создаем интегрированную экосистему 
              для полного жизненного цикла цифровой идентичности — от создания до монетизации.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
