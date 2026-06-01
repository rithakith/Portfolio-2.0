'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function CertificationsSection() {

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      image: '/Portfolio-2.0/certificates/aws.png',
      url: 'https://courses.edx.org/certificates/35c84e67d5744478a069f7d01bb2ee7d',
    },
    {
      name: 'Security, Compliance, and Identity Fundamentals (SC-900)',
      issuer: 'Microsoft',
      image: '/Portfolio-2.0/certificates/sc900.png',
      url: 'https://www.credly.com/earner/earned/badge/8b456b9c-fed0-4ce7-94e5-672040b13a97',
    },
    {
      name: 'Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      image: '/Portfolio-2.0/certificates/az900.png',
      url: 'https://www.credly.com/earner/earned/badge/9a484eb5-94ad-4052-a7df-4d0aef56763d',
    },
    {
      name: `CS50's Introduction to Computer Science`,
      issuer: 'Harvard University',
      image: '/Portfolio-2.0/certificates/cs50.png',
      url: 'https://courses.edx.org/certificates/9bcca14b97ed452596ec7c9aea70b186',
    },
  ];

  return (
    <div className="relative w-full py-4 max-w-6xl mx-auto">
      <div className="px-2">
        {/* Header with View All link */}
        <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-6">
          <h3 className="text-lg font-bold text-white tracking-wide">
            Professional Certifications
          </h3>
          <a
            href="https://www.linkedin.com/in/ritharak/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-color1 hover:underline transition-colors cursor-pointer"
          >
            <span>View All</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-color2/20 p-4 py-5 text-center text-white shadow-sm transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex-1">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={56}
                  height={56}
                  className="mx-auto mb-3 h-14 w-14 object-contain"
                />
                <div className="text-sm font-bold tracking-tight leading-snug px-2">{cert.name}</div>
                <div className="mb-3 mt-1 text-[11px] text-gray-400">{cert.issuer}</div>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block rounded-lg bg-color2 hover:opacity-90 px-3 py-1.5 text-xs font-semibold text-white transition duration-300"
              >
                Verify Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
