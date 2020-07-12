import React, { useState }  from 'react';
import './App.css';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("W");
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
  const handleClick = (x, y) => {
    isValidMove(x, y, currentPlayer);
    console.log(x + " " + y);

    console.log(boardState);
  };

  const isValidMove = (x, y, i) => {
    console.log("INSIDE VALIDMOVE");
    let count = 0;
    if (boardState[x][y] !== "O") console.log(count);
    count += checkTop(boardState, x, y, i);
    count += checkRight(boardState, x, y, i);
    count += checkLeft(boardState, x, y, i);
    count += checkBottom(boardState, x, y, i);
    count += checkTopRight(boardState, x, y, i);
    count += checkTopLeft(boardState, x, y, i);
    count += checkBottomRight(boardState, x, y, i);
    count += checkBottomLeft(boardState, x, y, i);
    console.log(count);
    if (count > 0) {
      const board = playGame(boardState, x, y, currentPlayer);
      currentPlayer === "B" ? setCurrentPlayer("W") : setCurrentPlayer("B");
      console.log(currentPlayer);
    }
  };

  const playGame = (boardState, xForMaxCount, yForMaxCount, c) => {
    if (checkTop(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      changeTop(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkRight(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      changeRight(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkLeft(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      changeLeft(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkBottom(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      changeBottom(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkTopRight(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      changeTopRight(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkTopLeft(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      changeTopLeft(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkBottomRight(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      changeBottomRight(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkBottomLeft(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      changeBottomLeft(boardState, xForMaxCount, yForMaxCount, c);
    }
  };

  const checkTop = (boardState, x, y, i) => {
    let p = x,
        q = y;
    let count = 0;
    if (p > 1) {
      p--;
      while (p >= 0) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p--;
      }
    }
    return 0;
  };
  const checkRight = (boardState, x, y, i) => {
    let p = x,
        q = y;
    let count = 0;
    if (q < 6) {
      q++;
      while (q <= 7) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        q++;
      }
    }
    return 0;
  };
  const checkLeft = (boardState, x, y, i) => {
    let p = x,
        q = y;
    let count = 0;
    if (q > 1) {
      q--;
      while (q >= 0) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        q--;
      }
    }
    return 0;
  };
  const checkBottom = (boardState, x, y, i) => {
    let p = x,
        q = y;
    let count = 0;
    if (p < 6) {
      p++;
      while (p <= 7) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p++;
      }
    }
    return 0;
  };
  const checkTopRight = (boardState, x, y, i) => {
    let p = x,
        q = y;
    let count = 0;
    if (p > 1 && q < 6) {
      p--;
      q++;
      while (p >= 0 && q <= 7) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p--;
        q++;
      }
    }
    return 0;
  };
  const checkTopLeft = (boardState, x, y, i) => {
    let p = x,
        q = y;
    let count = 0;
    if (p > 1 && q > 1) {
      p--;
      q--;
      while (p >= 0 && q >= 0) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p--;
        q--;
      }
    }
    return 0;
  };
  const checkBottomRight = (boardState, x, y, i) => {
    let p = x,
        q = y;
    let count = 0;
    if (p < 6 && q < 6) {
      p++;
      q++;
      while (p <= 7 && q <= 7) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p++;
        q++;
      }
    }
    return 0;
  };
  const checkBottomLeft = (boardState, x, y, i) => {
    let p = x,
        q = y;
    let count = 0;
    if (p < 6 && q > 1) {
      p++;
      q--;
      while (p <= 7 && q >= 0) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p++;
        q--;
      }
    }
    return 0;
  };

  const changeTop = (boardState, x, y, c) => {
    // TODO Auto-generated method stub
    let p = x,
        q = y;
    let copy = [...boardState];
    copy[p][q] = c;
    // boardState[p][q] = c;
    p--;
    while (p >= 0) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // boardState[p][q] = c;
        copy[p][q] = c;
      }
      p--;
    }
    setBoardState(copy);
  };

  const changeRight = (boardState, x, y, c) => {
    let p = x,
        q = y;
    let copy = [...boardState];
    copy[p][q] = c;
    // boardState[p][q] = c;
    q++;
    while (q <= 7) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // boardState[p][q] = c;
        copy[p][q] = c;
      }
      q++;
    }
    setBoardState(copy);
  };

  const changeLeft = (boardState, x, y, c) => {
    let p = x,
        q = y;
    // boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = currentPlayer;
    q--;
    while (q >= 0) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // boardState[p][q] = c;
        copy[p][q] = currentPlayer;
      }
      q--;
    }
    setBoardState(copy);
  };
  const changeBottom = (boardState, x, y, c) => {
    let p = x,
        q = y;
    // boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = currentPlayer;
    p++;
    while (p <= 7) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // boardState[p][q] = c;
        copy[p][q] = currentPlayer;
      }
      p++;
    }
    setBoardState(copy);
  };
  const changeTopRight = (boardState, x, y, c) => {
    let p = x,
        q = y;
    // boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = currentPlayer;
    p--;
    q++;
    while (p >= 0 && q <= 7) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // boardState[p][q] = c;
        copy[p][q] = currentPlayer;
      }
      p--;
      q++;
    }
    setBoardState(copy);
  };
  const changeTopLeft = (boardState, x, y, c) => {
    let p = x,
        q = y;
    // boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = currentPlayer;
    p--;
    q--;
    while (p >= 0 && q >= 0) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // boardState[p][q] = c;
        copy[p][q] = currentPlayer;
      }
      p--;
      q--;
    }
    setBoardState(copy);
  };
  const changeBottomRight = (boardState, x, y, c) => {
    let p = x,
        q = y;
    // boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = currentPlayer;
    p++;
    q++;
    while (p <= 7 && q <= 7) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // boardState[p][q] = c;
        copy[p][q] = currentPlayer;
      }
      p++;
      q++;
    }
    setBoardState(copy);
  };
  const changeBottomLeft = (boardState, x, y, c) => {
    let p = x,
        q = y;
    // boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = currentPlayer;
    p++;
    q--;
    while (p <= 7 && q >= 0) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // boardState[p][q] = c;
        copy[p][q] = currentPlayer;
      }
      p++;
      q--;
    }
    setBoardState(copy);
  };

  return (
      <>
        <h1>binary-world Game</h1>
        minimum version
        {currentPlayer}
        <table>
          {boardState.map((row, i) => {
            return (
                <tr>
                  {row.map((cell, j) => {
                    return (
                        <td id="cell_0_0" onClick={() => handleClick(i, j)}>
                          {i}
                          {j}
                          <button
                              className={
                                boardState[i][j] === "W"
                                    ? "whiteBox"
                                    : boardState[i][j] === "B"
                                    ? "blackBox"
                                    : null
                              }
                          />
                        </td>
                    );
                  })}
                </tr>
            );
          })}
        </table>
        <div id="text"></div>
      </>
  );
}

export default App;
