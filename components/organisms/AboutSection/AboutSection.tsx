import React from 'react'
import AboutImagesContainer from '@/components/molecules/AboutImagesContainer/AboutImagesContainer'
import AboutContentContainer from '@/components/molecules/AboutContentContainer/AboutContentContainer'
const AboutSection = () => {
  return (
    <div className='flex '>
        <AboutImagesContainer />
        <AboutContentContainer />
    </div>
  )
}

export default AboutSection