import React from 'react'
import Image from 'next/image'

const Rentalku = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div>
      <Image 
        src="/image/project/rentalku.png"
        alt='Proj' 
        width={0} height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className='rounded-lg border border-gray-300 mb-4'
      />
      <h1 className='text-lg md:text-2xl font-bold mb-1'>Rentalku</h1>
      <div className='flex flex-wrap gap-2 mb-4'>
        <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
          <Image 
            src="/image/tech/laravel.png"
            alt='NextJS' 
            width={16} height={16}
          />
          <h2 className='text-xs font-semibold inline'>Laravel</h2>
        </div>
        <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
          <Image 
            src="/image/tech/bootstrap.png"
            alt='NextJS' 
            width={16} height={16}
          />
          <h2 className='text-xs font-semibold inline'>Bootstrap</h2>
        </div>
        <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
          <Image 
            src="/image/tech/mysql.png"
            alt='NextJS' 
            width={16} height={16}
          />
          <h2 className='text-xs font-semibold inline'>MySQL</h2>
        </div>
      </div>
      <p className='mulish text-xs md:text-base font-semibold mb-4'>
        In this project, I&apos;ve designed and developed a dynamic website catering to rental agents in the automotive industry. This platform empowers rental agents to effectively showcase their available vehicles for rent, acting as a promotional hub to attract potential customers. With user-friendliness in mind, I've incorporated a seamless search feature that allows users to effortlessly locate rental options based on their desired location. Through this project, I've demonstrated my proficiency in creating user-centric digital solutions that bridge the gap between rental agents and customers, facilitating a streamlined and convenient experience for both parties.
      </p>
    </div>
  )
}

export default Rentalku