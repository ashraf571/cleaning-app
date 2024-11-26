import React from 'react'

const Paragraph16 = ({paragraph, key}: {paragraph: string, key: number}) => {
  return (
    <p key={key} className='text-base text-secondryGray font-normal' > { paragraph } </p>
  )
}

export default Paragraph16