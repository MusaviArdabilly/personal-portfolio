import React from 'react'
import Image from 'next/image'

const Portfolio = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div>
      <Image 
        src="/image/project/portfolio.png"
        alt='Proj' 
        width={0} height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className='rounded-lg border border-gray-300 mb-4'
      />
      <h1 className='text-lg md:text-2xl font-bold mb-1'>Personal Portfolio</h1>
      <div className='flex flex-wrap gap-2 mb-4'>
        <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
          <Image 
            src="/image/tech/nextjs.png"
            alt='NextJS' 
            width={16} height={16}
          />
          <h2 className='text-xs font-semibold inline'>Next JS</h2>
        </div>
        <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
          <Image 
            src="/image/tech/tailwindcss.png"
            alt='NextJS' 
            width={16} height={16}
          />
          <h2 className='text-xs font-semibold inline'>Tailwind CSS</h2>
        </div>
      </div>
      <p className='mulish text-xs md:text-base font-semibold mb-4'>
        My portfolio website I've created using Next JS and Tailwind CSS. This Project showcasing a comprehensive display of my skills, projects, working experiences, and educational journey.
      </p>
    </div>
  )
}

export default Portfolio