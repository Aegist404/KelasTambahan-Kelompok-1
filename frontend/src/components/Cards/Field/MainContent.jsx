import React from "react";
import CardContent from "./CardContent";

const MainContent = () => {
  return (
    <div>
      <div className="flex justify-center flex-wrap flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-2 md:w-4/5 mx-auto">
          <CardContent
            imageSrc="/RPLLogos.jpg"
            title="RPL"
            description="Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
          />
          <CardContent
            imageSrc="/DKVLogos.jpg"
            title="DKV"
            description="Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
          />
          <CardContent
            imageSrc="/PFPTLogos.jpg"
            title="PFPT"
            description="Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
          />
          <CardContent
            imageSrc="/OTKPLogos.png"
            title="OTKP"
            description="Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
