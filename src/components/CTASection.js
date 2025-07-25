import React, { useState } from 'react';

const CTASection = () => {
  const [activeForm, setActiveForm] = useState('creator');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    fund: '',
    role: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Станьте частью</span>{' '}
            <span className="text-purple-primary">будущего</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Присоединяйтесь к революции цифровой идентичности уже сегодня
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Переключатель аудитории */}
          <div className="flex justify-center mb-12">
            <div className="bg-dark-card rounded-xl p-2 border border-gray-700">
              <button
                onClick={() => setActiveForm('creator')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeForm === 'creator'
                    ? 'bg-purple-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Для авторов
              </button>
              <button
                onClick={() => setActiveForm('investor')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeForm === 'investor'
                    ? 'bg-yellow-accent text-dark-bg shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Для инвесторов
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Левая колонка - информация */}
            <div>
              {activeForm === 'creator' ? (
                <div className="bg-dark-card rounded-2xl p-8 border border-purple-primary/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-primary to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Получите ранний доступ
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Станьте одним из первых авторов на платформе Aeterna. Получите:
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-purple-primary">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Бесплатное создание AI-аватара
                    </div>
                    <div className="flex items-center text-purple-primary">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Приоритетная поддержка
                    </div>
                    <div className="flex items-center text-purple-primary">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Эксклюзивные функции
                    </div>
                    <div className="flex items-center text-purple-primary">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Бонусные $IDENTITY токены
                    </div>
                  </div>

                  <div className="bg-purple-primary/10 border border-purple-primary/30 rounded-lg p-4">
                    <p className="text-purple-primary text-sm">
                      <strong>Ограниченное предложение:</strong> Первые 100 авторов получат пожизненную скидку 50% на все услуги платформы.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-dark-card rounded-2xl p-8 border border-yellow-accent/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-accent to-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-dark-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Инвестиционная возможность
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Узнайте больше о создании новой рыночной инфраструктуры объемом $1.5+ триллиона:
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-yellow-accent">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Детальная презентация для инвесторов
                    </div>
                    <div className="flex items-center text-yellow-accent">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Финансовые прогнозы и модели
                    </div>
                    <div className="flex items-center text-yellow-accent">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Техническая документация
                    </div>
                    <div className="flex items-center text-yellow-accent">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Встреча с командой
                    </div>
                  </div>

                  <div className="bg-yellow-accent/10 border border-yellow-accent/30 rounded-lg p-4">
                    <p className="text-yellow-accent text-sm">
                      <strong>Эксклюзивно:</strong> Доступ к закрытому инвестиционному раунду Pre-Seed с особыми условиями для ранних инвесторов.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Правая колонка - форма */}
            <div className="bg-dark-card rounded-2xl p-8 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                {activeForm === 'creator' ? (
                  <>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Email адрес *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-purple-primary focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-purple-primary focus:outline-none transition-colors"
                        placeholder="Ваше имя"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Тип контента
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-purple-primary focus:outline-none transition-colors"
                      >
                        <option value="">Выберите тип</option>
                        <option value="influencer">Инфлюенсер</option>
                        <option value="artist">Художник</option>
                        <option value="musician">Музыкант</option>
                        <option value="streamer">Стример</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-purple-primary hover:bg-purple-dark py-4 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Присоединиться к списку ожидания
                    </button>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Имя *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-yellow-accent focus:outline-none transition-colors"
                        placeholder="Ваше имя"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Фонд/Компания *
                      </label>
                      <input
                        type="text"
                        name="fund"
                        value={formData.fund}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-yellow-accent focus:outline-none transition-colors"
                        placeholder="Название фонда или компании"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Email адрес *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-yellow-accent focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-yellow-accent hover:bg-yellow-500 text-dark-bg py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Запросить презентацию для инвесторов
                    </button>
                  </>
                )}
              </form>

              <p className="text-gray-400 text-sm mt-4 text-center">
                Мы уважаем вашу конфиденциальность. Никакого спама, только важные обновления.
              </p>
            </div>
          </div>
        </div>

        {/* Футер */}
        <div className="mt-20 pt-8 border-t border-gray-700 text-center">
          <div className="text-2xl font-bold text-white mb-4">
            <span className="text-purple-primary">Aeterna</span>
          </div>
          <p className="text-gray-400">
            © 2024 Aeterna. Суверенная цифровая идентичность для эпохи ИИ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
