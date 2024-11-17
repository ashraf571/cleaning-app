import React from 'react'

interface ParagraphIF {
    paragraph: string,
    font: string
}
const Paragraph = ({ paragraph, font }: ParagraphIF) => {
  return (
    <div style={{ fontSize: font }} >{paragraph}</div>
  )
}

export default Paragraph