"use client";
import React from "react";
import Image from "next/image";

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
          <Image
            src="/socialmedia/linkedin.png"
            alt="LinkedIn"
            width={96}
            height={96}
            className="sm:w-24 w-12 h-12 sm:h-24 object-contain"
          />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rithakith"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image
            src="/socialmedia/github.png"
            alt="GitHub"
            width={96}
            height={96}
            className="sm:w-24 w-12 h-12 sm:h-24 object-contain"
          />
        </a>

        {/* Medium */}
        <a
          href="https://medium.com/@ritharaedirisinghe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image
            src="/socialmedia/medium.png"
            alt="Medium"
            width={96}
            height={96}
            className="sm:w-24 w-12 h-12 sm:h-24 object-contain"
          />
        </a>

        {/* Gmail */}
        <button
          onClick={handleEmailClick}
          className="hover:scale-110 transition-transform"
        >
          <Image
            src="/socialmedia/gmail.png"
            alt="Email"
            width={96}
            height={96}
            className="sm:w-24 w-12 h-12 sm:h-24 object-contain"
          />
        </button>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          className="hover:scale-110 transition-transform"
        >
          <Image
            src="/socialmedia/whatsapp.png"
            alt="WhatsApp"
            width={96}
            height={96}
            className="sm:w-24 w-12 h-12 sm:h-24 object-contain"
          />
        </button>
      </div>

      <p className="text-xs sm:text-sm mt-12 text-gray-500 dark:text-gray-400 text-center">
        © {new Date().getFullYear()} Rithara Kithmanthie. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterSection;
