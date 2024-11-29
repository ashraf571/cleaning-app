'use client'
import BlogsBasicInfo from "@/components/molecules/BlogsBasicInfo/BlogsBasicInfo";
import Image from "next/image";
import React from "react";

interface BlogsData {
  blogId: number,
  heading: string,
  auther: string,
  createdAt: string,
  role: string,
  discription: string,
  image: string,
  numberOfComments: number,
}


const BlogsMapSection = ({ blogs , onSelectblog}: { blogs: BlogsData[], onSelectblog: (id: number) => void  }) => {
  return (
    <div className=" flex flex-col w-full lg:w-[65%] gap-12 ">
      {blogs.map((blog: BlogsData, index: number) => {
        return (
          <div key={index} className=" flex flex-col w-full border-2 border-lightGray20">
            <Image
              onClick={() => onSelectblog(blog.blogId)}
              className="w-full cursor-pointer"
              src={blog.image}
              height={100}
              width={100}
              alt=" office floor house cleaning clean"
            />
            <div className="px-5 md:px-12 py-12 flex flex-col gap-6" >
              <BlogsBasicInfo date={blog.createdAt} role={blog.role} />
              <h2 onClick={() => onSelectblog(blog.blogId)} className=" font-bold lg:text-4xl text-3xl cursor-pointer"> {blog.heading} </h2>
              <p className="text-base font-normal"> {blog.discription} </p>
            </div>
          </div>
        );
      })}
      {/* <Image  */}
    </div>
  );
};



export default BlogsMapSection;
