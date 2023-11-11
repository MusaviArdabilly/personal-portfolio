'use client'
import Image from 'next/image'
import React from 'react'
import { delay, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '50% 0px'
  })
  return (
    <section className='min-h-screen pt-20 flex items-center' id='skills'>
      <div className='container mx-auto p-5'>
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 10,
            duration: 1,
            delay: 0
          }} 
          className='text-center font-bold text-4xl mb-10'>Skills</motion.h1>
        <div className='flex flex-col md:flex-row items-center md:grid md:grid-cols-4'>
          <div className='md:col-span-1 mb-4 md:mb-0 flex justify-center'>
            <motion.h1 
            ref={ref}
            initial={{ x: '-100%' }}
            animate={inView ? { x: 0 } : {}}
            transition={{ delay: 0.8 }}
            className='text-2xl font-bold poppins'>Tech Stack</motion.h1>
          </div>
          <div className='md:col-span-3'>
            <motion.div 
              ref={ref}
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.8 }}
              className='grid grid-cols-3 md:grid-cols-4 gap-8 text-xs md:text-sm shadow-lg shadow-gray-300 rounded p-5'>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/html.png"
                    alt='HTML 5'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>HTML</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Advanced</h1>
              </div>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/css.png"
                    alt='CSS 3'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>CSS</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Advanced</h1>
              </div>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/js.png"
                    alt='html 5'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>JavaScript</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Intermediate</h1>
              </div>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/bootstrap.png"
                    alt='Bootstrap 5'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>Bootstrap</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Advanced</h1>
              </div>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/tailwindcss.png"
                    alt='Tailwind CSS'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>Tailwind CSS</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Intermediate</h1>
              </div>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/laravel.png"
                    alt='Laravel'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>Laravel</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Advanced</h1>
              </div>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/lumen.png"
                    alt='Lumen'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>Lumen</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Intermediate</h1>
              </div>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/expressjs.png"
                    alt='ExpressJS'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>Express JS</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Beginer</h1>
              </div>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/nextjs.png"
                    alt='Next JS'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>Next JS</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Beginer</h1>
              </div>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/angular.png"
                    alt='Angular'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>Angular</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Beginer</h1>
              </div>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/mysql.png"
                    alt='MySQL'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>MySQL</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Intermediate</h1>
              </div>
              <div className='flex flex-col'>
                <div className='relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto'>
                  <Image 
                    src="/image/tech/mongodb.png"
                    alt='MongoDB'
                    width={36} height={36}
                    className='absolute'
                  />
                </div>
                <h1 className='mx-auto mt-4 font-bold text-center'>MongoDB</h1>
                <h1 className='mx-auto font-regular text-gray-400'>Beginer</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills