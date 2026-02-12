import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const ContactForm = () => {
  return (
    <>
      <section className='dark:bg-darkmode md:pb-24 pb-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-12 grid-cols-1 gap-8'>
            <div className='col-span-6'>
              <h2 className='max-w-72 text-[40px] leading-tight font-bold mb-9 text-midnight_text dark:text-white'>
                Get In Touch
              </h2>
              <form action='mailto:toheedhashmi78@gmail.com' method='POST' encType='text/plain' className='flex flex-wrap w-full m-auto justify-between'>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='first-name'
                      className='pb-3 inline-block text-base'>
                      Name*
                    </label>
                    <input
                      name='name'
                      required
                      className='w-full text-base px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                      type='text'
                    />
                  </div>
                </div>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='email'
                      className='pb-3 inline-block text-base'>
                      Email*
                    </label>
                    <input
                      name='email'
                      required
                      type='email'
                      className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <div className='mx-0 my-2.5 w-full'>
                    <label
                      htmlFor='message'
                      className='pb-3 inline-block text-base'>
                      Message*
                    </label>
                    <textarea
                      name='message'
                      required
                      rows={5}
                      className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                    />
                  </div>
                </div>
                <div className='mx-0 my-2.5 w-full'>
                  <button
                    className='bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700'
                    type='submit'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className='col-span-6'>
              <Image
                src={getImgPath('/images/contact-page/contact.jpg')}
                alt='Contact'
                width={1300}
                height={0}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                className='bg-no-repeat bg-contain'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
