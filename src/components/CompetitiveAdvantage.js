import React, { useState, useEffect, useRef } from 'react';
import { X, Ban, CheckCircle, Shield } from 'lucide-react';

const CompetitiveAdvantage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Regulatory</span>{' '}
            <span className="text-yellow-accent">Shield</span>
          </h2>
          <p className="text-2xl font-semibold text-purple-primary mb-4">
            Compliance as a Service
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            The world is changing. Laws are tightening. We are your ready-made solution.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - text */}
            <div className="space-y-6">
              <div className="bg-dark-card rounded-2xl p-8 border border-yellow-accent/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  New regulatory reality
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  New legislation, such as the <span className="text-yellow-accent font-semibold">TAKE IT DOWN Act</span> in the US 
                  and the <span className="text-yellow-accent font-semibold">EU AI Act</span> in Europe, shifts the responsibility 
                  for AI content to platforms.
                </p>
                
                <div className="bg-purple-primary/10 border border-purple-primary/30 rounded-lg p-4 mb-6">
                  <p className="text-purple-primary font-semibold text-lg">
                    The fundamental question is: how to distinguish authorized content from unauthorized content?
                  </p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Our <span className="text-yellow-accent font-semibold">'consent first'</span> architecture 
                  (KYC + Master-NFT) creates an irrefutable audit trail. 
                  Raritygram is not just a tool, it is a <span className="text-purple-primary font-semibold">'safe harbor'</span> for creators and partners.
                </p>
              </div>

              <div className="flex items-center space-x-4 text-green-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xl font-semibold">Ready for the regulatory future today</span>
              </div>
            </div>

            {/* Right column - animation */}
            <div className="relative">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                {/* Animated diagram */}
                <div className="bg-dark-card rounded-2xl p-8 border border-purple-primary/20 relative overflow-hidden">
                  {/* TAKE IT DOWN Act document */}
                  <div className="mb-8">
                    <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 mb-4">
                      <h4 className="text-red-400 font-bold text-lg mb-2">TAKE IT DOWN Act</h4>
                      <p className="text-gray-300 text-sm">New content verification requirements</p>
                    </div>
                  </div>

                  {/* Protection scheme */}
                  <div className="relative">
                    {/* Unprotected content */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="bg-gray-600 rounded-lg p-3 flex-1 mr-4">
                        <div className="text-gray-300 text-sm">Regular AI content</div>
                        <div className="text-red-400 text-xs flex items-center gap-1">
                          <X className="w-3 h-3" /> No verification
                        </div>
                      </div>
                      <Ban className="w-8 h-8 text-red-500" />
                    </div>

                    {/* Down arrow */}
                    <div className="flex justify-center mb-6">
                      <svg className="w-8 h-8 text-yellow-accent animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>

                    {/* Protected Raritygram content */}
                    <div className="relative">
                      <div className="bg-gradient-to-r from-purple-primary/20 to-yellow-accent/20 border border-purple-primary/40 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-white font-semibold">Raritygram Content</div>
                            <div className="text-green-400 text-sm flex items-center gap-1">
                              <CheckCircle className="w-4 h-4" /> KYC + Master-NFT
                            </div>
                          </div>
                          <Shield className="w-8 h-8 text-green-500" />
                        </div>
                      </div>
                      
                      {/* Protective shield */}
                      <div className={`absolute -inset-2 bg-gradient-to-r from-purple-primary/20 to-yellow-accent/20 rounded-xl -z-10 transition-all duration-2000 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-primary to-yellow-accent opacity-20 rounded-xl animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center bg-green-500/20 border border-green-500/40 rounded-full px-4 py-2">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-400 font-semibold">Regulatory Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;
