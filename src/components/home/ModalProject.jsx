import React from 'react'
import PorftolioModal from './modal/Portfolio.jsx'
import TransTaliaModal from './modal/TransTalia.jsx'
import RentalkuModal from './modal/Rentalku.jsx'
import TrueveModal from './modal/Trueve.jsx'

const ModalProject = ({ isVisible, onClose, modalType }) => {
  if( !isVisible ) return null;

  return (
    <div className='flex justify-center items-center fixed p-5 inset-0 z-20 backdrop-blur-lg backdrop-brightness-50'>
      <div className='w-screen md:w-3/6 h-fit rounded p-5'>
        <div className='shadow-lg bg-white rounded p-5'>
          {modalType === 'portfolio' && <PorftolioModal isVisible={isVisible}/> }
          {modalType === 'transtalia' && <TransTaliaModal isVisible={isVisible}/> }
          {modalType === 'rentalku' && <RentalkuModal isVisible={isVisible}/> }
          {modalType === 'trueve' && <TrueveModal isVisible={isVisible}/> }
          <div className='flex justify-end'>
            <button className='text-xs md:text-base font-semibold py-1 px-2 border border-black rounded-md hover:text-white hover:bg-black' onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalProject