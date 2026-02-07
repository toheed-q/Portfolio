import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>
          <div className='md:col-span-6 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0 '>
            <div className='sm:content-normal sm:text-start text-center content-center sm:w-auto w-full'>
              <Link href='/' className='md:block flex justify-center text-2xl font-bold text-white'>
                Toheed Qureshi
              </Link>
              <h2 className='text-white py-10 text-[40px] leading-tight font-bold'>
                Ready to get started?
              </h2>
              <Link
                href='#services'
                className='px-9 py-3 rounded-lg bg-primary text-white hover:bg-blue-700 hover:shadow-none'>
                View My Work
              </Link>
            </div>
          </div>
          <div className='md:col-span-6 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-10 justify-center shrink-0 border-b sm:border-b-0 border-solid border-dark_border'>
            <div className='flex flex-col md:items-start items-center'>
              <span className='text-lg font-bold text-white pb-4 inline-block'>
                Support
              </span>
              <div className='sm:block flex items-center gap-3 mb-5'>
                <p className='text-base font-bold text-white'>Phone</p>
                <Link
                  href='https://wa.me/923417774555'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xl text-white/50 hover:text-white'>
                  +92 341 7774555
                </Link>
              </div>
              <div className='sm:block flex items-center gap-3 mb-5'>
                <p className='text-base font-bold text-white'>Email</p>
                <Link
                  href='mailto:toheedhashmi78@gmail.com'
                  className='text-xl text-white/50 hover:text-white'>
                  toheedhashmi78@gmail.com
                </Link>
              </div>
              <div>
                <ul className='flex items-center gap-3 mt-[1.875rem]'>
                  <li className='group'>
                    <Link href='https://github.com/toheed-q' target='_blank' rel='noopener noreferrer'>
                      <svg width='25' height='25' viewBox='0 0 25 25' fill='#A3BBD1' xmlns='http://www.w3.org/2000/svg' className='group-hover:fill-primary'>
                        <path d='M12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.0234 3.58056 22.7051 8.54688 24.3604C9.17188 24.4727 9.40625 24.0869 9.40625 23.7549C9.40625 23.4551 9.39453 22.4951 9.38965 21.4795C5.91016 22.2314 5.17969 19.8926 5.17969 19.8926C4.61328 18.4326 3.79688 18.0479 3.79688 18.0479C2.67188 17.2764 3.88281 17.292 3.88281 17.292C5.12891 17.3799 5.78516 18.5742 5.78516 18.5742C6.89062 20.4883 8.71875 19.9414 9.42969 19.6191C9.54102 18.8135 9.85547 18.2666 10.2051 17.9512C7.43164 17.6318 4.51953 16.5596 4.51953 11.7969C4.51953 10.4346 5.00391 9.32031 5.80859 8.44531C5.68164 8.12695 5.26367 6.86328 5.92969 5.15234C5.92969 5.15234 6.97266 4.81641 9.375 6.42188C10.375 6.14062 11.4414 6 12.5 5.99512C13.5586 6 14.625 6.14062 15.625 6.42188C18.0273 4.81641 19.0703 5.15234 19.0703 5.15234C19.7363 6.86328 19.3184 8.12695 19.1914 8.44531C19.9961 9.32031 20.4805 10.4346 20.4805 11.7969C20.4805 16.5703 17.5635 17.6279 14.7852 17.9395C15.2148 18.3203 15.6094 19.0771 15.6094 20.2305C15.6094 21.8896 15.5957 23.2275 15.5957 23.7549C15.5957 24.0889 15.8281 24.4766 16.4609 24.3594C21.4238 22.7031 25 18.0225 25 12.5C25 5.59644 19.4036 0 12.5 0Z'/>
                      </svg>
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://www.linkedin.com/in/toheed-qureshi-dotnet-developer/' target='_blank' rel='noopener noreferrer'>
                      <svg
                        width='22'
                        height='23'
                        viewBox='0 0 22 23'
                        fill='#A3BBD1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='group-hover:fill-primary'>
                        <g clipPath='url(#clip0_1_347)'>
                          <path d='M20.4133 0H1.58665C0.710327 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.710327 23 1.58665 23H20.4133C21.2897 23 22 22.2574 22 21.3412V1.65878C22 0.742615 21.2897 0 20.4133 0ZM7.80353 17.3848H5.12453V8.95858H7.80353V17.3848ZM6.46411 7.80798H6.44666C5.54767 7.80798 4.96625 7.161 4.96625 6.35241C4.96625 5.52557 5.56546 4.89648 6.4819 4.89648C7.39835 4.89648 7.96231 5.52557 7.97977 6.35241C7.97977 7.161 7.39835 7.80798 6.46411 7.80798ZM17.4634 17.3848H14.7848V12.877C14.7848 11.7441 14.3969 10.9715 13.4276 10.9715C12.6875 10.9715 12.2468 11.4926 12.0531 11.9957C11.9822 12.1758 11.965 12.4274 11.965 12.6792V17.3848H9.28612C9.28612 17.3848 9.3212 9.7491 9.28612 8.95858H11.965V10.1516C12.321 9.57748 12.9579 8.76082 14.3793 8.76082C16.1418 8.76082 17.4634 9.96511 17.4634 12.5532V17.3848Z' />
                        </g>
                        <defs>
                          <clipPath id='clip0_1_347'>
                            <rect width='22' height='23' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-dark_border'>
        <div>
          <ul className='flex justify-center mb-4 items-center sm:gap-7 gap-3'>
            <li className='text-base text-white/50'>
              <Link href='/#about' className='hover:text-primary'>
                About
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/#services' className='hover:text-primary'>
                Services
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/portfolio' className='hover:text-primary'>
                Portfolio
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/contact' className='hover:text-primary'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-base text-white/50'>
            © 2024 Toheed Qureshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
