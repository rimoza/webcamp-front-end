import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white shadow-2xl shadow-gray-600/20 rounded-md w-full px-40 py-10 mt-3 mb-10">
      {props.children}
    </div>
  );
};

export default Card;
