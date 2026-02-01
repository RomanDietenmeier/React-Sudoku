import { useState } from "react";
import "./app.css";

export function App() {
  const [activeCell, setActiveCell] = useState(-1);

  return (
    <>
      <table
        style={{
          borderCollapse: "collapse",
          aspectRatio: "1 / 1",
          width: "100%",
        }}
      >
        <tr>
          <td
            className={`table_cell table_cell_border_top table_cell_border_left ${activeCell === 0 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(0)}
          ></td>
          <td
            className={`table_cell table_cell_border_top ${activeCell === 1 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(1)}
          >
            9
          </td>
          <td
            className={`table_cell table_cell_border_top table_cell_border_right ${activeCell === 2 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(2)}
          >
            1
          </td>
          <td
            className={`table_cell table_cell_border_top ${activeCell === 3 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(3)}
          ></td>
          <td
            className={`table_cell table_cell_border_top ${activeCell === 4 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(4)}
          ></td>
          <td
            className={`table_cell table_cell_border_top table_cell_border_right ${activeCell === 5 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(5)}
          ></td>
          <td
            className={`table_cell table_cell_border_top ${activeCell === 6 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(6)}
          ></td>
          <td
            className={`table_cell table_cell_border_top ${activeCell === 7 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(7)}
          ></td>
          <td
            className={`table_cell table_cell_border_top table_cell_border_right ${activeCell === 8 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(8)}
          ></td>
        </tr>

        <tr>
          <td
            className={`table_cell table_cell_border_left ${activeCell === 9 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(9)}
          ></td>
          <td
            className={`table_cell ${activeCell === 10 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(10)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 11 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(11)}
          ></td>
          <td
            className={`table_cell ${activeCell === 12 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(12)}
          ></td>
          <td
            className={`table_cell ${activeCell === 13 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(13)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 14 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(14)}
          ></td>
          <td
            className={`table_cell ${activeCell === 15 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(15)}
          ></td>
          <td
            className={`table_cell ${activeCell === 16 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(16)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 17 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(17)}
          ></td>
        </tr>

        <tr>
          <td
            className={`table_cell table_cell_border_left table_cell_border_bottom ${activeCell === 18 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(18)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 19 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(19)}
          ></td>
          <td
            className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 20 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(20)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 21 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(21)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 22 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(22)}
          ></td>
          <td
            className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 23 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(23)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 24 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(24)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 25 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(25)}
          ></td>
          <td
            className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 26 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(26)}
          ></td>
        </tr>

        <tr>
          <td
            className={`table_cell table_cell_border_left ${activeCell === 27 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(27)}
          ></td>
          <td
            className={`table_cell ${activeCell === 28 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(28)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 29 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(29)}
          ></td>
          <td
            className={`table_cell ${activeCell === 30 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(30)}
          ></td>
          <td
            className={`table_cell ${activeCell === 31 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(31)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 32 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(32)}
          ></td>
          <td
            className={`table_cell ${activeCell === 33 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(33)}
          ></td>
          <td
            className={`table_cell ${activeCell === 34 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(34)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 35 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(35)}
          ></td>
        </tr>

        <tr>
          <td
            className={`table_cell table_cell_border_left ${activeCell === 36 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(36)}
          ></td>
          <td
            className={`table_cell ${activeCell === 37 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(37)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 38 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(38)}
          ></td>
          <td
            className={`table_cell ${activeCell === 39 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(39)}
          ></td>
          <td
            className={`table_cell ${activeCell === 40 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(40)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 41 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(41)}
          ></td>
          <td
            className={`table_cell ${activeCell === 42 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(42)}
          ></td>
          <td
            className={`table_cell ${activeCell === 43 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(43)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 44 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(44)}
          ></td>
        </tr>

        <tr>
          <td
            className={`table_cell table_cell_border_left table_cell_border_bottom ${activeCell === 45 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(45)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 46 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(46)}
          ></td>
          <td
            className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 47 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(47)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 48 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(48)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 49 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(49)}
          ></td>
          <td
            className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 50 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(50)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 51 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(51)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 52 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(52)}
          ></td>
          <td
            className={`table_cell table_cell_border_right table_cell_border_bottom ${activeCell === 53 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(53)}
          ></td>
        </tr>

        <tr>
          <td
            className={`table_cell table_cell_border_left ${activeCell === 54 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(54)}
          ></td>
          <td
            className={`table_cell ${activeCell === 55 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(55)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 56 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(56)}
          ></td>
          <td
            className={`table_cell ${activeCell === 57 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(57)}
          ></td>
          <td
            className={`table_cell ${activeCell === 58 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(58)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 59 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(59)}
          ></td>
          <td
            className={`table_cell ${activeCell === 60 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(60)}
          ></td>
          <td
            className={`table_cell ${activeCell === 61 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(61)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 62 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(62)}
          ></td>
        </tr>

        <tr>
          <td
            className={`table_cell table_cell_border_left ${activeCell === 63 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(63)}
          ></td>
          <td
            className={`table_cell ${activeCell === 64 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(64)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 65 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(65)}
          ></td>
          <td
            className={`table_cell ${activeCell === 66 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(66)}
          ></td>
          <td
            className={`table_cell ${activeCell === 67 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(67)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 68 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(68)}
          ></td>
          <td
            className={`table_cell ${activeCell === 69 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(69)}
          ></td>
          <td
            className={`table_cell ${activeCell === 70 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(70)}
          ></td>
          <td
            className={`table_cell table_cell_border_right ${activeCell === 71 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(71)}
          ></td>
        </tr>

        <tr>
          <td
            className={`table_cell table_cell_border_bottom table_cell_border_left ${activeCell === 72 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(72)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 73 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(73)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom table_cell_border_right ${activeCell === 74 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(74)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 75 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(75)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 76 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(76)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom table_cell_border_right ${activeCell === 77 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(77)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 78 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(78)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom ${activeCell === 79 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(79)}
          ></td>
          <td
            className={`table_cell table_cell_border_bottom table_cell_border_right ${activeCell === 80 ? "table_cell_active" : ""}`}
            onClick={() => setActiveCell(80)}
          ></td>
        </tr>
      </table>
    </>
  );
}
