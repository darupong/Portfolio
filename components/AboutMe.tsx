/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import logo from "../public/img/myimg.png";

const AboutMe = () => {
  return (
    <div className={` py-[50px] container mx-auto`} id="About">
      <div className="mockup-window dark:bg-base-300 bg-slate-400">
        <div className="flex justify-center md:px-4 px-0 py-16 dark:bg-[#111827] bg-[#EBEBEB]">
          <div className="flex flex-col">
            <div>
              <div className="flex items-center justify-center ">
                <Image
                  src={logo}
                  className="md:h-[300px] md:w-[300px] h-[150px] w-[150px]"
                  alt="AboutMe"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center grid-cols-2 gap-8 lg:px-10 px-0 md:py-14 py-6">
              <div>
                <div className="mockup-code dark:bg-[#191D24] bg-white">
                  <pre
                    data-prefix="$"
                    className="dark:text-[#A6ADBA] text-black"
                  >
                    <code>npm i 'About Me'</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ Name: Darupong Chouypu</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ Age: 23 y</code>
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
                    <code>✓ Position: Software Programmer</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ Work Experiance: 1+</code>
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
                    <code>✓ Next.js , React Native </code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>⭐️ Library:</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ React , Tailwind CSS , DaisyUI</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>⭐️ Programming Language:</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ JS , TS , C# , Virtual Code</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>⭐️ Tools:</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>✓ Unity,SparkAR,Wordpress,Vercel</code>
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
                  <span className=" text-[#36D399]">Software Programmer</span>{" "}
                  and{" "}
                  <span className=" text-[#36D399]">Filter Effect Creater</span>{" "}
                  and I am interested in learning about Frontend Developer,
                  Mobile Appication from React Native and Android Studio.
                </h1>
                <h1>
                  I've previously worked on game development, Filter Creater
                  from Instagram and Tiktok, Virtual tour on website and
                  Augmented reality on website.
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
