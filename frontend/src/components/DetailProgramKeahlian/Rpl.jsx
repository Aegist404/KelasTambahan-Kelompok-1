const Rpl = () => {
  return (
    <>
      <div className="">
        <h1 className="font-extrabold text-white tracking-tight md:text-4xl text-center mt-4">
          Rekayasa{" "}
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-300 to-purple-400">
            Perangkat{" "}
          </span>{" "}
          Lunak
        </h1>
        <hr className="w-[60%] ml-[20%] mt-4 border border-solid border-purple-300 h-1 bg-purple-300"/>
      </div>

      <div className="flex justify-center">
          <img
            src="./images/programer.png"
            alt="Gambar"
            width={800}
            className="mt-[-120px] ml-[80px]"
          />  
        <div className="w-1/2  text-white ml-[-140px] mt-[80px]">
          <p>
            <b>RPL</b> atau dalam bahasa Inggris : Software <br /> Engineering atau SE adalah
            satu bidang <br /> profesi yang mendalami cara-cara <br /> pengembangan perangkat
            lunak termasuk <br /> pembuatan, pemeliharaan, manajemen <br /> organisasi
            pengembanganan perangkat <br /> lunak dan manajemen kualitas. <br /><br />
            <b>Rekayasa perangkat lunak</b> adalah <br /> pengubahan perangkat lunak itu sendiri <br /> guna
            mengembangkan, memelihara, dan <br /> membangun kembali dengan <br /> menggunakan
            prinsip rekayasa untuk <br /> menghasilkan perangkat lunak yang dapat <br />
            bekerja lebih efisien dan efektif untuk pengguna.
          </p>
        </div>
      </div>

      <div className="text-white flex gap-20">
        <p className="ml-[150px] mt-[-100px]">Kelas Industri dengan program Nusa Development <br /> Program yang bekerja sama dengan PT. Solusi Teknologi <br /> Nusantara. Nusantech merupakan sebuah perusahaan <br /> yang berfokus pada layanan dan pengembangan <br /> teknologi informasi. Kerja sama yang dilakukan dengan <br /> SMKN 6 Surakarta adalah Kelas Industri, Magang Siswa, <br /> dan Perekrutan Lulusan.</p>
        <img src="./images/arrowLeft.png" className="absolute ml-[50%] mt-[-100px]"/>
        <h1 className="text-4xl ml-[245px] mt-[-95px] font-bold">Keunggulan</h1><span className="text-2xl absolute ml-[69%] mt-[-50px]">RPL</span>
      </div>

      <div className="flex text-white justify-around mt-[100px] h-[90vh]">
        <div className="border-2 border-solid border-white w-[27%] h-[30rem] rounded-3xl font-bold">
          <h1 className="text-center text-2xl mt-5"><span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-300 to-purple-400 ">Kerangka</span> Kurikulum</h1>
          <p className="border-l-2 border-blue-500  ml-10 pl-5 mt-10">Personal Komputer & Jaringan (merakit, instalasi dan menggunakan sistem operasi)</p>
            <br />
            <p className="border-l-2 border-blue-500 ml-10 pl-5 mt-10">Menggunakan Bahasa Pemrograman Komputer (Desktop/Web/Mobile)</p>
            <br />
            <p className="border-l-2 border-blue-500 ml-10 pl-5 mt-10">Merancang, membuat dan mengelola aplikasi pengelolaan database</p>
        </div>

        <div className="border-2 border-solid border-white w-[27%] h-[30rem] rounded-3xl font-bold ml-[-400px]">
        <h1 className="text-center text-2xl mt-5"><span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-300 to-purple-400">Pekerjaan</span> Lulusan </h1>
        <div className="mt-[45px]">
          <div className="flex mb-[33px]">
          <img src="./images/icons/arrowRight2.svg" className="w-[25px] ml-[55px] text-red-500"/><h1 className="ml-3">Software Engineer</h1>
          </div>
          <div className="flex mb-[33px]">
          <img src="./images/icons/arrowRight2.svg" className="w-[25px] ml-[55px]"/><h1 className="ml-3">Database Engineer</h1>
          </div>
           <div className="flex mb-[33px]">
          <img src="./images/icons/arrowRight2.svg" className="w-[25px] ml-[55px]"/><h1 className="ml-3">Software Tester</h1>
          </div>
          <div className="flex mb-[33px]">
            <img src="./images/icons/arrowRight2.svg" className="w-[25px] ml-[55px]"/><h1 className="ml-3">Game Developer</h1>
          </div>
          <div className="flex mb-[33px]">
            <img src="./images/icons/arrowRight2.svg" className="w-[25px] ml-[55px]"/><h1 className="ml-3">Web Development</h1>
          </div>
          <div className="flex mb-[33px]">
            <img src="./images/icons/arrowRight2.svg" className="w-[25px] ml-[55px]"/><h1 className="ml-3">Konsultan IT</h1>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Rpl;
