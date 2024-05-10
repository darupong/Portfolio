/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTranslation } from "next-i18next";

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto w-full h-full " id="Timeline">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <h1 className="text-[60px] font-bold text-center pb-[50px] dark:text-white text-gray-800">
          {t("timeline")}
        </h1>
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-white h-full border left-[50%]"></div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-black">
              1
            </h1>
          </div>
          <div className="order-1 dark:bg-gray-400 bg-[#EBEBEB] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 md:text-xl text-sm ">
              {t("wcs")}
            </h3>
            <h3 className="mb-3 font-bold text-gray-800 md:text-xl text-sm">
              {t("feb")} 2012 - {t("may")} 2017 ( {t("wcsProgram")} )
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              {t("wcsDescription")}
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white dark:text-black font-semibold text-lg">
              2
            </h1>
          </div>
          <div className="order-1 bg-[#191D24] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white md:text-xl text-sm">
              {t("university")}
            </h3>
            <h3 className="mb-3 font-bold text-white md:text-xl text-sm">
              {t("may")} 2018 - {t("dec")} 2021 ({" "}
              <span className=" text-[#36D399]">Unity Game Developer</span> )
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              [ <span className="text-[#36D399]">GPA 3.56</span> ]{" "}
              {t("bachelor")}
              <span className="text-[#36D399]"> {t("firstclasshonor")}</span> at
              Rangsit University (RSU), Computer Game Multimedia (CGM)
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-black">
              3
            </h1>
          </div>
          <div className="order-1 dark:bg-gray-400 bg-[#EBEBEB] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 md:text-xl text-sm">
              {t("viz")}
            </h3>
            <h3 className="mb-3 font-bold text-gray-800 md:text-xl text-sm">
              {t("jul")} 2021 - {t("jan")} 2023 (
              <span className="dark:text-gray-800 text-[#36D399]">
                {" "}
                {t("intern")} Game Dev. / Programmer{" "}
              </span>{" "}
              )
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              {t("responsibility")}:
            </p>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              ⭐️ {t("vizres1")}
            </p>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              ⭐️ {t("vizres2")}
            </p>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              ⭐️ {t("vizres3")}
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white dark:text-black font-semibold text-lg">
              4
            </h1>
          </div>
          <div className="order-1 bg-[#191D24] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white md:text-xl text-sm">
              {t("pir")}
            </h3>
            <h3 className="mb-3 font-bold text-white md:text-xl text-sm">
              {t("feb")} 2023 - {t("may")} 2023 (
              <span className="text-[#36D399]"> Front-end Developer </span>)
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              {t("responsibility")}:
            </p>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              ⭐️ {t("pirres1")}
            </p>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              ⭐️ {t("pirres2")}
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-black">
              5
            </h1>
          </div>
          <div className="order-1 dark:bg-gray-400 bg-[#EBEBEB] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 md:text-xl text-sm">
              {t("vir")}
            </h3>
            <h3 className="mb-3 font-bold text-gray-800 md:text-xl text-sm">
              {t("sep")} 2023 - Current (
              <span className="dark:text-gray-800 text-[#36D399]">
                {" "}
                Full Stack Developer
              </span>{" "}
              )
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              {t("responsibility")}:
            </p>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              ⭐️ {t("virres1")}
            </p>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              ⭐️ {t("virres2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
