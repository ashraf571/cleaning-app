import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";

interface BlogsBasicInfoIF {
    date: string,
    role: string
}
const BlogsBasicInfo = ({ date, role }: BlogsBasicInfoIF) => {
  return (
    <div className='flex text-sm font-medium'>
        <FaRegCalendarCheck color='#004976' size={14} />
        <span className='pl-1 pr-6'>{date}</span>
        <FaRegUser color='#004976' size={14} />
        <span className='pl-1 pr-6'>{role}</span>
        <FaRegComments color='#004976' size={14} />
        <span className='pl-1'> No comments </span>
    </div>
  )
}

export default BlogsBasicInfo