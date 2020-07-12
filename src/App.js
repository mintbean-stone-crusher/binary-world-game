import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Cell from "./components/Cell";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("W");
  const [playerMode, setPlayerMode] = useState("single");
  console.log(playerMode);
  const [boardState, setBoardState] = useState([
    ["O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "W", "B", "O", "O", "O"],
    ["O", "O", "O", "B", "W", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O"],
  ]);

  return (
    <Game
      currentPlayer={currentPlayer}
      setPlayerMode={setPlayerMode}
      setBoardState={setBoardState}
      setCurrentPlayer={setCurrentPlayer}
      boardState={boardState}
    />
  );
}

export default App;
