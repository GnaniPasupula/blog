import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

function Layout({ children }) {
  return (
    <div>
      <NavBar></NavBar>
      <div className="content">{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
