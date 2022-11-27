import Navbar from "./Navbar"
import Footer from "./Footer"
import { type } from "os"

type Props = {
  children?: JSX.Element,
}
const Layout = ({ children }: Props) => {
  return (
    <div className={`content`}>
      <Navbar />
       {children}
      <Footer />
    </div>
  )
}

export default Layout