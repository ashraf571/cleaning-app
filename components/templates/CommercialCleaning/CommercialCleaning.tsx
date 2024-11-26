import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'

import commercialCleaningImage from "@/assets/images/serviceSectionImage/commercial-cleaning.jpg"

const CommercialCleaning = () => {
  
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };
    return (
    <div>
        <motion.div
          className="w-full text-center"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
        <Image height={100} width={100} src={commercialCleaningImage.src} alt='Commercial cleaning'  />
        </motion.div>

        <p>Domestic and Commercial Cleaning Services is proud to serve businesses and residential properties across South Australia, Sydney, Melbourne, Brisbane, and Adelaide with exceptional cleaning solutions. Our goal is to maintain a pristine environment for your space. We employ skilled and dedicated staff who utilize state-of-the-art commercial cleaning equipment and eco-friendly, plant-based cleaning products to deliver top-notch services. With us handling the cleaning, you can enjoy peace of mind.</p>
        <p>We prioritize professionalism and reliability, assessing your space to identify the specific cleaning services you need, ensuring we only provide what’s necessary. Remember, we offer a diverse range of commercial cleaning services, and we’ll leave you smiling when we finish.</p>
        <p>When you sign up, you’ll receive a complimentary initial deep cleaning and a 10% discount on all future appointments. We also offer additional savings for regular cleaning services.</p>

    </div>
  )
}

export default CommercialCleaning