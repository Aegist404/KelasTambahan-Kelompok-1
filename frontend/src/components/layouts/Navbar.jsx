const Navbar = () => {
  return (
    <nav className=" flex  text-[#FFFFFF] py-[20px]">
      <div className="flex items-center ps-[50px] w-full">
        <img src="./Logo.png" alt="logo sekolah" className="w-20 me-2" />
        <p className="text-[#C0B7E8] text-[20px] w-full">
          {" "}
          <b>NAMA SEKOLAH</b>
        </p>
      </div>
      <div className="flex text-small  items-center justify-end gap-3 w-full">
        <div className="flex">
          <a href className="block px-4 py-5">
            Home
          </a>
          <a href className="block px-4 py-5">
            Tentang
          </a>
          <div className="block text-black bg-transparent"></div>
          <select
            name="Program Keahlian"
            id=""
            className="bg-transparent text-white  rounded-md py-1 px-3 me-3"
          >
            <option value="">Program Keahlian</option>
            <option value="">RPL</option>
            <option value="">Akutansi</option>
            <option value="">Perhotelan</option>
          </select>
          <select
            name="Ektrakulikuler"
            id=""
            className="bg-transparent text-white  rounded-md py-1 px-3 "
          >
            <option value="">Ektrakulikuler</option>
            <option value="">Pc</option>
            <option value="">Jurnal</option>
            <option value="">English Club</option>
          </select>
        </div>
        <div className="w-[300px] flex me-[60px]">
          <button className=" w-[300px] py-2 border-2  rounded-[25px] me-3 ">
            Hubungi Kami
          </button>
          <button className=" w-[300px] py-2 rounded-[25px] bg-gradient-to-r from-purple-800 to-purple-100 text-black">
            PPDB
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
