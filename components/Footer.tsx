import css from "../styles/Footer.module.css";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaFacebook,
  FaTelegram,
  FaLine,
  FaLinkedin,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer footer-center p-10 dark:bg-[#191D24] bg-[#EBEBEB] text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/ineungwenlek/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook
              className=" w-6 h-6 text-black dark:text-white"
              role="button"
            />
          </a>
          <a
            href="https://github.com/darupong"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              className=" w-6 h-6 text-black dark:text-white"
              role="button"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/darupongchouypu/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              className=" w-6 h-6 text-black dark:text-white"
              role="button"
            />
          </a>
        </div>
      </div>
      <div>
        <p className="dark:text-white text-black">
          © 2021-2024 Darupong Portfolio. All rights reserved.
        </p>
        <div className=" flex flex-row gap-2 items-center">
          <p className="dark:text-white text-black">Powered by Next.js</p>
          <SiNextdotjs className=" w-6 h-6 text-black dark:text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
