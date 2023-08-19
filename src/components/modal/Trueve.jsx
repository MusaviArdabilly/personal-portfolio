import React from 'react'
import Image from 'next/image'

const Trueve = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div>
      <Image 
        src="/image/project/trueve.png"
        alt='Proj' 
        width={0} height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className='rounded-lg border border-gray-300 mb-4'
      />
      <h1 className='text-lg md:text-2xl font-bold mb-1'>Trueve</h1>
      <div className='flex flex-wrap gap-2 mb-4'>
        <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
          <Image 
            src="/image/tech/bootstrap.png"
            alt='NextJS' 
            width={16} height={16}
          />
          <h2 className='text-xs font-semibold inline'>Bootstrap</h2>
        </div>
      </div>
      <p className='mulish text-xs md:text-base font-semibold mb-4'>
        I&apos;ve been deeply involved in transforming intricate Figma designs into functional web interfaces using a combination of HTML, CSS, and JavaScript, with the added efficiency of Bootstrap framework. Collaborating within a skilled team, I tackled this project as a freelance endeavor. My responsibilities encompassed the precise translation of design elements into responsive and interactive web components, ensuring a seamless user experience across various devices. This project underscores my ability to effectively collaborate in a team environment while delivering high-quality outcomes that align with the client&apos;s vision and project goals.
      </p>
    </div>
  )
}

export default Trueve