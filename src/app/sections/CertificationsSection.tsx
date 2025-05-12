'use client';

import React, { useRef, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { ArrowUpRight } from 'lucide-react';

export default function CertificationsSection() {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      image: '/certificates/aws.png',
      url: 'https://courses.edx.org/certificates/35c84e67d5744478a069f7d01bb2ee7d',
    },
    {
      name: 'Security, Compliance, and Identity Fundamentals (SC-900)',
      issuer: 'Microsoft',
      image: '/certificates/sc900.png',
      url: 'https://www.credly.com/earner/earned/badge/8b456b9c-fed0-4ce7-94e5-672040b13a97',
    },
    {
      name: 'Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      image: '/certificates/az900.png',
      url: 'https://www.credly.com/earner/earned/badge/9a484eb5-94ad-4052-a7df-4d0aef56763d',
    },
    {
      name: `CS50's Introduction to Computer Science`,
      issuer: 'Harvard University',
      image: '/certificates/cs50.png',
      url: 'https://courses.edx.org/certificates/9bcca14b97ed452596ec7c9aea70b186',
    },
  ];

  return (
    <div className="relative h-full overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Certifications" />
        <div className="sm:mt-32 mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-color1 p-4 py-6 text-center text-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="flex-1">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="mx-auto mb-4 h-32 w-32 object-contain"
                />
                <div className="text-lg font-semibold">{cert.name}</div>
                <div className="mb-2 text-sm text-gray-400">{cert.issuer}</div>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block rounded-md bg-color1 px-4 py-3 text-sm font-medium text-white transition duration-300 hover:opacity-90"
              >
                Verify Credential
              </a>
            </div>
          ))}
        </div>

        {/* External Profile Buttons */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {[
            {
              label: 'Visit All My Certifications',
              href: 'https://www.linkedin.com/in/ritharak/details/certifications/',
            },
            {
              label: 'Visit My HackerRank Profile',
              href: 'https://www.hackerrank.com/profile/ritharaedirisin1',
            },
          ].map(({ label, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              ref={divRef}
              onMouseMove={handleMouseMove}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative inline-flex w-fit sm:px-12 px-4 h-12 items-center justify-center overflow-hidden rounded-md border-2 dark:border-[#656fe2] border-[rgb(37,150,190)] font-medium shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              <div
                className="pointer-events-none absolute -inset-px transition-all duration-500 ease-out transform scale-150 blur-md"
                style={{
                  opacity,
                  background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, #656fe255, transparent)`,
                }}
              />
           <span className="relative z-20 flex items-center gap-2 text-white bg-gradient-to-r from-[var(--color1)] to-[var(--color2)] bg-clip-text ">
  {label}
  <ArrowUpRight size={18} />
</span>

            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
