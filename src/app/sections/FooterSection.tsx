"use client";
import React from "react";

const FooterSection: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:ritharaedirisinghe@gmail.com";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/94711020853", "_blank");
  };

  return (
    <footer className="w-full px-4  pb-4 flex flex-col items-center justify-center  dark:bg-[#111] mt-auto">
      <div className="flex gap-6 items-center justify-center">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ritharak/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="/socialmedia/linkedin.png" alt="LinkedIn" className="sm:w-24 w-12 h-12 sm:h-24" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rithakith"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="/socialmedia/github.png" alt="GitHub" className="sm:w-24 w-12 h-12 sm:h-24" />
        </a>

        {/* Medium */}
        <a
          href="https://medium.com/@ritharaedirisinghe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="/socialmedia/medium.png" alt="Medium" className="sm:w-24 w-12 h-12 sm:h-24" />
        </a>

        {/* Gmail */}
        <button
          onClick={handleEmailClick}
          className="hover:scale-110 transition-transform"
        >
          <img src="/socialmedia/gmail.png" alt="Email" className="sm:w-24 w-12 h-12 sm:h-24" />
        </button>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          className="hover:scale-110 transition-transform"
        >
          <img src="/socialmedia/whatsapp.png" alt="WhatsApp" className="sm:w-24 w-12 h-12 sm:h-24" />
        </button>
      </div>

      <p className="text-xs sm:text-sm mt-12 text-gray-500 dark:text-gray-400 text-center">
        © {new Date().getFullYear()} Rithara Kithmanthie. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterSection;
