import React from 'react';

export const Header = () => {
  return (
    <header
      className="w-full py-10 px-4 sm:px-6 lg:px-8 animate-fade-in-up"
      style={{ animationDelay: '0.1s' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full border-4 border-[hsl(var(--gold))] shadow-[0_0_25px_hsl(var(--gold))]"></div>
            <img
              src="/schoollogo.jpg"
              alt="RH Public School Logo"
              className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover shadow-[0_0_40px_hsl(var(--gold-light))]"
            />
          </div>

          {/* School name */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-gold animate-pulse-gold font-['Playfair_Display']">
              RH Public School
            </h1>
            <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent my-2"></div>
            <p className="text-lg sm:text-xl text-[hsl(var(--gold-light))] font-['Crimson_Text'] italic tracking-wide">
              Dar-ul-Uloom Rahmaniya
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
