const Tentang = () => {
  return (
    <>
      <div className="">
        <h1 className="text-white text-center text-4xl mt-10">Tentang</h1>
        <hr className="w-[60%] ml-[20%] mt-8 border border-solid border-purple-300 h-0,5 bg-purple-300" />
      </div>
      <div className="">
        <img src="./sekolah.png" alt="" className="mt-10 mb-10 ml-[5%]" />
        <h1 className="font-extrabold text-white tracking-tight md:text-5xl text-center mt-4 mb-4">
          NAMA SEKOLAH
        </h1>
        <div className="text-center mb-10">
          <a href="/Detail" className="mx-10 text-[#E85A5A]">
            #1
          </a>
          <a href="http://" className="mx-10 text-[#E8D95A]">
            #2
          </a>
          <a href="http://" className="mx-10 text-[#E8AF5A]">
            #3
          </a>
          <a href="http://" className="mx-10 text-[#7FE85A]">
            #4
          </a>
        </div>

        <p className="text-white mx-[15%]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum." <br /> <br />
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
      </div>
      <div className="">
        <h1 className="font-extrabold text-white tracking-tight md:text-4xl text-left mx-[15%] mt-20 mb-10">
          VISI DAN MISI SEKOLAH
        </h1>
        <table className="mx-[15%] table-auto w-[85%] mb-10">
          <tr className="text-left text-xl mb-5">
            <th className="text-[#9BB848]">VISI</th>
            <th className="text-[#48B8AA]">MISI</th>
            <th className="text-[#B84848]">KEBIJAKAN MUTU</th>
          </tr>
          <tr className="text-white text-left pt-5">
            <th>
              Terwujudnya tamatan <br /> yang berkarakter kuat, <br /> siap
              bekerja dan <br />
              berwirausaha dengan <br /> berbasis teknologi yang <br />{" "}
              berwawasan lingkungan
            </th>
            <th>
              1. Mengembangkan sarana prasarana, <br /> pendidik dan tenaga
              kependidikan, <br /> kurikulum, kemitraan dengan Dunia <br />{" "}
              Kerja. <br />
              2. Mewujudkan pendidikan vokasi <br /> yang berkarakter dan
              berkualitas.
            </th>
            <th>
              <li>V : Visionare</li>
              <li>I : Inovatif</li>
              <li>S : Sinergi</li>
              <li>K : Kreatif</li>
              <li>A : Akuntable</li>
            </th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Tentang;
