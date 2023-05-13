import Image from "next/image";

const Jumbotron = () => {
  return (
    <div>
      <div className="px-20 flex justify-between items-center text-white">
        <div>
          <h1 className="font-extrabold text-white tracking-tight md:text-4xl">
            <span className="text-white"><span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-300 to-purple-400">Motto</span> sekolah</span>
            <br />
            <span className="text-white">
              Lorem <span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-400 to-purple-300">Ipsum Dolor!</span>
            </span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />{" "}
            nisl tincidunt eget. Lectus mauris eros in vitae .
          </p>
          <div className="mt-4 flex">
            <a
              href="#"
              className="bg-gradient-to-r from-purple-400 to-purple-400 rounded-full flex py-2 px-6"
            >
              <span className="text-black font-bold mt-0.5 text-sm">SELENGKAPNYA</span>
              <img
                src="/images/icons/arrow.svg"
                alt="arrowRight"
                className="ml-2 mt-0.4"
              />
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/images/sekolah.png"
            alt="Gambar"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;