import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="nav">
      <h2>
        <Link href="/">Blog</Link>
      </h2>
    </div>
  );
}

export default NavBar;
