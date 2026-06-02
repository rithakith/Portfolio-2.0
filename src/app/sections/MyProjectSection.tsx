"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

type ProjectCategory = "All" | "Web & Mobile" | "DevOps & Cloud" | "Systems & AI";

const getSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

export default function MyProjectSection() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [isMobile, setIsMobile] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectSlug = params.get("project");
    if (projectSlug) {
      const matchedCard = cards.find(card => getSlug(card.title) === projectSlug);
      if (matchedCard) {
        setActive(matchedCard);
      }
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (active && typeof active === "object") {
      params.set("project", getSlug(active.title));
      params.set("tab", "projects");
    } else if (active === null) {
      params.delete("project");
    }
    const newRelativePathQuery = window.location.pathname + "?" + params.toString();
    window.history.replaceState(null, "", newRelativePathQuery);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const filteredCards = cards.filter(
    (card) => selectedCategory === "All" || card.category === selectedCategory
  );

  return (
    <section id="projects" className="w-full px-2 py-4 flex flex-col gap-6 max-w-6xl mx-auto">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 mb-4 px-4">
        {(["All", "Web & Mobile", "DevOps & Cloud", "Systems & AI"] as ProjectCategory[]).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${
              selectedCategory === category
                ? "bg-color1 text-white border-color1 shadow-md"
                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
  
      <AnimatePresence>
        {active && typeof active === "object" && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 h-full w-full z-[90] bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Responsive Side-Drawer / Bottom-Sheet */}
            <motion.div
              initial={isMobile ? { y: "100%", x: 0 } : { x: "100%", y: 0 }}
              animate={{ x: 0, y: 0 }}
              exit={isMobile ? { y: "100%", x: 0 } : { x: "100%", y: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              ref={ref}
              className="fixed z-[100] bg-neutral-950/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col
                md:top-0 md:right-0 md:h-full md:w-[480px] md:border-y-0 md:border-r-0 md:border-l md:rounded-l-3xl
                max-md:bottom-0 max-md:left-0 max-md:w-full max-md:h-[82vh] max-md:border-x-0 max-md:border-b-0 max-md:border-t max-md:rounded-t-3xl"
            >
              {/* Grab handle for mobile touch experience */}
              <div className="w-12 h-1 bg-white/20 rounded-full mx-auto my-3 md:hidden flex-shrink-0" />

              {/* Visual Header */}
              <div className="relative h-48 md:h-64 w-full flex-shrink-0">
                <Image
                  priority
                  width={600}
                  height={400}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                
                <button
                  className="flex absolute top-4 right-4 items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-full h-9 w-9 transition-colors duration-200 border border-white/10 shadow-md cursor-pointer hover:scale-105 active:scale-95"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Drawer Body Content */}
              <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  {active.tag && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-color1/10 text-color1 border border-color1/25 w-fit">
                      {active.tag}
                    </span>
                  )}
                  <h3 className="font-bold text-white text-xl md:text-2xl tracking-tight">
                    {active.title}
                  </h3>
                </div>

                {/* Technologies Stack parsed into modern micro-badges */}
                {active.description && (
                  <div className="flex flex-col gap-2 border-y border-white/5 py-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500">Technologies Used</span>
                    <div className="flex flex-wrap gap-2">
                      {active.description.split(",").map((tech) => (
                        <span
                          key={tech.trim()}
                          className="px-2.5 py-1 text-xs font-medium bg-white/[0.04] text-gray-300 border border-white/10 rounded-md hover:border-white/20 hover:text-white transition-colors"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Content / Description */}
                <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </div>
              </div>

              {/* Sticky Action Footer */}
              {active.ctaText && active.ctaLink && (
                <div className="p-6 border-t border-white/15 bg-neutral-950/40 backdrop-blur-md flex justify-end gap-3 flex-shrink-0 pb-safe">
                  <a
                    href={active.ctaLink}
                    target="_blank"
                    className="px-5 py-2.5 text-xs rounded-xl font-bold bg-color1 text-white hover:bg-opacity-95 shadow-md shadow-color1/10 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{active.ctaText}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h4a.75.75 0 0 1 0 1.5h-4Z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M12.5 2.25A.75.75 0 0 1 13.25 2h5c.414 0 .75.336.75.75v5a.75.75 0 0 1-1.5 0V3.81L11.78 9.53a.75.75 0 1 1-1.06-1.06L16.44 2.75H13.25a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cards List */}
      <motion.ul 
        layout
        className="max-w-6xl mt-2 px-4 place-items-center mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              className="p-4 flex flex-col border border-white/10 bg-white/[0.02] dark:bg-white/[0.04] backdrop-blur-md
                hover:border-white/20 hover:bg-white/[0.05]
                rounded-xl transition-all duration-300 h-full shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col justify-between h-full gap-4">
                {/* Image */}
                <motion.div layoutId={`image-${card.title}-${id}`} className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image
                    width={600}
                    height={400}
                    src={card.src}
                    alt={card.title}
                    className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Title + Desc */}
                <div className="flex-grow flex flex-col justify-start items-start">
                  {card.tag && (
                    <span className="inline-block mb-2 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-color1/10 text-color1 border border-color1/25">
                      {card.tag}
                    </span>
                  )}
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-semibold text-white dark:text-neutral-200 text-lg"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-gray-400 text-xs mt-1.5"
                  >
                    {card.description}
                  </motion.p>
                </div>

                {/* Buttons */}
                <div className="mt-auto pt-2 flex justify-start gap-2">
                  <button
                    onClick={() => setActive(card)}
                    className="group/btn relative px-4 py-1.5 text-xs rounded-lg font-medium bg-white/[0.03] hover:bg-white/[0.08] text-gray-200 hover:text-white border border-white/10 hover:border-color1/40 transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:shadow-[0_0_12px_rgba(226,88,62,0.15)] active:scale-95 cursor-pointer"
                  >
                    <span>Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-color1 group-hover/btn:translate-x-0.5 transition-all duration-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.22 5.08a.75.75 0 1 1 1.06-1.06l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06l4.168-4.17H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* CTA Link */}
                  {card.ctaText && card.ctaLink && (
                    <a
                      href={card.ctaLink}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-1.5 text-xs rounded-lg font-medium bg-color2 hover:bg-opacity-95 hover:shadow-[0_0_12px_rgba(29,122,92,0.2)] hover:scale-[1.02] active:scale-[0.98] text-white transition-all duration-300 cursor-pointer flex items-center gap-1"
                    >
                      <span>{card.ctaText}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3 text-white/80"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h4a.75.75 0 0 1 0 1.5h-4Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M12.5 2.25A.75.75 0 0 1 13.25 2h5c.414 0 .75.336.75.75v5a.75.75 0 0 1-1.5 0V3.81L11.78 9.53a.75.75 0 1 1-1.06-1.06L16.44 2.75H13.25a.75.75 0 0 1-.75-.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Land & Asset Valuation System",
    category: "Web & Mobile" as ProjectCategory,
    tag: "Client Project (Epic Lanka)",
    description: "ASP.NET Core, Flutter, PostgreSQL, AWS EC2, Mapbox, GitLab",
    src: "/Portfolio-2.0/projects/valuation.webp",
    content: () => (
      <p>
        Developed a property valuation system for Sri Lanka&apos;s Valuation Department. 
        Digitized land acquisition, rating, and rating assessment workflows. Built with a full-stack architecture 
        using ASP.NET Core and Flutter, integrating Mapbox for geospatial mobile mapping, automated reporting 
        tools, and robust multi-language support(sinhala,english,tamil). Hosted the backend on AWS EC2.
      </p>
    ),
  },
  {
    title: "WSO2 DevOps Program Group Project",
    category: "DevOps & Cloud" as ProjectCategory,
    tag: "DevOps / Infrastructure Project",
    description: "Terraform, Kubernetes, ArgoCD, Istio, Jaeger, AWS, Linux",
    src: "/Portfolio-2.0/wso2.webp",
    ctaText: "Read on Medium",
    ctaLink: "https://medium.com/@ritharaedirisinghe/my-journey-through-the-wso2-linux-systems-administration-devops-engineering-training-f15e22af9246",
    content: () => (
      <p>
        Built and deployed a production-grade microservices-based Salon Booking System on a self-provisioned 
        Kubernetes cluster using bootstrapped Kubespray. Used Terraform to provision secure AWS infrastructure 
        (VPC, EC2, ECR, IAM). Configured GitOps CD pipelines using ArgoCD, and enforced service mesh 
        observability and routing policies using Istio, Kiali, Jaeger, and Prometheus.
      </p>
    ),
  },
  {
    title: "Secura",
    category: "Systems & AI" as ProjectCategory,
    tag: "2nd Place - Hacktivate Hackathon",
    description: "FastAPI, NextJS, Firebase Firestore, Gemini AI, WebSockets",
    src: "/Portfolio-2.0/projects/debatex.webp",
    ctaText: "View GitHub",
    ctaLink: "https://github.com/rithakith",
    content: () => (
      <p>
        Developed an AI-powered incident reporting platform built for high-stakes real-time security tracking. 
        Integrates Gemini AI with llms for intelligent threat analysis, WebSockets for live, secure collaboration dashboards, 
        and secure media/evidence uploads to Firebase. Built custom automated compliance reports and analytics.
      </p>
    ),
  },
  {
    title: "Logdy-Core-RK",
    category: "Systems & AI" as ProjectCategory,
    tag: "Open Source Contribution",
    description: "Go, Open Source, Developer Tooling, JSON logs stream",
    src: "/Portfolio-2.0/projects/logdy-rk.png",
    ctaText: "View GitHub",
    ctaLink: "https://github.com/rithakith/logdy-core-rk",
    content: () => (
      <p>
        Developed and maintained a personal custom fork of Logdy, a web-based real-time log viewer and terminal UI developer tool. 
        Optimized performance in the core Go log-streaming engine, adding improved support for custom regex filters, community requested enhancements, and contributing upstream patches back to the main repository.
      </p>
    ),
  },
  {
    title: "UOM Finance Paysheet Emailer",
    category: "Web & Mobile" as ProjectCategory,
    tag: "Client Project (UOM Admin)",
    description: "Python, Tkinter, SQLite, SMTP Mail Client",
    src: "/Portfolio-2.0/projects/finance.webp",
    content: () => (
      <p>
        Streamlined administrative payroll operations by creating a standalone desktop automation client for the University of Moratuwa Internal Administration Division. 
        Developed with a clean Tkinter GUI, utilizing SQLite for pay database management, and implementing secure multithreaded email delivery of encrypted paysheet PDFs.
      </p>
    ),
  },
  {
    title: "VertexBMS Official Website",
    category: "Web & Mobile" as ProjectCategory,
    tag: "Client Individual Project",
    description: "NextJS, Turbopack, Tailwind CSS, Prisma, Street Maps API",
    src: "/Portfolio-2.0/projects/vertextbms.webp",
    ctaText: "Visit Site",
    ctaLink: "https://vertexbms.com/",
    content: () => (
      <p>
        Designed, developed, and deployed the official website for VertexBMS. Leveraging a Next.js framework 
        with Turbopack for ultra-fast load times. Structured database integrations via Prisma and added dynamic, 
        responsive map visualizers using the Street Maps API. Built customized customer forms and CRM linkages.
      </p>
    ),
  },
  {
    title: "HackElite 2.0 Competition Website",
    category: "Web & Mobile" as ProjectCategory,
    tag: "Client Project (IEEE WIE UOM)",
    description: "NextJS, Tailwind, Framer Motion, Vercel CI/CD",
    src: "/Portfolio-2.0/projects/hackelite.png",
    ctaText: "Visit Site",
    ctaLink: "https://hackelite.lk",
    content: () => (
      <p>
        Designed and built the registration and promotional platform for the HackElite 2.0 Hackathon organized 
        by IEEE WIE Student Branch. Handled real-time registration processing, countdown timers, event schedules, 
        and guidelines for teams across major state universities in Sri Lanka.
      </p>
    ),
  },
  {
    title: "ICITR Official Website 2025",
    category: "Web & Mobile" as ProjectCategory,
    tag: "Client Project (UOM Faculty of IT)",
    description: "NextJS, Tailwind, Framer Motion, Vercel CI/CD",
    src: "/Portfolio-2.0/projects/icitr.webp",
    ctaText: "Visit Site",
    ctaLink: "https://icitr.uom.lk",
    content: () => (
      <p>
        Created the official administrative and program platform for the International Conference on 
        Information Technology and Research 2025. Supports paper submissions, keynote directories, scheduling pipelines, 
        and ticket bookings.
      </p>
    ),
  },
];
