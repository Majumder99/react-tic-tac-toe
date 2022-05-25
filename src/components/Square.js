import React from "react";

const Square = ({ value, onClick }) => {
  const style = value ? `sqaures ${value}` : "sqaures";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
