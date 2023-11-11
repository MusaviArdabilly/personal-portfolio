'use client'
import React from 'react'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className='min-h-screen pt-0 md:pt-20 flex items-center' id='home'>
      <div className='container mx-auto p-5'>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
          <div>
            <motion.h1
              initial={{ x: '-100%', scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className='text-2xl md:text-6xl font-bold mb-4'>Musavi Ardabilly</motion.h1>
            <motion.h1 
              initial={{ y: '100%', scale: 0 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='text-xs md:text-xl font-bold mulish mb-8 text-gray-400'>Weaving Dreams with Code <br /> A Full-Stack Developer&apos;s Exploration of the Digital Realm </motion.h1> 
            <div className='flex space-x-4'>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, borderRadius: '400%' }} 
            animate={{ opacity: 1, borderRadius: '12px' }}
            transition={{ duration: 1, delay: 0 }}
            className='hero-image-container rounded-lg bg-white mb-10 md:mb-0'>
            <div className='hero-image rounded-lg'></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero