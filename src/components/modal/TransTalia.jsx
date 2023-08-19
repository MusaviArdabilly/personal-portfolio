import React from 'react'
import Image from 'next/image'

const TransTalia = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div>
      <Image 
        src="/image/project/transtalia.png"
        alt='Proj' 
        width={0} height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className='rounded-lg border border-gray-300 mb-4'
      />
      <h1 className='text-lg md:text-2xl font-bold mb-1'>ERP Trans Talia</h1>
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
        <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
          <Image 
            src="/image/tech/mailtrap.png"
            alt='NextJS' 
            width={16} height={16}
          />
          <h2 className='text-xs font-semibold inline'>Mailtrap</h2>
        </div>
        <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
          <Image 
            src="/image/tech/mapbox.png"
            alt='NextJS' 
            width={16} height={16}
          />
          <h2 className='text-xs font-semibold inline'>Mapbox</h2>
        </div>
      </div>
      <p className='mulish text-xs md:text-base font-semibold mb-4'>
        I&apos;ve successfully developed an Enterprise Resource Planning (ERP) system tailored for Trans Talia, a prominent company specializing in bus travel rentals. This comprehensive solution not only streamlines their business operations but also enhances their customer experience. Within the ERP, I have seamlessly integrated a reservation system that empowers their clients to conveniently book their travel arrangements. This project stands as a testament to my ability to deliver impactful software solutions that cater to the specific needs of businesses, fostering efficiency and customer satisfaction.
      </p>
    </div>
  )
}

export default TransTalia