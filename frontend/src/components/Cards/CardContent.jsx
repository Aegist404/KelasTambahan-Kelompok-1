import React from 'react'

const CardContent = ({ imageSrc, title, description }) => {
    return (
      <div className="mx-auto shadow-xl rounded-xl overflow-hidden"
      style={{
        width: "250px",
        height: "400px",
        background: "#211E2E",
        backgroundImage: "radial-gradient(circle at center, rgba(67, 61, 96, 0.7) 0%, rgba(67, 61, 96, 0) 70%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px"
      }}
      
      >
        <div className="relative">
          <div className="">
          <div className="flex justify-center items-center">
          <img
            className="object-cover object-center rounded-full mt-2"
            src={imageSrc}
            alt={title}
            style={{ border: "10px solid #0E0E0E", borderRadius: "50%", width: "150px", height: "150px" }}
          />
  </div>
          </div>
        </div>
        <div className="py-5 px-6 text-center ">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px' }}>
            {title}
          </h2>
          <hr className="w-40 mx-auto mb-4 border-b-2 border-purple-200 opacity-50" />
          <p className="mt-2 text-base" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }}>
            {description}
          </p>
          <div className="mt-4">
          <div className="flex justify-center items-center mt-4">
            <div className="px-4 py-2 rounded-md hover:from-purple-600 hover:to-purple-400 text-center mx-auto" style={{ backgroundImage: 'linear-gradient(to right, #8176AF, #C0B7E8)', borderRadius: '20px', width:"120px", height:"30px", display: "flex", alignItems: "center" }}>
              <button style={{ color: '#343045', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', margin: "0 auto" }}>Selengkapnya</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  };

  export default CardContent;