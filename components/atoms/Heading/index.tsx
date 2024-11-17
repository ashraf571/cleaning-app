import React from 'react'

interface HeadingIF {
    font: string,
    heading: string
}
const Heading = ({ font, heading }: HeadingIF) => {
  return (
    <div style={{ fontSize: font }}>{heading}</div>
  )
}

export default Heading