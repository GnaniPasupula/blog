import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

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
