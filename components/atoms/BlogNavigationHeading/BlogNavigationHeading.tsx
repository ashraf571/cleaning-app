import React from 'react'

const BlogNavigationHeading = ( { heading, date }: { heading: string, date: string } ) => {
  return (
    <div className='' >
        <h2 className='text-lg font-bold' >{heading}</h2>
        <p className='text-xs font-medium text-lightGray20'>{date}</p>
    </div>
  )
}

export default BlogNavigationHeading