import React from "react";

const InfoDescription = (props) => {
  const showBtn = props.showBtn;
  return (
    <div className="flex px-20 py-20 mt-10">
      <div className="w-[50%]">
        <div className="flex">
          <h1 className="text-[26px] text-white">
            <span className="text-[30px] font-extrabold">{props.titleOne}</span>
            <br /> {props.titleTwo}
          </h1>
          <img
            src="./images/icons/arrowRigthLong.png"
            alt=""
            className=" mt-8 mx-10"
          />
        </div>
      </div>
      <div className="w-[50%]">
        <p className="text-[#c9c9c9]">{props.desc}</p>
        {showBtn && (
          <button className="text-white bg-gradient-to-r from-[#8176AF] to-[#a39dbe] rounded-full flex py-2 px-6 mt-7">
            Daftar Online{" "}
            <img className="ms-5" src="./images/icons/arrowRight.svg" alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InfoDescription;
