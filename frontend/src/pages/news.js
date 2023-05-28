import React from 'react'
import Content from "@/components/News/Content";
import Documentation from "@/components/News/Documentation";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";


const news = () => {
  return (
    <>
        <Navbar/>
        <Content/>
        <Documentation/>
        <Footer/>
    </>
  )
}

export default news
