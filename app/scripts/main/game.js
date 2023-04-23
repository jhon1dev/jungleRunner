import { Player } from "../player/player.js";
import { Banana } from "../main/scene.js";
import { Rock } from "../main/scene.js";
import { Score } from "../gui/score.js";
import { KeyboardInputHandler } from "./inputHandler.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("mycanvas");
  const context = canvas.getContext("2d");

  class Game {
    constructor() {
      this.characterChosen = false;
      this.canStart = false;
      this.jungleTitle = document.getElementById("jungle");
      this.runnerTitle = document.getElementById("runner");
      this.colidirComPedra = null;
      this.botao = document.getElementById("botão");
      this.botaoPlay = document.getElementById("play");
      this.imagens = Array.from(document.getElementsByTagName("img"));
      this.score = new Score();
      this.crocoBoss = document.getElementById("crocoBoss");
      this.player = new Player(this);
      this.banana = new Banana();
      this.rock = new Rock();
      this.morto = false;
      this.energyLess = document.getElementById("energyLess");
      this.energy = document.getElementById("energy");
      this.startX;
      this.movendo = false;
      this.adventurerSuit = document.getElementById("adventureSuit");
      this.junglerSuit = document.getElementById("junglerSuit");
      this.input = new KeyboardInputHandler();
      this.fps = 60;
    }

    setChoice() {
      // O jogador seleciona o personagem que ele vai usar.
      this.adventurerSuit.addEventListener("click", () => {
        this.player.setCharacter(0);
        this.characterChosen = true;
        this.playButton(this.characterChosen);
      });

      this.junglerSuit.addEventListener("click", () => {
        this.player.setCharacter(1);
        this.characterChosen = true;
        this.playButton(this.characterChosen);
      });
    }

    playButton(isChosen){
      if(isChosen){
        this.botaoPlay.addEventListener("click", () => {
          this.canStart = true;
          this.displayManagement();
        });
      }
    }
    startGame(){
      return this.canStart;
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

    draw(deltaTime, context) {
      // buscar outra solução para o passoutantossegundos
      //150 = dead
      // context.drawImage(
      //   this.banana.bananaSprite,
      //   this.banana.posX,
      //   this.banana.posY
      // );
      this.player.draw(deltaTime, context);
      // if (passou15segundos) {
      //   context.drawImage(rockSprite, rock2.posX, rock2.posY);
      //   if (banana.pontos > 0) {
      //     rock2.run();
      //   }
      //   colidirComOutraPedra = rock2.colide(index, player.posY, 80, banana.pontos);
      // }
      // if (passoumais15segundos) {
      //   context.drawImage(rockSprite, rock3.posX, rock3.posY);
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
  }

  const game = new Game();
  let lastTime = Date.now(); 

  function gameLoop(currentTime) {
    let deltaTime = currentTime - lastTime;
    lastTime = currentTime;
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.setChoice();
      if (game.startGame() && deltaTime >= 16.67) {
        window.scrollTo(0, 0);
        game.update(deltaTime);
        game.draw(deltaTime, context);
        // game.score.setScore();
      }
      requestAnimationFrame(gameLoop);
  }
  gameLoop(0);
});
