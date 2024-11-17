import React from 'react'
import MovingImage from '@/components/atoms/MovingImage/MovingImage'

import womanCleaning from "@/assets/images/full-shot-woman-cleaning-indoors-scaled.jpg"
import peopleCleaning from "@/assets/images/full-shot-people-cleaning-building-scaled.jpg"
const AboutImagesContainer = () => {
  return (
    <div className='flex' >
        <MovingImage image={peopleCleaning.src}/>
        <MovingImage image={womanCleaning.src}/>
    </div>
  )
}

export default AboutImagesContainer