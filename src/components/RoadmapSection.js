import React, { useState } from 'react';

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "Phase 0: MVP",
      budget: "$12k",
      timeline: "2-3 months",
      status: "In development",
      color: "from-blue-500 to-cyan-600",
      goals: "Proof of Concept",
      description: "We have already developed a plan for a hyper-lean MVP to test the core loop: generation, ownership, monetization.",
      metrics: [
        "Creation of a basic AI avatar",
        "Blockchain integration for NFTs",
        "Simple marketplace",
        "First 10 test users"
      ]
    },
    {
      title: "Phase 1: Pre-Seed",
      budget: "$300k",
      timeline: "6 months",
      status: "Planned",
      color: "from-purple-500 to-pink-600",
      goals: "Launch and monetization",
      description: "Within 6 months: launch of SFW-platform Raritygram, attracting >100 authors, activation of the first revenue streams.",
      metrics: [
        "100+ active authors",
        "First $10k MRR",
        "KYC and verification",
        "Mobile application"
      ]
    },
    {
      title: "Phase 2: Seed/Private",
      budget: "~$2M",
      timeline: "12 months",
      status: "Future",
      color: "from-yellow-500 to-orange-600",
      goals: "Market demand validation and AI development",
      description: "Scaling SFW-base, achieving profitability of Raritygram, completing R&D on our own AI model for Umbra.",
      metrics: [
        "1000+ authors",
        "Profitability of SFW-platform",
        "Own AI model",
        "Preparation for Umbra launch"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Road</span>{' '}
            <span className="text-purple-primary">map</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A clear, pragmatic, and capital-efficient path to market dominance
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Horizontal timeline */}
          <div className="relative mb-16">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 transform -translate-y-1/2"></div>
            
            {/* Phase markers */}
            <div className="flex justify-between items-center relative">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setActivePhase(index)}
                >
                  {/* Marker */}
                  <div className={`w-6 h-6 rounded-full border-4 border-white transition-all duration-300 transform ${
                    activePhase === index ? 'scale-150 shadow-lg' : 'scale-100'
                  }`}
                  style={{ 
                    background: `linear-gradient(135deg, ${phase.color.split(' ')[1]}, ${phase.color.split(' ')[3]})`,
                    boxShadow: activePhase === index ? `0 0 20px ${phase.color.split(' ')[1]}60` : 'none'
                  }}>
                  </div>
                  
                  {/* Phase number */}
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

          {/* Active phase details */}
          <div className="bg-dark-card rounded-2xl p-8 border border-purple-primary/30">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left column - main information */}
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
                  <h4 className="text-lg font-semibold text-white mb-2">Goal:</h4>
                  <p className="text-purple-primary font-semibold text-lg">
                    {phases[activePhase].goals}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Description:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {phases[activePhase].description}
                  </p>
                </div>

                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold"
                     style={{ 
                       backgroundColor: phases[activePhase].color.split(' ')[1] + '20',
                       color: phases[activePhase].color.split(' ')[1]
                     }}>
                  Status: {phases[activePhase].status}
                </div>
              </div>

              {/* Right column - metrics */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key metrics:</h4>
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

                {/* Progress bar (for demonstration) */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
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

          {/* Phase navigation */}
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
                Phase {index}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
