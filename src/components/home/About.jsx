'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '30% 0px'
  });
  return (
    <section className='min-h-screen pt-20 flex items-center' id='about'>
      <div className='container mx-auto p-5 flex flex-col justify-center'>
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
          className='text-center font-bold text-4xl mb-10 bg-gray-200c'>About Me</motion.h1>
        <div className='flex items-center grid grid-col md:grid-cols-2'>
          <motion.div
            ref={ref}
            initial={{ x: '-100%' }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 1.25 }}
            className='about-image w-full md:w-3/4 h-60 md:h-full rounded-lg drop-shadow-lg mx-auto border-l-4 border-black mb-5 md:mb-0'></motion.div>
          <div className='w-full md:w-4/5'>
            <motion.h1 
              ref={ref}
              initial={{ x: '100%' }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className='text-md md:text-2xl font-bold mb-4 poppins text-center md:text-left'>Holla!</motion.h1>
            <motion.p
              ref={ref}
              initial={{ x: '100%' }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 0.5, delay : 0.25 }}
            className='text-sm md:text-lg mb-4 mulish font-semibold'>I&apos;m a passionate and dedicated fullstack web developer. My journey in the world of web development began several years ago, and I&apos;ve been crafting digital experiences ever since.</motion.p>
            <motion.p
              ref={ref}
              initial={{ x: '100%' }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 0.5, delay : 0.5 }}
            className='text-sm md:text-lg mb-4 mulish font-semibold'>In 2023, I proudly graduated with a bachelor&apos;s degree that equipped me with a solid foundation in computer science and a deep understanding of the intricacies of web technologies. This educational journey ignited my curiosity and fueled my drive to create innovative and user-centric web solutions.</motion.p>
            <motion.p
              ref={ref}
              initial={{ x: '100%' }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 0.5, delay : 0.75 }}
            className='text-sm md:text-lg mulish font-semibold'>My expertise spans the entire spectrum of web development, from conceptualizing and designing intuitive user interfaces to architecting robust backend systems. I find joy in seamlessly blending creativity with functionality, always striving to strike the perfect balance between aesthetics and performance.</motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About