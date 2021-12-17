import React from 'react'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'

export default function Layout({ children }: any) {
    return (
        <>
        <Header/>
            {children}
        <Footer />
        </>
    )
}
