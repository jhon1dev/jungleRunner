export class Score {
  constructor() {
    var scoreGlobal = document.getElementById("scoreGlobal");
    var scoreAtual = document.getElementById("scoreAtual");
    var maxScoreAtual = document.getElementById("maxScoreAtual");
  }

  play() {
    scoreAtual.style.display = "block";
    maxScoreAtual.style.display = "block";
  }

  setScore() {
    setInterval(() => {
      if (localStorage.info == undefined) {
        pMAX = 0;
      } else {
        pMAX = localStorage.info;
      }

      scoreAtual.innerHTML = `SCORE: ${p}`;
      document.getElementById("maxScoreAtual").innerHTML = `RECORD: ${pMAX}`;

      if (banana.pontos > 0) {
        p++;
        if (p > pMAX) {
          pMAX++;
        }
        localStorage.info = pMAX;
      }
      if (banana.pontos < 0) {
      }
    }, 200);
    setInterval(() => {
      energy.style.width = banana.pontos + "px";
      if (banana.pontos < 0) {
        document.getElementById("grass").style.animation = "none";
        document.getElementById("side1").style.animation = "none";
        document.getElementById("side2").style.animation = "none";
        document.getElementById("side3").style.animation = "none";
      } else {
      }
    }, 100);
  }
}
