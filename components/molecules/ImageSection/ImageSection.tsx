import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const ImageSection = ({imageUrl}: { imageUrl: string }) => {
  return (
    <div className='w-full md:w-1/2' >
        <Image className='w-full' width={100} height={100} src={imageUrl} alt=" clean office tile window school, industrial " />
    </div>
  )
}

export default ImageSection