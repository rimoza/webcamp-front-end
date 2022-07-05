import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="absolute bottom-0 left-0 right-0 text-center bg-blue-500 py-3">
      <a
        href="http://bigiltech.com"
        target="_blank"
        rel="noreferrer"
        className="text-center text-2xl text-white font-bold"
      >
        &copy; <a href="bigiltech.com">Bigiltech @ {date.getFullYear()}</a>
      </a>
    </div>
  );
};

export default Footer;
