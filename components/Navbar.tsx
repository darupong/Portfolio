/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaCog, FaLanguage, FaPalette } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import logo from "../public/img/New2025.png";
import zh from "../public/img/zh.png";
import th from "../public/img/th.png";
import us from "../public/img/us.png";
import jp from "../public/img/jp.png";

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "timeline", "experience"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Update active section based on current route
    if (router.pathname !== "/") {
      setActiveSection(router.pathname.replace("/", ""));
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.pathname]);

  const handleNavigation = (href: string, sectionId?: string) => {
    if (sectionId) {
      // If we're not on the home page and clicking a section link, go to home page first
      if (router.pathname !== "/") {
        router.push("/").then(() => {
          // Wait for the page to load and then scroll to the section
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              const navbarHeight = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }, 100);
        });
      } else {
        // If we're already on home page, just scroll to the section
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    } else {
      // If it's a page link, navigate to it
      router.push(href);
    }
  };

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
    { href: "#home", label: "Home", sectionId: "home" },
    { href: "#timeline", label: "Timeline", sectionId: "timeline" },
    { href: "#experience", label: "Experience", sectionId: "experience" },
    { href: "/resume", label: "Resume" },
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href, link.sectionId);
                  }}
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    activeSection === (link.sectionId || link.href.replace("/", ""))
                      ? "text-[#36D399]"
                      : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36D399] dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                  aria-current={activeSection === (link.sectionId || link.href.replace("/", "")) ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:order-2">
          <div className="pl-4">
            <Dropdown menu={{ items: settingsItems }} placement="bottomRight" overlayClassName="no-arrow">
              <a onClick={(e) => e.preventDefault()}>
                <Space className="flex justify-center items-center">
                  <HiOutlineMenuAlt3 className="w-6 h-6 text-black dark:text-white" />
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