/* eslint-disable react/no-unescaped-entities */
import {
  FaInstagram,
  FaFacebookSquare,
  FaFacebookMessenger,
  FaTiktok,
} from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import css from "../styles/Experience.module.css";

import hdg from "../public/img/HDG.png";
import gama from "../public/img/imgExperiance/gamathailand.webp";
import tomthanet from "../public/img/imgExperiance/tomthanet.webp";
import kooboon from "../public/img/imgExperiance/kooboon.webp";
import pirfloww from "../public/img/imgExperiance/pirfloww.webp";
import covid from "../public/img/imgExperiance/covid19.webp";
import appstore from "../public/icon/appstore.png";
import playstore from "../public/icon/googleplay.png";
import done from "../public/img/DONE.png";
import siap from "../public/img/SIAP.png";
import alp from "../public/img/alpsa.png";
import gssd from "../public/img/GSSD.png";
import prel from "../public/img/PremierLeague.png";
import ppkglf from "../public/img/PPK.gif";
import laz from "../public/img/Laza.png";
import ccoobg from "../public/img/ccoobg.png";
import durexbg from "../public/img/dux.png";
import qatar from "../public/img/qutarbg.png";
import durexglf from "../public/img/durexglf.gif";
import ccooglf from "../public/img/ccooglf.gif";
import phuwa from "../public/img/phuwa.png";
import dance from "../public/img/dance.png";
import guessqatar from "../public/img/guessqatar.gif";
import chaddance from "../public/img/chaddance.gif";
import chadface from "../public/img/Chadface.gif";
import Zem from "../public/img/ZEM.jpg";
import Gnmp from "../public/img/GNMP.jpeg";
import Erd from "../public/img/ERD.jpg";
import Ecl from "../public/img/ECL.png";
import Adr from "../public/img/Adventure.png";
import Itz from "../public/img/ITZ.jpg";
import newport from "../public/img/imgExperiance/newport.webp";
import looklike from "../public/img/imgExperiance/Looklike.jpg";
import Image from "next/image";
import { experienceWebData, experienceAppData, experienceGameData, experienceOtherData, experienceStudentData, experienceContentData  } from "../constants/experience";

const experiancepage = () => {

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
    {
      key: "4",
      label: `Tab 4`,
      children: `Content of Tab Pane 4`,
    },
  ];
  return (
    <div className="container mx-auto py-[100px] " id="Experience">
      <h1 className="text-[60px] font-bold text-center pb-[50px] dark:text-white text-gray-800">
        Developer Experience
      </h1>
      <Tabs
        defaultActiveKey="1"
        className={`${css.experienceTab} text-black dark:text-white`}
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

export default experiancepage;
