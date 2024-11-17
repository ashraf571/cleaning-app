import React from 'react'

const HeroAreaSubHeading = ( {path}: {path: string} ) => {
  return (
        <div className=' text-base ' >
            <a href='/'> Home </a> &#62;&#62; <span>{path}</span>
        </div>
  )
}

export default HeroAreaSubHeading