import BlogNavigationCard from "@/components/molecules/BlogNavigationCard/BlogNavigationCard";
import React from "react";

const BlogsNavigationSection = ({ blogs }: { blogs: any }) => {
  return (
    <div className="p-8 w-2/5 border border-red-100">
      <span className="border-l-2 my-3 border-cyanblue text-xl pl-8 font-bold">
        Recent Post
      </span>
      <div className="flex flex-col gap-x-4">
        {blogs.map((blog: any, index: number) => {
          return (
            <BlogNavigationCard
              index={index}
              imageUrl={blog.image}
              heading={blog.cardHeading}
              date={blog.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogsNavigationSection;
