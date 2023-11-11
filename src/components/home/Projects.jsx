'use client'
import {React, useState} from 'react'
import Image from 'next/image'
import ModalProject from './ModalProject'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  
  console.log(modalType);
  
  const openModal = (type) => {
    setIsModalVisible(true);
    setModalType(type);
  };
  
  const closeModal = () => {
    setIsModalVisible(false);
    setModalType('');
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '50% 0px'
  });

  return (
    <>
      <div className='min-h-screen pt-20 flex items-center' id='projects'>
        <div className='container md:mx-auto p-5'>
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
          className='text-center font-bold text-4xl mb-10'>Projects</motion.h1>
          <div className='flex items-center grid grid-col md:grid-cols-2 gap-8'>
            <motion.div 
              ref={ref}
              initial={{ x: '-100%' }}
              animate={inView ? { x: 0 } : {}}
              transition={{ delay: 0, duration: 0.8 }}
              className='shadow-lg shadow-gray-300 rounded p-5'>
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
              <p className='line-clamp-3 mulish text-xs md:text-base font-semibold mb-4'>
                My portfolio website I&apos;ve created using Next JS and Tailwind CSS. This Project showcasing a comprehensive display of my skills, projects, working experiences, and educational journey.
              </p>
              <button className='text-xs md:text-base font-semibold py-1 px-2 border border-black rounded-md float-right hover:text-white hover:bg-black' onClick={() => openModal('portfolio')}>Detail</button>
            </motion.div>
            <motion.div 
              ref={ref}
              initial={{ x: '100%' }}
              animate={inView ? { x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='shadow-lg shadow-gray-300 rounded p-5'>
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
              <p className='line-clamp-3 mulish text-xs md:text-base font-semibold mb-4'>
                I&apos;ve successfully developed an Enterprise Resource Planning (ERP) system tailored for Trans Talia, a prominent company specializing in bus travel rentals. This comprehensive solution not only streamlines their business operations but also enhances their customer experience. Within the ERP, I have seamlessly integrated a reservation system that empowers their clients to conveniently book their travel arrangements. This project stands as a testament to my ability to deliver impactful software solutions that cater to the specific needs of businesses, fostering efficiency and customer satisfaction.
              </p>
              <button className='text-xs md:text-base font-semibold py-1 px-2 border border-black rounded-md float-right hover:text-white hover:bg-black' onClick={() => openModal('transtalia')}>Detail</button>
            </motion.div>
            <motion.div 
              ref={ref}
              initial={{ x: '-100%' }}
              animate={inView ? { x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='shadow-lg shadow-gray-300 rounded p-5'>
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
              <p className='line-clamp-3 mb-4 text-xs md:text-base font-semibold mulish'>
              In this project, I&apos;ve designed and developed a dynamic website catering to rental agents in the automotive industry. This platform empowers rental agents to effectively showcase their available vehicles for rent, acting as a promotional hub to attract potential customers. With user-friendliness in mind, I&apos;ve incorporated a seamless search feature that allows users to effortlessly locate rental options based on their desired location. Through this project, I&apos;ve demonstrated my proficiency in creating user-centric digital solutions that bridge the gap between rental agents and customers, facilitating a streamlined and convenient experience for both parties.
              </p>
              <button className='text-xs md:text-base font-semibold py-1 px-2 border border-black rounded-md float-right hover:text-white hover:bg-black' onClick={() => openModal('rentalku')}>Detail</button>
            </motion.div>
            <motion.div 
              ref={ref}
              initial={{ x: '100%' }}
              animate={inView ? { x: 0 } : {}}
              transition={{ delay: 0, duration: 0.8 }}
              className='shadow-lg shadow-gray-300 rounded p-5'>
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
              <p className='line-clamp-3 mulish text-xs md:text-base font-semibold mb-4'>
                I&apos;ve been deeply involved in transforming intricate Figma designs into functional web interfaces using a combination of HTML, CSS, and JavaScript, with the added efficiency of Bootstrap framework. Collaborating within a skilled team, I tackled this project as a freelance endeavor. My responsibilities encompassed the precise translation of design elements into responsive and interactive web components, ensuring a seamless user experience across various devices. This project underscores my ability to effectively collaborate in a team environment while delivering high-quality outcomes that align with the client&apos;s vision and project goals.
              </p>
              <button className='text-xs md:text-base font-semibold py-1 px-2 border border-black rounded-md float-right hover:text-white hover:bg-black' onClick={() => openModal('trueve')}>Detail</button>
            </motion.div>
          </div>
        </div>
      </div>
      <ModalProject isVisible={isModalVisible} onClose={closeModal} modalType={modalType} />
    </>
  )
}

export default Projects