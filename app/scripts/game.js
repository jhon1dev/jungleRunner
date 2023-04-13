import { Player } from "./player.js";
import { Banana } from "./banana.js";
import { Rock } from "./rock.js";

const adventurerSuit = document.getElementById("adventureSuit");
const junglerSuit = document.getElementById("junglerSuit");

adventurerSuit.addEventListener("click", function () {
  playerImg.src = "/jungleRunner/src/entities/adventureRunner.gif";
});
junglerSuit.addEventListener("click", function () {
  playerImg.src = "/jungleRunner/src/entities/runnerClassic.png";
});

const cnv = document.getElementById("mycanvas");
const ctx = cnv.getContext("2d");
const arrayPosition = [15, 150, 295];
let index = 1;
let frameA = 0;
const bananaSprite = new Image();   
const rockSprite = new Image();
let player = new Player(200, 400, 50, 50);
let crocoBoss = document.getElementById("crocoBoss");
let banana = new Banana(-100);
let rock1 = new Rock();
let rock2 = new Rock();
let rock3 = new Rock();
const playerImg = player.playerImg;
var energyLess = document.getElementById("energyLess");
var energy = document.getElementById("energy");
var scoreGlobal = document.getElementById("scoreGlobal");
var scoreAtual = document.getElementById("scoreAtual");
var maxScoreAtual = document.getElementById("maxScoreAtual");
// var maxScoreGlobal = document.getElementById('maxScoreGlobal');
bananaSprite.src = "/jungleRunner/src/obstacles/bananaImg.png";
rockSprite.src = "/jungleRunner/src/obstacles/rock.png";

playerImg.src = "/jungleRunner/src/entities/runnerClassic.png";
playerImg.style.transition = "3s all";

/* TESTE PROVISORIO */
var num = 249;
var p = 0;
var pMAX = 0;
const botao = document.getElementById("botão");
const botaoPlay = document.getElementById("play");
const imagens = Array.from(document.getElementsByTagName("img"));
botaoPlay.addEventListener("click", function () {
  window.scrollTo(0, 0);
  document.getElementById("botão").style.display = "none";
  document.getElementById("play").style.top = "-100000px";
  energy.style.display = "block";
  energyLess.style.display = "block";
  // scoreGlobal.style.display = "block";
  scoreAtual.style.display = "block";
  // maxScoreGlobal.style.display = "block";
  maxScoreAtual.style.display = "block";
  document.body.style.overflow = "hidden";
  imagens.forEach(function (img) {
    img.style.display = "block";
  });
  botao.style.display = "none";
  junglerSuit.style.display = "none";
  adventurerSuit.style.display = "none";
  document.getElementById("play").style.display = "none";
  document.getElementById("jungle").style.display = "none";
  document.getElementById("runner").style.display = "none";
  loop();
  estadoPersonagem();
  setScore();
  changeRock();
  touch();
});
function setScore() {
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

// VARIÁVEIS
let colidirComPedra = null;
let colidirComOutraPedra = null;
let colidirComOutraPedra2 = null;
let passou15segundos = false;
let passoumais15segundos = false;
function changeRock() {
  setTimeout(() => {
    passou15segundos = true;
  }, 15000);
  setTimeout(() => {
    passoumais15segundos = true;
  }, 34000);
}
function draw() {
  //150 = dead
  ctx.clearRect(0, 0, cnv.width, cnv.height);   
  ctx.drawImage(bananaSprite, banana.posX, banana.posY);
  if (passou15segundos) {
    ctx.drawImage(rockSprite, rock2.posX, rock2.posY);
    if (banana.pontos > 0) {
      rock2.run();
    }
    colidirComOutraPedra = rock2.colide(index, player.posY, 80, banana.pontos);
  }
  if (passoumais15segundos) {
    ctx.drawImage(rockSprite, rock3.posX, rock3.posY);
    if (banana.pontos > 0) {
      rock3.run();
    }
    colidirComOutraPedra2 = rock3.colide(index, player.posY, 80, banana.pontos);
  }
  ctx.drawImage(rockSprite, rock1.posX, rock1.posY);

  banana.run();
  if (banana.pontos > 0) {
    rock1.run();
  }

  banana.colide(index, player.posY, 80, num);
  ctx.drawImage(
    playerImg,
    player.frameE,
    frameA,
    80,
    80,
    player.posX,
    player.posY,
    80,
    80
  );
  colidirComPedra = rock1.colide(index, player.posY, 80, banana.pontos);
  if (colidirComPedra || colidirComOutraPedra || colidirComOutraPedra2) {
    banana.pontos -= 5;
    energy.style.backgroundColor = "rgb(190, 31, 31)";
  } else {
    energy.style.backgroundColor = "#ffbd00";
  }
}
// FUNÇÃO DE DESENHO

function updatePosition() {
  if (player.posX > arrayPosition[index]) {
    player.posX -= 10;
    if (player.posX > arrayPosition[index]) {
      player.posX -= 10;
      if (player.posX > arrayPosition[index]) {
        player.posX -= 10;
      }
    }
  }
  if (player.posX <= arrayPosition[index]) {
    player.posX += 10;
    if (player.posX <= arrayPosition[index]) {
      player.posX += 10;
      if (player.posX <= arrayPosition[index]) {
        player.posX += 10;
      }
    }
  }

  if (banana.pontos < 80) {
    setTimeout(() => {
      if (banana.pontos > 0) {
        crocoBoss.style.visibility = "visible";
        crocoBoss.style.top = "550px";
        if (index == 1) {
          crocoBoss.style.left = "100px";
        } else if (index == 0) {
          crocoBoss.style.left = "-40px";
        } else if (index == 2) {
          crocoBoss.style.left = "240px";
        }
      } else {
        crocoBoss.style.transition = "10s all linear";
        crocoBoss.style.top = "-2000px";
        setTimeout(() => {
          morto = true;
          player.frameE = 260;
        }, 800);
        setTimeout(() => {
          document.getElementById("gameOver").style.opacity = 1;
        }, 1400);
      }
    }, 1000);
  } else {
    crocoBoss.style.top = "1000px";
    crocoBoss.style.visibility = "hidden";
  }
}
// FUNÇÃO QUE ATUALIZA A POSIÇÃO DO BROTHER

function loop() {
  window.requestAnimationFrame(loop, cnv);
  updatePosition();
  draw();
}
var morto = false;
function estadoPersonagem() {
  let intervalo = setInterval(() => {
    if (banana.pontos >= 0) {
      player.frameE = 80;
      frameA = 80;

      setTimeout(() => {
        player.frameE = 0;
        frameA = 80;
      }, 200);
      setTimeout(() => {
        player.frameE = 80;
        frameA = 0;
      }, 400);
      setTimeout(() => {
        player.frameE = 0;
        frameA = 0;
      }, 600);
      console.log(banana.pontos);
    } else {
      clearInterval(intervalo);
      player.frameE = 80;
      frameA = 160;
    }
  }, 800);
  setInterval(() => {
    if (morto == false) {
      if (banana.pontos < 0) {
        player.frameE = 80;
        frameA = 160;
        setTimeout(() => {
          frameA = 248;
        }, 200);
      }
    }
  }, 500);
}
window.addEventListener("keydown", function (e) {
  if (banana.pontos >= 0)
    switch (e.keyCode) {
      case 37:
        if (index == 0) {
          index = 0;
        } else {
          index--;
        }
        break;
      case 39:
        if (index == 2) {
          index = 2;
        } else {
          index++;
        }

        break;
    }
});

var startX;
var movendo = false;
function touch() {
  document.body.addEventListener("touchstart", function (event) {
    startX = event.touches[0].pageX;
  });
  document.body.addEventListener("touchmove", function (event) {
    if (banana.pontos >= 0) {
      if (movendo == false) {
        var currentX = event.touches[0].pageX;
        var diferenceX = startX - currentX;
        if (diferenceX > 50) {
          if (index == 0) {
            index = 0;
          } else {
            index -= 1;
            movendo = true;
          }
        } else if (diferenceX < -50) {
          if (index == 2) {
            index = 2;
          } else {
            index += 1;
            movendo = true;
          }
        }
      }
    }
  });
  document.body.addEventListener("touchend", function (event) {
    movendo = false;
  });
}