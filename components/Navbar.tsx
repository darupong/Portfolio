/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import css from "../styles/Navbar.module.css";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaFacebook,
  FaTelegram,
  FaLine,
  FaLinkedin,
} from "react-icons/fa";

import logo from "../public/img/myimg.png";
import Image from "next/image";
import { Tag } from "antd";

const Navbar = (): JSX.Element => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <FaMoon
          className=" w-6 h-6 text-black dark:text-white"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <FaSun
          className=" w-6 h-6 text-black dark:text-white"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <nav className="bg-white z-50 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full top-0 left-0  border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <Image src={logo} className="h-[50px] w-[50px]" alt="Darupong" />
        </a>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-[#36D399] rounded md:bg-transparent md:text-[#36D399] md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/timeline"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36D399] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Timeline
              </a>
            </li>

            <li>
              <a
                href="/experience"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36D399] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="/resume"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36D399] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="/certificate"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36D399] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Certificate
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36D399] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            {/* <li className="flex items-center">
              <a
                href="/infoapi"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36D399] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                API
              </a>
            </li> */}
          </ul>
        </div>
        <div className="flex md:order-2">
          <div className=" pl-4 flex items-center">{renderThemeChanger()}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
