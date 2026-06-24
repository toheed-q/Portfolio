
import React from "react";
import Image from "next/image";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import { Icon } from '@iconify/react';

export const metadata: Metadata = {
    title: "About Me | Toheed Qureshi",
};

type Experience = {
  role: string;
  company: string;
  meta: string;
  period: string;
  current?: boolean;
  summary: string;
  tech: string[];
  icon?: string;
  iconBg?: string;
  logo?: string;
  logoBg?: string;
};

const experiences: Experience[] = [
  {
    role: ".NET Developer",
    company: "IT Corner Pvt. Ltd.",
    meta: "Full-time · Onsite",
    period: "Apr 2026 – Present",
    current: true,
    icon: "mdi:briefcase",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    summary:
      "Building scalable REST APIs and real-time features for StarApp — a live-streaming and reels platform — with a focus on performance and clean architecture.",
    tech: ["ASP.NET Core", "C#", "Microservices", "SignalR", "Redis", "Angular", "EF Core", "SQL Server"],
  },
  {
    role: "Software Developer Intern",
    company: "10Pearls",
    meta: "Part-time · Hybrid",
    period: "Mar 2026 – May 2026",
    logo: "/images/company/10pearls.svg",
    logoBg: "bg-[#0b1f33]",
    summary:
      "Shipped well-tested RESTful APIs and React interfaces, with structured logging and high service-layer test coverage.",
    tech: ["ASP.NET Core", "C#", "React.js", "Serilog", "xUnit", "Moq", "SQL Server"],
  },
  {
    role: "Software Developer",
    company: "Freelance",
    meta: "Remote",
    period: "2023 – 2026",
    icon: "mdi:laptop",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    summary:
      "Delivered custom, database-driven web apps end-to-end for clients worldwide — from requirements to deployment — accelerated with AI-assisted tooling.",
    tech: ["ASP.NET Core", "C#", "JavaScript", "SQL Server", "REST APIs", "Git", "Copilot"],
  },
  {
    role: "ASP.NET Core Developer",
    company: "Stem Wizards Academia",
    meta: "Hybrid",
    period: "2023 – 2024",
    icon: "mdi:code-tags",
    iconBg: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
    summary:
      "Developed MVC web applications using clean architecture, role-based auth, and optimized data access.",
    tech: ["ASP.NET Core MVC", "C#", "EF Core", "SQL Server", "LINQ", "Repository Pattern"],
  },
];

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <HeroSub
        title="About Me"
        description="Passionate .NET Developer with a strong foundation in building scalable applications and a continuous drive to learn and grow."
        breadcrumbLinks={breadcrumbLinks}
      />
      
      <section className='bg-white dark:bg-darkmode py-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-3xl font-bold text-midnight_text dark:text-white mb-6'>
                My Journey
              </h2>
              <p className='text-grey dark:text-white/70 mb-4 leading-relaxed'>
                I'm Toheed Qureshi, a dedicated .NET Developer with a passion for creating efficient and scalable software solutions. My journey in software development has been driven by curiosity and a constant desire to improve my craft.
              </p>
              <p className='text-grey dark:text-white/70 mb-4 leading-relaxed'>
                With expertise in ASP.NET Core, Blazor, and WPF, I specialize in building enterprise-grade applications that solve real-world problems. I believe in writing clean, maintainable code and following best practices.
              </p>
            </div>
            
            <div className='bg-section dark:bg-darklight rounded-xl p-8'>
              <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-6'>
                Education
              </h3>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Icon icon='mdi:school' className='text-white' width='24' height='24' />
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-midnight_text dark:text-white'>
                    Bachelor's Degree in Software Engineering
                  </h4>
                  <p className='text-grey dark:text-white/70 text-sm mt-1'>
                    COMSATS University Islamabad | Foundation in software engineering, algorithms, and modern development practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-section dark:bg-darklight py-20'>
        <div className='container mx-auto max-w-4xl px-4'>
          <div className='text-center mb-16'>
            <span className='text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest text-sm'>
              Career Path
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mt-3'>
              Professional Experience
            </h2>
          </div>

          <div className='relative'>
            {/* timeline line */}
            <div className='absolute left-6 md:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400/40 to-transparent'></div>

            <div className='space-y-8'>
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.role}`} className='relative pl-20 md:pl-24'>
                  {/* marker */}
                  <div className='absolute left-0 top-2 flex items-center justify-center'>
                    {exp.logo ? (
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 ${exp.logoBg ?? 'bg-darkmode'} rounded-2xl flex items-center justify-center p-2 md:p-2.5 shadow-md ring-4 ring-section dark:ring-darklight`}
                      >
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={150}
                          height={47}
                          className='w-full h-auto object-contain'
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 ${exp.iconBg ?? 'bg-blue-600'} rounded-2xl flex items-center justify-center shadow-md ring-4 ring-section dark:ring-darklight`}
                      >
                        <Icon icon={exp.icon ?? 'mdi:briefcase'} className='text-white w-6 h-6 md:w-7 md:h-7' />
                      </div>
                    )}
                  </div>

                  {/* card */}
                  <div className='group bg-white dark:bg-darkmode rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-xl border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300'>
                    <div className='flex flex-wrap items-center justify-between gap-2 mb-1'>
                      <h3 className='text-lg md:text-xl font-bold text-midnight_text dark:text-white'>
                        {exp.role}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          exp.current
                            ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                        }`}
                      >
                        {exp.current && (
                          <span className='inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 align-middle animate-pulse'></span>
                        )}
                        {exp.period}
                      </span>
                    </div>
                    <p className='text-sm font-medium text-grey dark:text-white/50 mb-3'>
                      {exp.company} · {exp.meta}
                    </p>
                    <p className='text-grey dark:text-white/70 leading-relaxed mb-5'>
                      {exp.summary}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className='text-xs font-medium px-2.5 py-1 rounded-md bg-section dark:bg-darklight text-grey dark:text-white/60 border border-black/5 dark:border-white/5'
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white dark:bg-darkmode py-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='text-center max-w-3xl mx-auto'>
            <Icon icon='mdi:rocket-launch' className='text-blue-600 mx-auto mb-6' width='48' height='48' />
            <h2 className='text-3xl font-bold text-midnight_text dark:text-white mb-6'>
              Continuous Growth
            </h2>
            <p className='text-grey dark:text-white/70 text-lg leading-relaxed'>
              I'm constantly learning and exploring new technologies to stay ahead in the ever-evolving world of software development. My hunger to polish my skills drives me to take on challenging projects and embrace new frameworks and best practices. I believe that every project is an opportunity to learn something new and deliver exceptional value.
            </p>
          </div>
        </div>
      </section>

      <Counter isColorMode={true} />
      <Progresswork isColorMode={true} />
    </>
  );
};

export default page;
