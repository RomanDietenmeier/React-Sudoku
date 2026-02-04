import { json } from "node:stream/consumers";

const linesHorizontal = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58, 59, 60, 61, 62],
  [63, 64, 65, 66, 67, 68, 69, 70, 71],
  [72, 73, 74, 75, 76, 77, 78, 79, 80],
];

const linesVertical = [
  [0, 9, 18, 27, 36, 45, 54, 63, 72],
  [1, 10, 19, 28, 37, 46, 55, 64, 73],
  [2, 11, 20, 29, 38, 47, 56, 65, 74],
  [3, 12, 21, 30, 39, 48, 57, 66, 75],
  [4, 13, 22, 31, 40, 49, 58, 67, 76],
  [5, 14, 23, 32, 41, 50, 59, 68, 77],
  [6, 15, 24, 33, 42, 51, 60, 69, 78],
  [7, 16, 25, 34, 43, 52, 61, 70, 79],
  [8, 17, 26, 35, 44, 53, 62, 71, 80],
];

const linesChunks = [
  [0, 1, 2, 9, 10, 11, 18, 19, 20],
  [3, 4, 5, 12, 13, 14, 21, 22, 23],
  [6, 7, 8, 15, 16, 17, 24, 25, 26],

  [27, 28, 29, 36, 37, 38, 45, 46, 47],
  [30, 31, 32, 39, 40, 41, 48, 49, 50],
  [33, 34, 35, 42, 43, 44, 51, 52, 53],

  [54, 55, 56, 63, 64, 65, 72, 73, 74],
  [57, 58, 59, 66, 67, 68, 75, 76, 77],
  [60, 61, 62, 69, 70, 71, 78, 79, 80],
];

const orangeCells = [0, 1, 7, 8, 9, 10, 16, 17, 63, 64, 70, 71, 72, 73, 79, 80];
const purpleCells = [
  20, 21, 22, 23, 24, 29, 33, 38, 42, 47, 51, 56, 57, 58, 59, 60,
];

/**
 * Tries to solve the given Sudoku board using brute-force backtracking.
 *
 * - Explores all valid number placements recursively
 * - Detects whether the puzzle is solvable
 * - Detects if multiple solutions exist
 * - Returns the first valid solution and the first decision move
 *
 * @param pCells Sudoku board as a flat array of length 81 (-1 = empty cell)
 * @returns [
 *   solvedCells,        // solved board or original input if unsolvable
 *   solveFirstMove,     // first guessed move [index, number]
 *   hasMultipleResults, // true if more than one solution exists
 *   solvable            // true if at least one solution exists
 * ]
 */
export function bruteForceSolve(
  pCells: Array<number>,
): [Array<number>, Array<number>, boolean, boolean] {
  const cells = pCells.slice();
  const solves: Array<Array<number>> = [];
  let firstMove: Array<number> = [];
  const moves: Array<Array<number>> = [];

  function nubmerIsPossible(index: number, number: number) {
    const lineHorizontal = linesHorizontal.find((x) =>
      x.includes(index),
    ) as Array<number>;
    const lineVertical = linesVertical.find((x) =>
      x.includes(index),
    ) as Array<number>;
    const lineChunk = linesChunks.find((x) =>
      x.includes(index),
    ) as Array<number>;

    for (const line of [lineHorizontal, lineVertical, lineChunk]) {
      for (const lineIndex of line) {
        if (cells[lineIndex] === number) {
          return false;
        }
      }
    }
    return true;
  }

  function solve() {
    if (solves.length > 1) {
      return;
    }
    for (let index = 0; index < 81; index++) {
      if (cells[index] !== -1) {
        continue;
      }
      for (let number = 1; number < 10; number++) {
        if (nubmerIsPossible(index, number)) {
          cells[index] = number;
          moves.push([index, number]);
          solve();
          cells[index] = -1;
          moves.pop();
        }
      }

      return;
    }
    if (firstMove.length <= 0) {
      firstMove = moves[0];
    }
    solves.push(cells.slice());
  }
  solve();

  return [
    solves.length <= 0 ? pCells : solves[0],
    firstMove,
    solves.length > 1 ? true : false,
    solves.length <= 0 ? false : true,
  ];
}

function printField(cells: Array<number>) {
  let txt = "\n";
  for (let i = 1; i < 82; i++) {
    txt += String(cells[i - 1]).padStart(3, " ");
    if (i % 3 == 0) {
      txt += " ";
    }
    if (i % 9 == 0) {
      txt += "\n";
    }
  }
  return txt;
}

function createSudoku() {
  let cells = new Array(81).fill(-1);
  let errorCount = 0;
  let setIndices: Array<number> = [];

  function nubmerIsPossible(index: number, number: number) {
    const lineHorizontal = linesHorizontal.find((x) =>
      x.includes(index),
    ) as Array<number>;
    const lineVertical = linesVertical.find((x) =>
      x.includes(index),
    ) as Array<number>;
    const lineChunk = linesChunks.find((x) =>
      x.includes(index),
    ) as Array<number>;

    for (const line of [lineHorizontal, lineVertical, lineChunk]) {
      for (const lineIndex of line) {
        if (cells[lineIndex] === number) {
          return false;
        }
      }
    }
    return true;
  }

  const center40 = Math.floor(Math.random() * 9) + 1;
  const noDups1to9 = [...Array(9).keys()]
    .map((n) => n + 1)
    .sort(() => Math.random() - 0.5);
  const withDups = Array.from(
    { length: 7 },
    () => Math.floor(Math.random() * 9) + 1,
  );

  // console.log(
  //   "center40",
  //   center40,
  //   "noDups1to9",
  //   noDups1to9,
  //   "withDups",
  //   withDups,
  // );

  cells[40] = center40;

  for (const number of noDups1to9) {
    const orangeIndex =
      orangeCells[Math.floor(Math.random() * orangeCells.length)];
    const purpleIndex =
      purpleCells[Math.floor(Math.random() * purpleCells.length)];

    if (cells[orangeIndex] !== -1 || cells[purpleIndex] !== -1) {
      errorCount++;
      noDups1to9.push(number);
      continue;
    }

    if (
      !nubmerIsPossible(orangeIndex, number) ||
      !nubmerIsPossible(purpleIndex, number)
    ) {
      errorCount++;
      noDups1to9.push(number);
      continue;
    }

    cells[orangeIndex] = number;
    if (!nubmerIsPossible(purpleIndex, number)) {
      cells[orangeIndex] = -1;
      errorCount++;
      noDups1to9.push(number);
      continue;
    }
    cells[purpleIndex] = number;
    setIndices.push(orangeIndex, purpleIndex);
    errorCount = Math.max(0, errorCount - 1);
  }

  let [cellsSolved, __, hasMultipleResults, solvable] = bruteForceSolve(cells);

  // console.log("hasMultipleResults", hasMultipleResults, "solvable", solvable);
  // console.log("createSudoku", printField(cells));

  if (!solvable) {
    return [cells, cellsSolved, hasMultipleResults, solvable];
  }

  cells = cellsSolved.slice();

  const shuffled0to80_55Values = [...Array(81).keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, 55);
  for (const index of shuffled0to80_55Values) {
    cells[index] = -1;
  }
  [cellsSolved, __, hasMultipleResults, solvable] = bruteForceSolve(cells);
  return [cells, cellsSolved, hasMultipleResults, solvable];
}

console.log("elapsedMs;solvable;hasMultipleResults;cells;cellsSolved");
for (let i = 0; i < 100; i++) {
  const start = process.hrtime.bigint();
  const [cells, cellsSolved, hasMultipleResults, solvable] = createSudoku();
  const end = process.hrtime.bigint();
  const elapsedMs = Number(end - start) / 1_000_000;

  console.log(
    `${elapsedMs};${solvable};${hasMultipleResults};[${cells}];[${cellsSolved}]`,
  );
}
