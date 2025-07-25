import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import CompetitionSection from './components/CompetitionSection';
import MarketSection from './components/MarketSection';
import StrategySection from './components/StrategySection';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import CTASection from './components/CTASection';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CompetitiveAdvantage />
      <CompetitionSection />
      <MarketSection />
      <StrategySection />
      <TokenomicsSection />
      <RoadmapSection />
      <CTASection />
    </div>
  );
}

export default App;
