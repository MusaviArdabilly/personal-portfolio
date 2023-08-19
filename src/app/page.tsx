'use client'
import { Fragment, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experiences from '../components/Experiences'
import ModalProject from '../components/ModalProject'
import Educations from '../components/Educations'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
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

  return (
    <Fragment>
      <div className='relative'>
        <Navbar />
        <div className='content-container mx-auto'>
          <Hero />
          <About />
          <Experiences />
          <Skills />
          <Projects openModal={openModal}/>
          <ModalProject isVisible={isModalVisible} onClose={closeModal} modalType={modalType} />
          <Educations />
          <Contact />
          {/* <Footer /> */}
        </div>
      </div>
    </Fragment>
  )
}
