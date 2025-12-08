import React from 'react';

export const FormContainer = () => {
  return (
    <section
      className="w-full py-8 px-4 sm:px-6 lg:px-8 animate-fade-in-up"
      style={{ animationDelay: '0.7s' }}
    >
      <div className="max-w-[900px] mx-auto">
        <div className="relative">
          <div className="relative bg-[hsl(var(--card))] rounded-lg overflow-hidden gold-border-ornate">
            <div className="absolute inset-0 islamic-pattern opacity-30 pointer-events-none"></div>

            <div
              className="relative w-full flex justify-center p-4 sm:p-8"
              style={{
                background:
                  'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--blue-soft)) 100%)',
              }}
            >
              <iframe
                title="RH Public School Quiz Registration"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdhxeFWWpoUeUPMo_QDzwETHTnkz4UHPeTKDnNJKCIpEPAHQQ/viewform?embedded=true"
                width="100%"
                height="1100"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{ borderRadius: '0.5rem', backgroundColor: 'transparent' }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
