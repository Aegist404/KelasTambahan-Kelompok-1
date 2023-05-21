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
        <hr className="w-[60%] ml-[20%] mt-4 py-2" />
      </div>

      <div className="flex justify-center">
          <img
            src="./images/programer.png"
            alt="Gambar"
            width={800}
            className="mt-[-120px] ml-[60px]"
          />  
        <div className="w-1/2  text-white ml-[-140px] mt-[80px]">
          <p>
            <b>RPL</b> atau dalam bahasa Inggris : Software <br /> Engineering atau SE adalah
            satu bidang <br /> profesi yang mendalami cara-cara <br /> pengembangan perangkat
            lunak termasuk <br /> pembuatan, pemeliharaan, manajemen <br /> organisasi
            pengembanganan perangkat <br /> lunak dan manajemen kualitas. <br /><br />
            <b>Rekayasa perangkat lunak</b> adalah <br /> pengubahan perangkat lunak itu sendiri <br /> guna
            mengembangkan, memelihara, dan <br /> membangun kembali dengan <br /> menggunakan
            prinsip reakayasa untuk <br /> menghasilkan perangkat lunak yang dapat <br />
            bekerja lebih efisien dan efektif untuk pengguna.
          </p>
        </div>
      </div>

      <div className="text-white flex gap-20">
        <p className="ml-[130px] mt-[-50px]">Kelas Industri dengan program Nusa Development <br /> Program yang bekerja sama dengan PT. Solusi Teknologi <br /> Nusantara. Nusantech merupakan sebuah perusahaan <br /> yang berfokus pada layanan dan pengembangan <br /> teknologi informasi. Kerja sama yang dilakukan dengan <br /> SMKN 6 Surakarta adalah Kelas Industri, Magang Siswa, <br /> dan Perekrutan Lulusan.</p>
        <img src="./images/arrowLeft.png" className="absolute ml-[50%] mt-[-40px]"/>
        <h1 className="text-4xl ml-[260px] mt-[-40px] font-bold">Keunggulan</h1><span className="text-2xl absolute ml-[69%]">RPL</span>
      </div>
    </>
  );
};

export default Rpl;
