import React from "react";
import { motion } from "framer-motion";

import Heading6040 from "@/components/atoms/Heading60-40-32/Heading60-40-32";

interface ServiceContentSectionIF {
  heading?: string;
  paragraphs?: string[];
  paragraphs1?: string[];
  list?: string[];
  listDash?: string[];
  list1?: string[];
  isBold?: boolean;
  image: string;
}

interface ServiceDataIF {
  sections: ServiceContentSectionIF[];
  text: string;
  slug: string;
}

interface ParamsIF {
  slug: string
}

const ServicesDetailesSection = ({ params }: { params: ParamsIF }) => {
  const selectedService: ServiceDataIF | undefined = ServiceData.find(
    (service: ServiceDataIF) => service.slug === params.slug
  );
  if(!selectedService) return
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="relative w-full flex justify-center">
      <div className=" px-4 w-full max-w-[1200px] gap-12 flex flex-col">
        <motion.div
          className="w-full text-center mt-10"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <Heading6040 heading={selectedService.text} />
        </motion.div>

        {selectedService.sections.map(
          (section: ServiceContentSectionIF, index: number) => {
            return (
              <div key={index} className="w-full gap-5 flex max-md:flex-col">
                {index % 2 === 0 ? (
                  <TextThenImageSection seviceCardData={section} />
                ) : (
                  <ImageThenTextSection seviceCardData={section} />
                )}
              </div>
            );
          }
        )}

        {/* <p>{selectedService.text}</p> */}
      </div>
    </div>
  );
};

import commercialCleaningImage from "@/assets/images/serviceSectionImage/commercial-cleaning.jpg";
import domesticCleaning1 from "@/assets/images/serviceSectionImage/domistic-cleaning.jpg";
import domesticCleaning2 from "@/assets/images/serviceSectionImage/domestic-cleaning2.jpg";
import officeCleaningSection1 from "@/assets/images/serviceSectionImage/office-section1.jpg";
// import officeS2 from "@/assets/images/serviceSectionImage/officeS2.jpg";
// import officeKeyboard from "@/assets/images/serviceSectionImage/office-keyboard.jpg";
import officeFloar from "@/assets/images/serviceSectionImage/office-floor.jpg";
import officeToilet from "@/assets/images/serviceSectionImage/office-toilet.jpg";
import officeKitchen from "@/assets/images/serviceSectionImage/office-kitchen.jpeg";
import officeHall from "@/assets/images/serviceSectionImage/office-hall.jpeg";
import officeOutdoor from "@/assets/images/serviceSectionImage/office-outdoor.jpeg";
// import schoolStudyRoom from "@/assets/images/serviceSectionImage/school-study-rome.jpg";
// import schoolMeetingRoom from "@/assets/images/serviceSectionImage/school-meeting-room.jpeg";
// import strataFloor from "@/assets/images/serviceSectionImage/strata-floor.jpg";
import windowCleaning from "@/assets/images/serviceSectionImage/WindowImage.jpg";
import windowCleanShower from "@/assets/images/serviceSectionImage/window-cleaning.jpg";
// import industrial from "@/assets/images/serviceSectionImage/IndustrialImage.jpg";
// import highPressureWindow from "@/assets/images/serviceSectionImage/high-pressure-window.jpg";
// import highPressure from "@/assets/images/serviceSectionImage/HighPressureImage.jpg";
// import highPressureWood from "@/assets/images/serviceSectionImage/high-pressure-wood.jpg";
// import highPressureCar from "@/assets/images/serviceSectionImage/high-pressure-car.jpg";
// import tilesWall from "@/assets/images/serviceSectionImage/tiles-wall.jpg";
// import tilesSpunch from "@/assets/images/serviceSectionImage/tiles-spunch.jpg";
// import tilesFloor from "@/assets/images/serviceSectionImage/tile-floor.jpg";
import carpetImage from "@/assets/images/serviceSectionImage/CarpetImage.jpg";
import carpetWhite from "@/assets/images/serviceSectionImage/carpit-white.jpg";
import leaseOven from "@/assets/images/serviceSectionImage/OvenImage.jpg";
import leaseSink from "@/assets/images/serviceSectionImage/lease-sink.jpeg";
import leaseToilet from "@/assets/images/serviceSectionImage/lease-toilet.jpeg";
import leaseOutdoor from "@/assets/images/serviceSectionImage/lease-outdoor.jpg";
import leaseGerage from "@/assets/images/serviceSectionImage/lease-gerage.jpeg";
import TextThenImageSection from "@/components/organisms/TextThenImageSection/TextThenImageSection";
import ImageThenTextSection from "@/components/organisms/ImageThenTextSection/ImageThenTextSection";

const ServiceData : ServiceDataIF[] = [
  {
    text: "Commercial Cleaning",
    slug: "commercial-cleaning",
    sections: [
      {
        image: commercialCleaningImage.src,
        paragraphs: [
          "“Perth Bright Cleaning Services is proud to provide exceptional cleaning solutions to both businesses and homes across Perth. Our aim is to keep your space spotless and welcoming. We have a team of skilled and dedicated professionals who use the latest cleaning equipment and eco-friendly, plant-based products to deliver high-quality results. With us taking care of the cleaning, you can relax and enjoy peace of mind.",
          "We focus on professionalism and reliability, taking the time to assess your space and provide the right cleaning services for your needs. You can trust that we’ll only offer what’s necessary. We offer a wide range of commercial cleaning services and guarantee you’ll be happy with the results.",
          // `When you sign up, you'll receive a complimentary initial deep cleaning and a 10% discount on all future appointments. We also offer additional savings for regular cleaning services.`,
        ],
      },
    ],
  },
  {
    text: "Domestic Cleaning",
    slug: "domestic-cleaning",
    sections: [
      {
        paragraphs: [
          "To stay healthy, it's important to keep your living space clean. But cleaning isn’t just about tidying up—it’s about what products you use and whether you disinfect and sanitise properly. We use eco-friendly, plant-based products that help keep you safe and healthy. When you choose us to clean your home, you’re trusting us with both the cleanliness of your space and your well-being, and we take that seriously. We’re proud of the work we do.",
          "Walking into a fresh, clean home always feels great—it lifts your spirits. That’s what we specialise in! When we’re finished, your home will be spotless. We understand that every home is different, so if you have extra tasks you need done, just let us know. We’re happy to help with things like oven cleaning, barbeque cleaning, window washing, balcony cleaning, and mould removal.",
        ],
        image: domesticCleaning1.src,
      },
      {
        image: domesticCleaning2.src,
        heading: "We offer following services in regards to Domestic Cleaning",
        list: [
          "One-Time Cleaning",
          "Monthly Cleaning",
          "Bi-Weekly Cleaning",
          "Weekly Cleaning",
          "Routine/Daily Cleaning",
          "Move-In Cleaning",
          "Blind Cleaning",
        ],
        // list2Heading:
        //   "When performing a standard house cleaning, we cover the following tasks:",
        list1: [
          "Begin with dusting",
          "Wipe down surfaces",
          "Clean kitchen surfaces",
          "Scrub bathrooms and toilets",
          "Wipe laundry room surfaces",
          "Sweep and mop floors",
          "Remove cobwebs and dust",
        ],
      },
    ],
  },
  {
    text: "Office Cleaning",
    slug: "office-cleaning",
    sections: [
      {
        image: officeCleaningSection1.src,
        paragraphs: [
          "Perth Bright Cleaning Services is proud to serve businesses and residential properties across WA. Our goal is to maintain a pristine environment for your space. We employ skilled and dedicated staff who utilize state-of-the-art commercial cleaning equipment and eco-friendly, plant-based cleaning products to deliver top-notch services. With us handling the cleaning, you can enjoy peace of mind.",
          "We prioritize professionalism and reliability, assessing your space to identify the specific cleaning services you need, ensuring we only provide what's necessary. Remember, we offer a diverse range of commercial cleaning services, and we'll leave you smiling when we finish.",
          // "When you sign up, you'll receive a complimentary initial deep cleaning and a 10% discount on all future appointments. We also offer additional savings for regular cleaning services.",
        ],
      },
      // {
      //   heading: "Why Choose Us?",
      //   image: officeS2.src,
      //   paragraphs: [
      //     "Based on your needs and schedule, Domestic & Commercial Cleaning Services offers comprehensive office cleaning solutions. A healthy workplace environment is crucial for the hygiene and well-being of both your employees and clients. We provide outstanding commercial cleaning services in South Australia, Sydney, and Brisbane for both businesses and residential properties. No matter the size of your company—from small businesses to large organizations—we can ensure your commercial space is cleaned to the highest standards. With our extensive experience, commercial-grade equipment, and eco-friendly products, your property will shine.",
      //     "When you sign up, you'll receive a complimentary initial deep cleaning and a 20% discount on all appointments. We also offer additional savings for regular cleaning services.",
      //   ],
      // },
      // {
      //   image: officeKeyboard.src,
      //   heading: "What we do?",
      //   paragraphs: [
      //     "In response to our clients' needs, we offer cleaning services on a daily, weekly, monthly, or one-time basis. Rather than just delivering our standard service, we are happy to customize our offerings or create specific tasks tailored to your location. A key highlight of our services is our commitment to communication, which fosters consistency. You can share your feedback at any time to help us maintain exceptional service. Additionally, we conduct regular inspections.",
      //     "Please take a moment to review the office cleaning checklist provided below. Terms and conditions apply.",
      //   ],
      // },
      {
        image: officeFloar.src,
        heading: "Work Areas, Common Areas, Cubicles, and Private Workspaces",
        listDash: [
          "- Dust and wipe down all reachable surfaces.",
          "- Sanitize all frequently touched points, such as doors and handles.",
          "- Use a glass cleaner to clean all mirrors and glass surfaces.",
          "- Clean all surfaces, including furniture and devices, thoroughly.",
          "- Professionally clean the floors.",
          "- Change out trash bins and remove waste and recyclables.",
          "- Clean the bins to prevent any unpleasant odors.",
          "- Disinfect all surfaces and high-touch areas.",
        ],
      },
      {
        image: officeToilet.src,
        heading: "Bathrooms",
        listDash: [
          "- Clean, disinfect, and polish sinks.",
          "- Use glass cleaner to clean mirrors and glass surfaces.",
          "- Disinfect and polish countertops.",
          "- Dust and wipe down all accessible areas.",
          "- Replace toilet paper, paper towels, hand soap, and empty bins.",
          "- Ensure hand dryers are functioning properly.",
          "- Clean and disinfect hard surfaces, including floors and tiles.",
          "- Clean the bins.",
        ],
      },
      {
        image: officeKitchen.src,
        heading: "Kitchen & Break Rooms",
        listDash: [
          "- Dust and wipe down all accessible areas.",
          "- Clean and sanitize high-touch points, including doors and handles.",
          "- Disinfect all surfaces and frequently touched areas.",
          "- Empty bins, replacing liners, and remove trash and recyclables.",
          "- Use glass cleaner to clean mirrors and glass surfaces.",
          "- Clean and sanitize countertops.",
          "- Thoroughly clean appliances, including the inside and outside of the microwave.",
          "- Clean bins and eliminate any unpleasant odors.",
          "- Disinfect and polish countertops.",
          "- Professionally clean the floors.",
        ],
      },
      {
        image: officeHall.src,
        heading: "Reception, Boardrooms, Hallways & Waiting areas",
        listDash: [
          "-  Dust and wipe all reachable surfaces.",
          "- Clean and sanitize high-touch areas like doors and handles.",
          "- Disinfect all surfaces and frequently touched points.",
          "- Replace bins and remove trash and recyclables.",
          "- Use glass cleaner to clean mirrors and glass surfaces.",
          "- Professionally clean the floors.",
        ],
      },
      {
        image: officeOutdoor.src,
        heading: "Outdoor Areas",
        listDash: [
          "- Ensure welcome mats are clean and properly positioned.",
          "- Make sure the main or front door is spotless and shining.",
          "- Sweep away leaves and dirt near the front door.",
          "- Maintain the windows and doors, keeping them sparkling, according to prior cleaning discussions.",
          "- Ensure walkways are clear and free from any obstructions.",
          "- Inspect trash cans and bins, ensuring they are free from pests and unpleasant odors.",
          "- We will also clean and maintain your entrance, lift/stairs, and balcony areas.",
        ],
      },
    ],
  },
  // {
  //   text: "School Cleaning",
  //   slug: "school-cleaning",
  //   sections: [
  //     {
  //       image: schoolStudyRoom.src,
  //       paragraphs: [
  //         "Public and private schools, colleges, universities, childcare centers, training facilities, preschools, and daycare centers can all benefit from the managed services offered by Domestic & Commercial Cleaning Services Adelaide. With the high density of students in schools and universities, these environments can quickly become hotspots for infections. That's where we come in to provide effective cleaning solutions.",
  //         "At Commercial Cleaning Services Adelaide, we specialize in cleaning educational institutions. To ensure the highest standards of cleanliness, schools and colleges require regular upkeep. We conduct routine cleaning and maintenance year-round, including during breaks when facilities are less occupied. Our comprehensive cleaning services for schools and universities include:",
  //       ],
  //       list: [
  //         "Window Cleaning",
  //         "Regular Cleaning and Maintenance",
  //         "Car Park Sweeping",
  //         "Exterior Pressure Cleaning",
  //         "Classroom Sanitization",
  //         "Routine Toilet and Washroom Cleaning",
  //       ],
  //       paragraphs1: [
  //         "We are experienced in cleaning various spaces, including playgrounds, gardens, gyms, labs, libraries, classrooms, restrooms, cafeterias, lunchrooms, and more. Additionally, we clean both internal and external windows.",
  //       ],
  //     },
  //     {
  //       image: schoolMeetingRoom.src,
  //       paragraphs: [
  //         "Let us conduct a FREE INSPECTION of your facility and offer a NO-COST TRIAL to showcase the quality of our cleaning services for schools and universities. Submit an inquiry here or contact us at (08) 8166 1189.",
  //       ],
  //       list: [
  //         "$99 Sign-Up Discount (*minimum hours apply)",
  //         "Fully Insured with Public Liability",
  //         "Complimentary Initial Detailed Cleaning",
  //         "Free Urinal Screens",
  //         "Toilet Bowl Sanitizer",
  //         "Free Sense & Spray Air Freshener",
  //         "Regular Site Inspections",
  //         "Police Checks and Clearances for Working with Children",
  //         "Additional Hourly Rate Discounts for Daily Cleaning Services",
  //       ],
  //       paragraphs1: [
  //         "Domestic & Commercial Cleaning Services Adelaide is renowned for offering cost-effective cleaning services for educational institutions. We bring the expertise, knowledge, and experience required to ensure these learning environments remain clean, safe, and well-maintained.",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "Strata Cleaning",
  //   slug: "strata-cleaning",
  //   sections: [
  //     {
  //       image: strataFloor.src,
  //       paragraphs: [
  //         "A building's cleanliness significantly shapes first impressions. CCSA specializes in building management, maintenance, and strata cleaning.",
  //         "Consistent maintenance is vital for keeping a property immaculate and up to the highest standards. We partner with our clients to fulfill all their cleaning needs and are committed to ongoing quality enhancement, which includes but is not limited to:",
  //       ],
  //       list: [
  //         "Routine Building Cleaning",
  //         "Parking Lot Cleaning",
  //         "Window Washing",
  //         "Pressure Washing",
  //         "Carpet Shampooing",
  //         "Exterior Building Cleaning",
  //       ],
  //       paragraphs1: [
  //         "Our experienced strata cleaning team is equipped to handle properties of any size and offers a wide range of strata cleaning services.",
  //       ],
  //     },
  //   ],
  // },
  {
    text: "Window Cleaning",
    slug: "window-cleaning",
    sections: [
      {
        image: windowCleaning.src,
        paragraphs: [
          "Need your windows cleaned? Relax, we've got you covered!",
          "We offer expert window cleaning services throughout Western Australia. Whether it's a commercial or residential space, we have the perfect solution for you. We guarantee quality, efficiency, and exceptional service for all our clients while prioritizing safety for everyone involved. Our team consists of trained professionals who are dedicated and hardworking.",
          "When we finish, your windows will shine! We are committed to delivering outstanding service at an affordable price.",
          // "When we finish, your windows will shine! We are committed to delivering outstanding service at an affordable price.",
        ],
      },
      {
        image: windowCleanShower.src,
        list: [
          "- Guaranteed Customer Satisfaction",
          "- Dependable, Trustworthy, and Professional",
          "- Elimination of Pollutants and Contaminants",
          "- Use of Eco-Friendly Products",
          "- Improving the Aesthetic of Your Property",
        ],
        paragraphs: [
          "Our service saves you time while delivering hassle-free, top-quality results.",
        ],
      },
    ],
  },
  // {
  //   text: "Industrial Cleaning",
  //   slug: "industrial-cleaning",
  //   sections: [
  //     {
  //       image: industrial.src,
  //       paragraphs: [
  //         "Maintaining clean and hygienic facilities is essential for factory and industrial sites to meet Occupational Health, Safety, and Welfare (OHS&W) standards. A clean workplace is vital for employee satisfaction and productivity, as unclean conditions can lead to dissatisfaction and reduced efficiency.",
  //         "We collaborate closely with our clients to meet all of their cleaning requirements, following a philosophy of continuous quality improvement. Our services include, but are not limited to:",
  //       ],
  //       listDash: [
  //         "- Routine Building Cleaning",
  //         "- Hard Floor Maintenance",
  //         "- Car Park Cleaning",
  //         "- Window Washing",
  //         "- Pressure Washing",
  //         "- Carpet Shampooing",
  //         "- Exterior Building Cleaning",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "High Pressure Cleaning",
  //   slug: "high-pressure-cleaning",
  //   sections: [
  //     {
  //       image: highPressureWindow.src,
  //       paragraphs: [
  //         "Are you preparing to sell your property or aiming to increase its value?",
  //         "Or perhaps you've just moved into a new home and want to begin with a clean slate?",
  //         "We've got it covered! Whether you're selling and want to boost your asking price or simply want to refresh your space, we're here to help. You'll be pleasantly surprised by the results!",
  //       ],
  //     },
  //     {
  //       heading: "Our Features",
  //       image: highPressure.src,
  //       paragraphs: [
  //         "Looking to give your home or commercial space a fresh start?",
  //         "Or perhaps you've just moved into a new home and want to begin with a clean slate?Are you preparing to sell your property or aiming to increase its value?",
  //         "Or perhaps you’ve just moved into a new home and want to begin with a clean slate?",
  //         "We’ve got it covered! Whether you’re selling and want to boost your asking price or simply want to refresh your space, we’re here to help. You’ll be pleasantly surprised by the results!",
  //       ],
  //     },
  //     {
  //       heading: "Why Pressure Wash?",
  //       image: highPressureWood.src,
  //       list: [
  //         "Enhances the building’s curb appeal",
  //         "Increases property value",
  //         "Extends the lifespan and durability of surfaces",
  //         "Reduces the effort required for future cleaning",
  //         "Prevents the need for costly repairs",
  //         "Cleans surrounding areas",
  //         "Removes graffiti effectively",
  //         "Promotes health and safety",
  //       ],
  //       paragraphs1: [
  //         "We also offer industrial cleaning services, with machines operating at pressures from 2700 PSI to 6000 PSI. Additionally, we can address any gaps left after each clean.",
  //       ],
  //     },
  //     {
  //       image: highPressureCar.src,
  //       paragraphs: [
  //         "Our high-pressure cleaning services include, but are not limited to:",
  //       ],
  //       listDash: [
  //         "- Brickwash",
  //         "- Driveway Cleaning",
  //         "- Patios",
  //         "- Paved Surfaces",
  //         "- Decks",
  //         "- Garage Cleaning",
  //         "- Exterior Pressure Washing",
  //         "- Builder’s Clean",
  //         "- Warehouse Cleaning",
  //         "- Car Parks",
  //         "- Tennis/Basketball Courts",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "Tiles and Grout Cleaning",
  //   slug: "tiles-and-grout-cleaning",
  //   sections: [
  //     {
  //       image: tilesWall.src,
  //       paragraphs: [
  //         "We offer a comprehensive tile and grout cleaning program that leaves no corner untouched. Using natural products and the latest high-pressure technology, we bring your tiles back to life.",
  //         "Our cleaning method is gentle yet effective. We allow the tiles and grout to soak in a detergent or cleaner for a while, making the cleaning process smoother. Then, we scrub the surface multiple times to ensure a deep clean while preserving the integrity of your tiles.",
  //       ],
  //     },
  //     {
  //       heading: "Our Features",
  //       image: tilesSpunch.src,
  //       listDash: [
  //         "- Owner-Operated",
  //         "- Use of Natural Products",
  //         "- Cost-Effective Solutions",
  //         "- Efficient Management",
  //         "- 100% Customer Satisfaction",
  //         "- Flexible Scheduling",
  //         "- Attractive Discounts",
  //       ],
  //     },
  //     {
  //       heading: "Why is it essential?",
  //       image: tilesFloor.src,
  //       listDash: [
  //         "- Eliminates germs, bacteria, stains, and pollutants",
  //         "- Extends the lifespan of your floors",
  //         "- Promotes a healthier living environment",
  //       ],
  //     },
  //   ],
  // },
  {
    //   image: CarpetImage,
    text: "Carpet Cleaning",
    slug: "carpet-cleaning",
    sections: [
      {
        image: carpetImage.src,
        paragraphs: [
          "Looking for professional carpet & rug cleaning at an affordable price? Look no further! Our mission is to deliver top-quality services while ensuring complete customer satisfaction. With our extensive hands-on experience, we stand out in the industry. We take a meticulous approach, ensuring every job is done with precision and care.",
          "Our hot water extraction carpet cleaning features high-suction equipment that effectively removes deeply embedded dirt, stains, and pollutants, all while using eco-friendly cleaning agents. While pricing is important, our priority is ensuring your satisfaction. We pride ourselves on being reliable and readily available whenever our clients need us. Pricing varies based on the services, but rest assured, we offer competitive and fair rates.",
          "We cater to both residential and commercial properties. For a quick quote, give us a call or send us an email!",
        ],
      },
      {
        image: carpetWhite.src,
        isBold: true,
        list: [
          "- Quick Service",
          "- Expert Staff",
          "- Professional Approach",
          "- Thorough Sanitization",
          "- Eco-Friendly Products",
        ],
        paragraphs1: [
          "Revitalizing carpets, rugs, and upholstery through deodorizing and sanitizing after cleaning is essential. We offer this service for free!",
          "Furthermore, we also provide services for odor elimination, soil extraction, and stain removal.",
        ],
      },
    ],
  },
  {
    //   image: VacateImage,
    text: "End of Lease Cleaning",
    slug: "end-of-lease-cleaning",
    sections: [
      {
        image: leaseOven.src,
        paragraphs: [
          "Moving houses can be incredibly stressful, and the cleaning process adds to the challenge, as it requires a thorough, top-to-bottom approach. Since everyone expects to move into a spotless home, it’s also important to leave the place sparkling clean when moving out. Whether it’s a move-in clean or move-out clean, we take the burden off your shoulders, ensuring the property is ready for new owners, tenants, or real estate inspections.",
          "We handle everything from cleaning, sanitizing, and disinfecting every corner. Specializing in bond cleaning, we allow you to focus on other important tasks. Recently, our pre-sale and post-sale/settlement cleaning services have gained popularity.",
          "We’ve included a checklist for both move-in and move-out cleans below. Terms and conditions apply. Most importantly, we provide touch-ups after each cleaning if there are any concerns raised by owners or property managers. Contact us today for quotes and inquiries!",
        ],
      },
      {
        heading: "Our Features",
        image: officeOutdoor.src,
        listDash: [
          "- Owner-Operated",
          "- Use of Natural Products",
          "- Cost-Effective Solutions",
          "- Efficient Management",
          "- 100% Customer Satisfaction",
          "- Flexible Scheduling",
          "- Attractive Discounts",
        ],
      },
      {
        image: leaseSink.src,
        heading: "Kitchen and Dining Area",
        list: [
          "- Cooking Areas: We’ll thoroughly clean the oven, racks, trays, exhaust, range hood, and range hood filters, as well as the stove top.",
          "- Sinks: We will clean the sinks and drains, ensuring taps and water spouts are spotless.",
          "- Benches and Walls: We’ll clean all bench tops, walls, and tiled areas.",
          "- Dishwasher: We’ll clean both the interior and exterior, including all racks, rubbers, and the filter.",
          "- Refrigerator: We’ll clean inside and out, including all racks and those hard-to-reach corners.",
          "- Cupboards: We’ll clean both the interiors and exteriors of cupboards.",
          "- Mirrors and Glass Surfaces: We’ll polish all mirrors and glass surfaces using glass cleaner.",
          "- Windows: We’ll clean windows inside and out and wash fly screens.",
          "- Blinds: We offer cleaning for blinds.",
          "- Doors and Frames: We’ll wipe down doors, door frames, window frames, and remove dirt from sills.",
          "- Vents and Light Fittings: We’ll clean AC vents and light fittings.",
          "- Cobwebs: We will remove all cobwebs.",
          "- Disinfection: All surfaces and touch points will be cleaned and disinfected.",
          "- Walls and Skirting Boards: We’ll clean the walls and skirting boards.",
          "- Final Touches: We’ll sanitize, disinfect, and polish all areas for a pristine finis",
        ],
      },
      {
        image: leaseToilet.src,
        heading: "Bathrooms and Toilets",
        list: [
          "- Cupboards: We’ll clean both the inside and outside of all cupboards.",
          "- Tile and Grout: We’ll scrub and clean tile and grout thoroughly.",
          "- Shower Glass and Doors: We’ll provide professional cleaning for shower glass and doors.",
          "- Knickknacks: We’ll carefully clean all knickknacks.",
          "- Sinks and Drains: We’ll clean sinks and drains, including taps and water spouts",
          "- Toilets: We’ll ensure a detailed clean for all toilets.",
          "- Faucets: We’ll give faucets, sinks, and drains a thorough cleaning.",
          "- Soap Scum and Hard Water Deposits: We’ll do our best to remove soap scum and hard water deposits.",
          "- Cobwebs: All cobwebs will be removed.",
          "- Windows: We’ll clean windows inside and out and wash fly screens.",
          "- Doors and Frames: We’ll wipe down doors, door frames, and window frames, removing dirt from sills.",
          "- Blinds: We offer cleaning services for blinds.",
          "- Mirrors and Glass Surfaces: We’ll clean all mirrors and glass surfaces with glass cleaner.",
          "- Vents and Light Fittings: We’ll clean AC vents and light fittings.",
          "- Disinfection: We’ll clean and disinfect all surfaces and touch points.",
          "- Walls and Skirting Boards: We’ll clean the walls and skirting boards.",
          "- Final Touches: We’ll sanitize, disinfect, and polish all areas for a spotless finish.",
        ],
      },
      {
        heading: "Bedrooms, Living areas and office areas",
        image: officeOutdoor.src,
        list: [
          "- Thorough cleaning of cupboards, both inside and out.",
          "- Professional cleaning of knickknacks.",
          "- Floor cleaning services.",
          "- Window cleaning inside and out, along with washing fly screens.",
          "- Wiping down doors, door frames, window frames, and removing dirt from sills.",
          "- Cleaning of AC vents and light fixtures.",
          "- Cleaning all mirrors and glass surfaces with appropriate glass cleaner.",
          "- Disinfecting all surfaces and frequently touched points.",
          "- Wall and skirting board cleaning.",
          "- Cleaning underneath furniture in furnished properties.",
          "- Surface cleaning in furnished properties.",
          "- Removal of cobwebs.",
          "- Blind cleaning services available.",
          "- Sanitizing, disinfecting, and polishing all areas.",
        ],
      },
      {
        image: leaseOutdoor.src,
        heading: "Outdoor Cleaning",
        list: [
          "- Removal of all cobwebs.",
          "- Pressure cleaning for patios, verandahs, and decks.",
          "- BBQ cleaning services.",
          "- Gardening services available.",
        ],
      },
      {
        image: leaseGerage.src,
        heading: "Garage",
        list: [
          "- We’ll clear all rubbish and sweep the area.",
          "- Wall and skirting cleaning services are available.",
          "- Wiping down doors, door frames, window frames, and removing dirt from sills.",
          "- Removal of all cobwebs.",
          "- Cleaning of AC vents and light fixtures.",
          "- Blind cleaning services offered.",
          "- Cleaning of AC vents and light fixtures.",
          "- Garage door cleaning is also available.",
          "- High-pressure cleaning for the floor.",
          "- We will clean and disinfect all surfaces and frequently touched points.",
        ],
      },
    ],
  },

  {
    //   image: OvenImage,
    text: "Oven /BBQ /Splashback Cleaning",
    slug: "oven-bbq-splashback-cleaning",
    sections: [
      {
        image: officeOutdoor.src,
        paragraphs: [
          "For ultimate peace of mind, it’s essential to reach out to a qualified specialist for oven cleaning. While it may seem straightforward, attention to detail is crucial. It’s not just about the cleaning process but also about the methods and products used. With the right tools and natural cleaning agents, the task can be quick and efficient. Additionally, adhering to proper food safety protocols is important.",
          "Let us handle the job, and you can enjoy our exceptional service. We’ll give your oven, barbecue, cooktop, and range hood a thorough makeover.",
          "Feel free to inquire about our charcoal BBQ and hotplate cleaning services as well. We specialize in cleaning ovens, racks, trays, fan covers, fans, door glass, the spaces between glasses, cooktops, gas hobs, range hoods, and filters.",
          "We take the time to ensure the best results for you. It will all be worth it. Our clients often refer to us as the best, smiling as they bid us farewell when we finish our work.",
        ],
      },
      {
        image: officeOutdoor.src,
        heading: "Our Features",
        list: [
          "- Owner-Operated: Personal touch and dedication in every service.",
          "- Natural Products: We use eco-friendly cleaning solutions for your peace of mind.",
          "- Financially Affordable: Quality cleaning services that won’t break the bank.",
          "- Proper Management: Efficient and effective service tailored to your needs.",
          "- 100% Customer Satisfaction: Our top priority is ensuring you’re completely satisfied.",
          "- Flexible Schedule: We work around your availability for ultimate convenience.",
        ],
      },
      {
        image: officeOutdoor.src,
        heading: "Our Comprehensive Oven Cleaning Process",
        list: [
          "- Cooking Areas: We’ll thoroughly clean the oven, racks, trays, exhaust, range hood, and range hood filters, as well as the stove top.",
          "- Sinks: We will clean the sinks and drains, ensuring taps and water spouts are spotless.",
          "- Benches and Walls: We’ll clean all bench tops, walls, and tiled areas.",
          "- Dishwasher: We’ll clean both the interior and exterior, including all racks, rubbers, and the filter.",
          "- Refrigerator: We’ll clean inside and out, including all racks and those hard-to-reach corners.",
          "- Cupboards: We’ll clean both the interiors and exteriors of cupboards.",
          "- Mirrors and Glass Surfaces: We’ll polish all mirrors and glass surfaces using glass cleaner.",
          "- Windows: We’ll clean windows inside and out and wash fly screens.",
          "- Blinds: We offer cleaning for blinds.",
          "- Doors and Frames: We’ll wipe down doors, door frames, window frames, and remove dirt from sills.",
          "- Vents and Light Fittings: We’ll clean AC vents and light fittings.",
          "- Cobwebs: We will remove all cobwebs.",
          "- Disinfection: All surfaces and touch points will be cleaned and disinfected.",
          "- Walls and Skirting Boards: We’ll clean the walls and skirting boards.",
          "- Final Touches: We’ll sanitize, disinfect, and polish all areas for a pristine finis",
        ],
      },
      {
        image: officeOutdoor.src,
        heading: "Our Comprehensive BBQ Cleaning Process",
        list: [
          "- Initial Inspection: We begin by checking all corners of your BBQ to assess its working condition, and we will inform you of any issues.",
          "- Removal of Parts: All removable components are carefully taken off for a thorough clean.",
          "- Pre-Heating: The BBQ is pre-heated slightly to help with the cleaning process.",
          "- Gas Disconnection: We ensure the gas is safely disconnected before proceeding.",
          "- Eco-Friendly Products: Our specially formulated eco-friendly cleaning products are applied.",
          "- Stain Removal: We remove fats, burnt residues, and excess dirt from all surfaces.",
          "- Comprehensive Cleaning: All parts, both interior and exterior, are cleaned meticulously.",
          "- Drying: We dry all parts of the BBQ to prevent any moisture retention.",
          "- Reassembly: Once everything is cleaned and dried, we carefully reassemble all parts.",
          "- Clean-Up: We tidy up our workspace, ensuring no mess is left behind.",
          "- Disinfection and Sanitization: The BBQ is disinfected and sanitized for your safety.",
          "- Final Testing: Before we leave, we conduct a final test to ensure everything is functioning correctly. We’ll leave the BBQ open for 15 minutes to allow any remaining cleaning products to dissipate.",
          "- Charcoal BBQ Inquiry: Please inquire about our charcoal BBQ cleaning services as well.",
          "We also clean: ",
          "- Range Hoods",
          "- Cooktops",
          "- Hot Plates",
          "- Charcoal BBQ",
        ],
      },
    ],
  },
];

export default ServicesDetailesSection;
