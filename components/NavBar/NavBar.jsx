import React from "react";
import Link from "next/link";

export const NavBar = ({ label, ...props }) => {
  return (
    <div className="nav">
      <h2 {...props}>
        <Link href="/">{label}</Link>
      </h2>
    </div>
  );
};

export default NavBar;
