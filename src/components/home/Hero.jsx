import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-screen pt-0 md:pt-20 flex items-center' id='home'>
      <div className='container mx-auto p-5'>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
          <div>
            <h1 className='text-2xl md:text-6xl font-bold mb-4'>Musavi Ardabilly</h1>
            <h1 className='text-xs md:text-xl font-bold mulish mb-8 text-gray-400'>Weaving Dreams with Code <br /> A Full-Stack Developer&apos;s Exploration of the Digital Realm </h1> 
            <div className='flex space-x-4'>
            </div>
          </div>
          <div className='hero-image-container rounded-lg bg-white mb-10 md:mb-0'>
            <div className='hero-image rounded-lg'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero