'use client'
import React from 'react'
import Image from 'next/image'

const techStackLogos = [
  { name: 'ASP.NET Core', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Blazor', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg' },
  { name: 'SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
]

const TechStackCarousel = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = React.useState(false)

  React.useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [isPaused])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className='bg-white dark:bg-darkmode py-16 overflow-hidden'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex gap-2 items-center justify-center mb-8'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            Tech Stack
          </span>
        </div>
        <h2 className='text-3xl font-bold text-midnight_text dark:text-white text-center mb-12'>
          Technologies I Work With
        </h2>
        
        <div className='relative'>
          <button
            onClick={() => scroll('left')}
            className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-darklight shadow-lg rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition'
            aria-label='Scroll left'>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' className='text-midnight_text dark:text-white'>
              <path d='M15 18L9 12L15 6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
          </button>
          
          <button
            onClick={() => scroll('right')}
            className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-darklight shadow-lg rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition'
            aria-label='Scroll right'>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' className='text-midnight_text dark:text-white'>
              <path d='M9 18L15 12L9 6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
          </button>

          <div 
            ref={scrollRef} 
            className='flex overflow-x-auto scrollbar-hide scroll-smooth' 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            {[...techStackLogos, ...techStackLogos].map((tech, index) => (
              <div
                key={index}
                className='flex-shrink-0 mx-8 flex flex-col items-center justify-center group'>
                <div className='w-20 h-20 flex items-center justify-center bg-gray-50 dark:bg-darklight rounded-lg p-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg'>
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className='w-full h-full object-contain'
                  />
                </div>
                <span className='mt-3 text-sm font-medium text-gray-600 dark:text-gray-400'>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default TechStackCarousel
