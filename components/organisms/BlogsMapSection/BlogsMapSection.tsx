import BlogsBasicInfo from "@/components/molecules/BlogsBasicInfo/BlogsBasicInfo";
import Image from "next/image";
import React from "react";

const BlogsMapSection = ({ blogs }: { blogs: any }) => {
  return (
    <div className=" flex flex-col w-full lg:w-[65%] gap-12 ">
      {blogs.map((blog: any, index: number) => {
        return (
          <div key={index} className=" flex flex-col w-full border-2 border-lightGray20">
            <Image
              className="w-full"
              src={blog.image}
              height={100}
              width={100}
              alt=" office floor house cleaning clean"
            />
            <div className="px-5 md:px-12 py-12 flex flex-col gap-6" >
              <BlogsBasicInfo date={blog.createdAt} role={blog.role} />
              <h2 className="lg:text-4xl text-3xl"> {blog.heading} </h2>
              <p> {blog.discription} </p>
            </div>
          </div>
        );
      })}
      {/* <Image  */}
    </div>
  );
};

export default BlogsMapSection;
