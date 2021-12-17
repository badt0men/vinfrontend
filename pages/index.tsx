import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../src/components/content/home/HeroSection'
import HistoryReport from '../src/components/content/home/HistoryReport'
import WhatWeOffer from '../src/components/content/home/WhatWeOffer'
import Benefit from '../src/components/content/home/Benefit'
import UserReview from '../src/components/content/home/UserReview'

const Index: NextPage = () => {
  return (
    <>
    <Head>
      <title>OnGAD VIN Check</title>
      <meta name="description" content="OnGAD VIN Check" />
      <meta name="keywords" content="OnGAD, Vehicle Vin Checker" />
    </Head>
    <HeroSection />
    <HistoryReport />
    <WhatWeOffer />
    <Benefit />
    <UserReview />
    </>
  )
}
export default Index
