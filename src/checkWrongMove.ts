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
  for (let i = 0; i < 80; i += 9) {
    let check = getEmptyCheck();
    const list = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8];
    for (const index of list) {
      const value = cells[index];
      check[value] += 1;
    }
    const checkCheckValue = checkCheck(check);

    if (checkCheckValue) {
      console.log("checkWrongMove", list);

      return list;
    }
  }
  return [];
}
