import React from 'react'
import { Icon } from '@iconify/react'
import { personalInfo } from '@/data/personalData'

const contactChannels = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: 'mdi:email-outline',
  },
  {
    label: 'LinkedIn',
    value: 'in/toheed-qureshi',
    href: personalInfo.linkedin,
    icon: 'mdi:linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/toheed-q',
    href: personalInfo.github,
    icon: 'mdi:github',
  },
]

const ContactForm = () => {
  return (
    <section className='dark:bg-darkmode md:pb-24 pb-16'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 gap-8 items-stretch'>
          {/* Left: form */}
          <div className='md:col-span-7'>
            <span className='text-primary dark:text-blue-400 font-semibold uppercase tracking-widest text-sm'>
              Contact
            </span>
            <h2 className='text-4xl md:text-[44px] leading-tight font-bold mt-3 mb-3 text-midnight_text dark:text-white'>
              Get In Touch
            </h2>
            <p className='text-grey dark:text-white/60 mb-9 max-w-md leading-relaxed'>
              Have a project, a role, or an idea in mind? Drop me a message and
              I&apos;ll get back to you shortly.
            </p>

            <form
              action={`mailto:${personalInfo.email}`}
              method='POST'
              encType='text/plain'
              className='space-y-5'>
              <div className='grid sm:grid-cols-2 gap-5'>
                <div>
                  <label htmlFor='name' className='pb-2 inline-block text-sm font-medium text-midnight_text dark:text-white/80'>
                    Name*
                  </label>
                  <input
                    id='name'
                    name='name'
                    required
                    type='text'
                    placeholder='Your name'
                    className='w-full text-base px-4 py-3 rounded-xl bg-section dark:bg-darklight border border-border dark:border-dark_border dark:text-white placeholder:text-grey/60 transition-all duration-300 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-0'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='pb-2 inline-block text-sm font-medium text-midnight_text dark:text-white/80'>
                    Email*
                  </label>
                  <input
                    id='email'
                    name='email'
                    required
                    type='email'
                    placeholder='you@example.com'
                    className='w-full text-base px-4 py-3 rounded-xl bg-section dark:bg-darklight border border-border dark:border-dark_border dark:text-white placeholder:text-grey/60 transition-all duration-300 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-0'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='message' className='pb-2 inline-block text-sm font-medium text-midnight_text dark:text-white/80'>
                  Message*
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  placeholder='Tell me about your project or opportunity...'
                  className='w-full text-base px-4 py-3 rounded-xl bg-section dark:bg-darklight border border-border dark:border-dark_border dark:text-white placeholder:text-grey/60 transition-all duration-300 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-0 resize-none'
                />
              </div>

              <button
                type='submit'
                className='group inline-flex items-center gap-2 bg-primary rounded-xl text-white font-medium py-3.5 px-8 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-primary/30'>
                Send Message
                <Icon
                  icon='mdi:send'
                  width='18'
                  height='18'
                  className='transition-transform duration-300 group-hover:translate-x-1'
                />
              </button>
            </form>
          </div>

          {/* Right: contact info panel */}
          <div className='md:col-span-5'>
            <div className='h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 md:p-9 shadow-2xl text-white flex flex-col justify-between'>
              <div>
                <span className='inline-flex items-center gap-2 text-sm bg-white/15 rounded-full px-3 py-1 mb-6'>
                  <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></span>
                  Available for opportunities
                </span>
                <h3 className='text-2xl md:text-3xl font-bold mb-3'>
                  Let&apos;s build something great together
                </h3>
                <p className='text-blue-100 leading-relaxed mb-8'>
                  I&apos;m always open to discussing new projects, collaborations,
                  and full-time roles. Reach out through any of these channels.
                </p>

                <div className='space-y-3'>
                  {contactChannels.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel='noopener noreferrer'
                      className='flex items-center gap-4 rounded-xl p-2 -mx-2 group transition-colors hover:bg-white/10'>
                      <span className='w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors'>
                        <Icon icon={c.icon} width='22' height='22' className='text-white' />
                      </span>
                      <div className='min-w-0'>
                        <p className='text-xs text-blue-200'>{c.label}</p>
                        <p className='font-medium truncate'>{c.value}</p>
                      </div>
                    </a>
                  ))}

                  <div className='flex items-center gap-4 p-2 -mx-2'>
                    <span className='w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0'>
                      <Icon icon='mdi:map-marker-outline' width='22' height='22' className='text-white' />
                    </span>
                    <div>
                      <p className='text-xs text-blue-200'>Location</p>
                      <p className='font-medium'>Islamabad, {personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-8 pt-6 border-t border-white/15'>
                <p className='text-blue-100 text-sm flex items-center gap-2'>
                  <Icon icon='mdi:clock-outline' width='16' height='16' />
                  Typically responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
