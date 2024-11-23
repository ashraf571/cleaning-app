import BlogNavigationHeading from "@/components/atoms/BlogNavigationHeading/BlogNavigationHeading";
import BlogNavigationImage from "@/components/atoms/BlogNavigationImage/BlogNavigationImage";
import React from "react";

interface BlogCardData {
  imageUrl: string;
  heading: string;
  date: string;
}

const BlogNavigationCard = ({
  imageUrl,
  heading,
  date,
}: BlogCardData) => {
  return (
    <>
      <BlogNavigationImage imageUrl={imageUrl} />
      <BlogNavigationHeading heading={heading} date={date} />
    </>
  );
};

export default BlogNavigationCard;
