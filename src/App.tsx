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
            className="table_cell table_cell_border_top"
            onClick={() => setActiveCell(1)}
          >
            9
          </td>
          <td
            className="table_cell table_cell_border_top table_cell_border_right"
            onClick={() => setActiveCell(2)}
          >
            1
          </td>
          <td
            className="table_cell table_cell_border_top"
            onClick={() => setActiveCell(3)}
          ></td>
          <td
            className="table_cell table_cell_border_top"
            onClick={() => setActiveCell(4)}
          ></td>
          <td
            className="table_cell table_cell_border_top table_cell_border_right"
            onClick={() => setActiveCell(5)}
          ></td>
          <td
            className="table_cell table_cell_border_top"
            onClick={() => setActiveCell(6)}
          ></td>
          <td
            className="table_cell table_cell_border_top"
            onClick={() => setActiveCell(7)}
          ></td>
          <td
            className="table_cell table_cell_border_top table_cell_border_right"
            onClick={() => setActiveCell(8)}
          ></td>
        </tr>

        <tr>
          <td
            className="table_cell table_cell_border_left"
            onClick={() => setActiveCell(9)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(10)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(11)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(12)}></td>
          <td className="table_cell" onClick={() => setActiveCell(13)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(14)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(15)}></td>
          <td className="table_cell" onClick={() => setActiveCell(16)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(17)}
          ></td>
        </tr>

        <tr>
          <td
            className="table_cell table_cell_border_left table_cell_border_bottom"
            onClick={() => setActiveCell(18)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(19)}
          ></td>
          <td
            className="table_cell table_cell_border_right table_cell_border_bottom"
            onClick={() => setActiveCell(20)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(21)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(22)}
          ></td>
          <td
            className="table_cell table_cell_border_right table_cell_border_bottom"
            onClick={() => setActiveCell(23)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(24)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(25)}
          ></td>
          <td
            className="table_cell table_cell_border_right table_cell_border_bottom"
            onClick={() => setActiveCell(26)}
          ></td>
        </tr>

        <tr>
          <td
            className="table_cell table_cell_border_left"
            onClick={() => setActiveCell(27)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(28)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(29)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(30)}></td>
          <td className="table_cell" onClick={() => setActiveCell(31)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(32)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(33)}></td>
          <td className="table_cell" onClick={() => setActiveCell(34)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(35)}
          ></td>
        </tr>

        <tr>
          <td
            className="table_cell table_cell_border_left"
            onClick={() => setActiveCell(36)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(37)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(38)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(39)}></td>
          <td className="table_cell" onClick={() => setActiveCell(40)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(41)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(42)}></td>
          <td className="table_cell" onClick={() => setActiveCell(43)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(44)}
          ></td>
        </tr>

        <tr>
          <td
            className="table_cell table_cell_border_left table_cell_border_bottom"
            onClick={() => setActiveCell(45)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(46)}
          ></td>
          <td
            className="table_cell table_cell_border_right table_cell_border_bottom"
            onClick={() => setActiveCell(47)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(48)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(49)}
          ></td>
          <td
            className="table_cell table_cell_border_right table_cell_border_bottom"
            onClick={() => setActiveCell(50)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(51)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(52)}
          ></td>
          <td
            className="table_cell table_cell_border_right table_cell_border_bottom"
            onClick={() => setActiveCell(53)}
          ></td>
        </tr>

        <tr>
          <td
            className="table_cell table_cell_border_left"
            onClick={() => setActiveCell(54)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(55)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(56)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(57)}></td>
          <td className="table_cell" onClick={() => setActiveCell(58)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(59)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(60)}></td>
          <td className="table_cell" onClick={() => setActiveCell(61)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(62)}
          ></td>
        </tr>

        <tr>
          <td
            className="table_cell table_cell_border_left"
            onClick={() => setActiveCell(63)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(64)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(65)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(66)}></td>
          <td className="table_cell" onClick={() => setActiveCell(67)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(68)}
          ></td>
          <td className="table_cell" onClick={() => setActiveCell(69)}></td>
          <td className="table_cell" onClick={() => setActiveCell(70)}></td>
          <td
            className="table_cell table_cell_border_right"
            onClick={() => setActiveCell(71)}
          ></td>
        </tr>

        <tr>
          <td
            className="table_cell table_cell_border_bottom table_cell_border_left"
            onClick={() => setActiveCell(72)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(73)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom table_cell_border_right"
            onClick={() => setActiveCell(74)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(75)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(76)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom table_cell_border_right"
            onClick={() => setActiveCell(77)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(78)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom"
            onClick={() => setActiveCell(79)}
          ></td>
          <td
            className="table_cell table_cell_border_bottom table_cell_border_right"
            onClick={() => setActiveCell(80)}
          ></td>
        </tr>
      </table>
    </>
  );
}
