/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ToolsSection = () => {
  return (
    <div className={` py-[50px] container mx-auto`}>
      <div className="mockup-window dark:bg-base-300 bg-slate-400">
        <div className="flex justify-center px-4 py-16 dark:bg-base-200 bg-[#EBEBEB]">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 ">
            <div className="mockup-window border bg-base-300 lg:w-[500px] w-[300px] h-auto">
              <div className="flex flex-col justify-center px-4">
                <p className=" font-bold text-[20px] text-center pb-2">High School Certificate equivalent</p>
                <p className=" font-bold text-[15px] text-center text-white py-2 bg-[#36D399] mx-40 rounded-full">2012 - 2018</p>
                <p className=" text-[20px] text-center py-2 text-[#FBBD23]">English - Math Program</p>
                <p className=" text-[20px] text-center py-2">Woranari Chaloem Songkhla School</p>
              </div>
            </div>
            <div className="mockup-window border bg-base-300 lg:w-[500px] w-[300px] h-auto">
              <div className="flex justify-center px-4 ">
              <p className=" font-bold text-[20px] text-center">Bachelor's degree</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
