function streetFighterSelection(fighters, position, moves) {
  let i = position[0];
  let j = position[0];
  newPosition = [];
  moves.forEach(moving => {
    switch (moving) {
      case "right":
        i++;
        if (i > fighters[j].length - 1) {
          i = 0;
        }
        break;
      case "left":
        i--;
        if (i < 0) {
          i = fighters[j].length - 1;
        }
        break;
      case "up":
        j--;
        if (j < 0) {
          j = 0;
        }
        break;
      case "down":
        j++;
        if (j > fighters.length - 1) {
          j = fighters.length - 1;
        }
        break;
    }
    newPosition.push(fighters[j][i]);
  });
  return newPosition;
}
fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
moves = [];
streetFighterSelection(fighters, [0, 0], moves);

console.log(newPosition);
