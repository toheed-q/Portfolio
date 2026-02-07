'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'
import { Icon } from '@iconify/react'

const PortfolioCard = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div id='portfolio' className='dark:bg-darkmode pb-16'>
      <div className='lg:px-9 m-auto px-0 max-w-[1600px] slider-container'>
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => (
            <div key={index} className={`px-3 group ${index % 2 !== 0 ? 'lg:mt-24 ' : ''}`}>
              <div className='bg-white dark:bg-darklight rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full'>
                <div className='relative overflow-hidden rounded-lg mb-6 bg-gray-100 dark:bg-darkmode'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className='object-cover w-full h-64'
                  />
                </div>
                <h4 className='text-xl font-bold text-midnight_text dark:text-white mb-2'>
                  {item.title}
                </h4>
                <p className='text-sm text-blue-600 dark:text-blue-400 font-medium mb-3'>
                  {item.info}
                </p>
                <p className='text-sm text-grey dark:text-white/70 mb-4 line-clamp-3'>
                  {item.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {item.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className='text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded'>
                      {tech}
                    </span>
                  ))}
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-primary hover:text-blue-700 font-medium'>
                    View Project <Icon icon='mdi:github' width='20' height='20' />
                  </a>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PortfolioCard
