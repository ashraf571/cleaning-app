import BlogNavigationCard from "@/components/molecules/BlogNavigationCard/BlogNavigationCard";
import React from "react";

const BlogsNavigationSection = ({ blogs }: { blogs: any }) => {
  let cardsBlogs = blogs.reverse().slice(0, 3);
  return (
    <div className="w-full lg:w-[35%]">
      <div className="p-8 w-full border-2 border-lightGray20 shadow-md shadow-slate-600">
        <span className="border-l-2 border-cyanblue text-xl pl-8 font-bold">
          Recent Post
        </span>
        <div className="flex w-full pt-5 flex-col gap-x-4">
          {cardsBlogs.map((blog: any, index: number) => {
            return (
              <div className="flex pb-4" key={index}>
                <BlogNavigationCard
                  imageUrl={blog.cardImage}
                  heading={blog.cardHeading}
                  date={blog.createdAt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogsNavigationSection;
