import React from "react";
import Image from "next/image";

import resumeimg from "../public/img/Resume.png";

const resume = () => {
  return (
    <div className="container mx-auto py-[100px]">
      <div className="flex flex-col justify-center items-center">
        <Image src={resumeimg} alt="resume" className=" w-[600px] h-auto" />
      </div>
    </div>
  );
};

export default resume;
