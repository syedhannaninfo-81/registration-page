import React from "react";
import { Sparkles } from 'lucide-react';


export const Footer = () => {
  
  return (
    
    <footer className="relative w-full py-20 px-4 sm:px-6 lg:px-8 text-center">
      <section className="w-full py-8 px-4 sm:px-6 lg:px-8 animate-fade-in-up"
      style={{ animationDelay: '0.5s' }} >
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block mb-6">
          <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-[hsl(var(--gold))] animate-pulse-gold" />
          <Sparkles
            className="absolute -bottom-2 -right-2 w-6 h-6 text-[hsl(var(--gold))] animate-pulse-gold"
            style={{ animationDelay: '0.5s' }}/>
          <h2 className="text-xl sm:text-2xl font-semibold text-[hsl(var(--gold))] font-['Crimson_Text']">
            ✨Study or Reference Materials✨
          </h2>
        </div>

        <p className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 leading-relaxed mb-4">
          Refer This Study Materials or Reference Material According to your Group .
        </p>
        </div>
</section>


<section className="w-full py-12 px-4 flex justify-center">
  <div className="glow-frame max-w-[900px] w-full rounded-2xl p-6 md:p-10">
      <h3 className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 leading-relaxed mb-4">
      📚School Group
      </h3>
      <div className="study-material-section">
  <p className="study-title"> Study Material</p>

  <div className="study-buttons">
    <a
      href="https://drive.google.com/file/d/1jlcs9R_o-eA4Hll5Y3t_QG6ySQ7gYdAe/view"
      target="_blank"
      rel="noopener noreferrer"
      className="study-btn"
    >
      The Jurneys and Travels
    </a>

    <a
      href="https://drive.google.com/file/d/1gOXm5g5b5YtdffwtYUUUfgHrqZnj7Ufw/view"
      target="_blank"
      rel="noopener noreferrer"
      className="study-btn secondary"
    >
      The Family of Prophet Mohammed(PBUH)
    </a>
  </div>
</div>
 </div>
</section>


 <section className="w-full py-12 px-4 flex justify-center">
  <div className="glow-frame max-w-[900px] w-full rounded-2xl p-6 md:p-10">     
      <h3 className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 leading-relaxed mb-4">
      🎓Intermedite and Degree Group
      </h3> 
      <div className="study-material-section">
  <p className="study-title"> Study Material</p>

  <div className="study-buttons">
    <a
      href="https://drive.google.com/file/d/13SSLPwMlHEsv2j31Q3kkAuQ1Tj9AzOP1/view"
      target="_blank"
      rel="noopener noreferrer"
      className="study-btn"
    >
      The Batteles Fought By Prophet(PBUH)
    </a>

    <a
      href="https://drive.google.com/file/d/1quauAiKwTKbFpE-cbbTi_so64GssqN5x/view"
      target="_blank"
      rel="noopener noreferrer"
      className="study-btn secondary"
    >
      Finality of Prophethood 
    </a>
  </div>
</div>
</div>
</section>

      
 <section className="w-full py-12 px-4 flex justify-center">
  <div className="glow-frame max-w-[900px] w-full rounded-2xl p-6 md:p-10">     
      <h3 className="text-base sm:text-lg text-[hsl(var(--foreground))]/90 leading-relaxed mb-4">
      🌏Common Group (For non-students & adults)
      </h3> 
      <div className="study-material-section">
  <p className="study-title"> Study Material</p>

  <div className="study-buttons">
    <a
      href="https://drive.google.com/file/d/1fX4O7Evi5mMeT6BNLZXaDxVyE2STnj69/view"
      target="_blank"
      rel="noopener noreferrer"
      className="study-btn"
    >
      Married life of Prophet Mohammed(PBUH)
    </a>

    <a
      href="https://drive.google.com/file/d/1R2WtEIXisvv7wUu4KYNBgRtlfr5-auA3/view"
      target="_blank"
      rel="noopener noreferrer"
      className="study-btn secondary"
    >
      Role of Women During Era of Prophethood
    </a>
  </div>
</div>
      
       </div>
</section>


      {/* School Name */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gradient-gold mb-2 font-['Playfair_Display']">
        RH Public School
      </h2>

      <p className="text-lg text-[hsl(var(--gold-light))] font-['Crimson_Text'] italic mb-6">
        Dar-ul-Uloom Rahmaniya
      </p>

      {/* Location */}
      <div className="mb-2 flex justify-center items-center gap-2 text-[hsl(var(--gold))]">
        <span className="text-lg text-[hsl(var(--foreground))]">
          Talab Katta, Yakutpura, Hyderabad
        </span>
      </div>

      {/* ⭐ Helpline Numbers ⭐ */}
<div className="mb-10 flex justify-center items-center gap-3 text-[hsl(var(--foreground))]">
  <span className="flex items-center gap-2 text-sm">

    {/* Phone Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-[hsl(var(--gold))]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h1.28a2 2 0 011.94 1.47l.46 1.84a2 2 0 01-.5 1.95l-1.1 1.1a16 16 0 006.36 6.36l1.1-1.1a2 2 0 011.95-.5l1.84.46A2 2 0 0121 17v1.28a2 2 0 01-2 2H17c-8.28 0-15-6.72-15-15V5z"
      />
    </svg>

    <span className="text-[hsl(var(--gold))] font-normal">
      Contact no:
    </span>

    {/* Click-to-call numbers */}
    <a href="tel:8919258546" className="hover:text-[hsl(var(--gold))]">
      89192 58546
    </a>
    ,
    <a href="tel:8328192367" className="hover:text-[hsl(var(--gold))]">
      83281 92367
    </a>
  </span>
</div>


      {/* Gold dots */}
      <div className="flex justify-center gap-3 text-[hsl(var(--gold))] text-2xl mb-10">
        <span>●</span>
        <span>●</span>
        <span>●</span>
      </div>

      {/* ⭐ Bottom-right corner credit ⭐ */}
      <div className="absolute bottom-6 right-6 flex flex-col items-center text-right">

        {/* Logo */}
        <img
          src="/fens.png"
          alt="Fenskia Logo"
          className="w-6 mb-1 opacity-80"
        />

        {/* Text Lines */}
        <span className="text-[9px] text-[hsl(51_100%_85%)] leading-tight tracking-wide">
          Fenskia Team
        </span>
        <span className="text-[9px] text-[hsl(51_100%_88%)] leading-tight tracking-wide">
          Led by Syed Hannan Pasha
        </span>
        

      </div>
    </footer>
  );
};
