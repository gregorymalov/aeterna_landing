import React, { useState } from 'react';
import { CheckCircle, X, AlertTriangle } from 'lucide-react';
import TestStatus from './TestStatus';

const CompetitionSection = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const competitors = [
    {
      name: 'Raritygram',
      aiGeneration: 'yes',
      ipManagement: 'yes (Master-NFT)',
      monetization: 'yes (Marketplace)',
      isRaritygram: true
    },
    {
      name: 'Midjourney, HeyGen',
      aiGeneration: 'yes',
      ipManagement: 'no',
      monetization: 'no',
      isRaritygram: false
    },
    {
      name: 'CelebMakerAI, Genies',
      aiGeneration: 'yes',
      ipManagement: 'warning (Centralized)',
      monetization: 'warning (Limited)',
      isRaritygram: false
    },
    {
      name: 'Fanvue, Patreon',
      aiGeneration: 'warning (Integration)',
      ipManagement: 'no',
      monetization: 'yes',
      isRaritygram: false
    },
    {
      name: 'Lens Protocol, Farcaster',
      aiGeneration: 'no',
      ipManagement: 'yes (Protocol)',
      monetization: 'no',
      isRaritygram: false
    }
  ];

  const getStatusBg = (status) => {
    if (status.includes('yes')) return 'bg-green-500/10 border-green-500/30';
    if (status.includes('no')) return 'bg-red-500/10 border-red-500/30';
    if (status.includes('warning')) return 'bg-yellow-500/10 border-yellow-500/30';
    return 'bg-gray-500/10 border-gray-500/30';
  };

  const renderStatus = (status) => {
    console.log('renderStatus called with:', status);
    let icon, text, colorClass;
    
    if (status.includes('yes')) {
      icon = <span className="text-green-400">✓</span>;
      text = status.replace('yes', '').trim();
      colorClass = 'text-green-400';
    } else if (status.includes('no')) {
      icon = <span className="text-red-400">✗</span>;
      text = status.replace('no', '').trim();
      colorClass = 'text-red-400';
    } else if (status.includes('warning')) {
      icon = <span className="text-yellow-400">⚠</span>;
      text = status.replace('warning', '').trim();
      colorClass = 'text-yellow-400';
    } else {
      icon = <span className="text-gray-400">?</span>;
      text = status;
      colorClass = 'text-gray-400';
    }
    
    const result = (
      <div className={`flex items-center justify-center gap-2 ${colorClass}`} key={Date.now()}>
        {icon}
        <span>{text} [НОВЫЙ]</span>
      </div>
    );
    console.log('renderStatus returning:', result);
    return result;
  };



  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Competitors solve</span>{' '}
            <span className="text-red-400">part of the problem</span>
          </h2>
          <p className="text-2xl font-semibold text-purple-primary mb-4">
            We are rebuilding the entire system
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An integrated approach versus a fragmented market
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop table version */}
          <div className="hidden lg:block">
            {/* Table headers */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white">Platform</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-purple-primary">AI Generation</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-yellow-accent">IP Management</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-400">Monetization</h3>
              </div>
            </div>

            {/* Table rows */}
            <div className="space-y-3">
              {competitors.map((competitor, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    competitor.isRaritygram
                      ? 'bg-gradient-to-r from-purple-primary/20 to-yellow-accent/20 border-purple-primary/50 shadow-lg'
                      : hoveredRow === index
                      ? 'bg-dark-card border-gray-600'
                      : 'bg-dark-card/50 border-gray-700'
                  }`}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  {/* Platform name */}
                  <div className="flex items-center">
                    <div className={`font-semibold ${
                      competitor.isRaritygram ? 'text-white text-lg' : 'text-gray-300'
                    }`}>
                      {competitor.name}
                      {competitor.isRaritygram && (
                        <div className="text-sm text-purple-primary font-normal mt-1">
                          (Our solution)
                        </div>
                      )}
                    </div>
                  </div>

                  {/* AI Generation */}
                  <div className="flex justify-center">
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium transition-all duration-300 ${
                      getStatusBg(competitor.aiGeneration)
                    } ${
                      hoveredRow === index && !competitor.isRaritygram && competitor.aiGeneration.includes('yes')
                        ? 'scale-105 shadow-lg'
                        : ''
                    }`}>
                      <TestStatus status={competitor.aiGeneration} />
                    </div>
                  </div>

                  {/* IP Management */}
                  <div className="flex justify-center">
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium transition-all duration-300 ${
                      getStatusBg(competitor.ipManagement)
                    } ${
                      hoveredRow === index && !competitor.isRaritygram && competitor.ipManagement.includes('yes')
                        ? 'scale-105 shadow-lg'
                        : ''
                    }`}>
                      <TestStatus status={competitor.ipManagement} />
                    </div>
                  </div>

                  {/* Monetization */}
                  <div className="flex justify-center">
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium transition-all duration-300 ${
                      getStatusBg(competitor.monetization)
                    } ${
                      hoveredRow === index && !competitor.isRaritygram && competitor.monetization.includes('yes')
                        ? 'scale-105 shadow-lg'
                        : ''
                    }`}>
                      <TestStatus status={competitor.monetization} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile version - cards */}
          <div className="lg:hidden space-y-6">
            {competitors.map((competitor, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  competitor.isRaritygram
                    ? 'bg-gradient-to-r from-purple-primary/20 to-yellow-accent/20 border-purple-primary/50 shadow-lg'
                    : 'bg-dark-card/50 border-gray-700'
                }`}
              >
                {/* Platform name */}
                <div className="mb-4 text-center">
                  <h3 className={`text-xl font-bold ${
                    competitor.isRaritygram ? 'text-white' : 'text-gray-300'
                  }`}>
                    {competitor.name}
                  </h3>
                  {competitor.isRaritygram && (
                    <div className="text-sm text-purple-primary font-medium mt-1">
                      (Our solution)
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {/* AI Generation */}
                  <div className="flex justify-between items-center">
                    <span className="text-purple-primary font-semibold">AI Generation:</span>
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium ${
                      getStatusBg(competitor.aiGeneration)
                    }`}>
                      <TestStatus status={competitor.aiGeneration} />
                    </div>
                  </div>

                  {/* IP Management */}
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-accent font-semibold">IP Management:</span>
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium ${
                      getStatusBg(competitor.ipManagement)
                    }`}>
                      <TestStatus status={competitor.ipManagement} />
                    </div>
                  </div>

                  {/* Monetization */}
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-semibold">Monetization:</span>
                    <div className={`px-3 py-2 rounded-lg border text-center font-medium ${
                      getStatusBg(competitor.monetization)
                    }`}>
                      <TestStatus status={competitor.monetization} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12 text-center">
          <div className="bg-dark-card rounded-2xl p-8 border border-purple-primary/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Only Raritygram offers a complete solution
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              While competitors solve individual problems, we are creating an integrated ecosystem 
              for the full lifecycle of digital identity - from creation to monetization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
