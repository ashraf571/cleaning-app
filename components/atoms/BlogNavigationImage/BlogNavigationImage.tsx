import React from 'react'
import Image from 'next/image'
const BlogNavigationImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className=' w-[100px] max-lg:mb-3 pr-3'>
        <Image className='rounded-full h-full w-full ' height={100} width={100} src={imageUrl} alt=" blog clean office floor " />
    </div>
  )
}

export default BlogNavigationImage