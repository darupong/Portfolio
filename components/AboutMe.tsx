/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import logo from "../public/img/New2025.png";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className={` py-[50px] container mx-auto`} id="About">
      <div className="mockup-window dark:bg-base-300 bg-slate-400">
        <div className="flex justify-center md:px-4 px-0 py-16 dark:bg-[#111827] bg-[#EBEBEB]">
          <div className="flex flex-col">
            <div>
              <div className="flex items-center justify-center ">
                <Link href="/infoapi">
                  <Image
                    src={logo}
                    className="md:h-[300px] md:w-[300px] h-[150px] w-[150px]"
                    alt="AboutMe"
                  />
                </Link>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center grid-cols-2 gap-8 lg:px-10 px-0 md:py-14 py-6">
              <div>
                <div className="mockup-code dark:bg-[#191D24] bg-white md:w-[500px] w-[400px]">
                  <pre
                    data-prefix="$"
                    className="dark:text-[#A6ADBA] text-black"
                  >
                    <code>bun i '{t("aboutMe")}'</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleN")}:{" "}
                      <span className="text-[#36D399]">{t("fullName")}</span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleAge")}:{" "}
                      <span className="text-[#36D399]">
                        25 {t("titleYear")}
                      </span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleEmail")}:{" "}
                      <span className="text-[#36D399]">
                        darupong000@gmail.com
                      </span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleFrom")}:{" "}
                      <span className="text-[#36D399]">{t("location")}</span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleEducation")}:{" "}
                      <span className="text-[#36D399]">{t("university")}</span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleMajor")} 1:{" "}
                      <span className="text-[#36D399]">
                        {t("bachelor")} (BS)
                      </span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleMajor")} 2:{" "}
                      <span className="text-[#36D399]">{t("major")} (MIS)</span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ English CEFR:{" "}
                      <span className="text-[#36D399]">RSU-PET B2</span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titlePosition")}:{" "}
                      <span className="text-[#36D399]">
                        Full Stack Engineer
                      </span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleExperience")}:{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-rainbow">
                        3
                      </span>{" "}
                      <span className="text-[#36D399]">{t("titleYear")}</span>
                    </code>
                  </pre>
                  <pre
                    data-prefix="$"
                    className="dark:text-[#A6ADBA] text-black"
                  >
                    <code>Happy hacking!</code>
                  </pre>
                </div>
              </div>
              <div>
                <div className="mockup-code dark:bg-[#191D24] bg-white md:w-[500px] w-[400px]">
                  <pre
                    data-prefix="$"
                    className="dark:text-[#A6ADBA] text-black"
                  >
                    <code>cd Skill</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ Frontend Framework:{" "}
                      <span className="text-[#36D399]">Next, React, Astro</span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ Backend Framework:{" "}
                      <span className="text-[#36D399]">
                        FastAPI, Nest, Express
                      </span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ App Development:{" "}
                      <span className="text-[#36D399]">
                        Electron, React Native
                      </span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ Game Development::{" "}
                      <span className="text-[#36D399]">
                        Unity, Unreal Engine
                      </span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ Programming Languages:{" "}
                      <span className="text-[#36D399]">Python, C#, JS, TS</span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ UI Libraries:{" "}
                      <span className="text-[#36D399]">
                        Tailwind, Antd, Daisy, MUI
                      </span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ Other Libraries:{" "}
                      <span className="text-[#36D399]">
                        Zustand, Axios, Stripe
                      </span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ Databases:{" "}
                      <span className="text-[#36D399]">
                        PostgreSQL, MongoDB
                      </span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ Cloud Services:{" "}
                      <span className="text-[#36D399]">Vercel, AWS</span>
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ OS Server:{" "}
                      <span className="text-[#36D399]">Ubuntu, Windows</span>
                    </code>
                  </pre>
                  <pre
                    data-prefix="$"
                    className="dark:text-[#A6ADBA] text-black"
                  >
                    <code>Done!</code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#191D24] bg-white py-6 rounded-[20px] md:w-full w-[400px]">
              <div className="flex flex-col md:mx-[100px] mx-[10px] text-center dark:text-[#A6ADBA] text-black">
                <h1>
                  {t("workat")}{" "}
                  <span className=" text-[#36D399]">Fullstack Engineer </span>
                  {t("and")}{" "}
                  <span className=" text-[#36D399]">Backend Developer </span>
                  {t("interested")}
                </h1>
                <h1>
                  {t("previously")}{" "}
                  <span className=" text-[#36D399]">Game Development</span> ,
                  {t("filter")}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
