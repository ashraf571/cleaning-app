import React from 'react'
import Image from 'next/image'
const BlogNavigationImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className='h-[100px] w-[100px] rounded-[50%]'>
        <Image height={100} width={100} src={imageUrl} alt=" blog clean office floor " />
    </div>
  )
}

export default BlogNavigationImage