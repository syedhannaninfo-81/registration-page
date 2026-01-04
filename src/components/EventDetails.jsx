// src/components/EventDetails.jsx
import React from "react";
import { Trophy, Calendar, Info, Sparkles, MapPin } from "lucide-react";

export const EventDetails = () => {
  return (
    <section
      className="w-full py-8 px-4 sm:px-6 lg:px-8 animate-fade-in-up"
      style={{ animationDelay: "0.3s" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative">

          {/* Corners */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[hsl(var(--gold))] opacity-50"></div>
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[hsl(var(--gold))] opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[hsl(var(--gold))] opacity-50"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[hsl(var(--gold))] opacity-50"></div>

          {/* Main Card */}
          <div className="bg-[hsl(var(--card))] rounded-lg p-8 sm:p-10 gold-border-ornate islamic-pattern">

            {/* Heading */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center mb-4">
                <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-[hsl(var(--gold))] animate-pulse-gold" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--gold))] font-['Playfair_Display'] flex items-center justify-center gap-2">
                <span>Seerat-un-Nabi</span>
                <span className="text-2xl">ﷺ</span>
              </h2>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[hsl(var(--gold))] mt-2 font-['Playfair_Display']">
                Quiz Competition 2026
              </h2>

              <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent my-4"></div>

              <p className="text-lg sm:text-xl text-[hsl(var(--gold-light))] font-semibold">
                Registration Open Now
              </p>
            </div>

            {/* BOX GRID (FIXED) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">

              {/* Event Date */}
              <div className="flex items-start space-x-4 p-4 xl:p-6 rounded-lg
                bg-[hsl(var(--blue-soft))]/30
                border border-[hsl(var(--gold))]/20 w-full xl:min-h-[260px]
                transition-all duration-300 cursor-pointer
                hover:border-[hsl(var(--gold))] hover:shadow-[0_0_20px_hsl(var(--gold))]
                hover:bg-[hsl(var(--blue-soft))]/40
                animate-breathe-gold animate-soft-glow">

                <Calendar className="w-6 h-6 text-[hsl(var(--gold))] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--gold))] mb-2">Event Date</h3>
                  <p className="text-sm sm:text-base xl:text-lg leading-relaxed xl:leading-loose text-[hsl(var(--foreground))]/90">
                    15th JANUARY 2026.
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start space-x-4 p-4 xl:p-6 rounded-lg
                bg-[hsl(var(--blue-soft))]/30
                border border-[hsl(var(--gold))]/20 w-full xl:min-h-[260px]
                transition-all duration-300 cursor-pointer
                hover:border-[hsl(var(--gold))] hover:shadow-[0_0_20px_hsl(var(--gold))]
                hover:bg-[hsl(var(--blue-soft))]/40
                animate-breathe-gold animate-soft-glow">

                <MapPin className="w-6 h-6 text-[hsl(var(--gold))] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--gold))] mb-2">Venue</h3>
                  <p className="text-sm sm:text-base xl:text-lg leading-relaxed xl:leading-loose text-[hsl(var(--foreground))]/90 mb-2">
                    Minar Garden Function Hall.
                  </p>
                  <p className="text-sm sm:text-base xl:text-lg leading-relaxed xl:leading-loose text-[hsl(var(--foreground))]/90">
                    Salar Jung Rd, Old City, Darulshifa, Hyderabad, Telangana 500002
                  </p>
                </div>
              </div>

              {/* Registration */}
              <div className="flex items-start space-x-4 p-4 xl:p-6 rounded-lg
                bg-[hsl(var(--blue-soft))]/30
                border border-[hsl(var(--gold))]/20 w-full xl:min-h-[260px]
                transition-all duration-300 cursor-pointer
                hover:border-[hsl(var(--gold))] hover:shadow-[0_0_20px_hsl(var(--gold))]
                hover:bg-[hsl(var(--blue-soft))]/40
                animate-breathe-gold animate-soft-glow">

                <Info className="w-6 h-6 text-[hsl(var(--gold))] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--gold))] mb-2">
                    Registration Information
                  </h3>
                  <p className="text-sm sm:text-base xl:text-lg leading-relaxed xl:leading-loose text-[hsl(var(--foreground))]/90">
                    Registration is open until <b>10 January 2026</b>.
                    <br />Limited seats available.
                  </p>
                </div>
              </div>

              {/* KBC */}
              <div className="flex items-start space-x-4 p-4 xl:p-6 rounded-lg
                bg-[hsl(var(--blue-soft))]/30
                border border-[hsl(var(--gold))]/20 w-full xl:min-h-[260px]
                transition-all duration-300 cursor-pointer
                hover:border-[hsl(var(--gold))] hover:shadow-[0_0_20px_hsl(var(--gold))]
                hover:bg-[hsl(var(--blue-soft))]/40
                animate-breathe-gold animate-soft-glow">

                <Sparkles className="w-6 h-6 text-[hsl(var(--gold))] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--gold))] mb-2">KBC-Format</h3>
                  <p className="text-sm sm:text-base xl:text-lg leading-relaxed xl:leading-loose text-[hsl(var(--foreground))]/90">
                    Quiz will be conducted in a{" "}
                    <span className="text-[hsl(var(--gold))] font-semibold">
                      KBC-style
                    </span>{" "}
                    format.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
