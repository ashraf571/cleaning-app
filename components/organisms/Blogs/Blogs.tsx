"use client";

import React, { useEffect, useState } from "react";

import manOfficeFloor from "@/assets/images/blogs/manOfficeFloor.jpg";
import cleanerLivingRoom from "@/assets/images/blogs/cleanerLivingRoom.jpg";
import careCleaning from "@/assets/images/blogs/careCleaning.jpg";
import mediumPeople from "@/assets/images/blogs/mediumPeople.jpg";

import BlogsNavigationSection from "../BlogsNavigationSection/BlogsNavigationSection";
import BlogsMapSection from "../BlogsMapSection/BlogsMapSection";
import BlogDetailSection from "../BlogDetailSection/BlogDetailSection";

interface BlogsData {
  blogId: number,
  heading: string,
  auther: string,
  createdAt: string,
  role: string,
  discription: string,
  image: string,
  numberOfComments: number,
  noteHeading: string,
  noteDiscription: string,
  descriptionList: DescriptionListIF[],
  tags: string[]
}

interface DescriptionListIF {
  heading: string,
  description: string 
}

const Blogs = () => {
  const [blogId, setBlogId] = useState(0);
  const [blog, setBlog] = useState<BlogsData>({
    blogId: 0,
  heading: "",
  auther: "",
  createdAt: "",
  role: "",
  discription: "",
  image: "",
  numberOfComments: 0,
  noteHeading: "",
  noteDiscription: "",
  descriptionList: [],
  tags:[]
  })

  useEffect(() => {

    if(blogId) {
      const selectedBlog : BlogsData | undefined = blogsData.find((blog: BlogsData) => blog.blogId === blogId)
      if(selectedBlog) {setBlog(selectedBlog)}
    }
  },[blogId])


  return (
    <div className="w-full flex justify-center items-center">
      <div className="p-12 max-w-[1200px] w-full flex justify-center items-center ">
        <div className="flex text-cyanblue w-full max-md:w-full max-xl:w-[90%] max-lg:flex-col gap-x-4 ">
          {blogId > 0 && Object.keys(blog).length > 0 ?  (
            <BlogDetailSection
              blog={blog}
            />
          ) : (
            <BlogsMapSection
              onSelectblog={(id) => setBlogId(id)}
              blogs={blogsData}
            />
          )}
          <BlogsNavigationSection onSelectblog={(id) => setBlogId(id)} />
        </div>
      </div>
    </div>
  );
};

const blogsData : BlogsData[] = [
  {
    blogId: 1,
    heading:
      "The Importance of Eco-Friendly Cleaning: A Cleaner Home, A Healthier Planet",
    auther: "akshak",
    createdAt: "October 6, 2024",
    role: "Admin",
    discription:
      "In recent years, the demand for eco-friendly products and services has grown tremendously, and for a good reason. Many traditional cleaning products contain harmful chemicals that can negatively affect both our health and the environment. We prioritize the use of eco-friendly, natural cleaning products that not only leave your home or office spotless but also contribute to a healthier planet. Here's why choosing eco-friendly cleaning services is the best choice for you and the environment.",
    image: manOfficeFloor.src,
    numberOfComments: 0,
    noteHeading: "Book Your Eco-Friendly Clean Today!",
    noteDiscription:
      "Ready to experience the benefits of eco-friendly cleaning? Contact Us today to schedule a cleaning that's good for your home, your health, and the planet.",
    descriptionList: [
      {
        heading: "1. Safer for Your Health",
        description:
          "One of the biggest benefits of using eco-friendly cleaning products is the impact on your health. Many conventional cleaning products contain harsh chemicals that release toxic fumes, leading to respiratory problems, skin irritation, and other health issues, especially in sensitive individuals. At Safa The Cleaning Services, our natural cleaning products are free from these harmful substances, making your space safer for you, your family, pets, and employees.",
      },
      {
        heading: "2. Better for the Environment",
        description:
          "Eco-friendly cleaning isn't just better for your health—it's also better for the planet. Many traditional cleaning products contain chemicals that pollute our waterways and damage ecosystems when they're washed down the drain. By choosing natural, biodegradable products, we reduce the amount of harmful chemicals entering the environment, helping to protect wildlife and preserve the earth for future generations.",
      },
      {
        heading: "3. Improved Indoor Air Quality",
        description:
          "Indoor air quality is often worse than outdoor air due to the presence of chemicals, dust, and allergens. Harsh cleaning products can release volatile organic compounds (VOCs) that linger in the air, causing discomfort and irritation. Natural cleaning products are free from these harmful chemicals, leading to cleaner, fresher air in your home or office. This is particularly important for individuals with asthma, allergies, or other respiratory issues.",
      },
      {
        heading: "4. Safe for Children and Pets",
        description:
          "Children and pets are more vulnerable to the effects of harsh cleaning chemicals because of their smaller size and closer proximity to surfaces. Crawling babies and pets are often in direct contact with floors, carpets, and furniture, making it essential to ensure these surfaces are free from harmful residues. Our eco-friendly products at Safa The Cleaning Services are non-toxic and safe for the whole family, giving you peace of mind while ensuring a clean environment.",
      },
      {
        heading: "5. Effective Cleaning Without Compromise",
        description:
          "One of the misconceptions about eco-friendly cleaning products is that they are less effective than conventional cleaners. However, this couldn't be further from the truth. Natural products are just as powerful at tackling dirt, grime, and bacteria, without the harsh side effects of chemical-based cleaners. Whether you need a deep clean for your kitchen, office, or bathroom, our eco-friendly products deliver sparkling results without compromising your health or the environment.",
      },
      {
        heading: "6. Supporting a Sustainable Future",
        description:
          "Choosing eco-friendly cleaning services isn't just a one-time decision—it's a step toward a more sustainable future. By supporting businesses that prioritize environmentally responsible practices, you're helping to drive the demand for greener products and services. We're proud to be part of the movement towards sustainability, offering a service that not only keeps your space clean but also aligns with your eco-conscious values.",
      },
      {
        heading: "Conclusion: Clean Spaces, Clean Conscience",
        description:
          "By choosing eco-friendly cleaning services, you're making a decision that benefits both your immediate environment and the planet as a whole. We believe in delivering exceptional cleaning results without compromising on safety, health, or environmental responsibility. Whether you're looking for regular residential cleaning or a one-time deep clean, you can trust our team to provide a service that leaves your space spotless and your conscience clear.",
      },
    ],
    tags: [],
  },
  {
    blogId: 2,
    heading: "How a Deep Clean Can Transform Your Space",
    auther: "akshak",
    createdAt: "October 6, 2024",
    role: "Admin",
    discription:
      "Every space, whether a home or office, needs a deep clean from time to time. Even with regular cleaning, dust and grime can accumulate in hard-to-reach places, and surfaces can lose their shine. That's where a professional deep clean comes in.  We specialize in transforming spaces with our thorough and detail-oriented deep cleaning services. Here's why a deep clean might be exactly what your space needs.",
    image: careCleaning.src,
    numberOfComments: 0,
    noteHeading: "Schedule Your Deep Clean Today!",
    noteDiscription:
      "Ready to transform your space with a deep clean? Contact Us and let us give your home or office the thorough, revitalizing clean it deserves.",
    descriptionList: [
      {
        heading: "1. Revitalize Your Living or Working Space",
        description:
          "A deep clean goes beyond surface-level tidying—it breathes new life into your environment. From scrubbing baseboards to wiping down ceiling fans, deep cleaning covers every corner and crevice that often gets overlooked. After a deep clean, your space will feel fresher, brighter, and more welcoming, making it a more enjoyable place to live or work.",
      },
      {
        heading: "2. Improve Indoor Air Quality",
        description:
          "Dust, allergens, and pollutants build up over time, especially in areas that don't get cleaned regularly, like carpets, upholstery, and air vents. A deep clean helps improve indoor air quality by removing these hidden particles, making your home or office healthier for everyone. For individuals with allergies or respiratory conditions, this can make a noticeable difference in comfort and well-being.",
      },
      {
        heading: "3. Extend the Life of Furniture and Appliances",
        description:
          "Furniture, carpets, and appliances can show signs of wear and tear when dirt and grime accumulate. Regular deep cleaning helps prolong the life of these investments by keeping them in good condition. From shampooing carpets to descaling appliances, a deep clean ensures that your belongings stay in great shape for longer, saving you money on replacements or repairs in the future.",
      },
      {
        heading: "4. Prepare for Special Occasions or Seasonal Changes",
        description:
          "Whether you're hosting a special event or just preparing for a new season, a deep clean is the perfect way to get your space ready. Spring cleaning, holiday prep, or moving into a new home are all ideal times for a thorough clean. We offer seasonal deep cleaning options that ensure your space is spotless for any occasion. From top to bottom, we'll make sure every detail is taken care of.",
      },
      {
        heading: "5. Stress-Free End of Lease Cleaning",
        description:
          "Moving out? End of lease cleaning can be stressful, especially with the pressure to meet the standards required to get your deposit back. Our expert team at Safa The Cleaning Services offers detailed end of lease cleaning that covers everything from carpet steam cleaning to oven scrubbing. We'll help you leave your old place spotless and ensure it's in the best condition possible, reducing any stress or last-minute cleaning tasks during your move.",
      },
      {
        heading: "6. Maintain a Professional Image for Businesses",
        description:
          "For commercial spaces, a deep clean is more than just a fresh start—it's essential for maintaining a professional appearance. Whether you run an office, a gym, or a commercial kitchen, first impressions matter. A sparkling, well-maintained space sends the right message to clients and customers, showcasing your attention to detail and commitment to quality .We provide comprehensive commercial deep cleaning services that meet industry standards and ensure a welcoming environment for everyone.",
      },
      {
        heading: "Conclusion: Experience the Power of a Deep Clean",
        description:
          "If you're looking to refresh your space, improve air quality, or prepare for a big event, a deep clean is the way to go. We take pride in offering top-tier deep cleaning services tailored to your specific needs. With our use of natural, eco-friendly products and our commitment to customer satisfaction, you can trust us to deliver results that exceed your expectations.",
      },
    ],
    tags: [],
  },
  {
    blogId: 3,
    heading:
      "Why a Professional Cleaning Service Is a Must for Your Home or Office",
    auther: "akshak",
    createdAt: "July 21, 2020",
    role: "Admin",
    discription:
      "In today's fast-paced world, keeping up with cleaning can be a challenge. Between work, family, and social commitments, finding time to keep your home or office spotless can feel impossible. That's where professional cleaning services like we come in. With expertise and dedication, we make spaces shine so you can focus on what really matters.",
    image: mediumPeople.src,
    numberOfComments: 0,
    noteHeading: "Book Your First Cleaning Today!",
    noteDiscription:
      "Ready to experience the benefits of a professionally cleaned space? Contact Us for flexible scheduling, personalized cleaning plans, and a fresh, healthy environment for your home or business.",
    descriptionList: [
      {
        heading: "1. Save Time and Reduce Stress",
        description:
          "When you hire a professional cleaning service, you're buying back precious time. Cleaning takes hours each week, and doing it right requires attention to detail. By letting us take care of it, you free up time for family, work, and relaxation, knowing that your space will be spotless. It's an easy way to reduce the stress that comes with a cluttered or dirty environment.",
      },
      {
        heading: "2. Customized Cleaning Plans",
        description:
          "At Safa The Cleaning Services, we understand that every space is unique, and so are your cleaning needs. Whether it's a deep cleaning session for your home or regular upkeep for your office, we create a customized plan that suits your schedule, budget, and requirements. No more worrying about forgotten corners or inconsistent results—we have you covered.",
      },
      {
        heading: "3. Eco-Friendly, Safe Products",
        description:
          "Health and safety are top priorities in any cleaning task. Our team uses only natural, eco-friendly products, ensuring your space is not only clean but also free from harmful chemicals. Whether it's residential cleaning or commercial kitchen cleaning, we aim to protect both your environment and our planet.",
      },
      {
        heading: "4. Professional Expertise and Detail-Oriented Service",
        description:
          "Cleaning is more than just wiping down surfaces; it's about understanding the best methods and tools for each task. From stubborn stains to hard-to-reach spots, our trained professionals know exactly what it takes to achieve a sparkling finish. Our goal is 100% customer satisfaction—so we never leave until every detail is perfect.",
      },
      {
        heading: "5. Affordable and Flexible",
        description:
          "Worried about cost? We offer flexible, budget-friendly plans to fit your financial situation. Whether it's a one-time deep clean or regular cleaning sessions, we provide affordable solutions without compromising on quality. And with discounts for new customers or recurring services, keeping your space clean has never been easier.",
      },
      {
        heading: "6. A Cleaner, Healthier Space",
        description:
          "A clean environment isn't just visually appealing—it's healthier, too. Regular cleaning helps reduce dust, allergens, and germs that can accumulate over time, making your home or office a healthier place to be. Whether it's keeping your gym free from bacteria or ensuring your commercial kitchen passes health inspections, our team will help maintain a space that feels fresh and promotes well-being.",
      },
      {
        heading: "Conclusion: Enjoy a Clean, Comfortable Space",
        description:
          "Your home or office should be a place of comfort and productivity, not stress and clutter. With Safa The Cleaning Services, you can relax, knowing your space is in the hands of professionals who care about delivering quality and satisfaction every time. From residential to commercial cleaning, pest control, and beyond, we're here to ensure your space is spotless—every time.",
      },
    ],
    tags: ["BUSSINESS", "CONSULT", "KEYBOARD", "KIT", "MOUSE", "TECH"],
  },

  {
    blogId: 4,
    heading: "The Benefits of Regular Cleaning: Why Consistency is Key",
    auther: "akshak",
    createdAt: "July 21, 2020",
    role: "Admin",
    discription:
      "Keeping your home or office clean can sometimes feel like a never-ending task. However, regular cleaning is essential—not just for appearances, but for your health, productivity, and peace of mind. We understand the importance of maintaining a clean space and are here to make it easier than ever with our flexible and reliable cleaning solutions.",
    image: cleanerLivingRoom.src,
    numberOfComments: 0,
    noteHeading: "Get in Touch Today!",
    noteDiscription:
      "Ready to make regular cleaning a part of your routine? Contact Us today to discuss our customizable cleaning plans and start enjoying the benefits of a consistently clean space.",
    descriptionList: [
      {
        heading: "1. Improved Health and Hygiene",
        description:
          "One of the main reasons regular cleaning is important is for health. Dust, allergens, bacteria, and germs can quickly build up in your environment, leading to allergies, respiratory issues, or the spread of illnesses. Whether you're dealing with a high-traffic office or a busy home, keeping the space sanitized is crucial. At Safa The Cleaning Services, we use eco-friendly products to ensure a healthy, toxin-free environment for you and your loved ones or colleagues.",
      },
      {
        heading: "2. Enhanced Productivity",
        description:
          "A clean environment isn't just about looks—it directly impacts your mood and productivity. Studies show that cluttered, dirty spaces can cause stress and distract you from tasks. In offices, a well-maintained environment promotes efficiency and keeps employees motivated. When your workspace or living space is fresh and organized, you'll be amazed at how much more productive and focused you feel. Let our team at Safa The Cleaning Services take care of the cleaning, so you can focus on what matters most.",
      },
      {
        heading: "3. Longer-Lasting Furniture and Surfaces",
        description:
          "Dust, dirt, and grime can wear down surfaces over time, shortening the lifespan of your furniture, carpets, and floors. Regular cleaning ensures that these items remain in good condition for years to come, reducing the need for costly repairs or replacements. For commercial spaces, maintaining clean, well-cared-for surfaces reflects positively on your business, showing clients and customers that you value quality and attention to detail.",
      },
      {
        heading: "4. A Stress-Free, Comfortable Environment",
        description:
          "Walking into a clean, fresh space instantly makes you feel better. The stress of clutter or mess can be overwhelming, but with regular cleaning, you can enjoy peace of mind knowing that your environment is always under control. Whether you're coming home after a long day or welcoming clients to your office, a clean space creates a positive atmosphere that everyone can appreciate.",
      },
      {
        heading: "5. Cost-Effective in the Long Run",
        description:
          "Many people put off cleaning or opt for occasional deep cleans to save time or money. However, regular cleaning is actually more cost-effective in the long run. Routine maintenance prevents the buildup of dirt and grime, reducing the need for more intensive, expensive cleaning services later. It also helps maintain the quality of your space, avoiding damages that can lead to expensive repairs or replacements.",
      },
      {
        heading: "6. Convenient and Customizable Services",
        description:
          "At Safa The Cleaning Services, we offer flexible, tailored cleaning plans to suit your needs. Whether you need a weekly, bi-weekly, or monthly service, we work around your schedule to provide convenient cleaning solutions. We handle everything from residential spaces to commercial offices, gyms, and kitchens. Plus, with our natural cleaning products and owner-operated approach, you can trust that every clean will be high-quality and eco-friendly.",
      },
      {
        heading: "Conclusion: Stay Consistent with Your Cleaning Routine",
        description:
          "Consistency is key when it comes to maintaining a clean and healthy space. With regular professional cleaning, you can enjoy a home or office that's always fresh, inviting, and hygienic. At Safa The Cleaning Services, we're committed to providing affordable, high-quality cleaning that meets your unique needs. Let us take the hassle out of cleaning, so you can enjoy a space that's always at its best.",
      },
    ],
    tags: ["CLEAN", "ROOM", "UX"],
  },
];

export default Blogs;
