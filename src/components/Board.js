import React from "react";
import Square from "./Square";
const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((sqaure, i) => (
      <Square key={i} value={sqaure} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
