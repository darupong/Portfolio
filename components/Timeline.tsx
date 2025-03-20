import React from "react";
import { useTranslation } from "next-i18next";

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto w-full h-full px-4" id="Timeline">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <h1 className="text-3xl md:text-5xl font-bold text-center pb-10 dark:text-white text-gray-800">
          {t("timeline")}
        </h1>
        <div className="border-2 absolute border-opacity-20 border-gray-700 dark:border-white h-full left-[50%] translate-x-[-50%] hidden md:block"></div>
        {/* Timeline Item */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full right-timeline">
          <div className="order-1 w-full md:w-5/12 hidden md:block"></div>
          {/* ตัวเลข: แสดงเฉพาะในหน้าจอใหญ่ */}
          <div className="z-20 items-center order-1 bg-gray-800 dark:bg-white shadow-xl w-8 h-8 rounded-full hidden md:flex">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-black hidden md:block">
              1
            </h1>
          </div>
          <div className="order-1 dark:bg-gray-400 bg-[#EBEBEB] rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 md:text-lg text-base">
              {t("viz")}
            </h3>
            <h3 className="mb-3 font-bold text-gray-800 md:text-lg text-base">
              {t("jul")} 2021 - {t("jan")} 2023 (
              <span className="dark:text-gray-800 text-[#36D399]">
                {t("intern")} Game Dev. / Programmer
              </span>
              )
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900">
              {t("responsibility")}:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-sm leading-snug tracking-wide text-gray-900">
                ⭐️ {t("vizres1")}
              </li>
              <li className="text-sm leading-snug tracking-wide text-gray-900">
                ⭐️ {t("vizres2")}
              </li>
              <li className="text-sm leading-snug tracking-wide text-gray-900">
                ⭐️ {t("vizres3")}
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline Item Reverse */}
        <div className="mb-8 flex flex-col md:flex-row-reverse justify-between items-center w-full left-timeline">
          <div className="order-1 w-full md:w-5/12 hidden md:block"></div>
          <div className="z-20 items-center order-1 bg-gray-800 dark:bg-white shadow-xl w-8 h-8 rounded-full hidden md:flex">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-black hidden md:block">
              2
            </h1>
          </div>
          <div className="order-1 bg-[#191D24] rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white md:text-lg text-base">
              {t("pir")}
            </h3>
            <h3 className="mb-3 font-bold text-white md:text-lg text-base">
              {t("feb")} 2023 - {t("may")} 2023 (
              <span className="text-[#36D399]">Front-end Developer</span>)
            </h3>
            <p className="text-sm leading-snug tracking-wide text-white">
              {t("responsibility")}:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-sm leading-snug tracking-wide text-white">
                ⭐️ {t("pirres1")}
              </li>
              <li className="text-sm leading-snug tracking-wide text-white">
                ⭐️ {t("pirres2")}
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline Item */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full right-timeline">
          <div className="order-1 w-full md:w-5/12 hidden md:block"></div>
          <div className="z-20 items-center order-1 bg-gray-800 dark:bg-white shadow-xl w-8 h-8 rounded-full hidden md:flex">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-black hidden md:block">
              3
            </h1>
          </div>
          <div className="order-1 dark:bg-gray-400 bg-[#EBEBEB] rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 md:text-lg text-base">
              {t("vir")}
            </h3>
            <h3 className="mb-3 font-bold text-gray-800 md:text-lg text-base">
              {t("sep")} 2023 - {t("mar")} 2025 (
              <span className="dark:text-gray-800 text-[#36D399]">
                Full Stack Developer
              </span>
              )
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900">
              {t("responsibility")}:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-sm leading-snug tracking-wide text-gray-900">
                ⭐️ {t("virres1")}
              </li>
              <li className="text-sm leading-snug tracking-wide text-gray-900">
                ⭐️ {t("virres2")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
