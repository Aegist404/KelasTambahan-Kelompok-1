import React from "react";
import MainContent from "@/components/Cards/MainContent";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import InfoContact from "@/components/InfoContact/InfoContact";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import InfoDescription from "@/components/Informations/InfoDescription";
import WaveNotif from "@/components/WaveNotification/WaveNotif";
import CardNews from "@/components/Cards/CardNews/CardNews";

const Home = () => {
  const bgImg = {
    backgroundImage: "url('./images/backgrounds/background1.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "-10px 0px",
    color: "white",
    padding: "100px 0",
  };
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

      {/* Sejarah sekolah */}
      <InfoDescription
        titleOne="Sejarah Sekolah"
        titleTwo="Nama Sekolah"
        desc=" Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae."
        showBtn={false}
      />
      <div className="flex px-20">
        <div>
          <img src="./kepala-sekolah.png" alt="" className="" />
        </div>
        <div className="w-[50%] ms-28 text-white">
          <h1 className="text-[24px] ">
            <span className="text-[28px] font-extrabold">Kepala Sekolah</span>{" "}
            <br /> Nama Nama Kepala Sekolah
          </h1>
          <p className="py-6 text-[#c9c9c9]">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor. (Sambutan kepsek)
          </p>
        </div>
      </div>
      {/* end */}

      {/* Jurusan */}
      <InfoDescription
        titleOne="Program Keahlian"
        titleTwo="Apa Saja ?"
        desc=" Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae."
        showBtn={false}
      />
      <MainContent />
      {/* End */}

      {/* other content */}
      <div className="px-20">
        <div style={bgImg}>
          <h1 className="text-center text-[30px] font-extrabold">
            NAMA SEKOLAH <br />
            <span className="font-normal">BERKOLABORASI DENGAN</span>
          </h1>
        </div>
        <div className="flex justify-between my-24">
          <img src="./images/logo/nusantech.png" alt="" />
          <img src="./images/logo/gamelab.png" alt="" />
          <img src="./images/logo/sinarmas.png" alt="" />
          <img src="./images/logo/astra.png" alt="" />
        </div>
      </div>
      {/* end */}

      {/* PPDB */}
      <InfoDescription
        titleOne="PPDB ONLINE"
        titleTwo="2023 / 2024"
        desc=" Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae."
        showBtn={true}
      />
      <h1 className="font-extrabold text-center text-white text-[26px]">
        Informasi Gelombang
      </h1>
      <div className="flex justify-between px-36">
        <WaveNotif isDisable="opacity-50" number="01" />
        <WaveNotif number="02" isOpen={true} />
        <WaveNotif isDisable="opacity-50" number="03" />
        <WaveNotif isDisable="opacity-50" number="04" />
      </div>
      {/* END */}

      {/* News */}
      <div className="mb-28 px-28">
        <h1 className="text-white text-center mx-auto font-extrabold text-[30px] border-b-2 border-b-white w-[60%] py-7">
          News
        </h1>
        <div className="mt-10 flex justify-between flex-wrap">
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
      </div>
      {/* End */}

      <Footer />
    </>
  );
};

export default Home;
