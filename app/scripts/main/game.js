import { Player } from "../main/player.js";
import { Banana } from "../food/banana.js";
import { Rock } from "../obstacles/rock.js";
import { Score } from "../gui/score.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext("2d");

  class Game {
    constructor() {
      this.arrayPosition = [15, 150, 295];
      this.characterChosen = false;
      this.index = 1;
      this.colidirComPedra = null;
      this.botao = document.getElementById("botão");
      this.botaoPlay = document.getElementById("play");
      this.imagens = Array.from(document.getElementsByTagName("img"));
      this.score = new Score();
      this.player = new Player();
      this.crocoBoss = document.getElementById("crocoBoss");
      this.banana = new Banana();
      this.rock = new Rock();
      this.morto = false;
      this.energyLess = document.getElementById("energyLess");
      this.energy = document.getElementById("energy");
      this.startX;
      this.movendo = false;
      this.adventurerSuit = document.getElementById("adventureSuit");
      this.junglerSuit = document.getElementById("junglerSuit");
    }

    setChoice() {
      // O jogador seleciona o personagem que ele vai usar.
      this.adventurerSuit.addEventListener("click", () => {
        this.player.setCharacter(0);
        this.characterChosen = true;
      });

      this.junglerSuit.addEventListener("click", function () {
        this.player.setCharacter(1);
        this.characterChosen = true;
      });
    }

    playGame() {
      this.setChoice();
      this.botaoPlay.addEventListener("click", () => {
        if (this.characterChosen) {
          window.scrollTo(0, 0);
          this.imagens.forEach(function (img) {
            img.style.display = "block";
          });
          this.botao.style.display = "none";
          this.botaoPlay.style.top = "-100000px";
          this.energy.style.display = "block";
          this.energyLess.style.display = "block";
          document.body.style.overflow = "hidden";
          this.junglerSuit.style.display = "none";
          this.adventurerSuit.style.display = "none";
          document.getElementById("play").style.display = "none";
          document.getElementById("jungle").style.display = "none";
          document.getElementById("runner").style.display = "none";
          this.loop();
          this.player.playerAnim();
          this.score.setScore();
          this.touch();
        }
      });
    }

    loop() {
      window.requestAnimationFrame(this.loop.bind(this), canvas);
      this.updatePosition();
      this.draw();
    }
    /* TESTE PROVISORIO */

    // VARIÁVEIS

    // changeRock() {
    //   setTimeout(() => {
    //     passou15segundos = true;
    //   }, 15000);
    //   setTimeout(() => {
    //     passoumais15segundos = true;
    //   }, 34000);
    // }

    draw(time) {
      // buscar outra solução para o passoutantossegundos
      //150 = dead
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(this.banana.bananaSprite, this.banana.posX, this.banana.posY);
      ctx.drawImage(
        this.player.playerImg,
        this.player.frameE,
        this.player.frameA,
        80,
        80,
        this.player.posX,
        this.player.posY,
        80,
        80
      );
      // if (passou15segundos) {
      //   ctx.drawImage(rockSprite, rock2.posX, rock2.posY);
      //   if (banana.pontos > 0) {
      //     rock2.run();
      //   }
      //   colidirComOutraPedra = rock2.colide(index, player.posY, 80, banana.pontos);
      // }
      // if (passoumais15segundos) {
      //   ctx.drawImage(rockSprite, rock3.posX, rock3.posY);
      //   if (banana.pontos > 0) {
      //     rock3.run();
      //   }
      //   colidirComOutraPedra2 = rock3.colide(index, player.posY, 80, banana.pontos);
      // }
      ctx.drawImage(this.rock.rockSprite, this.rock.posX, this.rock.posY);

      this.banana.run();
      if (this.banana.points > 0) {
        this.rock.run();
      }

      this.banana.colide(this.index, this.player.posY, 80, this.banana.points);

      this.colidirComPedra = this.rock.colide(
        this.index,
        this.player.posY,
        80,
        this.banana.points
      );
      // if (colidirComPedra || colidirComOutraPedra || colidirComOutraPedra2) {
      //   banana.pontos -= 5;
      //   energy.style.backgroundColor = "rgb(190, 31, 31)";
      // } else {
      //   energy.style.backgroundColor = "#ffbd00";
      // }
    }
    // FUNÇÃO DE DESENHO

    updatePosition() {
      if (this.player.posX > this.arrayPosition[this.index]) {
        this.player.posX -= 10;
        if (this.player.posX > this.arrayPosition[this.index]) {
          this.player.posX -= 10;
          if (this.player.posX > this.arrayPosition[this.index]) {
            this.player.posX -= 10;
          }
        }
      }
      if (this.player.posX <= this.arrayPosition[this.index]) {
        this.player.posX += 10;
        if (this.player.posX <= this.arrayPosition[this.index]) {
          this.player.posX += 10;
          if (this.player.posX <= this.arrayPosition[this.index]) {
            this.player.posX += 10;
          }
        }
      }

      // if (this.banana.pontos < 80) {
      //   setTimeout(() => {
      //     if (this.banana.pontos > 0) {
      //       crocoBoss.style.visibility = "visible";
      //       crocoBoss.style.top = "550px";
      //       if (index == 1) {
      //         crocoBoss.style.left = "100px";
      //       } else if (index == 0) {
      //         crocoBoss.style.left = "-40px";
      //       } else if (index == 2) {
      //         crocoBoss.style.left = "240px";
      //       }
      //     } else {
      //       crocoBoss.style.transition = "10s all linear";
      //       crocoBoss.style.top = "-2000px";
      //       setTimeout(() => {
      //         morto = true;
      //         player.frameE = 260;
      //       }, 800);
      //       setTimeout(() => {
      //         document.getElementById("gameOver").style.opacity = 1;
      //       }, 1400);
      //     }
      //   }, 1000);
      // } else {
      //   crocoBoss.style.top = "1000px";
      //   crocoBoss.style.visibility = "hidden";
      // }
    }
    // FUNÇÃO QUE ATUALIZA A POSIÇÃO DO BROTHER

    
    keyHandler() {
      window.addEventListener("keydown", (e) => {
        if (this.banana.pontos >= 0)
          switch (e.keyCode) {
            case 37:
              if (this.index == 0) {
                this.index = 0;
              } else {
                this.index--;
              }
              break;
            case 39:
              if (this.index == 2) {
                this.index = 2;
              } else {
                this.index++;
              }
              break;
          }
      });
    }

    touch() {
      document.body.addEventListener("touchstart", (event) => {
        startX = event.touches[0].pageX;
      });
      document.body.addEventListener("touchmove", (event) => {
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
      document.body.addEventListener("touchend", () => {
        movendo = false;
      });
    }
  }

  const game = new Game();
  game.playGame();
});
