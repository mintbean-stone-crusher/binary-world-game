import React from "react";

const Header = (props) => (
  <div className="header">
    <h1>BINARY WORLD</h1>
    <h3>
      Current Player:
      <button
        className={
          "currentPlayer " +
          (props.currentPlayer === "W" ? "whiteBox" : "blackBox")
        }
      />
    </h3>
    <h3>
      <button className="currentPlayer whiteBox" />
      {props.whiteScore}
      <button className="currentPlayer blackBox" />
      {props.blackScore}
    </h3>
    <h2>
      {props.gameOver === true
        ? props.whiteScore > props.blackScore
          ? "White Win"
          : props.blackScore > props.whiteScore
          ? "Black Win"
          : "Tie Game"
        : null}
    </h2>
    <button onClick={() => props.setPlayerMode("single")}>Single Player</button>
    <button onClick={() => props.setPlayerMode("double")}>Double Player</button>
    <br />

    <button type="button" onClick={() => props.resetGame()}>
      RESTART
    </button>
  </div>
);

export default Header;
