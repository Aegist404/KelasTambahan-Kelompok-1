import React from "react";
import MainContent from "@/components/Cards/MainContent";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import InfoContact from "@/components/InfoContact/InfoContact";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Paskibra from "@/components/Extrakulikuler/Paskibra";

const Home = () => {
  return (
    <>
      <div className="bg-purple-950">
        {/* Navbar */}
        <Navbar />
        <Paskibra />
        {/* End */}
        {/* Jumbotron */}
        {/* <Jumbotron /> */}
        {/* Info Contact */}
        {/* <InfoContact /> */}

        {/* End */}
        {/* Jurusan */}
        {/* <MainContent /> */}
        {/* End */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
