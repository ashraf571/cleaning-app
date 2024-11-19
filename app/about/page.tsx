import React from 'react'

import HeroArea from '@/components/molecules/HeroArea/HeroArea'
import WhoAreWe from '@/components/organisms/WhoAreWe/WhoAreWe'
import OurMission from '@/components/organisms/OurMission/OurMission'

const page = () => {
  return (
    <div>
        <HeroArea />
        {/* <WhoAreWe /> */}
        <OurMission />
    </div>
  )
}

export default page