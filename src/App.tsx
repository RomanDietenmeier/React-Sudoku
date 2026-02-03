import { useState, useEffect } from "react";
import "./app.css";
import { checkWrongMove } from "./checkWrongMove";
import { humanSolveMove } from "./humanSolve";

export function App() {
  const [wrongMove, setWrongMove] = useState<Array<number>>([]);
  const [activeCell, setActiveCell] = useState(-1);
  const [cells, setCells] = useState<Array<number>>([
    -1, -1, -1, 6, -1, 4, -1, -1, -1, -1, -1, -1, -1, 8, -1, -1, -1, 6, -1, -1,
    6, 9, -1, -1, -1, 3, 8,

    2, -1, -1, -1, -1, 6, 5, -1, -1, 5, 7, -1, -1, -1, -1, -1, 6, 1, -1, -1, 3,
    1, -1, -1, -1, -1, 4,

    9, 6, -1, -1, -1, 7, 2, -1, -1, 7, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1,
    -1, 8, -1, 9, -1, -1, -1,
  ]); //Array(81).fill(-1));

  function handleKeyDown(e: KeyboardEvent) {
    if (activeCell === -1) return;

    const newCells = cells.slice();
    // console.log("e.key", e.key);

    if (e.key >= "1" && e.key <= "9") {
      newCells[activeCell] = Number(e.key);
      setCells(newCells);
    } else if (e.key === "Backspace" || e.key === "Delete" || e.key === "0") {
      newCells[activeCell] = -1;
      setCells(newCells);
    } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
      if ((activeCell + 1) % 9 !== 0) {
        setActiveCell(activeCell + 1);
      }
    } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
      if (activeCell % 9 !== 0) {
        setActiveCell(activeCell - 1);
      }
    } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
      if (activeCell - 9 >= 0) {
        setActiveCell(activeCell - 9);
      }
    } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
      if (activeCell + 9 < 81) {
        setActiveCell(activeCell + 9);
      }
    }
  }

  useEffect(() => {
    setWrongMove(checkWrongMove(cells));
    console.log(
      "ToDo DELETE THIS LINE",
      "humanSolveMove",
      humanSolveMove(cells),
    );
  }, [cells]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCell]);

  function onClickSolveStep() {
    const solveStep = humanSolveMove(cells);
    if (!solveStep) {
      window.alert("can't find a move");
      return;
    }
    const newCells = cells.slice();
    newCells[solveStep[0]] = solveStep[1];
    setCells(newCells);
  }

  function onClickDelete() {
    if (activeCell === -1) return;
    const newCells = cells.slice();
    newCells[activeCell] = -1;
    setCells(newCells);
  }

  function onClickNumber(number: number) {
    if (activeCell === -1) return;
    const newCells = cells.slice();
    newCells[activeCell] = number;
    setCells(newCells);
  }

  return (
    <>
      <table
        style={{
          borderCollapse: "collapse",
          aspectRatio: "1 / 1",
          width: "100%",
        }}
      >
        <tbody>
          <tr>
            <td
              className={`table_cell table_cell_border_top table_cell_border_left ${activeCell === 0 ? "table_cell_active" : ""} ${wrongMove.includes(0) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(0)}
            >
              {cells[0] === -1 ? "" : cells[0]}
            </td>
            <td
              className={`table_cell table_cell_border_top ${activeCell === 1 ? "table_cell_active" : ""} ${wrongMove.includes(1) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(1)}
            >
              {cells[1] === -1 ? "" : cells[1]}
            </td>
            <td
              className={`table_cell table_cell_border_top table_cell_border_right ${activeCell === 2 ? "table_cell_active" : ""} ${wrongMove.includes(2) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(2)}
            >
              {cells[2] === -1 ? "" : cells[2]}
            </td>
            <td
              className={`table_cell table_cell_border_top ${activeCell === 3 ? "table_cell_active" : ""} ${wrongMove.includes(3) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(3)}
            >
              {cells[3] === -1 ? "" : cells[3]}
            </td>
            <td
              className={`table_cell table_cell_border_top ${activeCell === 4 ? "table_cell_active" : ""} ${wrongMove.includes(4) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(4)}
            >
              {cells[4] === -1 ? "" : cells[4]}
            </td>
            <td
              className={`table_cell table_cell_border_top table_cell_border_right ${activeCell === 5 ? "table_cell_active" : ""} ${wrongMove.includes(5) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(5)}
            >
              {cells[5] === -1 ? "" : cells[5]}
            </td>
            <td
              className={`table_cell table_cell_border_top ${activeCell === 6 ? "table_cell_active" : ""} ${wrongMove.includes(6) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(6)}
            >
              {cells[6] === -1 ? "" : cells[6]}
            </td>
            <td
              className={`table_cell table_cell_border_top ${activeCell === 7 ? "table_cell_active" : ""} ${wrongMove.includes(7) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(7)}
            >
              {cells[7] === -1 ? "" : cells[7]}
            </td>
            <td
              className={`table_cell table_cell_border_top table_cell_border_right ${activeCell === 8 ? "table_cell_active" : ""} ${wrongMove.includes(8) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(8)}
            >
              {cells[8] === -1 ? "" : cells[8]}
            </td>
          </tr>

          <tr>
            <td
              className={`table_cell table_cell_border_left ${activeCell === 9 ? "table_cell_active" : ""} ${wrongMove.includes(9) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(9)}
            >
              {cells[9] === -1 ? "" : cells[9]}
            </td>
            <td
              className={`table_cell ${activeCell === 10 ? "table_cell_active" : ""} ${wrongMove.includes(10) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(10)}
            >
              {cells[10] === -1 ? "" : cells[10]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 11 ? "table_cell_active" : ""} ${wrongMove.includes(11) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(11)}
            >
              {cells[11] === -1 ? "" : cells[11]}
            </td>
            <td
              className={`table_cell ${activeCell === 12 ? "table_cell_active" : ""} ${wrongMove.includes(12) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(12)}
            >
              {cells[12] === -1 ? "" : cells[12]}
            </td>
            <td
              className={`table_cell ${activeCell === 13 ? "table_cell_active" : ""} ${wrongMove.includes(13) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(13)}
            >
              {cells[13] === -1 ? "" : cells[13]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 14 ? "table_cell_active" : ""} ${wrongMove.includes(14) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(14)}
            >
              {cells[14] === -1 ? "" : cells[14]}
            </td>
            <td
              className={`table_cell ${activeCell === 15 ? "table_cell_active" : ""} ${wrongMove.includes(15) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(15)}
            >
              {cells[15] === -1 ? "" : cells[15]}
            </td>
            <td
              className={`table_cell ${activeCell === 16 ? "table_cell_active" : ""} ${wrongMove.includes(16) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(16)}
            >
              {cells[16] === -1 ? "" : cells[16]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 17 ? "table_cell_active" : ""} ${wrongMove.includes(17) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(17)}
            >
              {cells[17] === -1 ? "" : cells[17]}
            </td>
          </tr>

          <tr>
            <td
              className={`table_cell table_cell_border_left table_cell_border_bottom ${activeCell === 18 ? "table_cell_active" : ""} ${wrongMove.includes(18) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(18)}
            >
              {cells[18] === -1 ? "" : cells[18]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 19 ? "table_cell_active" : ""} ${wrongMove.includes(19) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(19)}
            >
              {cells[19] === -1 ? "" : cells[19]}
            </td>
            <td
              className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 20 ? "table_cell_active" : ""} ${wrongMove.includes(20) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(20)}
            >
              {cells[20] === -1 ? "" : cells[20]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 21 ? "table_cell_active" : ""} ${wrongMove.includes(21) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(21)}
            >
              {cells[21] === -1 ? "" : cells[21]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 22 ? "table_cell_active" : ""} ${wrongMove.includes(22) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(22)}
            >
              {cells[22] === -1 ? "" : cells[22]}
            </td>
            <td
              className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 23 ? "table_cell_active" : ""} ${wrongMove.includes(23) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(23)}
            >
              {cells[23] === -1 ? "" : cells[23]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 24 ? "table_cell_active" : ""} ${wrongMove.includes(24) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(24)}
            >
              {cells[24] === -1 ? "" : cells[24]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 25 ? "table_cell_active" : ""} ${wrongMove.includes(25) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(25)}
            >
              {cells[25] === -1 ? "" : cells[25]}
            </td>
            <td
              className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 26 ? "table_cell_active" : ""} ${wrongMove.includes(26) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(26)}
            >
              {cells[26] === -1 ? "" : cells[26]}
            </td>
          </tr>

          <tr>
            <td
              className={`table_cell table_cell_border_left ${activeCell === 27 ? "table_cell_active" : ""} ${wrongMove.includes(27) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(27)}
            >
              {cells[27] === -1 ? "" : cells[27]}
            </td>
            <td
              className={`table_cell ${activeCell === 28 ? "table_cell_active" : ""} ${wrongMove.includes(28) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(28)}
            >
              {cells[28] === -1 ? "" : cells[28]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 29 ? "table_cell_active" : ""} ${wrongMove.includes(29) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(29)}
            >
              {cells[29] === -1 ? "" : cells[29]}
            </td>
            <td
              className={`table_cell ${activeCell === 30 ? "table_cell_active" : ""} ${wrongMove.includes(30) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(30)}
            >
              {cells[30] === -1 ? "" : cells[30]}
            </td>
            <td
              className={`table_cell ${activeCell === 31 ? "table_cell_active" : ""} ${wrongMove.includes(31) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(31)}
            >
              {cells[31] === -1 ? "" : cells[31]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 32 ? "table_cell_active" : ""} ${wrongMove.includes(32) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(32)}
            >
              {cells[32] === -1 ? "" : cells[32]}
            </td>
            <td
              className={`table_cell ${activeCell === 33 ? "table_cell_active" : ""} ${wrongMove.includes(33) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(33)}
            >
              {cells[33] === -1 ? "" : cells[33]}
            </td>
            <td
              className={`table_cell ${activeCell === 34 ? "table_cell_active" : ""} ${wrongMove.includes(34) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(34)}
            >
              {cells[34] === -1 ? "" : cells[34]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 35 ? "table_cell_active" : ""} ${wrongMove.includes(35) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(35)}
            >
              {cells[35] === -1 ? "" : cells[35]}
            </td>
          </tr>

          <tr>
            <td
              className={`table_cell table_cell_border_left ${activeCell === 36 ? "table_cell_active" : ""} ${wrongMove.includes(36) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(36)}
            >
              {cells[36] === -1 ? "" : cells[36]}
            </td>
            <td
              className={`table_cell ${activeCell === 37 ? "table_cell_active" : ""} ${wrongMove.includes(37) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(37)}
            >
              {cells[37] === -1 ? "" : cells[37]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 38 ? "table_cell_active" : ""} ${wrongMove.includes(38) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(38)}
            >
              {cells[38] === -1 ? "" : cells[38]}
            </td>
            <td
              className={`table_cell ${activeCell === 39 ? "table_cell_active" : ""} ${wrongMove.includes(39) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(39)}
            >
              {cells[39] === -1 ? "" : cells[39]}
            </td>
            <td
              className={`table_cell ${activeCell === 40 ? "table_cell_active" : ""} ${wrongMove.includes(40) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(40)}
            >
              {cells[40] === -1 ? "" : cells[40]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 41 ? "table_cell_active" : ""} ${wrongMove.includes(41) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(41)}
            >
              {cells[41] === -1 ? "" : cells[41]}
            </td>
            <td
              className={`table_cell ${activeCell === 42 ? "table_cell_active" : ""} ${wrongMove.includes(42) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(42)}
            >
              {cells[42] === -1 ? "" : cells[42]}
            </td>
            <td
              className={`table_cell ${activeCell === 43 ? "table_cell_active" : ""} ${wrongMove.includes(43) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(43)}
            >
              {cells[43] === -1 ? "" : cells[43]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 44 ? "table_cell_active" : ""} ${wrongMove.includes(44) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(44)}
            >
              {cells[44] === -1 ? "" : cells[44]}
            </td>
          </tr>

          <tr>
            <td
              className={`table_cell table_cell_border_left table_cell_border_bottom ${activeCell === 45 ? "table_cell_active" : ""} ${wrongMove.includes(45) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(45)}
            >
              {cells[45] === -1 ? "" : cells[45]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 46 ? "table_cell_active" : ""} ${wrongMove.includes(46) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(46)}
            >
              {cells[46] === -1 ? "" : cells[46]}
            </td>
            <td
              className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 47 ? "table_cell_active" : ""} ${wrongMove.includes(47) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(47)}
            >
              {cells[47] === -1 ? "" : cells[47]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 48 ? "table_cell_active" : ""} ${wrongMove.includes(48) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(48)}
            >
              {cells[48] === -1 ? "" : cells[48]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 49 ? "table_cell_active" : ""} ${wrongMove.includes(49) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(49)}
            >
              {cells[49] === -1 ? "" : cells[49]}
            </td>
            <td
              className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 50 ? "table_cell_active" : ""} ${wrongMove.includes(50) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(50)}
            >
              {cells[50] === -1 ? "" : cells[50]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 51 ? "table_cell_active" : ""} ${wrongMove.includes(51) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(51)}
            >
              {cells[51] === -1 ? "" : cells[51]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 52 ? "table_cell_active" : ""} ${wrongMove.includes(52) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(52)}
            >
              {cells[52] === -1 ? "" : cells[52]}
            </td>
            <td
              className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 53 ? "table_cell_active" : ""} ${wrongMove.includes(53) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(53)}
            >
              {cells[53] === -1 ? "" : cells[53]}
            </td>
          </tr>

          <tr>
            <td
              className={`table_cell table_cell_border_left ${activeCell === 54 ? "table_cell_active" : ""} ${wrongMove.includes(54) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(54)}
            >
              {cells[54] === -1 ? "" : cells[54]}
            </td>
            <td
              className={`table_cell ${activeCell === 55 ? "table_cell_active" : ""} ${wrongMove.includes(55) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(55)}
            >
              {cells[55] === -1 ? "" : cells[55]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 56 ? "table_cell_active" : ""} ${wrongMove.includes(56) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(56)}
            >
              {cells[56] === -1 ? "" : cells[56]}
            </td>
            <td
              className={`table_cell ${activeCell === 57 ? "table_cell_active" : ""} ${wrongMove.includes(57) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(57)}
            >
              {cells[57] === -1 ? "" : cells[57]}
            </td>
            <td
              className={`table_cell ${activeCell === 58 ? "table_cell_active" : ""} ${wrongMove.includes(58) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(58)}
            >
              {cells[58] === -1 ? "" : cells[58]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 59 ? "table_cell_active" : ""} ${wrongMove.includes(59) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(59)}
            >
              {cells[59] === -1 ? "" : cells[59]}
            </td>
            <td
              className={`table_cell ${activeCell === 60 ? "table_cell_active" : ""} ${wrongMove.includes(60) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(60)}
            >
              {cells[60] === -1 ? "" : cells[60]}
            </td>
            <td
              className={`table_cell ${activeCell === 61 ? "table_cell_active" : ""} ${wrongMove.includes(61) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(61)}
            >
              {cells[61] === -1 ? "" : cells[61]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 62 ? "table_cell_active" : ""} ${wrongMove.includes(62) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(62)}
            >
              {cells[62] === -1 ? "" : cells[62]}
            </td>
          </tr>

          <tr>
            <td
              className={`table_cell table_cell_border_left ${activeCell === 63 ? "table_cell_active" : ""} ${wrongMove.includes(63) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(63)}
            >
              {cells[63] === -1 ? "" : cells[63]}
            </td>
            <td
              className={`table_cell ${activeCell === 64 ? "table_cell_active" : ""} ${wrongMove.includes(64) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(64)}
            >
              {cells[64] === -1 ? "" : cells[64]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 65 ? "table_cell_active" : ""} ${wrongMove.includes(65) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(65)}
            >
              {cells[65] === -1 ? "" : cells[65]}
            </td>
            <td
              className={`table_cell ${activeCell === 66 ? "table_cell_active" : ""} ${wrongMove.includes(66) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(66)}
            >
              {cells[66] === -1 ? "" : cells[66]}
            </td>
            <td
              className={`table_cell ${activeCell === 67 ? "table_cell_active" : ""} ${wrongMove.includes(67) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(67)}
            >
              {cells[67] === -1 ? "" : cells[67]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 68 ? "table_cell_active" : ""} ${wrongMove.includes(68) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(68)}
            >
              {cells[68] === -1 ? "" : cells[68]}
            </td>
            <td
              className={`table_cell ${activeCell === 69 ? "table_cell_active" : ""} ${wrongMove.includes(69) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(69)}
            >
              {cells[69] === -1 ? "" : cells[69]}
            </td>
            <td
              className={`table_cell ${activeCell === 70 ? "table_cell_active" : ""} ${wrongMove.includes(70) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(70)}
            >
              {cells[70] === -1 ? "" : cells[70]}
            </td>
            <td
              className={`table_cell table_cell_border_right ${activeCell === 71 ? "table_cell_active" : ""} ${wrongMove.includes(71) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(71)}
            >
              {cells[71] === -1 ? "" : cells[71]}
            </td>
          </tr>

          <tr>
            <td
              className={`table_cell table_cell_border_bottom table_cell_border_left ${activeCell === 72 ? "table_cell_active" : ""} ${wrongMove.includes(72) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(72)}
            >
              {cells[72] === -1 ? "" : cells[72]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 73 ? "table_cell_active" : ""} ${wrongMove.includes(73) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(73)}
            >
              {cells[73] === -1 ? "" : cells[73]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom table_cell_border_right ${activeCell === 74 ? "table_cell_active" : ""} ${wrongMove.includes(74) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(74)}
            >
              {cells[74] === -1 ? "" : cells[74]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 75 ? "table_cell_active" : ""} ${wrongMove.includes(75) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(75)}
            >
              {cells[75] === -1 ? "" : cells[75]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 76 ? "table_cell_active" : ""} ${wrongMove.includes(76) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(76)}
            >
              {cells[76] === -1 ? "" : cells[76]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom table_cell_border_right ${activeCell === 77 ? "table_cell_active" : ""} ${wrongMove.includes(77) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(77)}
            >
              {cells[77] === -1 ? "" : cells[77]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 78 ? "table_cell_active" : ""} ${wrongMove.includes(78) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(78)}
            >
              {cells[78] === -1 ? "" : cells[78]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom ${activeCell === 79 ? "table_cell_active" : ""} ${wrongMove.includes(79) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(79)}
            >
              {cells[79] === -1 ? "" : cells[79]}
            </td>
            <td
              className={`table_cell table_cell_border_bottom table_cell_border_right ${activeCell === 80 ? "table_cell_active" : ""} ${wrongMove.includes(80) ? "table_cell_error" : ""}`}
              onClick={() => setActiveCell(80)}
            >
              {cells[80] === -1 ? "" : cells[80]}
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            columnGap: "10px",
            padding: "5px",
            paddingTop: "10px",
          }}
        >
          <button className="grid_normal_button">Tipp</button>
          <button className="grid_normal_button" onClick={onClickDelete}>
            Löschen
          </button>
          <button className="grid_normal_button">Rückgängig</button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            columnGap: "10px",
            padding: "5px",
          }}
        >
          <button
            className="grid_square_button"
            onClick={() => onClickNumber(1)}
          >
            1
          </button>
          <button
            className="grid_square_button"
            onClick={() => onClickNumber(2)}
          >
            2
          </button>
          <button
            className="grid_square_button"
            onClick={() => onClickNumber(3)}
          >
            3
          </button>
          <button
            className="grid_square_button"
            onClick={() => onClickNumber(4)}
          >
            4
          </button>
          <button
            className="grid_square_button"
            onClick={() => onClickNumber(5)}
          >
            5
          </button>
          <button
            className="grid_square_button"
            onClick={() => onClickNumber(6)}
          >
            6
          </button>
          <button
            className="grid_square_button"
            onClick={() => onClickNumber(7)}
          >
            7
          </button>
          <button
            className="grid_square_button"
            onClick={() => onClickNumber(8)}
          >
            8
          </button>
          <button
            className="grid_square_button"
            onClick={() => onClickNumber(9)}
          >
            9
          </button>
        </div>
      </div>
      <button onClick={onClickSolveStep}>Solve Step</button>
      <div>
        <h2>ToDo / Further Steps</h2>
        <p>
          The "Solve Step" solver is not able to solve Sudokus with the 2
          candidates problem or harder.
        </p>
        <p>
          I guess I could add a brute-force solver, but that is not what I like.
        </p>
        <p>This is such a Sudoku:</p>
        <p className="font_monospace">
          <div>[</div>
          <div>-1, -1, -1, &nbsp;6, -1, &nbsp;4, -1, -1, -1, </div>
          <div>-1, -1, -1, -1, &nbsp;8, -1, -1, -1, &nbsp;6, </div>
          <div>-1, -1, &nbsp;6, &nbsp;9, -1, -1, -1, &nbsp;3, &nbsp;8,</div>
          <div>&nbsp;2, -1, -1, -1, -1, &nbsp;6, &nbsp;5, -1, -1,</div>
          <div>&nbsp;5, &nbsp;7, -1, -1, -1, -1, -1, &nbsp;6, &nbsp;1,</div>
          <div>-1, -1, &nbsp;3, &nbsp;1, -1, -1, -1, -1, &nbsp;4,</div>
          <div>&nbsp;9, &nbsp;6, -1, -1, -1, &nbsp;7, &nbsp;2, -1, -1,</div>
          <div>&nbsp;7, -1, -1, -1, &nbsp;1, -1, -1, -1, -1, </div>
          <div>-1, -1, -1, &nbsp;8, -1, &nbsp;9, -1, -1, -1, </div>
          <div>]</div>
        </p>
        <p>
          Nonetheless, this is a working Sudoku-Board! With an active cell and
          error highlighting.
        </p>
        <p>ENJOY</p>
        <p>P.S. I guess I should also add a Sudoku Creator ^^</p>
        <p>
          I think I should read the book from Lukas Richard on Sudoku
          Strategies:{" "}
          <div style={{ textAlign: "center" }}>
            <a href="https://lr-raetsel.de/sudoku-strategien-buch/">
              Sudoku Strategien Buch - Lukas Richard
            </a>
          </div>
          <br />
          He also has an excelent Website on the Strategies:
          <div style={{ textAlign: "center" }}>
            <a href="https://sudoku-hilfe.de/direkter_zweifacher_kandidat">
              sudoku-hilfe.de/direkter_zweifacher_kandidat
            </a>
          </div>
        </p>
      </div>
    </>
  );
}
