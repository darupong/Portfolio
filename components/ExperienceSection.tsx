/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaFacebookMessenger,
  FaTiktok,
} from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

import hdg from "../public/img/HDG.png";
import gama from "../public/img/imgExperiance/gamathailand.webp";
import tomthanet from "../public/img/imgExperiance/tomthanet.webp";
import kooboon from "../public/img/imgExperiance/kooboon.webp";
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
import ukrbg from "../public/img/ukr.png";
import ukrglf from "../public/img/ukrglf.gif";
import Image from "next/image";

const ExperienceSection = () => {
  const experienceData = [
    {
      id: "hdgid",
      img: hdg,
      name: "The Hidden Ghost",
      imgInfo: "The Hidden Ghost",
      badge: [
        <>
          <div className="badge badge-accent font-bold">Next.js</div>
          <div className="badge bg-[#8D8D8D] font-bold text-white border-0">
            Unity
          </div>
        </>,
      ],
      description:
        "A website is a promoting mobile game project that I did during internship. The game is a detective game inspired by Phasmophobia.",
      btn: [
        <>
          <label htmlFor="hdgid" className="btn btn-accent">
            Read More
          </label>
          <input type="checkbox" id="hdgid" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                The Hidden Ghost
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                A website is a promoting mobile game project that I did during
                internship. The game is a detective game inspired by
                Phasmophobia.
              </p>
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black py-4">
                The Hidden Ghost Demo (iOS/Android)
              </h3>
              <div className="flex items-center">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/4sYOvNpK_rU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card-actions justify-center py-[20px]">
                <a
                  href="https://hidden-ghost-next-website.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-accent">Visit Website</button>
                </a>
              </div>
              <div className="modal-action ">
                <label htmlFor="hdgid" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "kooboon",
      img: kooboon,
      name: "Kooboon Dating Appication",
      imgInfo: "Kooboon Dating Appication",
      badge: [
        <>
          <div className="badge bg-[#087EA4] font-bold text-white border-0">
            React.js
          </div>
          <div className="badge bg-[#EA2845] font-bold text-white border-0">
            Nest.js
          </div>
        </>,
      ],
      description: "Appication Dating made by react.js",
      btn: [
        <>
          <label htmlFor="kooboon" className="btn btn-accent">
            Read More
          </label>
          <input type="checkbox" id="kooboon" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                Kooboon Dating Appication
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                Appication Dating made by react.js
              </p>
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black py-4">
                Kooboon Dating Appication (iOS/Android)
              </h3>
              <div className="flex items-center"></div>
              <div className="card-actions justify-center py-[20px]">
                <a
                  href="https://apps.apple.com/th/app/kooboon/id1660708706"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={appstore} className="w-40" alt="appstore" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.kooboondating.kooboon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={playstore} className="w-40" alt="playstore" />
                </a>
              </div>
              <div className="modal-action ">
                <label htmlFor="kooboon" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "gamathailand",
      img: gama,
      name: "Gama Thailand",
      imgInfo: "Gama Thailand",
      badge: [
        <>
          <div className="badge badge-accent font-bold">Next.js</div>
          <div className="badge bg-[#087EA4] font-bold text-white border-0">
            React.js
          </div>
          <div className="badge bg-[#EA2845] font-bold text-white border-0">
            Nest.js
          </div>
        </>,
      ],
      description:
        "Association of Life Insurance Business Executives and Financial Advisors Website. This website has a subscription, register, login and award system. manage website on BOF (react)",
      btn: [
        <>
          <a href="https://gamathailand.org/" target="_blank" rel="noreferrer">
            <button className="btn btn-accent">Visit Website</button>
          </a>
        </>,
      ],
    },
    {
      id: "tomthanet",
      img: tomthanet,
      name: "Tom Thanet",
      imgInfo: "Tom Thanet",
      badge: [
        <>
          <div className="badge badge-accent font-bold">Next.js</div>
          <div className="badge bg-[#087EA4] font-bold text-white border-0">
            React.js
          </div>
          <div className="badge bg-[#EA2845] font-bold text-white border-0">
            Nest.js
          </div>
        </>,
      ],
      description:
        "Tom Thanet Leelaporn Founder of Clover Group. This website has a ticket system. manage website on BOF (react)",
      btn: [
        <>
          <a
            href="https://tti-dev.pirsquare.net/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-accent">Visit Website</button>
          </a>
        </>,
      ],
    },
    {
      id: "GSSD",
      img: gssd,
      name: "Global South-South Development Expo 2022",
      imgInfo: "Global South-South Development Expo 2022",
      badge: [
        <>
          <div className="badge bg-[#21759B] font-bold text-white border-0">
            Wordpress
          </div>
          <div className="badge badge-secondary font-bold">VirtualTour</div>
          <div className="badge bg-[#F06422] font-bold text-white border-0">
            PlayCanvas
          </div>
        </>,
      ],
      description:
        "The 3D walkthrough website for the GSSD Expo 2022 will take you to the largest virtual tour with Thailand as the event first co-host in the Asia-Pacific region.",
      btn: [
        <>
          <a
            href="https://13.251.159.120/wp-content/VIZPlatform/Title/1.8/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-accent">Visit Website</button>
          </a>
        </>,
      ],
    },
    {
      id: "alpsalpine",
      img: alp,
      name: "Alpsalpine Virtual Tour",
      imgInfo: "Alpsalpine",
      badge: [
        <>
          <div className="badge bg-[#21759B] font-bold text-white border-0">
            Wordpress
          </div>
          <div className="badge badge-secondary font-bold">VirtualTour</div>
        </>,
      ],
      description:
        "3D walkthrough website of Japanese company Alps Alpine. to introduce you to the product and all Alps Alpine services.",
      btn: [
        <>
          <a
            href="https://alpsalpine-virtual.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-accent">Visit Website</button>
          </a>
        </>,
      ],
    },
    {
      id: "siap",
      img: siap,
      name: "S.I. ASIA PACIFIC CO., LTD.",
      imgInfo: "S.I. ASIA PACIFIC CO., LTD.",
      badge: [
        <>
          <div className="badge bg-[#21759B] font-bold text-white border-0">
            Wordpress
          </div>
        </>,
      ],
      description:
        "Website of the business SI ASIA PACIFIC CO., LTD. Joint-venture corporation based in Japan that offers software consultancy services and products imports between Asia and Europe. The website is Thai-Japanese multilingual.",
      btn: [
        <>
          <a href="https://siapth.com/jp/" target="_blank" rel="noreferrer">
            <button className="btn btn-accent">Visit Website</button>
          </a>
        </>,
      ],
    },
    {
      id: "done",
      img: done,
      name: "Done Engineering and Service Co.,Ltd.",
      imgInfo: "Done Engineering and Service Co.,Ltd.",
      badge: [
        <>
          <div className="badge bg-[#21759B] font-bold text-white border-0">
            Wordpress
          </div>
        </>,
      ],
      description:
        "Done Engineering and Service offers machine installation services on its website. Maintenance upkeep of equipment in industrial enterprises Business owners may submit the data they require on the website back-end infrastructure.",
      btn: [
        <>
          <a href="https://www.wedone.work/" target="_blank" rel="noreferrer">
            <button className="btn btn-accent">Visit Website</button>
          </a>
        </>,
      ],
    },
  ];
  return (
    <div className="container mx-auto py-[100px] " id="Experience">
      <h1 className="text-[60px] font-bold text-center pb-[50px] dark:text-white text-gray-800">
        Developer Experience
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mx-2 justify-center ">
        {experienceData.map((data) => (
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
      
    </div>
  );
};

export default ExperienceSection;
