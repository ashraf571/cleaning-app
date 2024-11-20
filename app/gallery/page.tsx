import HeroArea from '@/components/molecules/HeroArea/HeroArea'
import Footer from '@/components/organisms/FooterSection/Footer'
import Gallery from '@/components/organisms/Gallery/Gallery'
import Topbar from '@/components/organisms/Topbar/Topbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroArea />
        <Gallery />
    </div>
  )
}

export default page