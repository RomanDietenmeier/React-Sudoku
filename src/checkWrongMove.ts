function getEmptyCheck(): Record<number, number> {
  return {
    [-1]: 0,
    0: 0,
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
}

function checkCheck(check: Record<number, number>) {
  delete check[-1];

  for (const value of Object.values(check)) {
    if (value > 1) {
      return true;
    }
  }
  return false;
}

export function checkWrongMove(cells: number[]) {
  let wrongMoveCells: Array<number> = [];
  for (let i = 0; i < 80; i += 9) {
    const list = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8];
    let check = getEmptyCheck();
    for (const index of list) {
      const value = cells[index];
      check[value] += 1;
    }
    const checkCheckValue = checkCheck(check);
    if (checkCheckValue) {
      wrongMoveCells.push(...list);
    }
  }

  for (let i = 0; i < 9; i++) {
    const list = [
      i,
      i + 9,
      i + 18,
      i + 27,
      i + 36,
      i + 45,
      i + 54,
      i + 63,
      i + 72,
    ];
    let check = getEmptyCheck();
    for (const index of list) {
      const value = cells[index];
      check[value] += 1;
    }
    const checkCheckValue = checkCheck(check);
    if (checkCheckValue) {
      wrongMoveCells.push(...list);
    }
  }
  for (const list of [
    [0, 1, 2, 9, 10, 11, 18, 19, 20],
    [3, 4, 5, 12, 13, 14, 21, 22, 23],
    [6, 7, 8, 15, 16, 17, 24, 25, 26],
    [27, 28, 29, 36, 37, 38, 45, 46, 47],
    [30, 31, 32, 39, 40, 41, 48, 49, 50],
    [33, 34, 35, 42, 43, 44, 51, 52, 53],
    [54, 55, 56, 63, 64, 65, 72, 73, 74],
    [57, 58, 59, 66, 67, 68, 75, 76, 77],
    [60, 61, 62, 69, 70, 71, 78, 79, 80],
  ]) {
    let check = getEmptyCheck();
    for (const index of list) {
      const value = cells[index];
      check[value] += 1;
    }
    const checkCheckValue = checkCheck(check);
    if (checkCheckValue) {
      wrongMoveCells.push(...list);
    }
  }
  return [...new Set(wrongMoveCells)];
}
