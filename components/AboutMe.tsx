/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

import logo from "../public/img/myimg.png";

const AboutMe = () => {
  return (
    <div className={` py-[50px] container mx-auto`}>
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">
          <div className="flex flex-col">
            <div className="flex md:flex-col flex-row justify-center items-center space-y-6 lg:px-10 px-4 md:py-14 py-6">
              <div>
                <div className="row-span-3 flex items-center justify-center">
                  <Image
                    src={logo}
                    className="md:h-[300px] md:w-[300px] h-[10px] w-[10px]"
                    alt="Flowbite Logo"
                  />
                </div>
              </div>
              <div>
                <div className="mockup-code mx-[100px]">
                  <pre data-prefix="$">
                    <code>npm i 'About Me'</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ Name: Darupong Chouypu</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>✓ Age: 23 y</code>
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
                  <pre data-prefix="$" className="">
                    <code>Happy hacking!</code>
                  </pre>
                </div>
              </div>
              <div>
              <div className="mockup-code md:mx-[100px] mx-[20px]">
                <pre data-prefix=">" className="px-[20px]">
                  <code>
                    I work as a Software Programmer and Filter Effect Creater and I am interested in learning about Frontend Developer,
                    Mobile Appication from React Native and Android Studio. I've previously worked on game development, Filter Creater from 
                    Instagram and Tiktok, Virtual tour on website and Augmented reality on website
                    </code>
                </pre>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
