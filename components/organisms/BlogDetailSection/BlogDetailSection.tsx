import BlogsBasicInfo from "@/components/molecules/BlogsBasicInfo/BlogsBasicInfo";
import Image from "next/image";
import React from "react";

interface BlogsData {
  blogId: number;
  heading: string;
  auther: string;
  createdAt: string;
  role: string;
  discription: string;
  image: string;
  numberOfComments: number;
  noteHeading: string;
  noteDiscription: string;
  descriptionList: DescriptionListIF[];
  tags: string[];
}

interface DescriptionListIF {
  heading: string;
  description: string;
}

const BlogDetailSection = ({ blog }: { blog: BlogsData }) => {
  return (
    <div className=" flex flex-col w-full lg:w-[65%] gap-12 ">
      <div className=" flex flex-col w-full">
        <Image
          className="w-full"
          src={blog.image}
          height={100}
          width={100}
          alt=" office floor house cleaning clean"
        />
        <div className="font-normal text-base py-12 flex flex-col gap-6 ">
          <BlogsBasicInfo date={blog.createdAt} role={blog.role} />
          <h2 className="lg:text-4xl text-3xl font-bold "> {blog.heading} </h2>
          <p> {blog.discription} </p>
          {blog.descriptionList.map(
            (details: DescriptionListIF, index: number) => {
              return (
                <div className="pt-1" key={index}>
                  <h2 className="font-bold text-3xl "> {details.heading} </h2>
                  <p> {details.description} </p>
                </div>
              );
            }
          )}

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
          <div className="flex ">
            {blog.tags.map((tag: string, index: number) => {
              return (
                <span
                  className="font-medium text-xs border-2 py-2 px-6 mr-4 rounded-full border-lightGray30 "
                  key={index}
                >
                  {" "}
                  {tag}{" "}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailSection;
