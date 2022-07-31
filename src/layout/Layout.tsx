import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import {Navbar} from "../components/Navbar/Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
