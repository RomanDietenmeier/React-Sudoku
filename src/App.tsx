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
            className="table_cell table_cell_border_top table_cell_border_left"
            onClick={() => {
              setActiveCell(0);
            }}
          ></td>
          <td
            className="table_cell table_cell_border_top"
            onClick={() => {
              setActiveCell(1);
            }}
          >
            9
          </td>
          <td className="table_cell table_cell_border_top table_cell_border_right">
            1
          </td>
          <td className="table_cell table_cell_border_top"></td>
          <td className="table_cell table_cell_border_top"></td>
          <td className="table_cell table_cell_border_top table_cell_border_right"></td>
          <td className="table_cell table_cell_border_top"></td>
          <td className="table_cell table_cell_border_top"></td>
          <td className="table_cell table_cell_border_top table_cell_border_right"></td>
        </tr>
        <tr>
          <td className="table_cell table_cell_border_left"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
          <td className="table_cell "></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
          <td className="table_cell"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
        </tr>
        <tr>
          <td className="table_cell table_cell_border_left table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_right table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_right table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_right table_cell_border_bottom"></td>
        </tr>
        <tr>
          <td className="table_cell table_cell_border_left"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
          <td className="table_cell"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
          <td className="table_cell"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
        </tr>
        <tr>
          <td className="table_cell table_cell_border_left"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
          <td className="table_cell"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
          <td className="table_cell"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
        </tr>
        <tr>
          <td className="table_cell table_cell_border_left table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_right table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_right table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_bottom"></td>
          <td className="table_cell table_cell_border_right table_cell_border_bottom"></td>
        </tr>
        <tr>
          <td className="table_cell table_cell_border_left"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
          <td className="table_cell"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
          <td className="table_cell"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
        </tr>
        <tr>
          <td className="table_cell table_cell_border_left"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
          <td className="table_cell"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
          <td className="table_cell"></td>
          <td className="table_cell"></td>
          <td className="table_cell table_cell_border_right"></td>
        </tr>
        <tr>
          <td className="table_cell table_cell_border_bottom  table_cell_border_left"></td>
          <td className="table_cell table_cell_border_bottom "></td>
          <td className="table_cell table_cell_border_bottom table_cell_border_right"></td>
          <td className="table_cell table_cell_border_bottom "></td>
          <td className="table_cell table_cell_border_bottom "></td>
          <td className="table_cell table_cell_border_bottom table_cell_border_right"></td>
          <td className="table_cell table_cell_border_bottom "></td>
          <td className="table_cell table_cell_border_bottom "></td>
          <td className="table_cell table_cell_border_bottom  table_cell_border_right"></td>
        </tr>
      </table>
    </>
  );
}
