import React from 'react';

const CollaborationHeader = () => {
  return (
<div
  className="relative h-60 mx-4 md:mx-40 rounded-3xl my-8 overflow-hidden px-4 py-2 text-center mx-auto md:w-4/5"
  style={{
    background: "linear-gradient(to right, #8176AF, #C0B7E8)",
    borderRadius: "100px",
    display: "flex",
    alignItems: "center",
  }}
  >
<div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: "url('/bgheader-collab.jpg')",}} />
  <div className="absolute inset-0 bg-black opacity-70 flex flex-col justify-center items-center text-white font-bold text-xl p-6">
    <h2
      className="text-2xl mb-2" style={{ fontWeight: "bold", fontFamily: "Montserrat, sans-serif", fontSize: "36px", }} > Nama Sekolah
    </h2>
    <p className="text-gray-200 my-2" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "25px", }}>
      Berkolaborasi dengan
    </p>
  </div>
</div>

  );
};

export default CollaborationHeader;
