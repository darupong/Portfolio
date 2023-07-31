/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import {
  experienceAppData,
  experienceContentData,
  experienceGameData,
  experienceOtherData,
  experienceWebData,
  experienceStudentData,
} from "../constants/experience";

import css from "../styles/Experience.module.css";

import Image from "next/image";

const ExperienceSection = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Tab 1`,
      children: <div>hi</div>,
    },
    {
      key: "2",
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <div className="container mx-auto py-[100px] " id="Experience">
      <h1 className="text-[60px] font-bold text-center pb-[50px] dark:text-white text-gray-800">
        Developer Experience
      </h1>
      <Tabs
        defaultActiveKey="1"
        className={`${css.experienceTab} text-black dark:text-white overflow-auto flex`}
      >
        <Tabs.TabPane tab="Website Developer" key="tab1">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mx-2 justify-center pt-4">
            {experienceWebData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div className="flex justify-center">
                <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
                  <figure>
                    <Image src={data.img} alt={data.imgInfo} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                      {data.name}
                    </h2>
                    <div className="flex flex-row space-x-2">{data.badge}</div>
                    <p className="dark:text-[#A6ADBA] text-black">
                      {data.description}
                    </p>
                    <div className="card-actions justify-end">{data.btn}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Application Developer" key="tab2">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mx-2 justify-center pt-4 ">
            {experienceAppData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div className="flex justify-center">
                <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
                  <figure>
                    <Image src={data.img} alt={data.imgInfo} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                      {data.name}
                    </h2>
                    <div className="flex flex-row space-x-2">{data.badge}</div>
                    <p className="dark:text-[#A6ADBA] text-black">
                      {data.description}
                    </p>
                    <div className="card-actions justify-end">{data.btn}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Game Developer" key="tab3">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mx-2 justify-center pt-4 ">
            {experienceGameData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div className="flex justify-center">
                <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
                  <figure>
                    <Image src={data.img} alt={data.imgInfo} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                      {data.name}
                    </h2>
                    <div className="flex flex-row space-x-2">{data.badge}</div>
                    <p className="dark:text-[#A6ADBA] text-black">
                      {data.description}
                    </p>
                    <div className="card-actions justify-end">{data.btn}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Content Creator" key="tab4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mx-2 justify-center pt-4 ">
            {experienceContentData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div className="flex justify-center">
                <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
                  <figure>
                    <Image src={data.img} alt={data.imgInfo} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                      {data.name}
                    </h2>
                    <div className="flex flex-row space-x-2">{data.badge}</div>
                    <p className="dark:text-[#A6ADBA] text-black">
                      {data.description}
                    </p>
                    <div className="card-actions justify-end">{data.btn}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Student Project" key="tab5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mx-2 justify-center pt-4 ">
            {experienceStudentData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div className="flex justify-center">
                <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
                  <figure>
                    <Image src={data.img} alt={data.imgInfo} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                      {data.name}
                    </h2>
                    <div className="flex flex-row space-x-2">{data.badge}</div>
                    <p className="dark:text-[#A6ADBA] text-black">
                      {data.description}
                    </p>
                    <div className="card-actions justify-end">{data.btn}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Other" key="tab6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mx-2 justify-center pt-4 ">
            {experienceOtherData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div className="flex justify-center">
                <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
                  <figure>
                    <Image src={data.img} alt={data.imgInfo} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                      {data.name}
                    </h2>
                    <div className="flex flex-row space-x-2">{data.badge}</div>
                    <p className="dark:text-[#A6ADBA] text-black">
                      {data.description}
                    </p>
                    <div className="card-actions justify-end">{data.btn}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default ExperienceSection;
