import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-blue-500 py-3">
      <h5 className="text-center text-2xl text-white font-bold">
        &copy; <a href="bigiltech.com">Bigiltech @ {date.getFullYear()}</a>
      </h5>
    </div>
  );
};

export default Footer;
