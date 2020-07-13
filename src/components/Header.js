import React from "react";

const Header = (props) => {
  console.log(props.gameOver);
  return (
    <div className="header">
      <h1>BINARY WORLD</h1>
      <h2>
        {props.gameOver === true
          ? props.whiteScore > props.blackScore
            ? "White Win"
            : props.blackScore > props.whiteScore
            ? "Black Win"
            : "Tie Game"
          : null}
      </h2>
      <button
        onClick={() => props.setPlayerMode("single")}
        className={
          "playerMode " + (props.playerMode === "single" ? "selected" : "")
        }
        disabled={
          props.gameOver || props.whiteScore !== 2 || props.blackScore !== 2
        }
      >
        Single Player
      </button>{" "}
      <button
        onClick={() => props.setPlayerMode("double")}
        className={
          "playerMode " + (props.playerMode === "double" ? "selected" : "")
        }
        disabled={
          props.gameOver || props.whiteScore !== 2 || props.blackScore !== 2
        }
      >
        Double Player
      </button>
      <br />
      <br></br>
      <button className="restartBtn" onClick={() => props.resetGame()}>
        RESTART
      </button>
      <br></br>
      <h3>
        Current Player:
        <button
          className={
            "currentPlayer " +
            (props.currentPlayer === "W" ? "whiteBox" : "blackBox")
          }
        />
      </h3>
    </div>
  );
};

export default Header;
