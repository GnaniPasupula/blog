import React from "react";
import Link from "next/link";

export const NavBar = ({ TopbarTitle, ...props }) => {
  return (
    <div className="nav">
      <h2 {...props}>
        <Link href="/">
          <a>{TopbarTitle ? TopbarTitle : "Blog"}</a>
        </Link>
      </h2>
    </div>
  );
};

export default NavBar;
