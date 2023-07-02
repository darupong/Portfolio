/* eslint-disable react/no-unescaped-entities */
import React from "react";
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
import Image from "next/image";

const ExperienceSection = () => {
  const experienceWebData = [
    {
      id: "gamathailand",
      img: gama,
      name: "Gama Thailand",
      imgInfo: "Gama Thailand",
      badge: [
        <>
          <div className="badge badge-accent font-bold text-white border-0">
            Next.js
          </div>
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
          <div className="badge badge-accent font-bold text-white border-0">
            Next.js
          </div>
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
      id: "flowwsquare",
      img: pirfloww,
      name: "Flowwsquare sub-domain",
      imgInfo: "Flowwsquare",
      badge: [
        <>
          <div className="badge badge-accent font-bold text-white border-0">
            Next.js
          </div>
          <div className="badge bg-[#087EA4] font-bold text-white border-0">
            React.js
          </div>
          <div className="badge bg-[#EA2845] font-bold text-white border-0">
            Nest.js
          </div>
        </>,
      ],
      description:
        "a website is a sub-domain from flowwsquare website. this shopping website has a cart , payment system and create product from BOF",
      btn: [
        <>
          <a
            href="https://pirsquare.flowwsquare.com/product/all"
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

  const experienceAppData = [
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
  ];

  const experienceGameData = [
    {
      id: "hdgid",
      img: hdg,
      name: "The Hidden Ghost",
      imgInfo: "The Hidden Ghost",
      badge: [
        <>
          <div className="badge badge-accent font-bold text-white border-0">
            Next.js
          </div>
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
  ];

  const experienceContentData = [
    {
      id: "lazada",
      img: laz,
      name: "10YEARSWITHLAZADA",
      imgInfo: "10 YEARS WITH LAZADA",
      badge: [
        <>
          <div className="badge bg-[#405DE6] font-bold text-white border-0">
            Meta Spark
          </div>
        </>,
      ],
      description:
        "10 Year with Lazada. a filter videocall with PPKrit on Instagram and Facebook.",
      btn: [
        <>
          <label htmlFor="my-modal" className="btn btn-accent">
            Try it!
          </label>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                10 YEARS WITH LAZADA
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                Filter Effect campaign "10 YEARS WITH LAZADA"
              </p>
              <div className="justify-center flex">
                <Image
                  src={ppkglf}
                  alt="The Hidden Ghost"
                  className="h-[300px] w-auto"
                />
              </div>
              <div className="justify-center flex pt-[5px] dark:text-[#A6ADBA] text-black">
                <h1>Click Here</h1>
              </div>
              <div className="justify-center flex space-x-4 pt-[20px]">
                <a
                  href="https://www.facebook.com/fbcameraeffects/tryit/482307596688085/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare
                    className=" w-6 h-6 text-black dark:text-white"
                    role="button"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ar/482307596688085/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    className=" w-6 h-6 text-black dark:text-white"
                    role="button"
                  />
                </a>
              </div>
              <div className="modal-action ">
                <label htmlFor="my-modal" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "ccoo",
      img: ccoobg,
      name: "CC-OO x Disney",
      imgInfo: "CC-OO x Disney",
      badge: [
        <>
          <div className="badge bg-[#405DE6] font-bold text-white border-0">
            Meta Spark
          </div>
          <div className="badge bg-[#FF2B54] font-bold text-white border-0">
            Effect House
          </div>
        </>,
      ],
      description:
        "CC-OO x Disney Campaign. a filter face mask on Instagram Facebook and Tiktok.",
      btn: [
        <>
          <label htmlFor="my-modal3" className="btn btn-accent">
            Try it!
          </label>
          <input type="checkbox" id="my-modal3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                CC-OO x Disney
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                CC-OO x Disney Campaign. a filter face mask on Instagram
                Facebook and Tiktok.
              </p>
              <div className="justify-center flex">
                <Image src={ccooglf} alt="CC-OO" className="h-[300px] w-auto" />
              </div>
              <div className="justify-center flex pt-[5px] dark:text-[#A6ADBA] text-black">
                <h1>Click Here</h1>
              </div>
              <div className="justify-center flex space-x-4 pt-[20px]">
                <a
                  href="https://www.facebook.com/fbcameraeffects/tryit/488720473140506/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare
                    className=" w-6 h-6 text-black dark:text-white"
                    role="button"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ar/488720473140506/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    className=" w-6 h-6 text-black dark:text-white"
                    role="button"
                  />
                </a>
                <a
                  href="https://www.messenger.com/ar/488720473140506/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookMessenger
                    className=" w-6 h-6 text-black dark:text-white"
                    role="button"
                  />
                </a>
                <a
                  href="https://vt.tiktok.com/ZS8RagH3f/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok
                    className=" w-6 h-6 text-black dark:text-white"
                    role="button"
                  />
                </a>
              </div>
              <div className="modal-action ">
                <label htmlFor="my-modal3" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "durex",
      img: durexbg,
      name: "Durex Come with Pride",
      imgInfo: "Durex",
      badge: [
        <>
          <div className="badge bg-[#405DE6] font-bold text-white border-0">
            Meta Spark
          </div>
        </>,
      ],
      description:
        "Durex Come with Pride Campaign. a filter face mask on Instagram and Facebook.",
      btn: [
        <>
          <label htmlFor="my-modal2" className="btn btn-accent">
            Try it!
          </label>
          <input type="checkbox" id="my-modal2" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                Durex Come with Pride
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                Durex Come with Pride Campaign. a filter face mask on Instagram
                and Facebook.
              </p>
              <div className="justify-center flex">
                <Image src={durexglf} className="h-[300px] w-auto" alt={""} />
              </div>
              <div className="justify-center flex pt-[5px] dark:text-[#A6ADBA] text-black">
                <h1>Click Here</h1>
              </div>
              <div className="justify-center flex space-x-4 pt-[20px]">
                <a
                  href="https://www.instagram.com/ar/372286178329436/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    className=" w-6 h-6 text-black dark:text-white"
                    role="button"
                  />
                </a>
              </div>
              <div className="modal-action ">
                <label htmlFor="my-modal2" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "fifa",
      img: qatar,
      name: "Fifa World Cup Qatar 2022",
      imgInfo: "Fifa world cup qatar 2022",
      badge: [
        <>
          <div className="badge bg-[#FF2B54] font-bold text-white border-0">
            Effect House
          </div>
        </>,
      ],
      description:
        "Fifa World Cup Qatar 2022. a filter guess flag countries on Tiktok.",
      btn: [
        <>
          <label htmlFor="qatarid" className="btn btn-accent">
            Try it!
          </label>
          <input type="checkbox" id="qatarid" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                Fifa World Cup Qatar 2022
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                Fifa World Cup Qatar 2022. a filter guess flag countries on
                Tiktok.
              </p>
              <div className="justify-center flex">
                <Image
                  src={guessqatar}
                  alt="Fifa World Cup Qatar 2022"
                  className="h-[300px] w-auto"
                />
              </div>
              <div className="justify-center flex pt-[5px] dark:text-[#A6ADBA] text-black">
                <h1>Click Here</h1>
              </div>
              <div className="justify-center flex space-x-4 pt-[20px]">
                <a
                  href="https://vm.tiktok.com/ZMF4kUXCS/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok
                    className=" w-6 h-6 text-black dark:text-white"
                    role="button"
                  />
                </a>
              </div>
              <div className="modal-action ">
                <label htmlFor="qatarid" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "Chadchart",
      img: dance,
      name: "Chadchart Dance",
      imgInfo: "Chadchart Dance",
      badge: [
        <>
          <div className="badge bg-[#FF2B54] font-bold text-white border-0">
            Effect House
          </div>
        </>,
      ],
      description: "Dance with Chadchart. a filter character drive on Tiktok.",
      btn: [
        <>
          <label htmlFor="my-modal6" className="btn btn-accent">
            Try it!
          </label>
          <input type="checkbox" id="my-modal6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                Dance with Chadchart
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                Dance with Chadchart. a filter character drive on Tiktok.
              </p>
              <div className="justify-center flex">
                <Image
                  src={chaddance}
                  alt="The Hidden Ghost"
                  className="h-[300px] w-auto"
                />
              </div>
              <div className="justify-center flex pt-[5px] dark:text-[#A6ADBA] text-black">
                <h1>Click Here</h1>
              </div>
              <div className="justify-center flex space-x-4 pt-[20px]">
                <a
                  href="https://vt.tiktok.com/ZS8RatJRU/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok
                    className=" w-6 h-6 text-black dark:text-white"
                    role="button"
                  />
                </a>
              </div>
              <div className="modal-action ">
                <label htmlFor="my-modal6" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "Chadchartmask",
      img: phuwa,
      name: "Chadchart Mask",
      imgInfo: "Chadchart Mask",
      badge: [
        <>
          <div className="badge bg-[#FF2B54] font-bold text-white border-0">
            Effect House
          </div>
        </>,
      ],
      description: "Chadchart Mask. a filter face mask on Tiktok.",
      btn: [
        <>
          <label htmlFor="my-modal7" className="btn btn-accent">
            Try it!
          </label>
          <input type="checkbox" id="my-modal7" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                Chadchart Mask
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                Chadchart Mask. a filter face mask on Tiktok.
              </p>
              <div className="justify-center flex">
                <Image
                  src={chadface}
                  alt="The Hidden Ghost"
                  className="h-[300px] w-auto"
                />
              </div>
              <div className="justify-center flex pt-[5px] dark:text-[#A6ADBA] text-black">
                <h1>Click Here</h1>
              </div>
              <div className="justify-center flex space-x-4 pt-[20px]">
                <a
                  href="https://vt.tiktok.com/ZS8Ra37h3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok
                    className=" w-6 h-6 text-black dark:text-white"
                    role="button"
                  />
                </a>
              </div>
              <div className="modal-action ">
                <label htmlFor="my-modal7" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
  ];

  const experienceStudentData = [
    {
      id: "zombieevil",
      img: Zem,
      name: "Zombie Evil Multiplayer",
      imgInfo: "Zombie Evil Multiplayer",
      badge: [
        <>
          <div className="badge bg-[#8D8D8D] font-bold text-white border-0">
            Unity
          </div>
          <div className="badge bg-[#026E00] font-bold text-white border-0">
            Node.js
          </div>
          <div className="badge bg-[#405DE6] font-bold text-white border-0">
            Socket.io
          </div>
        </>,
      ],
      description:
        "The university final project, Computer Game Multimedia. The game is a Top view shooting Multiplayer on Google CloudPlatform.",
      btn: [
        <>
          <label htmlFor="zemid" className="btn btn-accent">
            Read More
          </label>
          <input type="checkbox" id="zemid" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                Zombie Evil Multiplayer
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                The university final project, Computer Game Multimedia. The game
                is a Top view shooting Multiplayer on Google CloudPlatform.
              </p>
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black py-4">
                Zombie Evil Multiplayer Gameplay
              </h3>
              <div className="flex items-center">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/9qpuxchOmIU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="modal-action ">
                <label htmlFor="zemid" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "guessnumbermultiplayer",
      img: Gnmp,
      name: "Guess Number Multiplayer",
      imgInfo: "Guess Number Multiplayer",
      badge: [
        <>
          <div className="badge bg-[#8D8D8D] font-bold text-white border-0">
            Unity
          </div>
          <div className="badge bg-[#026E00] font-bold text-white border-0">
            Node.js
          </div>
        </>,
      ],
      description:
        "The university midterm project, Computer Game Multimedia. The game is a Guess number on local server with node.js",
      btn: [
        <>
          <label htmlFor="gnid" className="btn btn-accent">
            Read More
          </label>
          <input type="checkbox" id="gnid" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                Guess Number Multiplayer
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                The university midterm project, Computer Game Multimedia. The
                game is a Guess number on local server with node.js
              </p>
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black py-4">
                Guess Number Multiplayer Gameplay
              </h3>
              <div className="flex items-center">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/opWaJTqb_dQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card-actions justify-center py-[20px]">
                <a
                  href="https://github.com/darupong/guess-number-game"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-accent">View Github</button>
                </a>
              </div>
              <div className="modal-action ">
                <label htmlFor="gnid" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "ellenraider",
      img: Erd,
      name: "Ellen Raider",
      imgInfo: "Ellen Raider",
      badge: [
        <>
          <div className="badge bg-[#8D8D8D] font-bold text-white border-0">
            Unity
          </div>
        </>,
      ],
      description:
        "The university final project, CGM245 3D Game Development. The game is a adventure 3D game inspired by Tomb Raider.",
      btn: [
        <>
          <label htmlFor="erid" className="btn btn-accent">
            Read More
          </label>
          <input type="checkbox" id="erid" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                Ellen Raider
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                The university final project, 3D Game Development. The game is a
                adventure 3D game inspired by Tomb Raider.
              </p>
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black py-4">
                Ellen Raider Gameplay
              </h3>
              <div className="flex items-center">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/hK4O0yWeKXk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="modal-action ">
                <label htmlFor="erid" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "eclipse",
      img: Ecl,
      name: "Eclipse 2021",
      imgInfo: "Eclipse 2021",
      badge: [
        <>
          <div className="badge bg-[#8D8D8D] font-bold text-white border-0">
            Unity
          </div>
        </>,
      ],
      description:
        "The university final project, CGM392 Project Game. The game is a side scrolling theme ancient aztec inspired by Castlevania.",
      btn: [
        <>
          <label htmlFor="elid" className="btn btn-accent">
            Read More
          </label>
          <input type="checkbox" id="elid" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                Eclipse 2021
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                The university final project, CGM392 Project Game. The game is a
                side scrolling theme ancient aztec inspired by Castlevania.
              </p>
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black py-4">
                Eclipse 2021 Gameplay
              </h3>
              <div className="flex items-center">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/dmLP8nstZsk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="modal-action ">
                <label htmlFor="elid" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "adventure",
      img: Adr,
      name: "Adventure Island Remake 2020",
      imgInfo: "Adventure Island Remake 2020",
      badge: [
        <>
          <div className="badge bg-[#8D8D8D] font-bold text-white border-0">
            Unity
          </div>
        </>,
      ],
      description:
        "The university final project, CGM391 Project Game. The game is remake from Adventure Island 1986.",
      btn: [
        <>
          <label htmlFor="adrid" className="btn btn-accent">
            Read More
          </label>
          <input type="checkbox" id="adrid" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                Adventure Island Remake 2020
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                The university final project, CGM391 Project Game. The game is
                remake from Adventure Island 1986.
              </p>
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black py-4">
                Adventure Island Remake 2020 Gameplay
              </h3>
              <div className="flex items-center">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/nvsTy5_C7kg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="modal-action ">
                <label htmlFor="adrid" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
    {
      id: "into the zombieland",
      img: Itz,
      name: "Into The Zombieland",
      imgInfo: "Into The Zombieland",
      badge: [
        <>
          <div className="badge bg-[#8D8D8D] font-bold text-white border-0">
            Unity
          </div>
        </>,
      ],
      description:
        "The university final project, CGM242 2D Game Development. The game is a adventure side scrolling game inspired by Alien Shooter.",
      btn: [
        <>
          <label htmlFor="itzid" className="btn btn-accent">
            Read More
          </label>
          <input type="checkbox" id="itzid" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-[#111827] bg-white">
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                Into The Zombieland
              </h3>
              <p className="py-4 dark:text-[#A6ADBA] text-black">
                The university final project, CGM242 2D Game Development. The
                game is a adventure side scrolling game inspired by Alien
                Shooter.
              </p>
              <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black py-4">
                Into The Zombieland Gameplay
              </h3>
              <div className="flex items-center">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/iDwncw6vwLE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="modal-action ">
                <label htmlFor="itzid" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>,
      ],
    },
  ];

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
        <Tabs.TabPane tab="Appication Developer" key="tab2">
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
        <Tabs.TabPane tab="Content Creater" key="tab4">
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
      </Tabs>
    </div>
  );
};

export default ExperienceSection;
