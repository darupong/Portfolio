import Link from "next/link";
import React from "react";

const infoapi = () => {
  return (
    <div className="container mx-auto py-[100px] h-screen">
      <h1 className="text-[60px] font-bold text-center pb-[50px] dark:text-white text-gray-800">
        API Information <span className="text-[#36D399]">( Beta )</span>
      </h1>
      <div className=" flex flex-col justify-center text-center">
        <Link href="/infoapi/covidinfo" className="text-[#36D399]">
          Covid Information
        </Link>
        <Link href="/infoapi/catboys" className="text-[#36D399]">
          Random Catboys
        </Link>
      </div>
    </div>
  );
};

export default infoapi;
