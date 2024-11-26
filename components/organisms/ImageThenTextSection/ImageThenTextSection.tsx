import ImageSection from '@/components/molecules/ImageSection/ImageSection';
import ServiceContentSection from '@/components/molecules/ServiceContentSection/ServiceContentSection';
import React from 'react'

interface ServiceContentSectionIF {
    heading?: string;
    paragraphs?: string[];
    paragraphs1?: string[];
    list: string[];
    listDash?: string[];
    list1?: string[];
    isBold?: boolean;
    image: string;
  }

const ImageThenTextSection =  ({
    seviceCardData,
    key,
  }: {
    seviceCardData: ServiceContentSectionIF;
    key: number;
  }) => {
    const { image, ...rest } = seviceCardData;
    return (
      <div key={key} className="w-full my-2 flex max-md:flex-col">
        <ImageSection imageUrl={image} />
        <ServiceContentSection sectionData={rest} />
      </div>
    );
  };

export default ImageThenTextSection