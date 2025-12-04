import React from "react";
import { Instagram, Facebook } from "lucide-react";

export const SocialMedia = () => {
  return (
    <section
      className="w-full mt-14 mb-14 px-4 animate-fade-in-up"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h3 className="text-2xl font-bold text-[hsl(var(--gold))] mb-6 font-['Playfair_Display'] tracking-wide">
          Follow Us on Social Media
        </h3>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-6 flex-wrap">

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/r.h.school?igsh=MWxqZmRnMHhvY2hmOQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2 px-5 py-3 rounded-lg
              border border-[hsl(var(--gold))]/40
              text-[hsl(var(--foreground))] 
              bg-[hsl(var(--blue-soft))]/20
              hover:border-[hsl(var(--gold))]
              hover:shadow-[0_0_15px_hsl(var(--gold))]
              hover:bg-[hsl(var(--blue-soft))]/30
              hover:text-[hsl(var(--gold))]
              transition-all duration-300 cursor-pointer
            "
          >
            <Instagram className="w-6 h-6 text-[hsl(var(--gold))]" />
            <span className="font-semibold tracking-wide">Instagram</span>
          </a>

          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/profile.php?id=100079684167169"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2 px-5 py-3 rounded-lg
              border border-[hsl(var(--gold))]/40
              text-[hsl(var(--foreground))]
              bg-[hsl(var(--blue-soft))]/20
              hover:border-[hsl(var(--gold))]
              hover:shadow-[0_0_15px_hsl(var(--gold))]
              hover:bg-[hsl(var(--blue-soft))]/30
              hover:text-[hsl(var(--gold))]
              transition-all duration-300 cursor-pointer
            "
          >
            <Facebook className="w-6 h-6 text-[hsl(var(--gold))]" />
            <span className="font-semibold tracking-wide">Facebook</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918328192367"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2 px-5 py-3 rounded-lg
              border border-[hsl(var(--gold))]/40
              text-[hsl(var(--foreground))]
              bg-[hsl(var(--blue-soft))]/20
              hover:border-[hsl(var(--gold))]
              hover:shadow-[0_0_15px_hsl(var(--gold))]
              hover:bg-[hsl(var(--blue-soft))]/30
              hover:text-[hsl(var(--gold))]
              transition-all duration-300 cursor-pointer
            "
          >
            {/* Custom WhatsApp SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[hsl(var(--gold))]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.4 0 .06 5.34.06 11.98c0 2.11.55 4.18 1.6 6.01L0 24l6.17-1.62a12.04 12.04 0 0 0 5.87 1.5h.01c6.63 0 11.98-5.34 11.98-11.98 0-3.2-1.25-6.21-3.5-8.42zm-8.48 17.9h-.01a10.4 10.4 0 0 1-5.3-1.47l-.38-.23-3.66.96.98-3.56-.25-.37a10.45 10.45 0 0 1-1.62-5.63c0-5.76 4.69-10.45 10.45-10.45 2.79 0 5.41 1.09 7.38 3.06a10.4 10.4 0 0 1 3.06 7.38c0 5.76-4.69 10.45-10.45 10.45zm5.78-7.84c-.31-.16-1.85-.91-2.14-1.02-.29-.12-.5-.16-.72.16-.22.31-.82 1.02-1.01 1.23-.19.22-.37.25-.68.09-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.56.16-.19.22-.31.34-.53.11-.22.06-.41-.03-.56-.09-.16-.72-1.73-.99-2.37-.26-.63-.53-.54-.72-.55h-.62c-.22 0-.56.08-.85.41-.29.31-1.12 1.1-1.12 2.68 0 1.58 1.15 3.11 1.31 3.32.16.22 2.26 3.45 5.49 4.83.77.33 1.37.53 1.84.68.77.24 1.48.21 2.03.13.62-.09 1.85-.76 2.12-1.49.26-.73.26-1.35.18-1.49-.08-.15-.28-.22-.59-.38z" />
            </svg>

            <span className="font-semibold tracking-wide">WhatsApp</span>
          </a>

        </div>
      </div>
    </section>
  );
};
