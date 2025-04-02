/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaCog, FaLanguage, FaPalette } from "react-icons/fa"; // Settings icon

import logo from "../public/img/New2025.png";
import zh from "../public/img/zh.png";
import th from "../public/img/th.png";
import us from "../public/img/us.png";
import jp from "../public/img/jp.png";

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Language dropdown items
  const languageItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            router.push("/", "/", { locale: "en" });
          }}
        >
          <Image src={us} alt="English" width={20} height={14} className="inline mr-2" />
          English
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            router.push("/", "/", { locale: "th" });
          }}
        >
          <Image src={th} alt="Thai" width={20} height={14} className="inline mr-2" />
          ภาษาไทย
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            router.push("/", "/", { locale: "zh" });
          }}
        >
          <Image src={zh} alt="Chinese" width={20} height={14} className="inline mr-2" />
          中文
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            router.push("/", "/", { locale: "jp" });
          }}
        >
          <Image src={jp} alt="Japanese" width={20} height={14} className="inline mr-2" />
          日本語
        </a>
      ),
    },
  ];

  const themeItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-white border border-gray-300 mr-2 inline-block" />
          White
        </span>
      ),
      onClick: () => setTheme("light"),
    },
    {
      key: "2",
      label: (
        <span className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-black border border-gray-300 mr-2 inline-block" />
          Black
        </span>
      ),
      onClick: () => setTheme("dark"),
    },
  ];

  const settingsItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span className="flex items-center">
          <FaLanguage className="text-gray-600 mr-2" />
          Language
        </span>
      ),
      children: languageItems,
    },
    {
      key: "2",
      label: (
        <span className="flex items-center">
          <FaPalette className="text-gray-600 mr-2" />
          Theme
        </span>
      ),
      children: themeItems,
    },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/timeline", label: "Timeline" },
    { href: "/experience", label: "Experience" },
    { href: "/resume", label: "Resume" },
    { href: "/certificate", label: "Certificate" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white z-50 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full top-0 left-0 border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <Image src={logo} className="h-[50px] w-[50px]" alt="Darupong" />
        </a>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    router.pathname === link.href
                      ? "text-white bg-[#36D399] md:bg-transparent md:text-[#36D399]"
                      : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36D399] dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                  aria-current={router.pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:order-2">
          <div className="pl-4">
            <Dropdown menu={{ items: settingsItems }} overlayClassName="no-arrow">
              <a onClick={(e) => e.preventDefault()}>
                <Space className="flex justify-center items-center">
                  <FaCog className="w-6 h-6 text-black dark:text-white" /> {/* Settings icon */}
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;