import React from 'react'

import HeroArea from '@/components/molecules/HeroArea/HeroArea'
import WhoAreWe from '@/components/organisms/WhoAreWe/WhoAreWe'
import OurMission from '@/components/organisms/OurMission/OurMission'
import HowWeWork from '@/components/organisms/HowWeWork/HowWeWork'
import Topbar from '@/components/organisms/Topbar/Topbar'

const page = () => {
  return (
    <div>
        <Topbar />
        <HeroArea />
        {/* <WhoAreWe /> */}
        <OurMission />
        <HowWeWork />
    </div>
  )
}

export default page