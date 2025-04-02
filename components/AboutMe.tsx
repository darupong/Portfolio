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
                    <code>pnpm i '{t("aboutMe")}'</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleN")}: {t("fullName")}
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleAge")}: 25 {t("titleYear")}
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ {t("titleEmail")}: darupong000@gmail.com</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ Line: @darupong</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleFrom")}: {t("location")}
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleEducation")}: {t("university")}
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ {t("titleMajor")}: {t("major")}
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>
                      ✓ English CEFR: B2
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ {t("titlePosition")}: Full Stack Developer</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>
                      ✓ {t("titleExperience")}: 3.5 {t("titleYear")}
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
                    <code>⭐️ Framework:</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ Next.js, Vue.js </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>⭐️ Backend:</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ FastAPI, Nest.js </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>⭐️ Library:</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ Tailwind, Antd, Axios</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>⭐️ Programming Language:</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ JS, TS, C#, Python</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>⭐️ Tools:</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ Unity, Wordpress, Docker</code>
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
                  <span className=" text-[#36D399]">
                    Backend Developer{" "}
                  </span>
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
