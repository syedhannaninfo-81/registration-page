import React from 'react';
import { Sparkles } from 'lucide-react';

export const WelcomeSection = () => {
  return (
    <section
      className="w-full py-8 px-4 sm:px-6 lg:px-8 animate-fade-in-up"
      style={{ animationDelay: '0.5s' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block mb-6">
          <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-[hsl(var(--gold))] animate-pulse-gold" />
          <Sparkles
            className="absolute -bottom-2 -right-2 w-6 h-6 text-[hsl(var(--gold))] animate-pulse-gold"
            style={{ animationDelay: '0.5s' }}
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-[hsl(var(--gold))] font-['Crimson_Text']">
            Welcome to the Registration Portal
          </h2>
        </div>

        <p className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 leading-relaxed mb-4">
          Register now to participate in Seerat-un-Nabi Quiz Competition.
        </p>

        <p className="text-sm sm:text-base text-[hsl(var(--foreground))]/70 leading-relaxed">
          This competition is open to students from various SCHOOLS, INTERMEDIATE and DEGREE COLLEGES. Please fill in accurate details
          in the registration form below to ensure a smooth verification and confirmation process.
        </p>

        <div className="mt-6 flex items-center justify-center space-x-2">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(var(--gold))]/50"></div>
          <div className="w-2 h-2 rounded-full bg-[hsl(var(--gold))] animate-pulse-gold"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(var(--gold))]/50"></div>
        </div>
      </div>
    </section>
  );
};
