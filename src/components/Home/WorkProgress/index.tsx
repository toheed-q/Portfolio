'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Progress as ProgressData } from '@/app/api/data' // Assuming Progress is correctly imported
import { getImgPath } from '@/utils/image'


// Define the interface for ProgressItem
interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([]) // Initialize with ProgressItem[]
  useEffect(() => {
    // Fetch progress data or use static data (Progress array)
    setProgressValues(ProgressData)
  }, [])

  return (
    <section
      className={`scroll-mt-25 ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}
      id='about'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 items-center gap-7'>
          <div className='md:col-span-6'>
            <div className='bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-2xl'>
              <div className='text-white space-y-6'>
                <div className='flex items-center gap-3 mb-8'>
                  <div className='w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center'>
                    <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z'/>
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold'>Toheed Qureshi</h3>
                    <p className='text-blue-200 text-sm'>.NET Developer</p>
                  </div>
                </div>
                
                <div className='space-y-4'>
                  <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                    <p className='text-blue-200 text-sm mb-1'>Experience</p>
                    <p className='text-2xl font-bold'>3+ Years</p>
                  </div>
                  
                  <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                    <p className='text-blue-200 text-sm mb-1'>Projects Completed</p>
                    <p className='text-2xl font-bold'>25+</p>
                  </div>
                  
                  <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                    <p className='text-blue-200 text-sm mb-1'>Specialization</p>
                    <p className='text-lg font-semibold'>ASP.NET Core • Blazor • WPF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='md:col-span-6'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                my skills
              </span>
            </div>
            <h2 className='pt-9 pb-8 text-midnight_text font-bold dark:text-white text-4xl'>
              Technical Skills & Expertise
            </h2>
            <p className='text-gray dark:text-white/70 text-base font-semibold'>
              Proficient in modern .NET technologies with hands-on experience in building enterprise applications, desktop software, and cross-platform solutions.
            </p>

            <div className='block mx-auto pt-12'>
              {progressValues.map((item, index) => (
                <div
                  key={index}
                  className='progress_bar_item flex flex-wrap mb-8'>
                  <div className='flex-1 w-auto text-sm font-normal text-grey mb-2 dark:text-white/50'>
                    {item.title}
                  </div>
                  <div className='item_value shrink text-sm font-normal text-grey mb-2 dark:text-white/50'>
                    {item.Progress}%
                  </div>
                  <div className='relative h-1 w-full bg-primary/30 rounded-md'>
                    <div
                      className='progress absolute left-0 top-0 bottom-0 h-full bg-primary rounded-md duration-100 ease-in-out'
                      style={{ width: `${item.Progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
