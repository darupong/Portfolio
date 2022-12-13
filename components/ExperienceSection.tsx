/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaFacebookMessenger,
  FaTiktok,
} from "react-icons/fa";

import hdg from "../public/img/HDG.png";
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
  return (
    <div className="container mx-auto py-[100px] " id="Experience">
      <h1 className="text-[60px] font-bold text-center pb-[50px] dark:text-white text-gray-800">
        Experience
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mx-2 justify-center ">
        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={hdg} alt="The Hidden Ghost" />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                The Hidden Ghost
              </h2>
              <div className="flex flex-row space-x-2">
                <div className="badge badge-accent font-bold">Next.js</div>
                <div className="badge badge-primary font-bold">Vercel</div>
                <div className="badge bg-[#8D8D8D] font-bold text-white border-0">Unity</div>
              </div>
              <p className="dark:text-[#A6ADBA] text-black">
                A website is a promoting mobile game project that I did during
                internship. The game is a detective game inspired by
                Phasmophobia.
              </p>
              <div className="card-actions justify-end">
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
                      A website is a promoting mobile game project that I did
                      during internship. The game is a detective game inspired
                      by Phasmophobia.
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
                        <button className="btn btn-accent">
                          Visit Website
                        </button>
                      </a>
                    </div>
                    <div className="modal-action ">
                      <label htmlFor="hdgid" className="btn">
                        Close
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={gssd} alt="GSSD" />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                Global South-South Development Expo 2022
              </h2>
              <div className="flex flex-row space-x-2">
                <div className="badge badge-accent font-bold">Wordpress</div>
                <div className="badge badge-secondary font-bold">
                  VirtualTour
                </div>
                <div className="badge bg-[#F06422] font-bold text-white border-0">
                  WebGL
                </div>
              </div>
              <p className="dark:text-[#A6ADBA] text-black">
                The 3D walkthrough website for the GSSD Expo 2022 will take you
                to the largest virtual tour with Thailand as the event first
                co-host in the Asia-Pacific region.
              </p>
              <div className="card-actions justify-end">
                <div className="card-actions justify-end">
                  <a
                    href="https://3dwalkthrough.thaidevelopmentexpo.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-accent">Visit Website</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={alp} alt="AlpsAlpine" />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                Alpsalpine Virtual Tour
              </h2>
              <div className="flex flex-row space-x-2">
                <div className="badge badge-accent font-bold">Wordpress</div>
                <div className="badge badge-secondary font-bold">
                  VirtualTour
                </div>
              </div>
              <p className="dark:text-[#A6ADBA] text-black">
                3D walkthrough website of Japanese company Alps Alpine. to
                introduce you to the product and all Alps Alpine services.
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://alpsalpine-virtual.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-accent">Visit Website</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={siap} alt="S.I. ASIA PACIFIC CO., LTD." />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                S.I. ASIA PACIFIC CO., LTD.
              </h2>
              <div className="flex flex-row space-x-2">
                <div className="badge badge-accent font-bold">Wordpress</div>
              </div>
              <p className="dark:text-[#A6ADBA] text-black">
                Website of the business SI ASIA PACIFIC CO., LTD. Joint-venture
                corporation based in Japan that offers software consultancy
                services and products imports between Asia and Europe. The
                website is Thai-Japanese multilingual.
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://siapth.com/jp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-accent">Visit Website</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={done} alt="Done Engineering and Service Co.,Ltd." />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                Done Engineering and Service Co.,Ltd.
              </h2>
              <div className="flex flex-row space-x-2">
                <div className="badge badge-accent font-bold">Wordpress</div>
              </div>
              <p className="dark:text-[#A6ADBA] text-black">
                Done Engineering and Service offers machine installation
                services on its website. Maintenance upkeep of equipment in
                industrial enterprises Business owners may submit the data they
                require on the website back-end infrastructure.
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://www.wedone.work/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-accent">Visit Website</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={laz} alt="Lazada" />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                10YEARSWITHLAZADA
              </h2>
              <div className="flex flex-row space-x-2">
              <div className="badge bg-[#405DE6] font-bold text-white border-0">Meta Spark</div>
              </div>

              <p className="dark:text-[#A6ADBA] text-black">
                10 Year with Lazada. a filter videocall with PPKrit on Instagram
                and Facebook.
              </p>
              <div className="card-actions justify-end">
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={ccoobg} alt="CC-OO" />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                CC-OO x Disney
              </h2>
              <div className="flex flex-row space-x-2">
                <div className="badge bg-[#405DE6] font-bold text-white border-0">Meta Spark</div>
                <div className="badge bg-[#FF2B54] font-bold text-white border-0">Effect House</div>
              </div>
              <p className="dark:text-[#A6ADBA] text-black">
                CC-OO x Disney Campaign. a filter face mask on Instagram
                Facebook and Tiktok.
              </p>
              <div className="card-actions justify-end">
                <label htmlFor="my-modal3" className="btn btn-accent">
                  Try it!
                </label>
                <input
                  type="checkbox"
                  id="my-modal3"
                  className="modal-toggle"
                />
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
                      <Image
                        src={ccooglf}
                        alt="CC-OO"
                        className="h-[300px] w-auto"
                      />
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={durexbg} alt="Durex" />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                Durex Come with Pride
              </h2>
              <div className="flex flex-row space-x-2">
              <div className="badge bg-[#405DE6] font-bold text-white border-0">Meta Spark</div>
              </div>
              <p className="dark:text-[#A6ADBA] text-black">
                Durex Come with Pride Campaign. a filter face mask on Instagram
                and Facebook.
              </p>
              <div className="card-actions justify-end">
                <label htmlFor="my-modal2" className="btn btn-accent">
                  Try it!
                </label>
                <input
                  type="checkbox"
                  id="my-modal2"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box dark:bg-[#111827] bg-white">
                    <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                      Durex Come with Pride
                    </h3>
                    <p className="py-4 dark:text-[#A6ADBA] text-black">
                      Durex Come with Pride Campaign. a filter face mask on
                      Instagram and Facebook.
                    </p>
                    <div className="justify-center flex">
                      <Image
                        src={durexglf}
                        className="h-[300px] w-auto"
                        alt={""}
                      />
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={qatar} alt="Durex" />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                Fifa World Cup Qatar 2022
              </h2>
              <div className="flex flex-row space-x-2">
              <div className="badge bg-[#FF2B54] font-bold text-white border-0">Effect House</div>
              </div>
              <p className="dark:text-[#A6ADBA] text-black">
                Fifa World Cup Qatar 2022. a filter guess flag countries on Tiktok.
              </p>
              <div className="card-actions justify-end">
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={dance} alt="Chadchart Dance" />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                Dance with Chadchart
              </h2>
              <div className="flex flex-row space-x-2">
              <div className="badge bg-[#FF2B54] font-bold text-white border-0">Effect House</div>
              </div>
              <p className="dark:text-[#A6ADBA] text-black">
                Dance with Chadchart. a filter character drive on Tiktok.
              </p>
              <div className="card-actions justify-end">
                <label htmlFor="my-modal6" className="btn btn-accent">
                  Try it!
                </label>
                <input
                  type="checkbox"
                  id="my-modal6"
                  className="modal-toggle"
                />
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={phuwa} alt="Durex" />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                ChadChart Mask
              </h2>
              <div className="flex flex-row space-x-2">
              <div className="badge bg-[#FF2B54] font-bold text-white border-0">Effect House</div>
              </div>
              <p className="dark:text-[#A6ADBA] text-black">
                ChadChart Mask. a filter face mask on Tiktok.
              </p>
              <div className="card-actions justify-end">
                <label htmlFor="my-modal7" className="btn btn-accent">
                  Try it!
                </label>
                <input
                  type="checkbox"
                  id="my-modal7"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box dark:bg-[#111827] bg-white">
                    <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                      ChadChart Mask
                    </h3>
                    <p className="py-4 dark:text-[#A6ADBA] text-black">
                      ChadChart Mask. a filter face mask on Tiktok.
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
            <figure>
              <Image src={ukrbg} alt="Standwithukraine" />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
                STAND WITH UKRAINE
              </h2>
              <div className="flex flex-row space-x-2">
              <div className="badge bg-[#FF2B54] font-bold text-white border-0">Effect House</div>
              </div>
              <p className="dark:text-[#A6ADBA] text-black">
                #STANDWITHUKRAINE #STOPTHEWAR Campaign. a filter face mask and background on Tiktok.
              </p>
              <div className="card-actions justify-end">
                <label htmlFor="my-ukr" className="btn btn-accent">
                  Try it!
                </label>
                <input
                  type="checkbox"
                  id="my-ukr"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box dark:bg-[#111827] bg-white">
                    <h3 className="font-bold text-lg dark:text-[#A6ADBA] text-black">
                    STAND WITH UKRAINE
                    </h3>
                    <p className="py-4 dark:text-[#A6ADBA] text-black">
                      #STANDWITHUKRAINE #STOPTHEWAR Campaign. a filter face mask and background on Tiktok.
                    </p>
                    <div className="justify-center flex">
                      <Image
                        src={ukrglf}
                        alt="The Hidden Ghost"
                        className="h-[300px] w-auto"
                      />
                    </div>
                    <div className="justify-center flex pt-[5px] dark:text-[#A6ADBA] text-black">
                      <h1>Click Here</h1>
                    </div>
                    <div className="justify-center flex space-x-4 pt-[20px]">
                      <a
                        href="https://vt.tiktok.com/ZS8NcCLPT/"
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
                      <label htmlFor="my-ukr" className="btn">
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
    </div>
  );
};

export default ExperienceSection;
