
"use client";
import React from "react";

const FooterSection: React.FC = () => {
  // OnClick handlers
  const handleEmailClick = () => {
    window.location.href = "mailto:ritharaedirisinghe@gmail.com";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/94711020853", "_blank");
  };

  return (
    <section className="w-full px-4 pb-12 flex flex-col gap-2 sm:gap-12 items-center">

      <div className="flex gap-6 items-center justify-center">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ritharak/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="/socialmedia/linkedin.png" alt="LinkedIn" className="sm:w-32 w-12 h-12 sm:h-32" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rithakith"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="/socialmedia/github.png" alt="GitHub" className="sm:w-32 w-12 h-12 sm:h-32" />
        </a>

        {/* Medium */}
        <a
          href="https://medium.com/@ritharaedirisinghe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="/socialmedia/medium.png" alt="Medium" className="sm:w-32 w-12 h-12 sm:h-32" />
        </a>

        {/* Gmail */}
        <button
          onClick={handleEmailClick}
          className="hover:scale-110 transition-transform"
        >
          <img src="/socialmedia/gmail.png" alt="Email" className="sm:w-32 w-12 h-12 sm:h-32" />
        </button>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          className="hover:scale-110 transition-transform"
        >
          <img src="/socialmedia/whatsapp.png" alt="WhatsApp" className="sm:w-32 w-12 h-12 sm:h-32" />
        </button>
      </div>
    </section>
  );
};

export default FooterSection;
