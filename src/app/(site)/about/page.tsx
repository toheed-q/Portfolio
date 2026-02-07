
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import { Icon } from '@iconify/react';

export const metadata: Metadata = {
    title: "About Me | Toheed Qureshi",
};

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

      <section className='bg-section dark:bg-darklight py-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <h2 className='text-3xl font-bold text-midnight_text dark:text-white mb-12 text-center'>
            Professional Experience
          </h2>
          
          <div className='space-y-8'>
            <div className='bg-white dark:bg-darkmode rounded-xl p-8 shadow-lg'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Icon icon='mdi:briefcase' className='text-white' width='24' height='24' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                    Freelance .NET Developer
                  </h3>
                  <p className='text-blue-600 dark:text-blue-400 font-medium mb-2'>Fiverr | 2+ Years</p>
                  <p className='text-grey dark:text-white/70 leading-relaxed'>
                    Successfully delivered 25+ projects for clients worldwide, specializing in ASP.NET Core, Blazor, and WPF applications. Built custom solutions ranging from e-commerce platforms to enterprise management systems, maintaining a 100% client satisfaction rate.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white dark:bg-darkmode rounded-xl p-8 shadow-lg'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Icon icon='mdi:code-tags' className='text-white' width='24' height='24' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                    Front-End Developer
                  </h3>
                  <p className='text-blue-600 dark:text-blue-400 font-medium mb-2'>Stem Wizards Academia | Internship</p>
                  <p className='text-grey dark:text-white/70 leading-relaxed'>
                    Worked on UI development and testing, contributing to the creation of responsive and user-friendly interfaces. Collaborated with the development team to ensure quality assurance and optimal user experience across web applications.
                  </p>
                </div>
              </div>
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
