import React from 'react';

export const BackgroundPattern = () => {
  return (
    <>
      {/* Background behind the content */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-20">
        
        {/* Islamic geometric pattern */}
        <div className="absolute inset-0 islamic-pattern"></div>

        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, hsl(var(--royal-blue)) 0%, hsl(var(--background)) 50%, hsl(var(--navy-deep)) 100%)'
          }}
        ></div>

        {/* Animated corner ornaments */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-35">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-rotate">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(51, 100%, 50%)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(45, 100%, 70%)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="url(#goldGradient)" strokeWidth="1" />
            <path d="M 100 20 L 100 180 M 20 100 L 180 100" stroke="url(#goldGradient)" strokeWidth="1" />
            <path d="M 40 40 L 160 160 M 160 40 L 40 160" stroke="url(#goldGradient)" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-35">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-rotate" style={{ animationDirection: 'reverse' }}>
            <defs>
              <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(51, 100%, 50%)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(45, 100%, 70%)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <polygon points="100,20 180,80 180,120 100,180 20,120 20,80" fill="none" stroke="url(#goldGradient2)" strokeWidth="2" />
            <polygon points="100,40 160,80 160,120 100,160 40,120 40,80" fill="none" stroke="url(#goldGradient2)" strokeWidth="1.5" />
            <polygon points="100,60 140,85 140,115 100,140 60,115 60,85" fill="none" stroke="url(#goldGradient2)" strokeWidth="1" />
          </svg>
        </div>

        {/* Floating gold particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[hsl(var(--gold))] rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[hsl(var(--gold))] rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[hsl(var(--gold))] rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[hsl(var(--gold))] rounded-full opacity-30 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </>
  );
};
