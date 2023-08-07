import React from "react";

import Image from "next/image";
import cert01 from "../public/img/cert/certificate01.webp";

const certificate = () => {
  return (
    <div className="container mx-auto py-[100px]">
      <div className="flex flex-col justify-center items-center">
        <Image src={cert01} alt="resume" className=" w-[800px] h-auto" />
      </div>
    </div>
  );
};

export default certificate;
