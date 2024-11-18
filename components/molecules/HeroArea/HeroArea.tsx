'use client'

import { usePathname } from "next/navigation";
import BackgroundSection from "../../atoms/BackgroundHeroSection/BackgroundHeroSection";
import HeroAreaHeading from "@/components/atoms/HeroAreaHeading/HeroAreaHeading";
import HeroAreaSubHeading from "@/components/atoms/HeroAreaSubHeading/HeroAreaSubHeading";
import { retriveHeroAreaBackgroundImage } from "@/utils/Utils";
const HeroArea = () => {
    const pathName = usePathname()
    const removeSlash = pathName.slice(1)
    const capitlizeFirstLetter : string =  removeSlash.charAt(0).toUpperCase() + removeSlash.slice(1)
    const imagePath = retriveHeroAreaBackgroundImage(capitlizeFirstLetter)
    return (
    <div className="relative">
        {capitlizeFirstLetter.length > 0 && capitlizeFirstLetter !== "Blog" ? 
            <BackgroundSection imageUrl={imagePath}>
                <div className= "flex font-bold text-white flex-col justify-center items-center h-full">
                    {/* <h1 className="text-5xl font-bold">Welcom My App</h1> */}
                    <HeroAreaHeading heading={capitlizeFirstLetter} />
                    <HeroAreaSubHeading path={capitlizeFirstLetter} />
                </div>
            </BackgroundSection>
        // : capitlizeFirstLetter === "Blog" ? 
        // <div className="">
        //     <div className= "flex text-white flex-col justify-center items-center h-full">
        //             {/* <h1 className="text-5xl font-bold">Welcom My App</h1> */}
        //             <HeroAreaHeading heading={capitlizeFirstLetter} />
        //             <HeroAreaSubHeading path={capitlizeFirstLetter} />
        //         </div>
        // </div>
        : "" }
    </div>
  );
}

export default HeroArea
