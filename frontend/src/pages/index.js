import React from "react";
import MainContent from "@/components/Cards/MainContent";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import InfoContact from "@/components/InfoContact/InfoContact";
import Navbar from "@/components/layouts/Navbar";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* End */}
      {/* Jumbotron */}
      <Jumbotron />
      {/* Info Contact */}
      <InfoContact />
      
      {/* End */}
      {/* Jurusan */}
      <MainContent />
      {/* End */}
    </>
  );
};

export default Home;