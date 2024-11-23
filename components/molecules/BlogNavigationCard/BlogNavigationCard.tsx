import BlogNavigationHeading from '@/components/atoms/BlogNavigationHeading/BlogNavigationHeading'
import BlogNavigationImage from '@/components/atoms/BlogNavigationImage/BlogNavigationImage'
import React from 'react'

interface BlogCardData {
    imageUrl: string,
    heading: string,
    date: string,
    index: number
}

const BlogNavigationCard = ({ imageUrl, heading , date, index}:BlogCardData) => {
  return (
    <div className='flex' key={index}>
        <BlogNavigationImage imageUrl={imageUrl} />
        <BlogNavigationHeading heading={heading} date={ date } />
    </div>
  )
}

export default BlogNavigationCard