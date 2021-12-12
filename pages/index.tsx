import type { NextPage } from 'next'
import { Header } from '../src/components/common/header/Header'
import React from 'react'
import Head from 'next/head'
import HeroSection from '../src/components/content/home/HeroSection'
import HistoryReport from '../src/components/content/home/HistoryReport'
import WhatWeOffer from '../src/components/content/home/WhatWeOffer'
import Benefit from '../src/components/content/home/Benefit'

const Index: NextPage = () => {
  return (
    <>
    <Head>
      <title>VinFrontend</title>
      <meta name="description" content="VinFrontend" />
      <meta name="keywords" content="VinFrontend, Vehicle Vin Checker" />
    </Head>
    <Header/>
    <HeroSection />
    <HistoryReport />
    <WhatWeOffer />
    <Benefit />
    </>
  )
}

export default Index
