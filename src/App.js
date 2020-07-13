import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("W");
  const [playerMode, setPlayerMode] = useState("single");
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
    <>
      <Game
        currentPlayer={currentPlayer}
        setPlayerMode={setPlayerMode}
        setBoardState={setBoardState}
        setCurrentPlayer={setCurrentPlayer}
        boardState={boardState}
        playerMode={playerMode}
      />
      <Footer />
    </>
  );
}

export default App;
