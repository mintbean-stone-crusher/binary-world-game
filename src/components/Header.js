import React, { useState } from "react";

const Header = (props) => {
  console.log(props.gameOver);

  // let info = false;
  console.log(props.info);
  return (
    <div className="header">
      <div hidden={props.info === false} className="gameInfo">
        Game Info
        <p>
          A square 8x8 board is available, 64 discs coloured black on one side
          and white on the opposite side.
        </p>
        <p>
          The board will start with 2 black squares and 2 white squares at the
          centre of the board.
        </p>
        <p>
          They are arranged with black forming a North-East to South-West
          direction. White is forming a North-West to South-East direction. Then
          the game alternates between white and black until all the squares are
          filled on the board.
        </p>
        <p>
          The goal of this game is to get the majority of colour squares on the
          board at the end of the game.
        </p>
        <p>Player is winner who has maximum squares on the board.</p>
        <button onClick={() => props.setInfo(false)}>OK</button>
      </div>
      <div className={props.info === true ? "blured" : null}>
        <h1>BINARY WORLD</h1>
        <button className="gameInfoBtn" onClick={() => props.setInfo(true)}>
          &#63;
        </button>
        <h2>
          {props.gameOver === true
            ? props.whiteScore > props.blackScore
              ? "White Won!"
              : props.blackScore > props.whiteScore
              ? "Black Won!"
              : "Tie Game!"
            : null}
        </h2>
        <br></br>
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
    </div>
  );
};

export default Header;
