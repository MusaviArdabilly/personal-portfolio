import React from 'react'

const About = () => {
  return (
    <section className='min-h-screen pt-20 flex items-center' id='about'>
      <div className='container mx-auto p-5 flex flex-col justify-center'>
        <h1 className='text-center font-bold text-4xl mb-10 bg-gray-200c'>About Me</h1>
        <div className='flex items-center grid grid-col md:grid-cols-2'>
          <div className='about-image w-full md:w-3/4 h-60 md:h-full rounded-lg drop-shadow-lg mx-auto border-l-4 border-black mb-5 md:mb-0'></div>
          <div className='w-full md:w-4/5'>
            <h1 className='text-md md:text-2xl font-bold mb-4 poppins text-center md:text-left'>Holla!</h1>
            <p className='text-sm md:text-lg mb-4 mulish font-semibold'>I&apos;m a passionate and dedicated fullstack web developer. My journey in the world of web development began several years ago, and I&apos;ve been crafting digital experiences ever since.</p>
            <p className='text-sm md:text-lg mb-4 mulish font-semibold'>In 2023, I proudly graduated with a bachelor&apos;s degree that equipped me with a solid foundation in computer science and a deep understanding of the intricacies of web technologies. This educational journey ignited my curiosity and fueled my drive to create innovative and user-centric web solutions.</p>
            <p className='text-sm md:text-lg mulish font-semibold'>My expertise spans the entire spectrum of web development, from conceptualizing and designing intuitive user interfaces to architecting robust backend systems. I find joy in seamlessly blending creativity with functionality, always striving to strike the perfect balance between aesthetics and performance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About