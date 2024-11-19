import HeroArea from '@/components/molecules/HeroArea/HeroArea'
import Gallery from '@/components/organisms/Gallery/Gallery'
import Topbar from '@/components/organisms/Topbar/Topbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Topbar />
        <HeroArea />
        <Gallery />
    </div>
  )
}

export default page