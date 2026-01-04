import React from 'react';
import { Sparkles } from 'lucide-react';

export const WelcomeSection = () => {
  return (
    <>
      {/* Welcome Section */}
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
            This competition is open to students from various SCHOOLS , INTERMEDIATE & DEGREE COLLEGES and for all Common People.
          </p>

          <p className="text-sm sm:text-base text-[hsl(var(--foreground))]/70 leading-relaxed">
            Please fill accurate details in the registration form below to ensure smooth verification and confirmation.
          </p>

          <div className="mt-6 flex items-center justify-center space-x-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(var(--gold))]/50"></div>
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--gold))] animate-pulse-gold"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(var(--gold))]/50"></div>
          </div>
        </div>
      </section>

      {/* More Details Section */}
      <section className="w-full py-12 px-4 flex justify-center">
        <div className="glow-frame max-w-[900px] w-full rounded-2xl p-6 md:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[hsl(var(--gold))] font-['Crimson_Text'] mb-4">
            More Details
          </h2>

          <p className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 mb-4">
            The participants will be divided into three groups:
          </p>

          <p className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 mb-2">
            📚 School Group
          </p>

          <p className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 mb-2">
            🎓 Degree Group
          </p>

          <p className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 mb-4">
            🌏 Common Group (For non-students & adults)
          </p>

          <p className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 mb-2">
            The quiz will be conducted in 3 rounds.
          </p>

          <p className="text-base sm:text-lg text-[hsl(var(--foreground))]/90">
            💠 LIVE Winner Selection
          </p>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="w-full py-12 px-4 flex justify-center">
        <div className="glow-frame max-w-[900px] w-full rounded-2xl p-6 md:p-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-[hsl(var(--gold))] font-['Crimson_Text'] text-center mb-6">
            🏆 Competition Rewards
          </h2>

          <p className="text-base sm:text-lg text-center text-[hsl(var(--foreground))]/90 mb-8">
            💠 9 Winners & 7 Runner-Ups will be selected
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* 1st Prize */}
            <div className="prize-card gold-card main-prize order-1 md:order-2">
              <div className="medal gold">🥇</div>
              <h3>1st Prize</h3>
              <p>₹40,000</p>
            </div>

            {/* 2nd Prize */}
            <div className="prize-card silver-card order-2 md:order-1">
              <div className="medal silver">🥈</div>
              <h3>2nd Prize</h3>
              <p>₹25,000</p>
            </div>

            {/* 3rd Prize */}
            <div className="prize-card bronze-card order-3">
              <div className="medal bronze">🥉</div>
              <h3>3rd Prize</h3>
              <p>₹15,000</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
