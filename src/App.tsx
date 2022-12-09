import "./App.css";

import adi from "./assets/adilla.png";
import bea from "./assets/beatriz.jpeg";
import bia from "./assets/bianca.jpeg";
import cla from "./assets/claudia.jpeg";
import luc from "./assets/lucas.jpeg";
import pal from "./assets/palmer.jpeg";
import pau from "./assets/paulo.jpeg";
import pri from "./assets/priscila.jpeg";
import vin from "./assets/vini.jpeg";

enum Times {
  Holanda = "Holanda",
  Argentina = "Argentina",
  Brasil = "Brasil",
  Franca = "Franca",
  Croacia = "Croacia",
  Inglaterra = "Inglaterra",
  Marrocos = "Marrocos",
  Portugal = "Portugal",
}

function parse(str: string) {
  const a = str.split("\n");
  return a
    .map((x) =>
      x
        .split(/ /)
        .map((y) => y.trim())
        .filter(Boolean)
    )
    .filter((x) => x.length > 1)
    .map((x) => {
      const [a, b] = [x.slice(0, 2), x.slice(3).reverse()];
      const winner = a[1] > b[1] ? a : b;
      const loser = a[1] > b[1] ? b : a;
      return {
        winner: [Times[winner[0] as Times], +winner[1]],
        loser: [Times[loser[0] as Times], +loser[1]],
      };
    });
}

function trunc(str: any) {
  return str.slice(0, 3).toUpperCase();
}

const palmer = `
Holanda   1 X 2 Argentina
Brasil        2 x 1 Croacia
Marrocos 2 x 1 Portugal
Inglaterra 1 x 2 Franca
---
Brasil        2 x 0 Argentina
Marrocos 1 x 0 Franca
---
Brasil        3 x 1 Marrocos
`;

const vini = `
Holanda   1 X 3 Argentina
Brasil        1 x 0 Croacia
Marrocos 1 x 2 Portugal
Inglaterra 2 x 3 Franca
---
Brasil      2 x 1 Argentina
Portugal 1 x 3 Franca
---
Brasil        2 x 1 Franca
`;

const claudia = `
Holanda   0 X 2 Argentina
Brasil        2 x 0 Croacia
Marrocos 0 x 1 Portugal
Inglaterra 1 x 2 Franca
---
Brasil        1 x 0 Argentina
Portugal   0 x 1 Franca
---
Brasil        1 x 0 Franca
`;

const priscila = `
Holanda   1 X 2 Argentina
Brasil        3 x 0 Croacia
Marrocos 1 x 3 Portugal
Inglaterra 1 x 3 Franca
---
Brasil        2 x 0 Argentina
Portugal   1 x 2 Franca
---
Brasil        3 x 1 Franca
`;

const paulo = `
Portugal   1 x 2 Franca
Brasil        2 x 0 Franca
`;

const adila = `
Holanda   0 X 2 Argentina
Brasil        1 x 0 Croacia
Marrocos 0 x 2 Portugal
Inglaterra 1 x 2 Franca
---
Brasil        2 x 1 Argentina
Portugal   1 x 0 Franca
---
Brasil        2 x 1 Portugal
`;

const lucas = `
Holanda   2 X 0 Argentina
Brasil        2 x 0 Croacia
Marrocos 1 x 3 Portugal
Inglaterra 2 x 3 Franca
---
Brasil        2 x 1 Holanda
Portugal   1 x 2 Franca
---
Brasil        2 x 1 Franca
`;

const bianca = `
Holanda   2 x 1 Argentina
Brasil        2 x 1 Croacia
Marrocos 1 x 3 Portugal
Inglaterra 0 x 2 Franca
---
Brasil        2 x 0 Holanda
Portugal   1 x 3 Franca
---
Brasil        2 x 1 Franca
`;

const beatriz = `
Holanda   1 X 2 Argentina
Brasil        3 x 1 Croacia
Marrocos 1 x 2 Portugal
Inglaterra 0 x 1 Franca
---
Brasil        3 x 1 Argentina
Portugal   1 x 2 Franca
---
Brasil        3 x 1 Franca
`;

const data = [
  {
    name: "Claudia",
    image: cla,
    guess: parse(claudia),
    pontos: 0,
  },
  {
    name: "Palmer",
    image: pal,
    guess: parse(palmer),
    pontos: 0,
  },
  {
    name: "Vini",
    image: vin,
    guess: parse(vini),
    pontos: 0,
  },
  // {
  //   name: "Paulo",
  //   image: pau,
  //   guess: parse(paulo),
  //   pontos: 0,
  // },
  {
    name: "Priscila",
    image: pri,
    guess: parse(priscila),
    pontos: 0,
  },
  {
    name: "Adila",
    image: adi,
    guess: parse(adila),
    pontos: 0,
  },
  {
    name: "Lucas",
    image: luc,
    guess: parse(lucas),
    pontos: 0,
  },
  {
    name: "Bianca",
    image: bia,
    guess: parse(bianca),
    pontos: 0,
  },
  {
    name: "Beatriz",
    image: bea,
    guess: parse(beatriz),
    pontos: 0,
  },
];

function App() {
  return (
    <div className="App">
      <h1>#timelindo</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td>
                <span className="img">
                  <img src={item.image} />
                </span>
              </td>
              {item.guess.map(({ winner, loser }, index) => {
                const [winnerName, winnerGoals] = winner;
                const [loserName, loserGoals] = loser;
                return (
                  <td key={index}>
                    {trunc(winnerName)} <strong>{winnerGoals}</strong> x{" "}
                    <strong>{loserGoals}</strong> {trunc(loserName)}
                  </td>
                );
              })}
              <td>
                <strong className="pontos">{item.pontos}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
