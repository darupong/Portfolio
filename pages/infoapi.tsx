import Link from "next/link";
import React from "react";

const infoapi = () => {
  return (
    <div className="container mx-auto py-[100px] h-screen">
      <h1 className="md:text-[60px] text-[30px] font-bold text-center dark:text-white text-gray-800">
        API Information <span className="text-[#36D399]">( Beta )</span>
      </h1>
      <p className="font-bold text-error text-center pb-[50px]">
        Warning! Dark Theme and Mobile Responsive is not match with Antd Table.
      </p>
      <div className=" flex flex-col justify-center text-center">
        <Link href="/infoapi/basiccrud" className="text-[#36D399] underline">
          Basic CRUD
        </Link>
        <Link href="/infoapi/covidinfo" className="text-[#36D399] underline">
          Covid Information
        </Link>
        <Link href="/infoapi/catboys" className="text-[#36D399] underline">
          Random Catboys
        </Link>
        <Link href="/infoapi/waifupic" className="text-[#36D399] underline">
          Random Waifu
        </Link>
      </div>
    </div>
  );
};

export default infoapi;
