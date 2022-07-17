import { Fragment } from "react";
import NavBar from "../NavBar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <main className="w-full h-[85vh] flex justify-center items-center">{children}</main>
    </Fragment>
  );
};

export default Layout;
