import React from 'react';
import { ShieldOff, Battery, X } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">The Modern</span>{' '}
            <span className="text-purple-primary">Creator's Dilemma</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your likeness is your main asset. But in the age of AI, it has become a target for theft and abuse.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Column 1: Intellectual Property Apocalypse */}
          <div className="bg-dark-card rounded-2xl p-8 border border-purple-primary/20 hover:border-purple-primary/40 transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center mb-4">
                <ShieldOff className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Intellectual Property Apocalypse
              </h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Your likeness is your main asset. Generative AI has turned it into a target. 
              Unauthorized deepfakes, content theft, and reputational damage have become a daily threat.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-red-400">
                <X className="w-5 h-5 mr-3" />
                Unauthorized deepfakes
              </div>
              <div className="flex items-center text-red-400">
                <X className="w-5 h-5 mr-3" />
                Content and likeness theft
              </div>
              <div className="flex items-center text-red-400">
                <X className="w-5 h-5 mr-3" />
                Reputational damage
              </div>
            </div>
          </div>

          {/* Column 2: Burnout Epidemic */}
          <div className="bg-dark-card rounded-2xl p-8 border border-yellow-accent/20 hover:border-yellow-accent/40 transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                The Burnout Epidemic
              </h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Your time and energy are finite. The 24/7 content race leads to burnout, 
              limiting your growth and income. Scaling yourself was impossible. Until today.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-orange-400">
                <X className="w-5 h-5 mr-3" />
                The endless content race
              </div>
              <div className="flex items-center text-orange-400">
                <X className="w-5 h-5 mr-3" />
                Limited scalability
              </div>
              <div className="flex items-center text-orange-400">
                <X className="w-5 h-5 mr-3" />
                Professional burnout
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
