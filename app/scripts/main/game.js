import { Player } from "../player/player.js";
import { Banana } from "../food/banana.js";
import { Rock } from "../obstacles/rock.js";
import { Score } from "../gui/score.js";
import { InputHandler } from "./inputHandler.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext("2d");

  class Game {
    constructor() {
      this.characterChosen = false;
      this.jungleTitle = document.getElementById("jungle");
      this.runnerTitle = document.getElementById("runner");
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
      this.input = new InputHandler();
    }

    setChoice() {
      // O jogador seleciona o personagem que ele vai usar.
      this.adventurerSuit.addEventListener("click", () => {
        this.player.setCharacter(0);
        this.characterChosen = true;
        this.playButton(this.characterChosen);
      });

      this.junglerSuit.addEventListener("click", function () {
        this.player.setCharacter(1);
        this.characterChosen = true;
        this.playButton(this.characterChosen);
      });
    }

    playButton(isChosen){
      if(isChosen){
        this.botaoPlay.addEventListener("click", () => {
          this.displayManagement();
        });
      }
    }
    getCharacterChosen(){
      return this.characterChosen;
    }
    update(deltaTime) {
      this.player.update(this.input.keys, deltaTime);
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

    draw(context) {
      // buscar outra solução para o passoutantossegundos
      //150 = dead
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        this.banana.bananaSprite,
        this.banana.posX,
        this.banana.posY
      );
      this.player.draw(context);
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
      context.drawImage(this.rock.rockSprite, this.rock.posX, this.rock.posY);

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

    // updatePosition() {
    //   if (this.player.posX > this.arrayPosition[this.index]) {
    //     this.player.posX -= 10;
    //     //console.log(this.player.posX);
    //     if (this.player.posX > this.arrayPosition[this.index]) {
    //       this.player.posX -= 10;
    //       //console.log(this.player.posX);
    //       if (this.player.posX > this.arrayPosition[this.index]) {
    //         this.player.posX -= 10;
    //         //console.log(this.player.posX);
    //       }
    //     }
    //   }
    //   if (this.player.posX <= this.arrayPosition[this.index]) {
    //     this.player.posX += 10;
    //     console.log(this.player.posX);
    //     if (this.player.posX <= this.arrayPosition[this.index]) {
    //       this.player.posX += 10;
    //       console.log(this.player.posX);
    //       if (this.player.posX <= this.arrayPosition[this.index]) {
    //         this.player.posX += 10;
    //         console.log(this.player.posX);
    //       }
    //     }
    //   }

    //   // if (this.banana.pontos < 80) {
    //   //   setTimeout(() => {
    //   //     if (this.banana.pontos > 0) {
    //   //       crocoBoss.style.visibility = "visible";
    //   //       crocoBoss.style.top = "550px";
    //   //       if (index == 1) {
    //   //         crocoBoss.style.left = "100px";
    //   //       } else if (index == 0) {
    //   //         crocoBoss.style.left = "-40px";
    //   //       } else if (index == 2) {
    //   //         crocoBoss.style.left = "240px";
    //   //       }
    //   //     } else {
    //   //       crocoBoss.style.transition = "10s all linear";
    //   //       crocoBoss.style.top = "-2000px";
    //   //       setTimeout(() => {
    //   //         morto = true;
    //   //         player.frameE = 260;
    //   //       }, 800);
    //   //       setTimeout(() => {
    //   //         document.getElementById("gameOver").style.opacity = 1;
    //   //       }, 1400);
    //   //     }
    //   //   }, 1000);
    //   // } else {
    //   //   crocoBoss.style.top = "1000px";
    //   //   crocoBoss.style.visibility = "hidden";
    //   // }
    // }
    // FUNÇÃO QUE ATUALIZA A POSIÇÃO DO BROTHER
    displayManagement(){
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
        this.botaoPlay.style.display = "none";
        this.jungleTitle.style.display = "none";
        this.runnerTitle.style.display = "none";
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
  let lastTime = 0; 

  function gameLoop(pastTime) {
    // pastTime = uma marca de tempo de alta precisão, representando o tempo em milissegundos desde que a página foi carregada. Utilizado para calcular o deltatime.
    const deltaTime = pastTime - lastTime;
    lastTime = pastTime;
    game.setChoice();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (game.getCharacterChosen()) {
        window.scrollTo(0, 0);
        game.update(deltaTime);
        game.draw();
        game.player.playerAnim();
        game.score.setScore();
        game.touch();
      }
      requestAnimationFrame(gameLoop);
  }
  gameLoop(0);
});
