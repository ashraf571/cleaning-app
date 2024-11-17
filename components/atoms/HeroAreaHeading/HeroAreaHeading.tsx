import React from 'react'

const HeroAreaHeading = ( { heading }: {heading: string} ) => {
  return (
    <p className='max-md:text-5xl max-xl:text-6xl text-6xl '>{heading}</p>
  )
}

export default HeroAreaHeading