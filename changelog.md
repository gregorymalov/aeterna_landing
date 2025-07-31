# Changelog - Raritygram

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-07-31

### Changed
- **Full English Translation:** Completed the full translation of the landing page from Russian to English.
- Translated all UI text, comments, and static data in the following components:
  - `CTASection.js`
  - `CompetitionSection.js`
  - `CompetitiveAdvantage.js`
  - `TokenomicsSection.js`
- Updated `LanguageContext.js` to set the default language to 'en'.
- Verified that no Russian (Cyrillic) text remains in the project's source code.

## [1.0.1] - 2025-07-28

### Changed
- **Project Renaming:** The project was renamed from "Aeterna" to "Raritygram".
- All mentions of the old name in the codebase and configuration files were updated.

## [1.0.0] - 2024-01-25

### Added
- Created the basic structure of the React application with Create React App
- Configured Tailwind CSS via CDN with a custom color scheme (purple, yellow, dark)
- Connected the Inter font for a modern typographic style
- ✅ Настроен Tailwind CSS через CDN с кастомной цветовой схемой (фиолетовый, желтый, темный)
- ✅ Подключен шрифт Inter для современного типографического стиля

### Компоненты
- ✅ **Navigation** - Фиксированная навигация с плавной прокруткой к секциям
- ✅ **HeroSection** - Главная секция с фоновым видео и призывами к действию
- ✅ **ProblemSection** - Секция проблем с двухколоночным макетом
- ✅ **SolutionSection** - Интерактивная секция решения с анимированной схемой из 3 шагов
- ✅ **CompetitiveAdvantage** - Секция регуляторного преимущества с анимацией
- ✅ **CompetitionSection** - Интерактивная таблица сравнения с конкурентами
- ✅ **MarketSection** - Секция рынка с анимированными счетчиками для инвесторов
- ✅ **StrategySection** - Двухфазная стратегия развития (Aeterna → Umbra)
- ✅ **TokenomicsSection** - Анимированный маховик токеномики $IDENTITY
- ✅ **RoadmapSection** - Интерактивная дорожная карта с 3 фазами развития
- ✅ **CTASection** - Финальная секция с формами для авторов и инвесторов

### Функциональность
- ✅ Адаптивный дизайн для всех устройств
- ✅ Плавные анимации и переходы
- ✅ Интерактивные элементы (hover эффекты, клики)
- ✅ Анимация появления элементов при прокрутке (Intersection Observer)
- ✅ Автоматическая смена активных элементов в секциях
- ✅ Формы обратной связи для двух аудиторий

### Медиа
- ✅ Интеграция фонового видео в Hero секции
- ✅ SVG иконки и анимированная графика
- ✅ Градиентные эффекты и цветовые схемы

### Техническое
- ✅ Исправлены предупреждения ESLint
- ✅ Оптимизирована производительность анимаций
- ✅ Настроена структура проекта с компонентным подходом

### Соответствие ТЗ
- ✅ Все 10 блоков из технического задания реализованы
- ✅ Технологичный и красивый дизайн в темных тонах
- ✅ Цветовая схема: фиолетовый (#8B5CF6), желтый (#FDE047), темный (#0F0F23)
- ✅ Архитектура "автор прежде всего" с путем для инвесторов
- ✅ Интегрированный подход vs фрагментированные решения
- ✅ Регуляторное позиционирование и конкурентные преимущества

## [1.0.1] - 2024-01-25

### Изменено
- ✅ **ProblemSection** - Карточки проблем теперь отображаются в один ряд на больших экранах
- ✅ Улучшена адаптивность: lg:grid-cols-2 вместо md:grid-cols-2
- ✅ Уменьшен gap между карточками с 12 до 8 для лучшего баланса
- ✅ **HeroSection** - Увеличена насыщенность фонового видео (opacity с 40% до 70%)
- ✅ **HeroSection** - Уменьшено затемнение градиента для лучшей видимости видео
- ✅ **HeroSection** - Убран эффект масштабирования (hover:scale-105) с главной кнопки
- ✅ **HeroSection** - Убрана анимированная стрелка вниз (animate-bounce)
- ✅ **StrategySection** - Карточки фаз теперь отображаются в один ряд на больших экранах
- ✅ **StrategySection** - Убрана стрелка между фазами для чистоты макета
- ✅ **StrategySection** - Уменьшен gap между карточками с 12 до 8

### Запуск
```bash
cd aeterna-landing
npm start
```
Приложение доступно по адресу: http://localhost:3001
