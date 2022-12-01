/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

import hdg from "../public/img/HDG.png";
import done from "../public/img/DONE.png";
import siap from "../public/img/SIAP.png";
import alp from "../public/img/alpsa.png";
import gssd from "../public/img/GSSD.png";
import prel from "../public/img/PremierLeague.png";
import ppkglf from "../public/img/PPK.gif";
import laz from "../public/img/Laza.png";
import Image from "next/image";

const ExperianceSection = () => {
  return (
    <div className="container mx-auto py-[100px]">
      <h1 className="text-[60px] font-bold text-center pb-[50px]">
        Experiance
      </h1>
      <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 space-y-4 lg:space-y-0 py-[20px] justify-center">
        <div className="card w-96 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
          <figure>
            <Image src={hdg} alt="The Hidden Ghost" />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
              The Hidden Ghost
              <div className="badge badge-accent">Next.js</div>
            </h2>
            <p className="dark:text-[#A6ADBA] text-black">
              A website is a promoting mobile game project that I did during
              internship. The game is a detective game inspired by Phasmophobia.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Read More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
          <figure>
            <Image src={siap} alt="S.I. ASIA PACIFIC CO., LTD." />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
              S.I. ASIA PACIFIC CO., LTD.
              <div className="badge badge-accent">Wordpress</div>
            </h2>
            <p className="dark:text-[#A6ADBA] text-black">
              Website of the business SI ASIA PACIFIC CO., LTD. Joint-venture
              corporation based in Japan that offers software consultancy
              services and products imports between Asia and Europe. The website
              is Thai-Japanese multilingual.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Read More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
          <figure>
            <Image src={alp} alt="AlpsAlpine" />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
              AlpsAlpine
              <div className="badge badge-accent">Next.js</div>
              <div className="badge badge-secondary">Virtual Tour</div>
            </h2>
            <p className="dark:text-[#A6ADBA] text-black">
              3D walkthrough website of Japanese company Alps Alpine. to
              introduce you to the product and all Alps Alpine services.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 space-y-4 lg:space-y-0 py-[20px] justify-center">
        <div className="card w-96 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
          <figure>
            <Image src={done} alt="The Hidden Ghost" />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-[#A6ADBA] text-black text-[13px] font-bold">
              Done Engineering and Service Co.,Ltd.
              <div className="badge badge-accent">Next.js</div>
            </h2>

            <p className="dark:text-[#A6ADBA] text-black">
              Done Engineering and Service offers machine installation services
              on its website. Maintenance upkeep of equipment in industrial
              enterprises Business owners may submit the data they require on
              the website back-end infrastructure.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Read More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
          <figure>
            <Image src={gssd} alt="The Hidden Ghost" />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
              GSSD 2022
              <div className="badge badge-accent">Wordpress</div>
              <div className="badge badge-secondary">Virtual Tour</div>
            </h2>
            <p className="dark:text-[#A6ADBA] text-black">
              A website is a promoting mobile game project that I did during
              internship. The game is a detective game inspired by Phasmophobia.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Read More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
          <figure>
            <Image src={laz} alt="The Hidden Ghost" />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
              10YEARSWITHLAZADA
              <div className="badge badge-error">Filter IG</div>
            </h2>
            <p className="dark:text-[#A6ADBA] text-black">
              10 Year with Lazada. a filter videocall with PPKit on Instagram and Facebook
            </p>
            <div className="card-actions justify-end">
              <label htmlFor="my-modal" className="btn btn-accent">
                Try it!
              </label>
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box dark:bg-[#111827] bg-white">
                  <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">10 YEARS WITH LAZADA</h3>
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
                    <FaFacebookSquare className=" w-6 h-6" role="button" />
                    <FaInstagram className=" w-6 h-6" role="button" />
                  </div>
                  <div className="modal-action ">
                    <label htmlFor="my-modal" className="btn">
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperianceSection;
