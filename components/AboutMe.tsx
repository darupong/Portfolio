/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import logo from "../public/img/aboutimg.webp";
import Link from "next/link";

const AboutMe = () => {
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
                <div className="mockup-code dark:bg-[#191D24] bg-white">
                  <pre
                    data-prefix="$"
                    className="dark:text-[#A6ADBA] text-black"
                  >
                    <code>pnpm i 'About Me'</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ Name: Darupong Chouypu</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ Age: 24 y</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ Email: darupong000@gmail.com</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ From: Bangkok, Thailand</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ Education: Rangsit University</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ Major: Computer Game Multimedia</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ Position: Front-end Developer</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ Work Experiance: 2.5 Years</code>
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
                <div className="mockup-code dark:bg-[#191D24] bg-white">
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
                    <code>✓ Next.js , Vite </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>⭐️ Library:</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ Tailwind , DaisyUI , Antd</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>⭐️ Programming Language:</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ JS , TS , C# , Python</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>⭐️ Tools:</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ Unity , Wordpress , Docker</code>
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
            <div className="dark:bg-[#191D24] bg-white py-6 rounded-[20px]">
              <div className="flex flex-col mx-[100px] text-center dark:text-[#A6ADBA] text-black">
                <h1>
                  I work as a{" "}
                  <span className=" text-[#36D399]">Front-end Developer </span>
                  (Intermediate) and{" "}
                  <span className=" text-[#36D399]">Backend Developer </span>
                  (Entry) and I am interested in learning about Fullstack
                  Developer, Mobile Application from React Native.
                </h1>
                <h1>
                  I've previously worked on{" "}
                  <span className=" text-[#36D399]">Game Development</span> ,
                  Filter Creator from Instagram or Tiktok , Virtual tour on
                  website and Augmented reality on website.
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
