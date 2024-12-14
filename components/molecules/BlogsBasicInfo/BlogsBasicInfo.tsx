import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";

interface BlogsBasicInfoIF {
  date: string;
  role: string;
}
const BlogsBasicInfo = ({ date, role }: BlogsBasicInfoIF) => {
  return (
    <div className="flex gap-10 text-sm font-medium ">
      <div className="flex gap-2 items-center">
        <FaRegCalendarCheck color="#004976" size={16} />
        <span className="">{date}</span>
      </div>

      <div className="flex gap-2 items-center">
        <FaRegUser color="#004976" size={16} />
        <span className="">{role}</span>
      </div>

      <div className="flex gap-2 items-center">
        <FaRegComments color="#004976" size={16} />
        <span className=""> No comments </span>
      </div>
    </div>
  );
};

export default BlogsBasicInfo;
