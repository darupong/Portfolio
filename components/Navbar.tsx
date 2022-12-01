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
        <a href="" className="flex items-center">
          <Image src={logo} className="h-[50px] w-[50px]" alt="Darupong" />
        </a>
        <div className="flex md:order-2">
          <div className=" pl-4 flex items-center">
            <a
              href="https://www.facebook.com/ineungwenlek/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className=" w-6 h-6 text-black dark:text-white" role="button" />
            </a>
          </div>
          <div className=" pl-4 flex items-center">
          <a
              href="https://github.com/darupong"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className=" w-6 h-6 text-black dark:text-white" role="button" />
            </a>
          </div>
          <div className=" pl-4 flex items-center">
          <a
              href="https://www.linkedin.com/in/darupongchouypu/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className=" w-6 h-6 text-black dark:text-white" role="button" />
            </a>
          </div>
          <div className=" pl-4 flex items-center">{renderThemeChanger()}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
