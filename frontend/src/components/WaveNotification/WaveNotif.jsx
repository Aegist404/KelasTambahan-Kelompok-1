import React from "react";

const WaveNotif = (props) => {
  return (
    <div className={`my-20 ${props.isDisable}`}>
      <h1 className="text-[50px] bg-gradient-to-r from-[#8176af] to-[#a39dbe] rounded-full w-[150px] h-[150px] flex justify-center items-center border-8 border-[#0d0d0ddc] text-[#0d0d0ddc] font-extrabold">
        {props.number}
      </h1>
      <div className="flex mt-5">
        <img src="./images/icons/arrowRight.svg" alt="" />
        <h3 className="text-white font-bold ms-3 text-[18px]">
          Gelombang {props.number}
          {props.isOpen == true ? (
            <p className=" text-green-500">Terbuka</p>
          ) : (
            <p className=" text-red-500">Tutup</p>
          )}
        </h3>
      </div>
    </div>
  );
};

export default WaveNotif;
