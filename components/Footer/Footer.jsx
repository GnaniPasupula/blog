import React from "react";

export const Footer = ({ label, ...props }) => {
  return (
    <div className="footer">
      <p {...props}>{label}</p>
    </div>
  );
};

export default Footer;
