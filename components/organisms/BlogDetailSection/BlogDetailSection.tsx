import BlogsBasicInfo from "@/components/molecules/BlogsBasicInfo/BlogsBasicInfo";
import Image from "next/image";
import React from "react";

const BlogDetailSection = ({ blog }: { blog: any }) => {
  return (
    <div className=" flex flex-col w-full lg:w-[65%] gap-12 ">
      <div className=" flex flex-col w-full border-2 border-lightGray20">
        <Image
          className="w-full"
          src={blog.image}
          height={100}
          width={100}
          alt=" office floor house cleaning clean"
        />
        <div className="font-normal text-base px-5 md:px-12 py-12 flex flex-col gap-6">
          <BlogsBasicInfo date={blog.createdAt} role={blog.role} />
          <h2 className="lg:text-4xl text-3xl font-bold "> {blog.heading} </h2>
          <p> {blog.discription} </p>
          {blog.descriptionList.map((details: any, index: number) => {
            return (
              <div className="pt-1" key={index}>
                <h2 className="font-bold text-3xl "> {details.heading} </h2>
                <p> {details.description} </p>
              </div>
            );
          })}

          <p>
            {" "}
            <span className="font-semibold">{blog.noteHeading}</span>{" "}
            {blog.noteDiscription}{" "}
          </p>
          {blog.tags.length > 0 ? (
            <h2 className="font-bold lg:text-4xl text-3xl ">Post tags </h2>
          ) : (
            ""
          )}
          <div className="flex">
            {blog.tags.map((tag: string, index: number) => {
              return <span className="font-medium text-xs border-2 py-2 px-6 mr-4 rounded-full border-lightGray30" key={index}> {tag} </span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailSection;
