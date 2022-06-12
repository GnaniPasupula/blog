import React from "react";

export const Footer = ({ FooterDescription, ...props }) => {
  return (
    <div className="footer">
      <p {...props}>
        {FooterDescription ? FooterDescription : "Made by Gnani"}
      </p>
    </div>
  );
};

export default Footer;
