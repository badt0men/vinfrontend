import type { NextPage } from 'next'
import { Header } from '../src/components/common/header/Header'
import React from 'react'
import Head from 'next/head'

const Index: NextPage = () => {
  return (
    <>
    <Head>
      <title>VinFrontend</title>
      <meta name="description" content="VinFrontend" />
      <meta name="keywords" content="VinFrontend, Vehicle Vin Checker" />
    </Head>
    <Header/>
    </>
  )
}

export default Index
