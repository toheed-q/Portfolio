import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import TechStackCarousel from '@/components/Home/TechStack';
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Blog from '@/components/SharedComponent/Blog'
import Contactform from '@/components/Home/Contact';
export const metadata: Metadata = {
  title: "Toheed Qureshi - .NET Developer Portfolio",
  description: "Full Stack .NET Developer specializing in ASP.NET Core, Blazor, and WPF applications",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <TechStackCarousel />
      <Progresswork isColorMode={false} />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contactform />
    </main>
  )
}
