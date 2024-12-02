import Heading24 from "@/components/atoms/Heading24/Heading24";
import React from "react";
import ListSection from "../ListSections/ListSection";

interface ServiceContentSectionIF {
  heading?: string;
  paragraphs?: string[];
  paragraphs1?: string[];
  list?: string[];
  listDash?: string[];
  list1?: string[];
  isBold?: boolean;
}

const ServiceContentSection = ({
  sectionData,
}: {
  sectionData: ServiceContentSectionIF;
}) => {
  const {
    heading,
    paragraphs,
    list,
    list1,
    isBold = false,
    listDash,
    paragraphs1,
  } = sectionData;
  return (
    <div className=" w-fill md:w-1/2 ">
      {heading && <Heading24 heading={heading} />}
      {paragraphs &&
        paragraphs.length > 0 &&
        paragraphs.map((paragraph: string, index: number) => {
          return (
            <p
              key={index}
              className="text-base mb-4 text-secondryGray font-normal"
            >
              {" "}
              {paragraph}{" "}
            </p>
          );
        })}

      {list && list.length > 0 && (
        <ListSection isDecore={true} isBold={isBold} list={list} />
      )}
      {listDash && listDash.length > 0 && (
        <ListSection isDecore={false} list={listDash} />
      )}

      {paragraphs1 &&
        paragraphs1.length > 0 &&
        paragraphs1.map((paragraph: string, index: number) => {
          return (
            <p
              key={index}
              className="text-base mb-1 leading-7 text-secondryGray font-normal"
            >
              {" "}
              {paragraph}{" "}
            </p>
          );
        })}
      {list && (
        <p>
          When performing a standard house cleaning, we cover the following
          tasks:
        </p>
      )}
      {list1 && list1.length > 0 && (
        <ListSection isDecore={true} list={list1} />
      )}
    </div>
  );
};

export default ServiceContentSection;
