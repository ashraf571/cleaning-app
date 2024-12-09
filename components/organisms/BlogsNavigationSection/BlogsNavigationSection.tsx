"use client";

import BlogNavigationCard from "@/components/molecules/BlogNavigationCard/BlogNavigationCard";
import React from "react";

import cardCleanerLivingRoom from "@/assets/images/blogs/card-cleanerLivingRoom.jpg";
import cardCareCleaning from "@/assets/images/blogs/card-careCleaning.jpg";
import cardMediumPeople from "@/assets/images/blogs/card-mediumPeople.jpg";

interface BlogsData {
  blogId: number;
  cardHeading: string;
  createdAt: string;
  cardImage: string;
}

const BlogsNavigationSection = ({
  onSelectblog,
}: {
  onSelectblog: (id: number) => void;
}) => {
  return (
    <div className="w-full lg:w-[35%] ">
      <div
        className="p-8 w-full border-2 border-lightGray20 "
        style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
      >
        <span className="border-l-2 border-cyanblue text-xl pl-8 font-bold">
          Recent Post
        </span>
        <div className="flex w-full pt-5 flex-col gap-x-4">
          {blogsData.map((blog: BlogsData, index: number) => {
            return (
              <div
                className="flex pb-4 cursor-pointer"
                key={index}
                onClick={() => onSelectblog(blog.blogId)}
              >
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

const blogsData: BlogsData[] = [
  {
    blogId: 4,
    cardHeading: "The Benefits of Regular Cleaning: Why",
    cardImage: cardCleanerLivingRoom.src,
    createdAt: "July 21, 2020",
  },

  {
    blogId: 3,
    cardHeading: "Why a Professional Cleaning Service",
    cardImage: cardMediumPeople.src,
    createdAt: "July 21, 2020",
  },
  {
    blogId: 2,
    cardHeading: "How a Deep Clean Can Transform",
    cardImage: cardCareCleaning.src,
    createdAt: "October 6, 2024",
  },
];

export default BlogsNavigationSection;
