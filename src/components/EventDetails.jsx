// src/components/EventDetails.jsx
import React from "react";
import { Trophy, Calendar, Info, Sparkles } from "lucide-react";

export const EventDetails = () => {
  return (
    <section
      className="w-full py-8 px-4 sm:px-6 lg:px-8 animate-fade-in-up"
      style={{ animationDelay: "0.3s" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          
          {/* Corners */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[hsl(var(--gold))] opacity-50"></div>
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[hsl(var(--gold))] opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[hsl(var(--gold))] opacity-50"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[hsl(var(--gold))] opacity-50"></div>

          {/* Main Card */}
          <div className="bg-[hsl(var(--card))] rounded-lg p-8 sm:p-10 gold-border-ornate islamic-pattern">
            
            {/* Heading */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center mb-4">
                <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-[hsl(var(--gold))] animate-pulse-gold" />
              </div>

                {/* Line 1: Seerat-un-Nabi ﷺ */}
  <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--gold))] font-['Playfair_Display'] flex items-center justify-center gap-2">
    <span>Seerat-un-Nabi</span>
    <span className="text-2xl text-[hsl(var(--gold))]">ﷺ</span>
  </h2>

  {/* Line 2: Quiz Competition 2026 */}
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[hsl(var(--gold))] mt-2 font-['Playfair_Display']">
    Quiz Competition 2026
  </h2>


              <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent mb-4"></div>

              <p className="text-lg sm:text-xl text-[hsl(var(--gold-light))] font-semibold">
                Registration Open Now
              </p>
            </div>

            {/* THREE BOXES */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">

              {/* Event Date Box */}
              <div
                className="flex items-start space-x-4 p-4 rounded-lg 
                bg-[hsl(var(--blue-soft))]/30 
                border border-[hsl(var(--gold))]/20 max-w-md w-full
                transition-all duration-300 cursor-pointer
                hover:border-[hsl(var(--gold))] hover:shadow-[0_0_20px_hsl(var(--gold))]
                hover:bg-[hsl(var(--blue-soft))]/40 active:shadow-[0_0_25px_hsl(var(--gold))]
                animate-breathe-gold animate-soft-glow"
              >
                <Calendar className="w-6 h-6 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--gold))] mb-1">Event Date</h3>
                  <p className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 leading-relaxed mb-4">10th JANUARY 2026.</p>
                </div>
              </div>

              {/* Registration Info Box */}
              <div
                className="flex items-start space-x-4 p-4 rounded-lg 
                bg-[hsl(var(--blue-soft))]/30 
                border border-[hsl(var(--gold))]/20 max-w-md w-full
                transition-all duration-300 cursor-pointer
                hover:border-[hsl(var(--gold))] hover:shadow-[0_0_20px_hsl(var(--gold))]
                hover:bg-[hsl(var(--blue-soft))]/40 active:shadow-[0_0_25px_hsl(var(--gold))]
                animate-breathe-gold animate-soft-glow"
              >
                <Info className="w-6 h-6 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--gold))] mb-1">Registration Information</h3>
                  <p className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 leading-relaxed mb-4">
                    Registration is open until <b>05 January 2026 </b>.
                    <br />
                    Limited seats available.
                  </p>
                </div>
              </div>

              {/* KBC Format Box */}
              <div
                className="flex items-start space-x-4 p-4 rounded-lg 
                bg-[hsl(var(--blue-soft))]/30 
                border border-[hsl(var(--gold))]/20 max-w-md w-full
                transition-all duration-300 cursor-pointer
                hover:border-[hsl(var(--gold))] hover:shadow-[0_0_20px_hsl(var(--gold))]
                hover:bg-[hsl(var(--blue-soft))]/40 active:shadow-[0_0_25px_hsl(var(--gold))]
                animate-breathe-gold animate-soft-glow"
              >
                <Sparkles className="w-6 h-6 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--gold))] mb-1">KBC-Format</h3>
                  <p className="text-sm text-[hsl(var(--foreground))]/80">
                    Quiz will be conducted in a{" "}
                    <span className="text-[hsl(var(--gold))] font-semibold">KBC-style</span> format.
                  </p>
                </div>
              </div>

            </div>
          </div>
          {/* /Main Card */}
        </div>
      </div>
    </section>
  );
};
