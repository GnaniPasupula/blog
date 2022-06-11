import React from "react";

export const Footer = ({ label, ...props }) => {
  return (
    <div className="footer">
      <p {...props}>{label ? label : "Made by Gnani"}</p>
    </div>
  );
};

export default Footer;
