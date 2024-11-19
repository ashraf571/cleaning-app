import HeroArea from '@/components/molecules/HeroArea/HeroArea'
import ServiceSection from '@/components/organisms/ServiceSection/ServiceSection'
import Topbar from '@/components/organisms/Topbar/Topbar'
import React from 'react'

const service = () => {
  return (
    <div>
        <Topbar />
        <HeroArea />
        <ServiceSection />
    </div>
  )
}

export default service