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
  }: {
    seviceCardData: ServiceContentSectionIF;
  }) => {
    const { image, ...rest } = seviceCardData;
    return (
      <>
        <ImageSection imageUrl={image} />
        <ServiceContentSection sectionData={rest} />
      </>
    );
  };

export default ImageThenTextSection