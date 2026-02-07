'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const testimonials = [
  {
    id: 1,
    name: 'Nazir Ahmad',
    role: 'Owner',
    company: 'Hashmi Traders',
    project: 'Distribution Management System (DMS)',
    technology: 'WPF',
    rating: 5,
    image: '/images/testimonial/client-1.jpg',
    feedback: 'The Distribution Management System developed by Toheed has completely transformed our operations. The WPF application is incredibly fast, intuitive, and handles our complex inventory tracking seamlessly. The MVVM architecture makes it easy to maintain and extend. Highly recommended!'
  },
  {
    id: 2,
    name: 'Ayesha Irshad',
    role: 'CEO',
    company: 'BookLovers Inc.',
    project: 'FableNest Online Book E-Commerce Store',
    technology: 'ASP.NET Core',
    rating: 5,
    image: '/images/testimonial/client-2.jpg',
    feedback: 'FableNest exceeded all our expectations! The ASP.NET Core platform is robust, secure, and scales beautifully. The clean architecture and modern UI/UX have significantly improved our customer engagement. Sales have increased by 40% since launch. Outstanding work!'
  },
  {
    id: 3,
    name: 'Ahmed Malik',
    role: 'Hall Owner',
    company: 'Grand Events Hall',
    project: 'HallMasterPro',
    technology: 'Blazor',
    rating: 5,
    image: '/images/testimonial/client-3.jpg',
    feedback: 'This app has made my life so much easier! Before HallMasterPro, I was juggling notebooks, Excel sheets, and phone calls all day. Now everything is in one place - bookings, payments, events, even tracking how much money comes in and goes out. It\'s simple to use and saves me hours every week. Best decision I made for my business!'
  },
  {
    id: 4,
    name: 'Nazir Ahmad',
    role: 'Owner',
    company: 'Hashmi Traders',
    project: 'Distribution Management System (DMS)',
    technology: 'WPF',
    rating: 5,
    image: '/images/testimonial/client-4.jpg',
    feedback: 'Working with Toheed on our DMS was a game-changer. The desktop application is powerful, responsive, and perfectly tailored to our workflow. The real-time data synchronization and reporting features have saved us countless hours. Professional delivery and excellent support!'
  },
  {
    id: 5,
    name: 'Ayesha Irshad',
    role: 'CEO',
    company: 'BookLovers Inc.',
    project: 'FableNest Online Book E-Commerce Store',
    technology: 'ASP.NET Core',
    rating: 5,
    image: '/images/testimonial/client-5.jpg',
    feedback: 'The FableNest platform is exactly what we needed. The performance is exceptional, the admin panel is comprehensive, and the customer experience is smooth. Toheed\'s expertise in ASP.NET Core and attention to detail really shows. A true professional!'
  }
]

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight border-none py-20'
      id='testimonials'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex gap-2 items-center justify-center mb-8'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            client testimonials
          </span>
        </div>
        <h2 className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white text-center mb-4'>
          What Clients Say About My Work
        </h2>
        <p className='text-center text-grey dark:text-white/70 mb-16 max-w-2xl mx-auto'>
          Real feedback from clients who trusted me with their projects
        </p>

        <div className='relative max-w-4xl mx-auto'>
          <div className='bg-white dark:bg-darkmode rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500'>
            <div className='flex items-center gap-2 mb-6'>
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Icon
                  key={i}
                  icon='mdi:star'
                  className='text-yellow-400'
                  width='24'
                  height='24'
                />
              ))}
            </div>

            <p className='text-lg md:text-xl text-midnight_text dark:text-white/90 mb-8 leading-relaxed italic'>
              "{currentTestimonial.feedback}"
            </p>

            <div className='flex items-center justify-between flex-wrap gap-6'>
              <div className='flex items-center gap-4'>
                <div className='w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold'>
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className='text-lg font-bold text-midnight_text dark:text-white'>
                    {currentTestimonial.name}
                  </h4>
                  <p className='text-sm text-grey dark:text-white/60'>
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </p>
                </div>
              </div>

              <div className='text-right'>
                <p className='text-sm font-semibold text-blue-600 dark:text-blue-400'>
                  {currentTestimonial.project}
                </p>
                <p className='text-xs text-grey dark:text-white/50 mt-1'>
                  Built with {currentTestimonial.technology}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white dark:bg-darkmode shadow-lg rounded-full p-3 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300'
            aria-label='Previous testimonial'>
            <Icon icon='mdi:chevron-left' width='24' height='24' />
          </button>

          <button
            onClick={nextTestimonial}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white dark:bg-darkmode shadow-lg rounded-full p-3 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300'
            aria-label='Next testimonial'>
            <Icon icon='mdi:chevron-right' width='24' height='24' />
          </button>
        </div>

        <div className='flex justify-center gap-2 mt-8'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-blue-600'
                  : 'w-2 bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
