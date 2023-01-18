const data = [
  { name: "NED", M: 5, W: 2, L: 3, NRR: -0.849, PTS: 4 },
  { name: "BAN", M: 5, W: 2, L: 3, NRR: -1.176, PTS: 4 },
  { name: "ZIM", M: 5, W: 1, L: 3, NRR: -1.138, PTS: 3 },
  { name: "IND", M: 5, W: 4, L: 1, NRR: 1.319, PTS: 8 },
  { name: "PAK", M: 5, W: 3, L: 2, NRR: 1.028, PTS: 6 },
  { name: "SA", M: 5, W: 2, L: 2, NRR: 0.874, PTS: 5 },
];

function sort() {
  // USING THE INBUILT SORT FUNCTION
  data.sort((a, b) => {
    if (a.PTS !== b.PTS) {
      return b.PTS - a.PTS;
    } else {
      return b.NRR - a.NRR;
    }
  });
}

function print() {
  console.log(data);
}

sort();
print();
