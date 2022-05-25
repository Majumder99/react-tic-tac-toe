import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helper";
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";
  const handleClick = (i) => {
    const historypoint = history.slice(0, stepNumber + 1);
    const current = historypoint[stepNumber];
    const squares = [...current];
    ///Return if won or occupied
    if (winner || squares[i]) return;
    ///If the game is not over
    ///Select square
    squares[i] = xO;
    setHistory([...historypoint, squares]);
    setStepNumber(historypoint.length);
    setXisNext(!xIsNext);
  };
  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };
  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  return (
    <>
      <h1>React Tic Tac Toe - with hooks</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner" + winner : "Next Player: " + xO}</h3>
      </div>
    </>
  );
};

export default Game;
