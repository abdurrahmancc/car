import React from "react";
import img from "../../images/notfound.gif";

const NotFound = () => {
  return (
    <div>
      <h1>your result not found</h1>
      <img className="w-100 h-80" src={img} alt="" />
    </div>
  );
};

export default NotFound;
