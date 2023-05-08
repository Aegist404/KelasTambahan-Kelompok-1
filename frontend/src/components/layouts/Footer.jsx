import React, { useEffect, useState } from "react";

const Footer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData("hello rendi");
  });

  return <div>{data}</div>;
};

export default Footer;
