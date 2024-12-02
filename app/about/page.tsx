import React from "react";

import HeroArea from "@/components/molecules/HeroArea/HeroArea";
import WhoAreWe from "@/components/organisms/WhoAreWe/WhoAreWe";
import OurMission from "@/components/organisms/OurMission/OurMission";
import HowWeWork from "@/components/organisms/HowWeWork/HowWeWork";

const page = () => {
  return (
    <div>
      <HeroArea />
      <WhoAreWe />
      <OurMission />
      <HowWeWork />
    </div>
  );
};

export default page;
