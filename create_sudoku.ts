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

export const exclusions: Record<number, Array<number>> = {
  0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18, 19, 20, 27, 36, 45, 54, 63, 72],
  1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18, 19, 20, 28, 37, 46, 55, 64, 73],
  2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18, 19, 20, 29, 38, 47, 56, 65, 74],
  3: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 21, 22, 23, 30, 39, 48, 57, 66, 75,
  ],
  4: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 21, 22, 23, 31, 40, 49, 58, 67, 76,
  ],
  5: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 21, 22, 23, 32, 41, 50, 59, 68, 77,
  ],
  6: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 17, 24, 25, 26, 33, 42, 51, 60, 69, 78,
  ],
  7: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 17, 24, 25, 26, 34, 43, 52, 61, 70, 79,
  ],
  8: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 17, 24, 25, 26, 35, 44, 53, 62, 71, 80,
  ],
  9: [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 18, 19, 20, 27, 36, 45, 54, 63,
    72,
  ],
  10: [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 18, 19, 20, 28, 37, 46, 55, 64,
    73,
  ],
  11: [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 18, 19, 20, 29, 38, 47, 56, 65,
    74,
  ],
  12: [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 3, 4, 5, 21, 22, 23, 30, 39, 48, 57, 66,
    75,
  ],
  13: [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 3, 4, 5, 21, 22, 23, 31, 40, 49, 58, 67,
    76,
  ],
  14: [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 3, 4, 5, 21, 22, 23, 32, 41, 50, 59, 68,
    77,
  ],
  15: [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 6, 7, 8, 24, 25, 26, 33, 42, 51, 60, 69,
    78,
  ],
  16: [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 6, 7, 8, 24, 25, 26, 34, 43, 52, 61, 70,
    79,
  ],
  17: [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 6, 7, 8, 24, 25, 26, 35, 44, 53, 62, 71,
    80,
  ],
  18: [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 1, 2, 9, 10, 11, 27, 36, 45, 54, 63,
    72,
  ],
  19: [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 1, 2, 9, 10, 11, 28, 37, 46, 55, 64,
    73,
  ],
  20: [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 1, 2, 9, 10, 11, 29, 38, 47, 56, 65,
    74,
  ],
  21: [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 3, 4, 5, 12, 13, 14, 30, 39, 48, 57, 66,
    75,
  ],
  22: [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 3, 4, 5, 12, 13, 14, 31, 40, 49, 58, 67,
    76,
  ],
  23: [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 3, 4, 5, 12, 13, 14, 32, 41, 50, 59, 68,
    77,
  ],
  24: [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 6, 7, 8, 15, 16, 17, 33, 42, 51, 60, 69,
    78,
  ],
  25: [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 6, 7, 8, 15, 16, 17, 34, 43, 52, 61, 70,
    79,
  ],
  26: [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 6, 7, 8, 15, 16, 17, 35, 44, 53, 62, 71,
    80,
  ],
  27: [
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 45, 46, 47, 0, 9, 18, 54,
    63, 72,
  ],
  28: [
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 45, 46, 47, 1, 10, 19, 55,
    64, 73,
  ],
  29: [
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 45, 46, 47, 2, 11, 20, 56,
    65, 74,
  ],
  30: [
    27, 28, 29, 30, 31, 32, 33, 34, 35, 39, 40, 41, 48, 49, 50, 3, 12, 21, 57,
    66, 75,
  ],
  31: [
    27, 28, 29, 30, 31, 32, 33, 34, 35, 39, 40, 41, 48, 49, 50, 4, 13, 22, 58,
    67, 76,
  ],
  32: [
    27, 28, 29, 30, 31, 32, 33, 34, 35, 39, 40, 41, 48, 49, 50, 5, 14, 23, 59,
    68, 77,
  ],
  33: [
    27, 28, 29, 30, 31, 32, 33, 34, 35, 42, 43, 44, 51, 52, 53, 6, 15, 24, 60,
    69, 78,
  ],
  34: [
    27, 28, 29, 30, 31, 32, 33, 34, 35, 42, 43, 44, 51, 52, 53, 7, 16, 25, 61,
    70, 79,
  ],
  35: [
    27, 28, 29, 30, 31, 32, 33, 34, 35, 42, 43, 44, 51, 52, 53, 8, 17, 26, 62,
    71, 80,
  ],
  36: [
    36, 37, 38, 39, 40, 41, 42, 43, 44, 27, 28, 29, 45, 46, 47, 0, 9, 18, 54,
    63, 72,
  ],
  37: [
    36, 37, 38, 39, 40, 41, 42, 43, 44, 27, 28, 29, 45, 46, 47, 1, 10, 19, 55,
    64, 73,
  ],
  38: [
    36, 37, 38, 39, 40, 41, 42, 43, 44, 27, 28, 29, 45, 46, 47, 2, 11, 20, 56,
    65, 74,
  ],
  39: [
    36, 37, 38, 39, 40, 41, 42, 43, 44, 30, 31, 32, 48, 49, 50, 3, 12, 21, 57,
    66, 75,
  ],
  40: [
    36, 37, 38, 39, 40, 41, 42, 43, 44, 30, 31, 32, 48, 49, 50, 4, 13, 22, 58,
    67, 76,
  ],
  41: [
    36, 37, 38, 39, 40, 41, 42, 43, 44, 30, 31, 32, 48, 49, 50, 5, 14, 23, 59,
    68, 77,
  ],
  42: [
    36, 37, 38, 39, 40, 41, 42, 43, 44, 33, 34, 35, 51, 52, 53, 6, 15, 24, 60,
    69, 78,
  ],
  43: [
    36, 37, 38, 39, 40, 41, 42, 43, 44, 33, 34, 35, 51, 52, 53, 7, 16, 25, 61,
    70, 79,
  ],
  44: [
    36, 37, 38, 39, 40, 41, 42, 43, 44, 33, 34, 35, 51, 52, 53, 8, 17, 26, 62,
    71, 80,
  ],
  45: [
    45, 46, 47, 48, 49, 50, 51, 52, 53, 27, 28, 29, 36, 37, 38, 0, 9, 18, 54,
    63, 72,
  ],
  46: [
    45, 46, 47, 48, 49, 50, 51, 52, 53, 27, 28, 29, 36, 37, 38, 1, 10, 19, 55,
    64, 73,
  ],
  47: [
    45, 46, 47, 48, 49, 50, 51, 52, 53, 27, 28, 29, 36, 37, 38, 2, 11, 20, 56,
    65, 74,
  ],
  48: [
    45, 46, 47, 48, 49, 50, 51, 52, 53, 30, 31, 32, 39, 40, 41, 3, 12, 21, 57,
    66, 75,
  ],
  49: [
    45, 46, 47, 48, 49, 50, 51, 52, 53, 30, 31, 32, 39, 40, 41, 4, 13, 22, 58,
    67, 76,
  ],
  50: [
    45, 46, 47, 48, 49, 50, 51, 52, 53, 30, 31, 32, 39, 40, 41, 5, 14, 23, 59,
    68, 77,
  ],
  51: [
    45, 46, 47, 48, 49, 50, 51, 52, 53, 33, 34, 35, 42, 43, 44, 6, 15, 24, 60,
    69, 78,
  ],
  52: [
    45, 46, 47, 48, 49, 50, 51, 52, 53, 33, 34, 35, 42, 43, 44, 7, 16, 25, 61,
    70, 79,
  ],
  53: [
    45, 46, 47, 48, 49, 50, 51, 52, 53, 33, 34, 35, 42, 43, 44, 8, 17, 26, 62,
    71, 80,
  ],
  54: [
    54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 72, 73, 74, 0, 9, 18, 27,
    36, 45,
  ],
  55: [
    54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 72, 73, 74, 1, 10, 19, 28,
    37, 46,
  ],
  56: [
    54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 72, 73, 74, 2, 11, 20, 29,
    38, 47,
  ],
  57: [
    54, 55, 56, 57, 58, 59, 60, 61, 62, 66, 67, 68, 75, 76, 77, 3, 12, 21, 30,
    39, 48,
  ],
  58: [
    54, 55, 56, 57, 58, 59, 60, 61, 62, 66, 67, 68, 75, 76, 77, 4, 13, 22, 31,
    40, 49,
  ],
  59: [
    54, 55, 56, 57, 58, 59, 60, 61, 62, 66, 67, 68, 75, 76, 77, 5, 14, 23, 32,
    41, 50,
  ],
  60: [
    54, 55, 56, 57, 58, 59, 60, 61, 62, 69, 70, 71, 78, 79, 80, 6, 15, 24, 33,
    42, 51,
  ],
  61: [
    54, 55, 56, 57, 58, 59, 60, 61, 62, 69, 70, 71, 78, 79, 80, 7, 16, 25, 34,
    43, 52,
  ],
  62: [
    54, 55, 56, 57, 58, 59, 60, 61, 62, 69, 70, 71, 78, 79, 80, 8, 17, 26, 35,
    44, 53,
  ],
  63: [
    63, 64, 65, 66, 67, 68, 69, 70, 71, 54, 55, 56, 72, 73, 74, 0, 9, 18, 27,
    36, 45,
  ],
  64: [
    63, 64, 65, 66, 67, 68, 69, 70, 71, 54, 55, 56, 72, 73, 74, 1, 10, 19, 28,
    37, 46,
  ],
  65: [
    63, 64, 65, 66, 67, 68, 69, 70, 71, 54, 55, 56, 72, 73, 74, 2, 11, 20, 29,
    38, 47,
  ],
  66: [
    63, 64, 65, 66, 67, 68, 69, 70, 71, 57, 58, 59, 75, 76, 77, 3, 12, 21, 30,
    39, 48,
  ],
  67: [
    63, 64, 65, 66, 67, 68, 69, 70, 71, 57, 58, 59, 75, 76, 77, 4, 13, 22, 31,
    40, 49,
  ],
  68: [
    63, 64, 65, 66, 67, 68, 69, 70, 71, 57, 58, 59, 75, 76, 77, 5, 14, 23, 32,
    41, 50,
  ],
  69: [
    63, 64, 65, 66, 67, 68, 69, 70, 71, 60, 61, 62, 78, 79, 80, 6, 15, 24, 33,
    42, 51,
  ],
  70: [
    63, 64, 65, 66, 67, 68, 69, 70, 71, 60, 61, 62, 78, 79, 80, 7, 16, 25, 34,
    43, 52,
  ],
  71: [
    63, 64, 65, 66, 67, 68, 69, 70, 71, 60, 61, 62, 78, 79, 80, 8, 17, 26, 35,
    44, 53,
  ],
  72: [
    72, 73, 74, 75, 76, 77, 78, 79, 80, 54, 55, 56, 63, 64, 65, 0, 9, 18, 27,
    36, 45,
  ],
  73: [
    72, 73, 74, 75, 76, 77, 78, 79, 80, 54, 55, 56, 63, 64, 65, 1, 10, 19, 28,
    37, 46,
  ],
  74: [
    72, 73, 74, 75, 76, 77, 78, 79, 80, 54, 55, 56, 63, 64, 65, 2, 11, 20, 29,
    38, 47,
  ],
  75: [
    72, 73, 74, 75, 76, 77, 78, 79, 80, 57, 58, 59, 66, 67, 68, 3, 12, 21, 30,
    39, 48,
  ],
  76: [
    72, 73, 74, 75, 76, 77, 78, 79, 80, 57, 58, 59, 66, 67, 68, 4, 13, 22, 31,
    40, 49,
  ],
  77: [
    72, 73, 74, 75, 76, 77, 78, 79, 80, 57, 58, 59, 66, 67, 68, 5, 14, 23, 32,
    41, 50,
  ],
  78: [
    72, 73, 74, 75, 76, 77, 78, 79, 80, 60, 61, 62, 69, 70, 71, 6, 15, 24, 33,
    42, 51,
  ],
  79: [
    72, 73, 74, 75, 76, 77, 78, 79, 80, 60, 61, 62, 69, 70, 71, 7, 16, 25, 34,
    43, 52,
  ],
  80: [
    72, 73, 74, 75, 76, 77, 78, 79, 80, 60, 61, 62, 69, 70, 71, 8, 17, 26, 35,
    44, 53,
  ],
};

function checkExclusion(line: Array<number>, cells: Array<number>) {
  const numberCount: Record<number, number> = {
    [-1]: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  for (const index of line) {
    const value = cells[index];
    numberCount[value] += 1;
  }
  delete numberCount[-1];

  for (const [key, value] of Object.entries(numberCount) as any as [
    number,
    number,
  ][]) {
    if (value >= 1) {
      delete numberCount[key];
    }
  }

  if (Object.keys(numberCount).length === 1) {
    return Number(Object.keys(numberCount)[0]);
  }

  return null;
}

function checkMasks(cells: Array<number>) {
  for (let i = 1; i < 10; i++) {
    const tmpCells = cells.slice();
    for (let index = 0; index < 81; index++) {
      if (tmpCells[index] !== i) {
        continue;
      }
      const lineHorizontal = linesHorizontal.find((x) => x.includes(index));
      const lineVertical = linesVertical.find((x) => x.includes(index));
      const lineChunk = linesChunks.find((x) => x.includes(index));

      for (const line of [lineHorizontal, lineVertical, lineChunk]) {
        if (!line) {
          continue;
        }
        for (const lineIndex of line) {
          if (tmpCells[lineIndex] === -2 || tmpCells[lineIndex] >= 0) {
            continue;
          }
          tmpCells[lineIndex] = -2;
        }
      }
    }

    // console.log("i", i, "tmpCells", printField(tmpCells));

    for (const line of [...linesHorizontal, ...linesVertical, ...linesChunks]) {
      let emptyCellCount = 0;
      let emptyCellIndex = -1;
      for (const lineIndex of line) {
        if (tmpCells[lineIndex] === -1) {
          emptyCellCount++;
          emptyCellIndex = lineIndex;
        }
      }
      if (emptyCellCount === 1) {
        return [emptyCellIndex, i];
      }
    }
  }
  return null;
}

export function humanSolveMove(cells: Array<number>) {
  for (let index = 0; index < 81; index++) {
    if (cells[index] !== -1) {
      continue;
    }
    const possibleValue = checkExclusion(exclusions[index], cells);
    if (possibleValue) {
      return [index, possibleValue];
    }
  }

  const possibleMove = checkMasks(cells);
  if (possibleMove) {
    return possibleMove;
  }
  return null;
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
  let cells: Array<number> = new Array(81).fill(-1);
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
    return [cells, cellsSolved, hasMultipleResults, solvable, false, []];
  }

  cells = cellsSolved.slice();

  const shuffled0to80_55Values = [...Array(81).keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, 55);
  for (const index of shuffled0to80_55Values) {
    cells[index] = -1;
  }
  [cellsSolved, __, hasMultipleResults, solvable] = bruteForceSolve(cells);

  const cellsHuman = cells.slice();
  let humanMove = humanSolveMove(cellsHuman);
  while (humanMove) {
    cellsHuman[humanMove[0]] = humanMove[1];
    humanMove = humanSolveMove(cellsHuman);
  }

  const easilySolvable = !cellsHuman.includes(-1);

  return [
    cells,
    cellsSolved,
    hasMultipleResults,
    solvable,
    easilySolvable,
    cellsHuman,
  ];
}

console.log(
  "elapsedMs;solvable;hasMultipleResults;easilySolvable;cells;cellsSolved;cellsHuman",
);
for (let i = 0; i < 100; i++) {
  const start = process.hrtime.bigint();
  const [
    cells,
    cellsSolved,
    hasMultipleResults,
    solvable,
    easilySolvable,
    cellsHuman,
  ] = createSudoku();
  const end = process.hrtime.bigint();
  const elapsedMs = Number(end - start) / 1_000_000;

  console.log(
    `${elapsedMs};${solvable};${hasMultipleResults};${easilySolvable};[${cells}];[${cellsSolved}];[${cellsHuman}]`,
  );
}
