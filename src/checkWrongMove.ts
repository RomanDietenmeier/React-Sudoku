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
  return [...new Set(wrongMoveCells)];
}
