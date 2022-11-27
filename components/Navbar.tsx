import { useState } from "react";
import Link from "next/link";
import css from "../styles/Navbar.module.css";

const Navbar = (): JSX.Element => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="flex items-center flex-wrap bg-black md:p-3 p-1 fixed w-full z-50 top-0">
      <Link href="/">
        <div className="inline-flex items-center p-2 mr-4 ">
          <div className={`flex w-full md:w-1/2 justify-center md:justify-start`}>
            <img src="" className={`md:w-[250px] w-[70px] md:h-[55px] h-[30px] cursor-pointer`} alt="Logo The Hidden Ghost" />
          </div>
        </div>
      </Link>
      <button className=" inline-flex p-1 hover:bg-red-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none" onClick={handleClick}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <a className={`inline-block text-white no-underline ${css.navbarColor} hover:text-underline py-1 px-4 text-[30px] ${css.fontContent}`} href="">
            Home
          </a>
          <a className={`inline-block text-white no-underline ${css.navbarColor} hover:text-underline py-1 px-4 text-[30px] ${css.fontContent}`} href="#character">
            About Me
          </a>
          <a className={`inline-block text-white no-underline ${css.navbarColor} hover:text-underline py-1 px-4 text-[30px] ${css.fontContent}`} href="#gameplay">
            Tool
          </a>
          <a className={`inline-block text-white no-underline ${css.navbarColor} hover:text-underline py-1 px-4 text-[30px] ${css.fontContent}`} href="#news">
            Resume
          </a>
          <a className={`inline-block text-white no-underline ${css.navbarColor} hover:text-underline py-1 px-4 text-[30px] ${css.fontContent}`} href="/about">
            Experience
          </a>
          <a className={`inline-block text-white no-underline ${css.navbarColor} hover:text-underline py-1 px-4 text-[30px] ${css.fontContent}`} href="/about">
            Contact Me
          </a>
          {/*<a className={`inline-block text-white no-underline ${css.navbarColor} hover:text-underline py-1 px-4 text-[30px] ${css.fontContent}`} href="opensource">
            OpenSource
  </a>*/}
          {/* <a className={`inline-block text-white no-underline ${css.navbarColor} hover:text-underline py-1 px-4 text-[30px] ${css.fontContent}`} href="/downloadAR">
            ดาวน์โหลด
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
