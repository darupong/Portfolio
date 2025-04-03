import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { type } from "os";
import Head from "next/head";

type Props = {
  children?: JSX.Element,
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/img/newicontab.svg" />
        <title>Darupong Portfolio</title>
      </Head>
      <div className={`content bg-white dark:bg-[#272727]`}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout