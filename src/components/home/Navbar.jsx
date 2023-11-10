'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [scrollShadow, setScrollShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollShadow(true);
      } else {
        setScrollShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  const navbarClasses = `hidden md:flex items-center h-20 fixed top-0 left-0 right-0 bg-white z-10 ${
    scrollShadow ? 'shadow' : ''
  }`;

  return (
    <nav className={navbarClasses}>
      <div className='container mx-auto flex justify-center '>
        {/* <div className='flex items-center justify-center rounded-full bg-neutral-100 w-10 h-10 transition duration-500 hover:scale-125'>
          <embed src="/icon/mlogo.svg" type="" className='w-6 h-6' />
        </div> */}
        <ul className='flex space-x-6 font-bold'>
          <li className='flex items-center hover:border-b-4'>
            <a href="#home" className=''>Home</a>
          </li>
          <li className='flex items-center hover:border-b-4'>
            <a href="#about" className=''>About</a>
          </li>
          <li className='flex items-center hover:border-b-4'>
            <a href="#experiences" className=''>Experiences</a>
          </li>
          <li className='flex items-center hover:border-b-4'>
            <a href="#skills" className=''>Skills</a>
          </li>
          <li className='flex items-center hover:border-b-4'>
            <a href="#projects" className=''>Projects</a>
          </li>
          <li className='flex items-center hover:border-b-4'>
            <a href="#educations" className=''>Educations</a>
          </li>
          <li className='flex items-center hover:border-b-4'>
            <a href="#contact" className=''>Contact</a>
          </li>
        </ul>
        {/* <div className='flex items-center justify-center rounded-full bg-neutral-100 w-10 h-10 transition duration-500 hover:rotate-[-17deg] hover:scale-125'>
          <FontAwesomeIcon icon={ faMoon } height={16} width={16}/>
        </div> */}

      </div>
      
    </nav>
  )
}

export default Navbar