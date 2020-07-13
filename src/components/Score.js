import React from "react";

const Score = (props) => (
  <h3>
    <button className="currentPlayer whiteBox" /> {props.whiteScore}{" "}
    <button className="currentPlayer blackBox" /> {props.blackScore}
  </h3>
);

export default Score;
