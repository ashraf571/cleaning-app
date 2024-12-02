'use client'
import React from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";

const ArrowUp = () => {
    const scrollUP = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
  return (
    <div className='fixed right-7 bottom-7' onClick={scrollUP} >
        <IoIosArrowDropupCircle size={50} color='#004976' />
    </div>
  )
}

export default ArrowUp