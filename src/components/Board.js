import React from "react";
import Cell from "./Cell";

const Board = (props) => (
  <table
    className={props.info === true || props.gameOver === true ? "blured" : null}
  >
    <tbody>
      {props.boardState.map((row, i) => {
        return (
          <tr key={i}>
            {row.map((cell, j) => (
              <Cell
                boardState={props.boardState}
                handleClick={props.handleClick}
                i={i}
                j={j}
                key={i + "" + j}
              />
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default Board;
