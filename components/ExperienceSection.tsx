/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaFacebookMessenger,
  FaTiktok,
  FaGlobe,
  FaMobileAlt,
  FaGamepad,
  FaSimplybuilt,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { Tabs, Badge } from "antd";
import type { TabsProps } from "antd";

import css from "../styles/Experience.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { experienceWebData, experienceAppData, experienceGameData, experienceOtherData, experienceStudentData, experienceContentData  } from "../constants/experience";

const ExperienceSection = () => {
  const { t } = useTranslation();

  const tabItems = [
    {
      key: "tab1",
      label: (
        <span className="flex items-center gap-2">
          <FaGlobe className="text-lg" />
          Website & Application
        </span>
      ),
      data: experienceWebData
    },
    {
      key: "tab2",
      label: (
        <span className="flex items-center gap-2">
          <FaGamepad className="text-lg" />
          Game Development
        </span>
      ),
      data: experienceGameData
    },
    {
      key: "tab3",
      label: (
        <span className="flex items-center gap-2">
          <FaSimplybuilt className="text-lg" />
          Filter Effect
        </span>
      ),
      data: experienceContentData
    },
    // {
    //   key: "tab4",
    //   label: (
    //     <span className="flex items-center gap-2">
    //       <FaCalendarAlt className="text-lg" />
    //        Interactive Event
    //     </span>
    //   ),
    //   data: experienceOtherData
    // }
  ];

  const renderCard = (data: any) => (
    <div className="flex justify-center">
      <div className="card w-100 dark:bg-[#191D24] bg-[#EBEBEB] shadow-xl">
        <figure>
          <Image src={data.img} alt={data.imgInfo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title dark:text-[#A6ADBA] text-black text-[17px] font-bold">
            {data.name}
          </h2>
          <div className="flex flex-row rounded-lg ml-[-8px]">
            {data.badge.map((badge: any, index: number) => {
              const className = badge?.props?.className || '';
              const color = className.includes('badge-accent') ? 'badge-accent' : 
                           'badge-error';
              
              return (
                <Badge 
                  key={index}
                  color={color}
                  text={badge?.props?.children}
                  className="font-bold"
                  status="default"
                />
              );
            })}
          </div>
          <p className="dark:text-[#A6ADBA] text-black">
            {data.description}
          </p>
          <div className="card-actions justify-end">
            {data.btn?.map((btn: any, index: number) => {
              if (btn.props?.children?.type === 'label' && btn.props?.children?.props?.htmlFor) {
                const modalId = `${data.id}-modal-${index}`;
                const newBtn = React.cloneElement(btn, {
                  key: modalId,
                  children: React.Children.map(btn.props.children, (child) => {
                    if (child.type === 'label') {
                      return React.cloneElement(child, {
                        htmlFor: modalId
                      });
                    }
                    if (child.type === 'input') {
                      return React.cloneElement(child, {
                        id: modalId,
                        className: "modal-toggle hidden"
                      });
                    }
                    if (child.type === 'div' && child.props?.className === 'modal') {
                      return React.cloneElement(child, {
                        children: React.Children.map(child.props.children, (modalContent) => {
                          if (modalContent.props?.className === 'modal-box') {
                            return React.cloneElement(modalContent, {
                              className: "modal-box dark:bg-[#111827] bg-white max-w-3xl"
                            });
                          }
                          if (modalContent.props?.className === 'modal-action') {
                            return React.cloneElement(modalContent, {
                              children: React.Children.map(modalContent.props.children, (actionBtn) => {
                                if (actionBtn.type === 'label') {
                                  return React.cloneElement(actionBtn, {
                                    htmlFor: modalId
                                  });
                                }
                                return actionBtn;
                              })
                            });
                          }
                          return modalContent;
                        })
                      });
                    }
                    return child;
                  })
                });
                return newBtn;
              }
              return btn;
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto w-full h-full px-4" id="experience">
      <div className="relative wrap overflow-hidden h-full py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center pb-10 dark:text-white text-gray-800">
          {t("experience")}
        </h1>
        <Tabs
          defaultActiveKey="tab1"
          className={`${css.experienceTab} text-black dark:text-white overflow-auto flex [&_.ant-tabs-tab]:text-black dark:[&_.ant-tabs-tab]:text-white [&_.ant-tabs-tab-active]:text-black dark:[&_.ant-tabs-tab-active]:text-white [&_.ant-tabs-tab:hover]:text-black/80 dark:[&_.ant-tabs-tab:hover]:text-white/80`}
        >
          {tabItems.map((item) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mx-2 justify-center pt-4">
                {item.data.map((data: any) => (
                  <React.Fragment key={data.id}>
                    {renderCard(data)}
                  </React.Fragment>
                ))}
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ExperienceSection;
