'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Educations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })
  return (
    <section className='min-h-screen pt-20 flex items-center' id='educations'>
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
          className='text-center font-bold text-4xl mb-10'>Educations</motion.h1>
        <div className='flex justify-center'>
          <div className='grid gap-5 sm:w-screen md:w-3/6 border-l-2 border-black pl-4'>
            <motion.div 
              ref={ref}
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0}}
              className='p-4 relative rounded shadow-lg shadow-gray-300 hover:shadow'>
              <div className='absolute top-1/2 transform-translate-y-1/2 -mx-10'>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='text-md md:text-xl font-bold'>Brawijaya University</h1>
                <h2 className='text-xs md:text-sm text-right'>Malang, Indonesia</h2>
              </div>
              <h2 className='text-xs md:text-sm text-gray-600 mb-4'>S1 (Bachelor Degree) - Information Technology</h2>
              <ul className='list-disc mulish text-xs md:text-sm font-semibold pl-5 mb-4'>
                <li>Graduated with Honor - GPA: 3.71/4.0</li>
              </ul>
              <div className='flex justify-end items-center text-xs text-gray-400'>
                <FontAwesomeIcon icon={faCalendar} className=''/>
                <h3 className='inline ml-2'>August 2021 - July 2023 </h3>
              </div>
            </motion.div>
            <motion.div 
              ref={ref}
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.4}}
              className='p-4 relative rounded shadow-lg shadow-gray-300 hover:shadow'>
              <div className='absolute top-1/2 transform-translate-y-1/2 -mx-10'>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='text-md md:text-xl font-bold'>Brawijaya University</h1>
                <h2 className='text-xs md:text-sm text-right'>Malang, Indonesia</h2>
              </div>
              <h2 className='text-xs md:text-sm text-gray-600 mb-4'>D3 (Associate Degree) - Information Technology</h2>
              <ul className='list-disc mulish text-xs md:text-sm font-semibold pl-5 mb-4'>
                <li>Graduated with Honor - GPA: 3.76/4.0</li>
              </ul>
              <div className='flex justify-end items-center text-xs text-gray-400'>
                <FontAwesomeIcon icon={faCalendar} className=''/>
                <h3 className='inline ml-2'>August 2018 - July 2021</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Educations