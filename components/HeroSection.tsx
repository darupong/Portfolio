import React from "react";
import css from "../styles/HeroSection.module.css";
import { useTranslation } from "next-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className={`${css.bgTitle}`} id="home">
      <div className={` container md:mx-auto`}>
        <div className={`md:py-[100px] marker:min-h-[564px] md:min-h-screen`}>
          <div
            className={` py-[200px] flex flex-col items-center justify-center`}
          >
            <p className=" font-bold md:text-[100px] text-[30px] text-white">
              {t("portfolio")}
            </p>
            <p className=" font-bold md:text-[50px] text-[20px] text-white dark:text-[#36D399]">
              {t("titleName")}{" "}
              <span className={` text-[#36D399] dark:text-white`}>
                {t("fullName")}
              </span>
            </p>
            <p
              className={`${css.animated} font-bold md:text-[50px] text-[20px] pt-[10px]`}
            >
              {t("role")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
