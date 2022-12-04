/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ResumeSection = () => {
  return (
    <div className="container mx-auto w-full h-full " id="Timeline">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <h1 className="text-[60px] font-bold text-center pb-[50px] dark:text-white text-gray-800">Timeline</h1>
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-white h-full border left-[50%]"></div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-black">1</h1>
          </div>
          <div className="order-1 dark:bg-gray-400 bg-[#EBEBEB] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 md:text-xl text-sm ">
              Woranari Chaloem Songkhla School
            </h3>
            <h3 className="mb-3 font-bold text-gray-800 md:text-xl text-sm">2012-2017</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              High School Certificate equivalent at Woranari Chaloem Songkhla
              School (WCS)
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white dark:text-black font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-[#191D24] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white md:text-xl text-sm">
              Rangsit University
            </h3>
            <h3 className="mb-3 font-bold text-white md:text-xl text-sm">2018-2021</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Bachelor's degree <span className="text-[#36D399]">First Class Honors</span> at Rangsit University (RSU), Computer Game Multimedia (CGM)
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-black">3</h1>
          </div>
          <div className="order-1 dark:bg-gray-400 bg-[#EBEBEB] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 md:text-xl text-sm">
              VIZ STUDIO
            </h3>
            <h3 className="mb-3 font-bold text-gray-800 md:text-xl text-sm">2021-2022</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              Develop Website with wordpress or Next.js and Filter Effect to share in social platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
